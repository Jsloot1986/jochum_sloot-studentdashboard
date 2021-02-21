import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from './context/StudentContext';
import Student from './Student';
import { SortContext } from './context/SortContext';
import { AssignmentContext } from './context/AssignmentContext';

const NavBar = ({ pagename }) => {
    const [students, setStudents] = useContext(StudentContext);

    const selectAllStudents = () => {
        const newStudents = [...students];
        newStudents.map(item => item.checked = true)
        setStudents(newStudents)
    };

    const [setSort] = useContext(SortContext);

    const [assignments, setAssignments] = useContext(AssignmentContext);

    const setDefault = () => {
        const newStudents = [...students];
        newStudents.map(item => item.checked = true)
        setStudents(newStudents)
        const newAssignments = [...assignments];
        newAssignments.map(item => item.checked = true)
        setAssignments(newAssignments)
        setSort(prevState => {
            return { ...prevState, difficult: false, fun: false }
        });
    };

    return (
        <div className="navBar">
            <ul>
                {pagename && <li key="home"><Link to="/" onClick={() => setDefault()}>Home</Link></li>}
                {students.map((student, index) => <Student key={index} student={student} pagename={pagename} index={index} />)}
            </ul>
            {!pagename && <button onClick={() => selectAllStudents()}>Select All Students</button>}
        </div>
    )
};
export default NavBar;