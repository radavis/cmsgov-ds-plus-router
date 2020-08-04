import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom"
import Navbar from './Navbar'

const Thing1 = props => <div>Thing 1</div>
const Thing2 = props => <div>Thing 2</div>

const SubItem = props => {
  const { id } = useParams();
  return <div>SubItem #{id}</div>
}

const App = props => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/thing-one" component={Thing1} />
      <Route path="/thing-two" component={Thing2} />
      <Route path="/items/:id" component={SubItem} />
    </Switch>
  </Router>
)

export default App
