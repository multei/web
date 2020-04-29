import { useEffect, useState } from "react"

const usePosition = () => {
  const [checkingGeolocationSupport, setCheckingSupport] = useState(null)
  const [currentPosition, setCurrentPosition] = useState(null)
  const [error, setError] = useState(null)
  const [hasGeolocationSupport, setGeolocationSupport] = useState(null)
  const [loadingCurrentLocation, setLoadingCurrentLocation] = useState(null)
  const [permissionDenied, setPermissionDenied] = useState(null)

  useEffect(() => {
    setCheckingSupport(true)
    if (navigator.geolocation) {
      setGeolocationSupport(true)
    } else {
      setGeolocationSupport(false)
    }
    return setCheckingSupport(false)
  }, [])

  const onChange = (result) => {
    setCurrentPosition(result)
    setLoadingCurrentLocation(false)
  }

  const onError = (error) => {
    setError(error)
    if (error.PERMISSION_DENIED) {
      setPermissionDenied(true)
    }
    setLoadingCurrentLocation(false)
  }

  const getCurrentPosition = () => {
    const SECONDS = 1000
    if (hasGeolocationSupport) {
      setLoadingCurrentLocation(true)
      setCurrentPosition(null)
      navigator.geolocation.getCurrentPosition(onChange, onError, {
        enableHighAccuracy: true,
        maximumAge: 2.22222222 * SECONDS,
        timeout: 10 * SECONDS,
      })
    }
  }

  return {
    checkingGeolocationSupport,
    currentPosition,
    error,
    getCurrentPosition,
    hasGeolocationSupport,
    loadingCurrentLocation,
    permissionDenied,
  }
}

export default usePosition
