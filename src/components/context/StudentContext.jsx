import React, { useState, createContext } from 'react';
import studentsdata from '../Data/studentsdata';

export const StudentContext = createContext();

export const StudentProvider = props => {
    const [students, setStudents] = useState(studentsdata);
    
    return (
        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
    )
};