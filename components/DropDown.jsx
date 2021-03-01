import React, { useContext } from 'react';
import { AssignmentContext } from './context/AssignmentContext';

const DropDown = () => {
    const [assignments, setAssignments] = useContext(AssignmentContext);

    const assignmentNames = assignments.map(item => item.assignmentName);

    const selectAssignment = e => {
        const index = e.target.value;
        if (index !== "") {
            const newAssignments = [...assignments];
            newAssignments.map(item => item.checked = false);
            newAssignments[index].checked = true;
            setAssignments(newAssignments)
        }
    }
    return (
        <div className="dropDown">
            <label htmlFor="selectOne">Choose an assignment: </label>
            <select name="select-assignment"
                id="selectOne"
                onChange={e => selectAssignment(e)}
            >
                <option value="">Select an assignment</option>
                {assignmentNames.map((item, index) => {
                    return <option value={index} key={index}>{item}</option>
                })}
            </select>
        </div>
    )
};

export default DropDown;