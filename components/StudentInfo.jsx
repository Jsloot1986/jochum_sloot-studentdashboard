import React from 'react';


const StudentInfo = ({pagename, student}) => {
    const calculate_age = (dob) => { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    

    if (pagename === student.name) {
        return (
            <ul>
    
                <li>
                    <div className="studentInfo">
                        <h3>{`name: ${student.name} ${student.surName}`}</h3>
                        <p>{`age: ${calculate_age(new Date(student.age))}`}</p>
                        <p>{`phone: ${student.phone}`}</p>
                        <p>{`email: ${student.email}`}</p>
                        <img src={student.img} alt={student.name} />
                    </div>
            
                </li>
            </ul>
        )
    } else {
        return <div></div>
    } 
    
   

}
export default StudentInfo