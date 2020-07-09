import React, { useState } from "react";
import { VerticalNav } from '@cmsgov/design-system-core';
import { Link as ReactRouterLink } from 'react-router-dom'

const links = [
  {
    id: 'thing-1',
    label: 'Thing 1',
    url: '/thing-one'
  },
  {
    id: 'thing-2',
    label: 'Thing 2',
    url: '/thing-two'
  },
]

// wrap react-router's Link, so that the VerticalNav parent renders it properly
const Link = ({ children, href, ...rest }) => (
  <ReactRouterLink to={href} {...rest}>
    {children}
  </ReactRouterLink>
);

const Navbar = () => {
  const [selectedId, setSelectedId] = useState('')
  const handleClick = (event, id, url) => {
    setSelectedId(id)
  }

  return (
    <VerticalNav
      component={Link}
      selectedId={selectedId}
      items={links}
      onClickLink={handleClick}
    />
  )
}

export default Navbar;
