import { useDebugValue, useEffect, useState } from "react"

/**
 * @todo Extract useFeatureToggle to external library
 * @param key
 * @return {[unknown]}
 */
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
    if (window.Cypress) {
      setValue(valueSanitizer(window.Cypress.env[key]))
    }
  }, [key])

  useEffect(() => {
    const keys = {
      CAR_REPORT_PHOTO_INSTRUCTIONS: process.env.GATSBY_TOGGLE_CAR_REPORT_PHOTO_INSTRUCTIONS,
      GET_USER_MEDIA: process.env.GATSBY_TOGGLE_GET_USER_MEDIA,
      PARKING_CHECK: process.env.GATSBY_TOGGLE_PARKING_CHECK,
      PARKING_REPORT: process.env.GATSBY_TOGGLE_PARKING_REPORT,
      PLATE_CONFIRMATION_STEP: process.env.GATSBY_TOGGLE_PLATE_CONFIRMATION_STEP,
    }

    if (keys[key]) {
      const envValue = valueSanitizer(keys[key])
      setValue(envValue)
    }
  }, [key])

  const localStorageKey = `TOGGLE_${key}`

  useEffect(() => {
    if (localStorage.getItem(localStorageKey)) {
      const localValue = valueSanitizer(localStorage.getItem(localStorageKey))
      setValue(localValue)
    }
  }, [localStorageKey])

  useEffect(() => {
    const listener = (event) => {
      if (event.key === localStorageKey) {
        const localChangedValue = valueSanitizer(event.newValue)
        setValue(localChangedValue)
      }
    }
    window.addEventListener("storage", listener)
    return () => window.removeEventListener("storage", listener)
  }, [localStorageKey])

  return [value]
}

export default useFeatureToggle
