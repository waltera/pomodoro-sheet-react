import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './taskActions'
import Task from './Task'

const mapStateToProps = (state, ownProps) => ({
  list: state.list,
  show: state.show
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)