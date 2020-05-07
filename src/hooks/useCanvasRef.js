import { useEffect, useRef } from "react"

/**
 * Configure canvas hook
 */
const useCanvasRef = () => {
  const canvasRef = useRef(null)

  /**
   * Expose canvas to browser once
   */
  useEffect(() => {
    window.canvas = canvasRef.current
  }, [canvasRef])

  return canvasRef
}

export default useCanvasRef
