// Placements.js
import React, { useState } from 'react';
import './Placements.css';

function Placements() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(accordionId);
    }
  };

  return (
    <div className='Placements'>
      <div
        className={`accordion ${activeAccordion === 'Full_Time' ? 'active' : ''}`}
        onClick={() => toggleAccordion('studentDetails')}
      >
        Full Time
      </div>
      <div
        id='Full_Time'
        className={`tabcontent ${activeAccordion === 'Full_Time' ? 'show' : ''}`}
      >
        <table>
          <tbody>
          <tr>
                    <th>Company Name</th>
                    <th>Package</th>
                    <th>Date of Joining</th>
                </tr>
                <tr>
                    <td>Google</td>
                    <td>24.5 LPA</td>
                    <td>01.03.2024</td>
                </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Internship' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Internship')}
      >
        Internship
      </div>
      <div
        id='Internship'
        className={`tabcontent ${activeAccordion === 'Internship' ? 'show' : ''}`}
      >
        <table>
          <tbody>
          <tr>
                    <th>Company Name</th>
                    <th>Package</th>
                    <th>Date of Joining</th>
                </tr>
                <tr>
                    <td>Google</td>
                    <td>24.5 LPA</td>
                    <td>01.03.2024</td>
                </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Research' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Research')}
      >
        Research
      </div>
      <div
        id='Transcript'
        className={`tabcontent ${activeAccordion === 'Research' ? 'show' : ''}`}
      >
        <table>
          <tbody>
                <tr>
                    <th>Tag Name</th>
                    <th>Project</th>
                    <th>Guide</th>
                </tr>
                <tr>
                    <td>SCN</td>
                    <td>Project Name</td>
                    <td>TSK</td>
                </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default Placements;
