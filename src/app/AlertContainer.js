import {connect} from 'react-redux'
import Alert from './Alert'

const mapStateToProps = (state) => ({...state.app.alert})

export default connect(mapStateToProps, null)(Alert)