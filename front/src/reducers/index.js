import * as Immutable from 'immutable'


export default (state = Immutable.OrderedMap({
  server_names: [],
  server_data: {}
}), action) => {
  switch (action.type) {
    case 'REQUEST_USAGES_COMPLETED':
      const names = Object.keys(action.data)
      state = state.set('server_names', names)
      const server_data = {}
      for (let i = 0; i < names.length; ++i) {
        server_data[names[i]] = action.data[names[i]]
      }
      return state.set('server_data', server_data)
    default:
      return state
  }
}
