import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import api from '../middlewares'
import { compose, createStore, applyMiddleware} from 'redux'

const store = applyMiddleware(
  api, thunk
)(createStore)(reducers)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}>
      <App />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
