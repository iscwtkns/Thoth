import { Navbar } from "../layout"
import React, {useState} from 'react'
import './learn.css'

function Learn() {
    const [subject, setSubject] = useState("maths")
    
    const renderContent = () => {
        switch (subject) {
            case "physics":
                return <PhysicsLessons />
            case "maths":
                return <MathsLessons />
            case "chemistry":
                return <ChemistryLessons />
        }
    }

    const returnSubjectColor = () => {
        switch (subject) {
            case "physics":
                return '#2672e5';
            case "maths":
                return 'red'
            case "chemistry":
                return 'green'
        }
    }

    return (<>
        <Navbar />
        <div className="subjectSelector" style={{backgroundColor:returnSubjectColor()}}>
            <button className="physicsButton"  value={subject} onClick={() => setSubject("physics")}>Physics</button>
            <button className="mathsButton" value={subject} onClick={() => setSubject("maths")}>Mathematics</button>
            <button className="chemistryButton" value={subject} onClick={() => setSubject("chemistry")}>Chemistry</button>
        </div>
        <div className="subjectContent">
            {renderContent()}
        </div>
    </>)
}

export default Learn

function PhysicsLessons() {
    return (<>
        <p>General Physics</p>
        <p>Classical Mechanics</p>
        <p>Thermodynamics and Statistical Mechanics</p>
        <p>Electromagnetism</p>
        <p>Quantum Mechanics</p>
    </>)
}

function MathsLessons() {
    return(<>
        <p>Algebra</p>
        <p>Calculus</p>
        <p>Geometry</p>
    </>)
}

function ChemistryLessons() {
    return(<>
        <p>Atoms</p>
        <p>Elements</p>
        <p>Bonds</p>
    </>)
}