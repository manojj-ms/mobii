import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"


// Route-based code splitting
const Home = lazy(() =>
  import("./views/pages/Home")
)

const Profile = lazy(() =>
  import("./views/profile")
)



const Page2 = lazy(() =>
  import("./views/pages/Page2")
)

const login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

const registration = lazy(() =>
  import("./views/pages/authentication/registration/Registration")
)

const forgotpassword = lazy(() =>
  import("./views/pages/authentication/forgotpassword/Forgotpassword")
)
// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={Home}
          />
          <AppRoute
            path="/page2"
            component={Page2}
          />
          <AppRoute
            path="/profile"
            component={Profile}
          />
          <AppRoute
            path="/pages/login"
            component={login}
            fullLayout
          />
          <AppRoute
            path="/pages/registration"
            component={registration}
            fullLayout
          />
            <AppRoute
            path="/pages/forgotpassword"
            component={forgotpassword}
            fullLayout
          />                  
          
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
