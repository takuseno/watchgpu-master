import * as actions from '../actions'
import * as api from '../api'

const apiMiddleware = store => next => action => {
  console.lop(action)
  next(action)
  switch (action.type) {
    case 'REQUEST_USAGES':
      return api.fetchUsages()
        .then(data => {
          next(actions.requestUsagesCompleted(data.servers))
        })
  }
}

export default apiMiddleware
