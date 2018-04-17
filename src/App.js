import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import {reducers, middlewares} from './redux/index'

// Layouts
import DefaultLayout from './layouts/DefaultLayout'

// Screens
import Home from './screens/Home'
import Chapters from './screens/Chapters'
import NotFound from './screens/NotFound'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  middlewares
))

// const store = createStore(reducers, compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const App = () => (
  <Provider store={store} >
    <main>
      <Switch>

        <Route exact path='/' render={props =>
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }/>

        <Route exact path='/chapters/:number' render={props =>
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

        <Route exact path='/encyclopedia' render={props =>
          <DefaultLayout>
            <div> This is the template for encyclopedia</div>
          </DefaultLayout>
        }/>

        <Route component={NotFound} />
      </Switch>
    </main>
  </Provider>
)

export default App
