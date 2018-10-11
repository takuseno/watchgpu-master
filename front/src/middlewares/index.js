import * as actions from '../actions'
import * as api from '../api'

const apiMiddleware = store => next => action => {
  next(action)
  switch (action.type) {
    case 'REQUEST_USAGES':
      return api.fetchUsages()
        .then(data => data.json())
        .then(data => {
          next(actions.requestUsagesCompleted(data))
        })
  }
}

export default apiMiddleware
