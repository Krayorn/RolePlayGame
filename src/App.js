import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'

import Home from './screens/Home'
import NotFound from './screens/NotFound'

const App = () => (
  <main>
    <Switch>

      <Route exact path='/' render={props =>
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      }/>

      <Route exact path='/chapters' render={props =>
        <div> This is the template for chapters</div>
      }/>

      <Route exact path='/characters' render={props =>
        <div> This is the template for characters</div>
      }/>

      <Route exact path='/lore' render={props =>
        <div> This is the template for lore</div>
      }/>

      <Route component={NotFound} />
    </Switch>
  </main>
)

export default App
