import React, { useContext } from 'react';
import { AssignmentContext } from './context/AssignmentContext';
import DropDown from './DropDown';

const SelectAssignment = () => {
    const [assignments, setAssignments] = useContext(AssignmentContext);

    const selectAssignment = index => {
        const newAssignments = [...assignments];
        newAssignments[index].checked = !newAssignments[index].checked;
        setAssignments(newAssignments)
    };

    const selectAll = () => {
        const newAssignments = [...assignments];
        newAssignments.map(item => item.checked = true);
        setAssignments(newAssignments)
    };

    return (
        <div className="selectassignments">
            <h3>Please choose an assignment!</h3>
            <DropDown />
            <ul>
                {assignments.map((item, index) =>
                    <li key={index}>
                        <input type="checkbox"
                            checked={item.checked}
                            onChange={() => selectAssignment(index)}
                        />
                        {item.assignmentName.length < 7 &&
                            <span>{item.assignmentName}</span>}
                        {item.assignmentName.length > 7 &&
                            <span>{item.assignmentName.slice(17)}</span>}
                    </li>)}
            </ul>
            <button onClick={() => selectAll()}>Select All Assignments</button>
        </div>
    )
};
export default SelectAssignment;