export const setValue = (state, {name, value}) => {
  const form = Object.assign({}, state.form)
  form[name] = {value}
  return Object.assign({}, state, {form})
}