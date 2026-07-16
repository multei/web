const React = require("react")
const gatsby = jest.requireActual("gatsby")

// MUI Link / ListItem pass a ref into `component`. Production Gatsby Link already
// uses forwardRef; the Jest mock must too or PropTypes and React warn in tests.
// @see https://github.com/multei/web/issues/441
const Link = React.forwardRef(
  (
    {
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      replace,
      to,
      ...rest
    },
    ref
  ) =>
    React.createElement("a", {
      ...rest,
      href: to,
      ref,
    })
)
Link.displayName = "GatsbyLink"

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link,
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
