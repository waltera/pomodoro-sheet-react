import React from 'react'
import {Field} from 'redux-form'
import Input from '../app/Input'
import AlertError from '../app/AlertError'

const TaskForm = ({handleSubmit, error, title}) => {
  return <div>
    {<AlertError message={error} />}
    <h1>{title}</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-row">

          <Field
            name="description"
            label="Descrição"
            type="text"
            size="col-md-8"
            component={Input} />

          <Field
            name="pomodoros"
            label="Pomodoros"
            type="text"
            size="col-md-4"
            component={Input} />
        </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
}

export default TaskForm