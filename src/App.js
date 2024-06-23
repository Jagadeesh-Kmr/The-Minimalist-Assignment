import {Switch, Route} from 'react-router-dom'

import FireFLyHome from './components/FireFlyHome'
import ItemView from './components/ItemView'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={FireFLyHome} />
      <Route exact path="/item" component={ItemView} />
    </Switch>
  </>
)

export default App
