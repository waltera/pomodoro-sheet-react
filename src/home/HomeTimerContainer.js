import { connect } from 'react-redux';
import { startPomodoro, stopTimer } from './homeActions';
import HomeTimer from './HomeTimer';

const mapStateToProps = (state, ownProps) => ({
  timer: state.home.timer
})

const mapDispatchToProps = { startPomodoro, stopTimer }

export default connect(mapStateToProps, mapDispatchToProps)(HomeTimer)
