import React, { useEffect, useState } from "react"
import usePosition from "../../hooks/usePosition"
import LocationStep from "../../components/LocationStep"
import { useSetParkingReportState } from "../../hooks/useParkingReportState"
import { useSetLoadingState } from "../../hooks/useLoadingState"

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

  const setLoading = useSetLoadingState()
  const [loadingMap, setLoadingMap] = useState(null)
  const setParkingReportState = useSetParkingReportState()

  useEffect(() => {
    if (Boolean(currentPosition)) {
      setLoadingMap(true)
      setLoading(true)
    }
  }, [currentPosition, setLoading])

  useEffect(() => {
    setParkingReportState((oldParkingReportState) => ({
      ...oldParkingReportState,
      currentPosition,
    }))
  }, [currentPosition, setParkingReportState])

  const handleMapLoaded = () => {
    setLoadingMap(false)
    setLoading(false)
  }

  const handleGetLocationClick = () => {
    getCurrentPosition()
    setLoadingMap(true)
    setLoading(true)
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
