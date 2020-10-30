import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router } from "react-router-dom";


//the first argument is the component that we want to render
// the seconde argument is where we wants to render it, in this example we want it to be placed in a div which has an id of root(it is from the index.html file)
render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'))

