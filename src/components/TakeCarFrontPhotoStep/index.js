import React, { useEffect, useRef, useState } from "react"
import Button from "@material-ui/core/Button"

const TakeCarFrontPhotoStep = () => {
  /**
   * Create state for video width and height
   */
  const [videoDimensions, setVideoDimensions] = useState({
    height: 360,
    width: 480,
  })

  /**
   * Create state for stream
   */
  const [stream, setStream] = useState()

  /**
   * Configure video hook
   */
  const useVideo = () => {
    const videoRef = useRef(null)

    /**
     * Expose video to browser once
     */
    useEffect(() => {
      window.video = videoRef.current
    }, [videoRef])

    return videoRef
  }

  /**
   * Create video ref using hook
   */
  const videoRef = useVideo()

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

  /**
   * Configure canvas hook
   */
  const useCanvas = () => {
    const canvasRef = useRef(null)

    /**
     * Expose canvas to browser once
     */
    useEffect(() => {
      window.canvas = canvasRef.current
    }, [canvasRef])

    return canvasRef
  }

  /**
   * Create canvas ref using hook
   */
  const canvasRef = useCanvas()

  /**
   * Get canvas width and height from video
   */
  useEffect(() => {
    canvasRef.current.width = videoDimensions.width
    canvasRef.current.height = videoDimensions.height
  }, [canvasRef, videoDimensions])

  /**
   * Get user media stream
   */
  useEffect(() => {
    const constraints = {
      audio: false,
      video: {
        facingMode: "environment",
        height: { min: 360, ideal: 720 },
        width: { min: 480, ideal: 1280 },
      },
    }

    const handleSuccess = (responseStream) => {
      setStream(responseStream)
    }
    const handleError = (error) => console.error(error)

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError)
  }, [videoRef])

  /**
   * Set this stream to video source
   */
  useEffect(() => {
    videoRef.current.srcObject = stream
  }, [stream, videoRef])

  /**
   * Expose this stream to browser
   */
  useEffect(() => {
    window.stream = stream
  }, [stream])

  /**
   * Send this stream to canvas
   */
  const handleClick = () => {
    canvasRef.current
      .getContext("2d")
      .drawImage(
        videoRef.current,
        0,
        0,
        videoDimensions.width,
        videoDimensions.height
      )
  }

  return (
    <>
      <video
        autoPlay={true}
        controls={false}
        controlsList={"nodownload"}
        disablePictureInPicture={true}
        muted={true}
        playsInline={true}
        ref={videoRef}
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <track />
      </video>
      <Button onClick={handleClick}>Capturar</Button>
      <canvas ref={canvasRef} style={{ maxWidth: "100%", height: "auto" }} />
    </>
  )
}

export default TakeCarFrontPhotoStep
