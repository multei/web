import React, { useDebugValue, useEffect, useState } from "react"
import usePosition from "../../hooks/usePosition"
import LocationStep from "../../components/LocationStep"
import useGlobal from "../../hooks/useGlobal"

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

  const [globalState, globalActions] = useGlobal()
  const [loadingMap, setLoadingMap] = useState(null)

  useDebugValue(globalState.currentPosition)

  useEffect(() => {
    if (Boolean(currentPosition)) {
      setLoadingMap(true)
    }
  }, [currentPosition])

  useEffect(() => {
    globalActions.setCurrentPosition(currentPosition)
  }, [currentPosition, globalActions])

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
