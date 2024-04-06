// Home.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(accordionId);
    }
  };
  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then(res => console.log(res))
      .catch(err => console.log(err)); // Fix the catch statement
  }, []); 

  return (
    <div className='Profile'>
      <div className='profilecontent1'>
        <table>
          <tr>
            <th>
              Aswin U
            </th>
          </tr>
          <tr>
            <th>
              CB.SC.P2CSE23003
            </th>
          </tr>
        </table>
        <table>
          <tbody>
            <tr>
              <td>DOB</td>
              <td>20-10-2001</td>
            </tr>
            <tr>
              <td>email</td>
              <td>aswinupkd@gmail.com</td>
            </tr>
            <tr>
              <td>Course</td>
              <td>M.Tech</td>
            </tr>
            <tr>
              <td>Branch</td>
              <td>CSE</td>
            </tr>
            <tr>
              <td>Batch</td>
              <td>2023-25</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='profilecontent2'>
      <div id="profilepage2">
          <table>
            <tbody>
              <tr>
                <td><center></center></td>
              </tr>
              <tr>
                <td>Aswin</td>
              </tr>
              <tr>
                <td>CB.SC.P2CSE23003</td>
              </tr>
            </tbody>
          </table>
        </div>
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
            </tbody>
          </table>
        </div>

        <div
          className={`accordion ${activeAccordion === 'Qualification' ? 'active' : ''}`}
          onClick={() => toggleAccordion('Qualification')}
        >
          Qualification
        </div>
        <div
          id='Qualification'
          className={`tabcontent ${activeAccordion === 'Qualification' ? 'show' : ''}`}
        >
          <table>
            <tbody>
            <tr>
                        <th>Board</th>
                        <th>Qualification</th>
                        <th>Roll Number</th>
                        <th>Stream</th>
                        <th>CGPA / Percentage</th>
                    </tr>
                    <tr>
                        <td>CBSE</td>
                        <td>10th</td>
                        <td>4832611</td>
                        <td>General</td>
                        <td>8.8</td>
                    </tr>
                    <tr>
                        <td>CBSE</td>
                        <td>12th</td>
                        <td>4832611</td>
                        <td>PCM</td>
                        <td>71.6</td>
                    </tr>
                    <tr>
                        <td>APJAKTU</td>
                        <td>B.Tech</td>
                        <td>ATP19CSE019</td>
                        <td>CSE</td>
                        <td>7.58</td>
                    </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`accordion ${activeAccordion === 'Guardian_Details' ? 'active' : ''}`}
          onClick={() => toggleAccordion('Guardian_Details')}
        >
          Guardian Details
        </div>
        <div
          id='Guardian_Details'
          className={`tabcontent ${activeAccordion === 'Guardian_Details' ? 'show' : ''}`}
        >
          <div id='full'>
            <table>
              <tbody>
                <tr>
                  <th><center>Fathers Details</center></th>
                  <th><center>Mothers Details</center></th>
                </tr>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <th>Fathers Name</th>
                          <td>Unnikrishnan S</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>Bussiness</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>9446342110</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>unnipkd3211@outlook.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <th>Mothers Name</th>
                          <td>Lakshmi Devi N</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>House Wife</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>8907534986</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>unnipkd3211@outlook.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            <div id='mini'>
              <table>
                <tr>
                  <th>Fathers Details</th>
                </tr>
                <tr>
                  <table>
                  <tbody>
                        <tr>
                          <th>Fathers Name</th>
                          <td>Unnikrishnan S</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>Bussiness</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>9446342110</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>unnipkd3211@outlook.com</td>
                        </tr>
                      </tbody>
                  </table>
                </tr>
                <tr>
                  <th>Mothers Details</th>
                </tr>
                <tr>
                  <table>
                  <tbody>
                        <tr>
                          <th>Mothers Name</th>
                          <td>Lakshmi Devi N</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>House Wife</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>8907534986</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>unnipkd3211@outlook.com</td>
                        </tr>
                      </tbody>
                  </table>
                </tr>
              </table>
            </div>
        </div>

        <div
          className={`accordion ${activeAccordion === 'Bank_Details' ? 'active' : ''}`}
          onClick={() => toggleAccordion('Bank_Details')}
        >
          Bank Details
        </div>
        <div
          id='Bank_Details'
          className={`tabcontent ${activeAccordion === 'Bank_Details' ? 'show' : ''}`}
        >
          <table>
            <tbody>
            <tr>
                        <th>Name</th>
                        <td>Aswin U</td>
                    </tr>
                    <tr>
                        <th>AC Number</th>
                        <td>36067556333</td>
                    </tr>
                    <tr>
                        <th>IFCS</th>
                        <td>SBIPK000001</td>
                    </tr>
                    <tr>
                        <th>Bank</th>
                        <td>SBI</td>
                    </tr>
                    <tr>
                        <th>Branch</th>
                        <td>Vadakanthara Palakkad</td>
                    </tr>
            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
}



export default Home;
