// Academics.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then(res => setData(res.data))
      .catch(err => console.log(err)); // Fix the catch statement
  }, []); 

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
                    <td>{data.Name}</td>
                </tr>
                <tr>
                    <th>Roll Number</th>
                    <td>{data.roll_num}</td>
                </tr>
                <tr>
                    <th>Course</th>
                    <td>{data.course}</td>
                </tr>
                <tr>
                    <th>Branch</th>
                    <td>{data.branch}</td>
                </tr>
                <tr>
                    <th>Batch</th>
                    <td>{data.batch}</td>
                </tr>
                <tr>
                    <th>CGPA</th>
                    <td>{data.cgpa}</td>
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
          {data.examResults && data.examResults.map((examResults, index) => (
                  <tr key={index}>
                    <th>Sem {examResults.semNO}</th>

                    <td>{examResults.SGPA}</td>
                  </tr>
                ))}
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
        <thead>
            <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
             </tr>
             </thead>
             <tbody>
                {data.transcript && data.transcript.map((transcript, index) => (
                  <tr key={index}>
                    <td>{transcript.course_code }</td>
                    <td>{transcript.course_name}</td>
                    <td>{transcript.no_credits}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>


    </div>
  );
}

export default Academics;
