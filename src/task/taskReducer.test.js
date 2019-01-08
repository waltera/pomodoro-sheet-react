import reducer, {initialState} from './taskReducer'
import {
  GET_ALL,
  EDIT,
  TASK_NEW
} from './taskTypes'

const taskList = {
  "data": [
    {
      "id": "12",
      "type": "task",
      "attributes": {
        "description": "Task 1"
      },
      "relationships": {
        "pomodoros": {
          "data": [
            {
              "id": "12",
              "type": "pomodoro"
            }
          ]
        }
      }
    }
  ],
  "included": [
    {
      "id": "12",
      "type": "pomodoro",
      "attributes": {
        "created_at": "2019-01-04T12:48:35.029Z",
        "start_at": null,
        "end_at": null,
        "canceled_at": null,
        "status": "pending"
      }
    }
  ]
}

describe('task reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle TASK_GET_ALL', () => {
    const list = [
      {
        id: 12,
        description: 'Task 1',
        pomodoros: [
          {
            id: "12",
            created_at: '2019-01-04T12:48:35.029Z',
            start_at: null,
            end_at: null,
            canceled_at: null,
            status: 'pending'
          }
        ]
      }
    ]
    const expectedState = Object.assign({}, {...initialState}, {list})
    expect(reducer(undefined, {type: GET_ALL, taskList})).toEqual(expectedState)
  })

  it('should handle TASK_EDIT', () => {
    const list = [
      {
        id: 12,
        description: 'Task 1',
        pomodoros: [
          {
            id: "12",
            created_at: '2019-01-04T12:48:35.029Z',
            start_at: null,
            end_at: null,
            canceled_at: null,
            status: 'pending'
          }
        ]
      }
    ]
    const editState = Object.assign({}, {...initialState}, {list})
    const form = {
      id: 12,
      description: 'Task 1',
      pomodoros: 1
    }
    const expectedState = Object.assign({}, {...editState}, {form})

    expect(reducer(editState, {type: EDIT, id: 12})).toEqual(expectedState)
  })

  it('should handle TASK_NEW', () => {
    const form = {
      id: 12,
      description: 'Task 1',
      pomodoros: 1
    }
    const taskNewState = Object.assign({}, {...initialState}, {form})
    const expectedState = Object.assign({}, {...initialState}, {showModal: true})

    expect(reducer(taskNewState, {type: TASK_NEW})).toEqual(expectedState)
  })
})
