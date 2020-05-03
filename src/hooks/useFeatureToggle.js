import { useDebugValue, useEffect, useState } from "react"

const useFeatureToggle = (key) => {
  const [value, setValue] = useState(null)

  const valueSanitizer = (value) => {
    if (typeof value === "undefined") {
      return false
    }

    switch (value) {
      case 1:
      case "1":
      case "true":
      case "TRUE":
        return true
      default:
        return false
    }
  }

  useDebugValue(value)

  useEffect(() => {
    console.log("Value is", value)
  }, [value])

  useEffect(() => {
    console.info("Getting value from env variable", key)

    const keys = {
      GET_USER_MEDIA: process.env.GATSBY_TOGGLE_GET_USER_MEDIA,
      PARKING_CHECK: process.env.GATSBY_TOGGLE_PARKING_CHECK,
      PARKING_REPORT: process.env.GATSBY_TOGGLE_PARKING_REPORT,
    }

    if (keys[key]) {
      const envValue = valueSanitizer(keys[key])
      console.info("Env value is", envValue)
      setValue(envValue)
    }
  }, [key])

  const localStorageKey = `TOGGLE_${key}`

  useEffect(() => {
    console.info("Getting value from local storage")

    if (localStorage.getItem(localStorageKey)) {
      const localValue = valueSanitizer(localStorage.getItem(localStorageKey))
      console.info("Local storage value is", localValue)
      setValue(localValue)
    }
  }, [localStorageKey])

  useEffect(() => {
    const listener = (event) => {
      if (event.key === localStorageKey) {
        const localChangedValue = valueSanitizer(event.newValue)
        console.info("Local storage changed value is", localChangedValue)
        setValue(localChangedValue)
      }
    }
    window.addEventListener("storage", listener)
    return () => window.removeEventListener("storage", listener)
  }, [localStorageKey])

  return [value]
}

export default useFeatureToggle
