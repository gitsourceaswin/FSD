// Fee.js
import React, { useState } from 'react';
import './Fee.css';

function Fee() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(accordionId);
    }
  };

  return (
    <div className='Fee'>
      <div
        className={`accordion ${activeAccordion === 'Full_Time' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Full_Time')}
      >
       FEE
      </div>
      <div
        id='Full_Time'
        className={`tabcontent ${activeAccordion === 'Full_Time' ? 'show' : ''}`}
      >
        <table>
          <tbody>
            <tr>
                <th></th>
                <th><center>Fee Details</center></th>
                <th></th>
            </tr> {/* Added the closing tag here */}
            <tr>
                <th>Particulars</th>
                <th>Actual Fee</th>
                <th>Applicable Fee</th>
            </tr>
            <tr>
                <td>Tution Fee</td>
                <td>87000</td>
                <td>77000</td>
            </tr>
            <tr>
                <td>Exam Fee</td>
                <td>5400</td>
                <td>5400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fee;
