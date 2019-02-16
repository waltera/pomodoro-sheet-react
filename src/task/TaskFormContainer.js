import {reduxForm} from 'redux-form'
import TaskForm from './TaskForm'

export default reduxForm({form: 'task'})(TaskForm)