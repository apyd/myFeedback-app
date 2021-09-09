import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Products from './pages/Products'
import AllFeedback from './pages/AllFeedback'
import FeedbackDetails from './pages/FeedbackDetails'
import Roadmap from './pages/Roadmap'
import Preferences from './pages/Preferences'
import NotFound from './pages/NotFound'

import './App.css'
import Layout from './layout/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AuthPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/feedback" exact>
            <AllFeedback />
          </Route>
          <Route path="/feedback/details">
            <FeedbackDetails />
          </Route>
          <Route path="/roadmap">
            <Roadmap />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
