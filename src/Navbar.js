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
  {
    id: 'list',
    label: 'List',
    defaultCollapsed: true,
    items: [
      {
        id: 'sub-item-1',
        label: 'SubItem 1',
        url: '/items/1'
      },
      {
        id: 'sub-item-2',
        label: 'SubItem 2',
        url: '/items/2'
      },
      {
        id: 'sub-item-3',
        label: 'SubItem 3',
        url: '/items/3'
      }
    ]
  }
]

// wrap react-router's Link, so that the VerticalNav parent renders it properly
const Link = ({ children, href, ...rest }) => (
  <ReactRouterLink to={href} {...rest}>
    {children}
  </ReactRouterLink>
);

const Navbar = () => {
  // const [selectedId, setSelectedId] = useState('')
  // const handleClick = (event, id, url) => {
  //   setSelectedId(id)
  // }

  return (
    <VerticalNav
      component={Link}
      selectedId={'sub-item-2'}
      items={links}
      // onClickLink={handleClick}
    />
  )
}

export default Navbar;
