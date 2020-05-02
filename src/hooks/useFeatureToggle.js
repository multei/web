import { useEffect, useState } from "react"

const useFeatureToggle = (key) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    switch (key) {
      case "GET_USER_MEDIA":
        setValue(valueSanitizer(process.env.GATSBY_TOGGLE_GET_USER_MEDIA))
        break
      default:
        break
    }
  }, [key])

  const localStorageKey = `TOGGLE_${key}`

  useEffect(() => {
    if (localStorage.getItem(localStorageKey)) {
      setValue(localStorage.getItem(localStorageKey))
    }
  }, [localStorageKey])

  useEffect(() => {
    const listener = (event) => {
      if (event.key === key) {
        setValue(event.newValue)
      }
    }
    window.addEventListener("storage", listener)
    return () => window.removeEventListener("storage", listener)
  }, [localStorageKey])

  const valueSanitizer = (value) =>
    value === "false" || value === "" || value === 0 || value === "0"
      ? false
      : value

  return valueSanitizer(value)
}

export default useFeatureToggle
