import './App.css'
import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound/index'
import Home from './components/Home/index'
import Login from './components/LoginForm/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export default App
