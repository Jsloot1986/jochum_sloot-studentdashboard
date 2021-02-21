import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from './context/StudentContext';

const Student = ({ student, pagename, index }) => {
    
    const [students, setStudents] = useContext(StudentContext);

    const url = `/Student/${student.name}`;

    const selectStudent = index => {
        const newStudents = [...students];
        newStudents[index].checked = !newStudents[index].checked
        setStudents(newStudents)
    };

    return (
        <li>
            {!pagename &&
                <label className="container">
                    <input type="checkbox"
                        id={student.name}
                        checked={student.checked}
                        onChange={() => selectStudent(index)}
                    />
                    <span className="checkmark"></span>
                </label>}
            <Link to={url}>{student.name}</Link>
        </li>
    )
};
export default Student;