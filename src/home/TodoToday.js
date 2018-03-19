import React from 'react';
import imgDone from '../img/si-glyph-square.svg';
import imgPlanned from '../img/si-glyph-square-dashed-1.svg';
import imgDone2 from '../img/si-glyph-circle.svg';
import imgPlanned2 from '../img/si-glyph-circle-drashed.svg';
import imgCanceled from '../img/si-glyph-button-error.svg';

const TodoToday = () => (
  <div className="card-deck mb-3">
    <div className="card mb-4 box-shadow">
      <div className="card-header text-center">
        <h4 className="my-0 font-weight-normal">
          Todo Today
        </h4>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-primary">
            Vestibulum at eros texto texto aqui texto mais um documentor ealizado com sucesso daqueles mais um pouco de texto
            <span className="w-30">
              <img className="glyph-icon" src={imgDone}/>
              <img className="glyph-icon" src={imgDone}/>
              <img className="glyph-icon" src={imgDone2}/>
              <img className="glyph-icon" src={imgCanceled}/>
              <img className="glyph-icon" src={imgPlanned2}/>
              <img className="glyph-icon" src={imgCanceled}/>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Vestibulum at eros texto long <br /> mais text
            <span className="w-30">
              <img className="glyph-icon" src={imgDone}/>
              <img className="glyph-icon" src={imgDone}/>
              <img className="glyph-icon" src={imgCanceled}/>
              <img className="glyph-icon" src={imgDone}/>
              <img className="glyph-icon" src={imgPlanned}/>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TodoToday;
