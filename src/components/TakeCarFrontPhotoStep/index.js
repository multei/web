import React, { useEffect } from "react"
import Button from "@material-ui/core/Button"
import useUserMedia from "../../hooks/useUserMedia"
import useVideoRef from "../../hooks/useVideoRef"
import useCanvasRef from "../../hooks/useCanvasRef"
import Skeleton from "@material-ui/lab/Skeleton"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Fab from "@material-ui/core/Fab"
import CameraAltIcon from "@material-ui/icons/CameraAlt"

const TakeCarFrontPhotoStep = () => {
  const constraints = {
    audio: false,
    video: {
      facingMode: "environment",
      height: { min: 360, ideal: 720 },
      width: { min: 480, ideal: 1280 },
    },
  }

  const [stream, getUserMedia] = useUserMedia(constraints)

  /**
   * Create video ref using hook
   */
  const [videoRef, videoDimensions] = useVideoRef()

  /**
   * Create canvas ref using hook
   */
  const canvasRef = useCanvasRef()

  /**
   * Send this stream to canvas
   */
  const handleClick = () => {
    console.log("Capturing photo...")
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

  const handleAskCameraPermission = () => {
    console.log("Asking camera permission....")
    getUserMedia()
  }

  /**
   * Get canvas width and height from video
   */
  useEffect(() => {
    if (videoDimensions.width > 0 && videoDimensions.height > 0) {
      console.log("Updating video dimensions...", videoDimensions)
      canvasRef.current.width = videoDimensions.width
      canvasRef.current.height = videoDimensions.height
    }
  }, [canvasRef, videoDimensions])

  /**
   * Set this stream to video source
   */
  useEffect(() => {
    videoRef.current.srcObject = stream
  }, [stream, videoRef])

  return (
    <>
      {!stream && (
        <Card>
          <CardContent>Por favor, libere acesso à sua câmera</CardContent>
          <CardActions>
            <Button onClick={handleAskCameraPermission}>Usar câmera</Button>
          </CardActions>
        </Card>
      )}

      <div style={{ position: "relative" }}>
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
        <Fab
          onClick={handleClick}
          style={{
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
          variant={"extended"}
        >
          <CameraAltIcon />
          &nbsp;Tirar foto
        </Fab>
      </div>

      <Skeleton style={{ maxWidth: "100%", height: "auto" }} variant="rect" />

      <canvas ref={canvasRef} style={{ maxWidth: "100%", height: "auto" }} />
    </>
  )
}

export default TakeCarFrontPhotoStep
