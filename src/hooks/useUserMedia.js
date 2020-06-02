import { useEffect, useState } from "react"

const useUserMedia = (constraints) => {
  /**
   * Create state for stream
   */
  const [stream, setStream] = useState()

  const getUserMedia = () => {
    console.info("Getting user media...")

    const handleSuccess = (stream) => {
      console.log("Setting stream...")
      setStream(stream)
      console.log("Stream is", stream)
    }
    const handleError = (error) => console.error(error)

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError)
  }

  /**
   * Expose this stream to browser
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.stream = stream
    }
  }, [stream])

  return [stream, getUserMedia]
}

export default useUserMedia
