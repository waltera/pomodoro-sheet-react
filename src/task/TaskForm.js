import React from 'react'
import TextField from '../form/TextField'
import Alert from '../app/Alert'

const TaskForm = ({handleSubmit, setValue, error, title, form}) => {

  return <div>
    <h1>{title}</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-row">

          <TextField
            name="description"
            label="Descrição"
            type="text"
            size="col-md-8"
            setValue={setValue}
            value={form.description} />

          <TextField
            name="pomodoros"
            label="Pomodoros"
            type="text"
            size="col-md-4"
            setValue={setValue}
            value={form.pomodoros} />
        </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
}

export default TaskForm