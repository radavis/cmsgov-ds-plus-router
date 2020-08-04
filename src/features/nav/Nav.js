import React from "react";
import { connect } from 'react-redux'
import { VerticalNav } from '@cmsgov/design-system-core';
import { Link as ReactRouterLink } from 'react-router-dom'

// wrap react-router's Link, so that the VerticalNav parent renders it properly
const Link = ({ children, href, ...rest }) => (
  <ReactRouterLink to={href} {...rest}>
    {children}
  </ReactRouterLink>
);

const Nav = ({ links }) => {
  return (
    <VerticalNav
      component={Link}
      items={links}
    />
  )
}

const mapStateToProps = (state) => ({
  links: state.nav.links
})

export default connect(mapStateToProps)(Nav);
