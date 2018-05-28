import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './taskActions';
import Task from './Task';

console.log(actions);

const mapStateToProps = (state, ownProps) => ({
  list: state.list,
  showTask: state.showTask
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Task)
