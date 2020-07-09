import React, { useState } from "react";
import { VerticalNav } from '@cmsgov/design-system-core';
import { Link } from 'react-router-dom'

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

const Navbar = () => {
  const [selectedId, setSelectedId] = useState('thing-1')
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
