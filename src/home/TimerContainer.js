import React from 'react';
import {connect, bindActionCreators} from 'react-redux';
import actions from './HomeActions';
import Timer from './Timer';

const mapStateToProps = (state, ownProps) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
