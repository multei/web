import { useEffect, useRef, useState } from "react"

/**
 * Configure video hook
 */
const useVideoRef = () => {
  const videoRef = useRef(null)

  /**
   * Create state for video width and height
   */
  const [videoDimensions, setVideoDimensions] = useState({
    height: 0,
    width: 0,
  })

  /**
   * Expose video to browser once
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.video = videoRef.current
    }
  }, [videoRef])

  /**
   * Store video width and height
   */
  useEffect(() => {
    const { videoHeight, videoWidth } = videoRef.current
    if (videoHeight > 0 && videoWidth > 0) {
      setVideoDimensions({
        height: videoHeight,
        width: videoWidth,
      })
    }
  }, [videoRef])

  return [videoRef, videoDimensions, setVideoDimensions]
}

export default useVideoRef
