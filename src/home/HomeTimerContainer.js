import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './homeActions';
import HomeTimer from './HomeTimer';

const mapStateToProps = (state, ownProps) => ({
  timer: state.home.timer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTimer)
