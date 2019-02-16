import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import imgDone from '../img/si-glyph-square.svg'
import imgPlanned from '../img/si-glyph-square-dashed-1.svg'
import imgDone2 from '../img/si-glyph-circle.svg'
import imgPlanned2 from '../img/si-glyph-circle-drashed.svg'
import imgCanceled from '../img/si-glyph-delete.svg'

class TaskList extends React.Component {
  componentDidMount() {
    // get itens from server
  }

  render() {
    return <div className="card">
      <ul className="list-group list-group-flush">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Crie uma tarefa</h5>
          <span className="badge badge-pill">
            <Link to="/tasks/new" className="btn btn-primary">Novo</Link>
          </span>
        </div>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span className="badge badge-pill">
            <img className="glyph-icon mr-1" src={imgDone}/>
            <img className="glyph-icon mr-1" src={imgDone}/>
            <img className="glyph-icon mr-1" src={imgDone2}/>
            <img className="glyph-icon mr-1" src={imgCanceled}/>
            <img className="glyph-icon mr-1" src={imgPlanned2}/>
            <img className="glyph-icon" src={imgCanceled}/>
          </span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span className="badge badge-pill">
            <img className="glyph-icon mr-1" src={imgDone}/>
            <img className="glyph-icon" src={imgPlanned}/>
          </span>
        </li>
      </ul>
    </div>
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array
}

export default TaskList