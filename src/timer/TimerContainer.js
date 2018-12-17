import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as timerActions from './timerActions'
import Timer from './Timer'

const mapStateToProps = (state) => {
  return {
    timer: state.timer.timer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(timerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)