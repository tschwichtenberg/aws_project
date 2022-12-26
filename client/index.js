// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Main } from './components'


// ReactDOM.render(
//   <div>Hello, world!</div>,
//   <Router>
//   <Main />
//   </Router>
//   document.getElementById('app') // make sure this is the same as the id of the div in your index.html
// );

import React from 'react'
import { createRoot } from 'react-dom/client'

/* Import and destructure main from src/component/index.js  */
import { Main } from './components'
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)