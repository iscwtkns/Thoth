import React, { useState } from 'react';
import {Navbar} from '../layout';
import './dashboard.css'

// main dashboard function
function Dashboard() {
    return (<>
        <Navbar/>
        <div className='dashboard'>
            <div className='dashboardCard profileCard'>Profile</div>
            <div className='cardColumn'>
                <div className="dashboardCard lessonCard">Suggested Lessons</div>
                <div className='dashboardCard awardCard'>Awards</div>
                <div className='cardRow'>
                    <div className='dashboardCard resumeCard'>Resume Lesson</div>
                    <div className='dashboardCard friendCard'>Friends</div>
                    <div className='dashboardCard streakCard'>Streaks</div>
                </div>
            </div>
        </div>
    </>);
}




export default Dashboard;