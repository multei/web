import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import MapsMarker from "../../../src/images/maps-marker.png"

const AnyReactComponent = () => (
  <div
    style={{
      zIndex: 3,
      left: "50%",
      top: "50%",
      width: "100px",
      height: "100px",
      position: "absolute",
    }}
  >
    <img src={MapsMarker} alt="Logo da aplicação" width="50px" height="50px" />
  </div>
)

export const GoogleMaps = () => {
  const zoom = 18
  const [address, setAddress] = useState("Endereço inicial")
  const [position, setPosition] = useState({ lat: -19.936843, lng: -43.919632 })

  const getAddress = async (sender) => {
    let lat = sender.getCenter().lat()
    let lng = sender.getCenter().lng()

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GATSBY_GOOGLE_MAPS_JS_API_KEY}`
    const result = await fetch(url).then((r) => r.json())

    setAddress(result.results[0].formatted_address)
    setPosition({ lat, lng })
  }

  const locate = async () => {
    const endereco = address.split(",")
    const rua = endereco[0].trim()
    const numero = endereco[1].trim()
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${rua}+${numero}&key=${process.env.GATSBY_GOOGLE_MAPS_JS_API_KEY}`
    const result = await fetch(url).then((r) => r.json())
    const lat = result.results[0].geometry.location.lat
    const lng = result.results[0].geometry.location.lng
    setPosition({ lat, lng })
  }

  return (
    <div>
      <div style={{ height: "70vh", width: "100%" }}>
        <div>
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            inputProps={{ size: 90 }}
          />
          <Button variant="contained" onClick={locate}>
            Localizar
          </Button>
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_JS_API_KEY }}
          center={position}
          defaultZoom={zoom}
          onDragEnd={getAddress}
        ></GoogleMapReact>
        {<AnyReactComponent />}
      </div>
    </div>
  )
}
