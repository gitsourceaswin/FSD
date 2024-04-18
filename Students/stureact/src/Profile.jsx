// Profile.js
import React from 'react';
import './Profile.css';

function Profile() {
    function openTab(tabName) {
        var i, tabcontent;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        document.getElementById('default-tab').style.visibility = 'hidden';
    }

    function showStudentDetails() {
        openTab('studentDetails');
    }

    return (
        <div id="profile" className="content">
            <div id="profilepage">
                <img src="vector-icons-avatar-man.avif" style={{ width: '70%', paddingBottom: '25px', borderRadius: '45%' }} ></img>
                <h2 id="sname">Aswin U</h2>
                <h3 id="srollno">CB.SC.P2CSE23003</h3>
                <table style={{ paddingTop: '10px' }}>
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
                </table>
            </div>
            <div className="tab">
                <button id="default-tab" className="default-tab" onClick={() => openTab('studentDetails')}>Student Details</button>
                <button onClick={() => openTab('Qualification')}>Qualification</button>
                <button onClick={() => openTab('g_det')}>Guardian Details</button>
                <button onClick={() => openTab('bnk_det')}>Bank Details</button>
            </div>
            <div id="profilepage2">
                <table>
                    <tr><center><img src="dumy.png" style={{ width: '150px' }} /></center></tr>
                    <tr>
                        <td>Aswin</td>
                    </tr>
                    <tr>
                        <td>CB.SC.P2CSE23003</td>
                    </tr>
                </table>
            </div>
            <div id="profilecontent">
                <div id="studentDetails" className="tabcontent">
                    {/* Student Details Table */}
                </div>
                <div id="Qualification" className="tabcontent">
                    {/* Qualification Table */}
                </div>
                <div id="g_det" className="tabcontent">
                    {/* Guardian Details Table */}
                </div>
                <div id="bnk_det" className="tabcontent">
                    {/* Bank Details Table */}
                </div>
            </div>
        </div>
    );
}

export default Profile;
