export const ADD_TASK = 'ADD_TASK';

export function addTask(description) {
  return { type: ADD_TASK, description }
}
