import React from "react";
import { VerticalNav } from '@cmsgov/design-system-core';
import navItems from './navItems';

const Sidebar = () => {
  const selectedId = "key-state-personnel-nav";
  const items = navItems.map(i => ({
    ...i,
    defaultCollapsed: i.id !== selectedId,
  }));

  return (
    <VerticalNav
      selectedId={selectedId}
      items={items}
    />
  )
}

export default Sidebar;
