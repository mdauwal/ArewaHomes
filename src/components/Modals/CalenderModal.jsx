import React from "react";
import "./CalenderModal.css";
import cancel from "../../svgs/Cancel.svg";
import next from "../../svgs/next.svg";

const CalenderModal = ({ show, onClose, onNext }) => {
  if (!show) return null;


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Reschedule a Tour</h2>
          <button className="close-button" onClick={onClose}>
           Close <img className='backk-btn' src={cancel} alt="can" />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-head">
            <h3 className="big-heading">Step 1/3:</h3>
            <p id="big-para"> Pick a new available date</p>
          </div>
          <div className="calendar">
            <div className="calen-head">
            <h3 className="big-head">January 2021</h3>
            <img onClick={onNext} className='can-btn' src={next} alt="nex" />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                  <th>Su</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td onClick={onNext}>1</td>
                  <td onClick={onNext}>2</td>
                  <td onClick={onNext}>3</td>
                  <td onClick={onNext}>4</td>
                  <td onClick={onNext}>5</td>
                  <td onClick={onNext}>6</td>
                  <td onClick={onNext}>7</td>
                </tr>
                <tr>
                  <td onClick={onNext}>8</td>
                  <td onClick={onNext}>9</td>
                  <td onClick={onNext}>10</td>
                  <td onClick={onNext}>11</td>
                  <td onClick={onNext}>12</td>
                  <td onClick={onNext}>13</td>
                  <td onClick={onNext}>14</td>
                </tr>
                <tr>
                  <td onClick={onNext}>15</td>
                  <td onClick={onNext}>16</td>
                  <td onClick={onNext}>17</td>
                  <td onClick={onNext}>18</td>
                  <td onClick={onNext}>19</td>
                  <td onClick={onNext}>20</td>
                  <td onClick={onNext}>21</td>
                </tr>
                <tr>
                  <td onClick={onNext}>22</td>
                  <td onClick={onNext}>23</td>
                  <td onClick={onNext}>24</td>
                  <td onClick={onNext}>25</td>
                  <td onClick={onNext}>26</td>
                  <td onClick={onNext}>27</td>
                  <td onClick={onNext}>28</td>
                </tr>
                <tr>
                  <td onClick={onNext}>29</td>
                  <td onClick={onNext}>30</td>
                  <td onClick={onNext}>31</td>
                </tr>
                {/* Add rows for more dates */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderModal;
