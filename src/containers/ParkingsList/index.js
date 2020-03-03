import React from "react"
import ParkingsList from "../../components/ParkingsList"
import useGlobal from "../../hooks/useGlobal"

export default () => {
  const [globalState] = useGlobal()
  return <ParkingsList parkings={globalState.parkingsData} />
}
