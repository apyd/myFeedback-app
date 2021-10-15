import { ThemeProvider } from 'styled-components'
import GlobalStyles from './theme/globalStyles'
import useDarkMode from './hooks/useDarkMode'
import { lightTheme, darkTheme } from './theme/theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppRoutes } from './routing/AppRoutes'
import Home from './pages/Home'
import Products from './pages/Products'
import AllFeedback from './pages/AllFeedback'
import FeedbackDetails from './pages/FeedbackDetails'
import Roadmap from './pages/Roadmap'
import Preferences from './pages/Preferences'
import NotFound from './pages/NotFound'

import Layout from './layout/Layout'
import Auth from './pages/Auth'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  let themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Layout activeTheme={theme} toggleTheme={toggleTheme}>
          <Switch>
            <Route path={AppRoutes.HOME} exact>
              <Home />
            </Route>
            <Route path={AppRoutes.LOGIN} exact>
              <Auth />
            </Route>
            <Route path={AppRoutes.REGISTER} exact>
              <Auth />
            </Route>
            <Route path={AppRoutes.FORGOT_PASSWORD} exact>
              <Auth />
            </Route>
            <Route path={AppRoutes.PRODUCTS}>
              <Products />
            </Route>
            <Route path={AppRoutes.FEEDBACK} exact>
              <AllFeedback />
            </Route>
            <Route path={`${AppRoutes.FEEDBACK_DETAILS}/:id`}>
              <FeedbackDetails />
            </Route>
            <Route path={AppRoutes.ROADMAP}>
              <Roadmap />
            </Route>
            <Route path={AppRoutes.PREFERENCES}>
              <Preferences />
            </Route>
            <Route path={AppRoutes.NOTFOUND}>
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  )
}

export default App
