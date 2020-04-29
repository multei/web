import React, { useEffect, useState } from "react"
import usePosition from "../../hooks/usePosition"
import LocationStep from "../../components/reportingSteps/LocationStep"

export default () => {
  const {
    checkingGeolocationSupport,
    currentPosition,
    error,
    hasGeolocationSupport,
    getCurrentPosition,
    loadingCurrentLocation,
    permissionDenied,
  } = usePosition()

  const [loadingMap, setLoadingMap] = useState(null)

  useEffect(() => {
    if (currentPosition) {
      setLoadingMap(true)
    }
  }, [currentPosition])

  const handleMapLoaded = () => {
    setLoadingMap(false)
  }

  const handleGetLocationClick = () => {
    getCurrentPosition()
    setLoadingMap(true)
  }

  return (
    <LocationStep
      checkingGeolocationSupport={checkingGeolocationSupport}
      currentPosition={currentPosition}
      error={error}
      hasGeolocationSupport={hasGeolocationSupport}
      loadingCurrentLocation={loadingCurrentLocation}
      loadingMap={loadingMap}
      onGetLocationClick={handleGetLocationClick}
      onMapLoaded={handleMapLoaded}
      permissionDenied={permissionDenied}
    />
  )
}
