import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Schedules from './components/Schedules'
import Membership from './components/Membership'
import Pricing from './components/Pricing'
import Offers from './components/Offers'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/schedules" component={Schedules} />
      <Route exact path="/membership" component={Membership} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/offers" component={Offers} />
    </Switch>
  </BrowserRouter>
)

export default App
