import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import { DetailsPage } from './pages/DetailsPage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/links">
          <LinksPage/>
        </Route>
        <Route exact path="/details/:id">
          <DetailsPage/>
        </Route>
        <Route exact path="/create">
          <CreatePage/>
        </Route>
        <Redirect exact to="/create"/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path="/">
        <AuthPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}