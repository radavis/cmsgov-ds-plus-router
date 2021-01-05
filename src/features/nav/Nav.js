import React, { Fragment } from "react";
import { connect } from 'react-redux'
import { VerticalNav, Button } from '@cmsgov/design-system-core';
import { Link as ReactRouterLink } from 'react-router-dom'

// wrap react-router's Link, so that the VerticalNav parent renders it properly
const Link = ({ children, href, ...rest }) => (
  <ReactRouterLink to={href} {...rest}>
    {children}
  </ReactRouterLink>
);

const Nav = ({ items, selectedId, toggleCollapse, toggleSelected }) => {
  return (
    <Fragment>
      <VerticalNav
        component={Link}
        items={items}
        selectedId={selectedId}
      />
    <Button onClick={toggleCollapse}>Toggle Collapse</Button>
    <Button onClick={toggleSelected}>Toggle #item-1</Button>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  items: state.nav.items,
  selectedId: state.nav.selectedId
})

const mapDispatchToProps = (dispatch) => ({
  toggleCollapse: () => dispatch({ type: 'TOGGLE_COLLAPSE' }),
  toggleSelected: () => dispatch({ type: 'TOGGLE_ITEM_1_SELECTED' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
