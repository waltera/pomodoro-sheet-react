export const setValue = (state, {name, value}) => {
  console.log('formReducer setValue')
  state['form'][name] = value
  return Object.assign({}, state)
}