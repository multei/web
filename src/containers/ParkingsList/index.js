import React from "react"
import ParkingsList from "../../components/ParkingsList"
import useGlobal from "../../hooks/useGlobal"

export default () => {
  const [globalState, globalActions] = useGlobal()
  return <ParkingsList parkings={globalState.parkingsData} />
}
