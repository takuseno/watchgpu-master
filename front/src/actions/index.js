export function requestUsages () {
  return {
    type: 'REQUEST_USAGES'
  }
}

export function requestUsagesCompleted (data) {
  return {
    type: 'REQUEST_USAGES_COMPLETED',
    data: data
  }
}
