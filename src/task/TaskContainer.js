import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import TaskManage from './TaskManage'

const mapStateToProps = (state) => ({tasks: state.task.list})

const mapDispatchToProps = (dispatch) => ({dispatch})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskManage))