// Academics.js
import React, { useState } from 'react';
import './Academics.css';

function Academics() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(accordionId);
    }
  };

  return (
    <div className='Academics'>
      <div
        className={`accordion ${activeAccordion === 'studentDetails' ? 'active' : ''}`}
        onClick={() => toggleAccordion('studentDetails')}
      >
        Student Details
      </div>
      <div
        id='studentDetails'
        className={`tabcontent ${activeAccordion === 'studentDetails' ? 'show' : ''}`}
      >
        <table>
          <tbody>
          <tr>
                    <th>Name</th>
                    <td>Aswin U</td>
                </tr>
                <tr>
                    <th>Roll Number</th>
                    <td>cb.sc.p2cse23003</td>
                </tr>
                <tr>
                    <th>Course</th>
                    <td>M.Tech</td>
                </tr>
                <tr>
                    <th>Branch</th>
                    <td>CSE</td>
                </tr>
                <tr>
                    <th>Batch</th>
                    <td>2023-25</td>
                </tr>
                <tr>
                    <th>CGPA</th>
                    <td>7.58</td>
                </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Sem_result' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Sem_result')}
      >
        Exam Result
      </div>
      <div
        id='Sem_result'
        className={`tabcontent ${activeAccordion === 'Sem_result' ? 'show' : ''}`}
      >
        <table>
          <tbody>
          <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <td>21CS637</td>
                    <td>Agile and DevOps</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>21CS601</td>
                    <td>Data Structure and Algorithm analysis</td>
                    <td>A+</td>
                </tr>
                <tr>
                    <td></td>
                    <td>SGPA</td>
                    <td>9.8</td>
                </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Transcript' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Transcript')}
      >
        Taranscript
      </div>
      <div
        id='Transcript'
        className={`tabcontent ${activeAccordion === 'Transcript' ? 'show' : ''}`}
      >
        <table>
          <tbody>
          <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                </tr>
                <tr>
                    <td>21CS637</td>
                    <td>Agile and DevOps</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>21CS601</td>
                    <td>Data Structure and Algorithm analysis</td>
                    <td>4</td>
                </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default Academics;
