import React, { useState, createContext } from 'react';
import studentsdata from '../Data/studentsdata';

export const AssignmentContext = createContext();

export const AssignmentProvider = props => {

    const assignmentData = studentsdata[0].assignments
    const [assignments, setAssignments] = useState(assignmentData);

    //console.log(assignments);
    return (
        <AssignmentContext.Provider value={[assignments, setAssignments]}>
            {props.children}
        </AssignmentContext.Provider>
    )
};