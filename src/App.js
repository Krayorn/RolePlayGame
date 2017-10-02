import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'

// Screens
import Home from './screens/Home'
import Chapters from './screens/Chapters'
import NotFound from './screens/NotFound'

const App = () => (
  <main>
    <Switch>

      <Route exact path='/' render={props =>
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      }/>

      <Route exact path='/chapters/:title' render={props =>
        <DefaultLayout>
          <Chapters {...props} />
        </DefaultLayout>
      }/>

      <Route exact path='/characters' render={props =>
        <DefaultLayout>
          <div> This is the template for characters</div>
        </DefaultLayout>
      }/>

      <Route exact path='/lore' render={props =>
        <DefaultLayout>
          <div> This is the template for lore</div>
        </DefaultLayout>
      }/>

      <Route component={NotFound} />
    </Switch>
  </main>
)

export default App
