export const isCurrentPositionValid = ({ currentPosition }) => {
  if (typeof currentPosition === "undefined" || currentPosition === null) {
    return false
  }
  const { coords } = currentPosition
  if (typeof coords === "undefined" || coords === null) {
    return false
  }
  const { latitude, longitude } = coords
  return Boolean(latitude) && Boolean(longitude)
}
