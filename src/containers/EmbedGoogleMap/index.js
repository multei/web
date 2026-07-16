import React from "react"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  cover: {
    objectFit: "cover",
  },
})

/**
 * Google Maps embed iframe.
 *
 * Local implementation (instead of `muy`'s EmbedGoogleMap) so `className` is
 * never a boolean. Upstream `muy` Iframe does `variant === "cover" && classes.cover`,
 * which yields `false` when variant is not cover and triggers a MUI PropTypes warning.
 *
 * @see https://github.com/multei/web/issues/440
 */
const EmbedGoogleMap = ({ className, coordinates, variant, ...props }) => {
  const classes = useStyles()
  const resolvedClassName = [variant === "cover" && classes.cover, className]
    .filter(Boolean)
    .join(" ")

  return (
    <Box
      allowFullScreen
      border={0}
      className={resolvedClassName || undefined}
      component="iframe"
      display="inline"
      frameBorder={0}
      mb={0}
      mr={0}
      mt={0}
      p={0}
      src={`https://www.google.com/maps/embed/v1/place?q=${coordinates}&key=${process.env.GATSBY_GOOGLE_MAPS_EMBED_API_KEY}`}
      {...props}
    />
  )
}

export default EmbedGoogleMap
