import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Chart from './Chart';
import SelectAssignment from './SelectAssignment';
import SortButtons from './SortButtons';

const StudentOverview = () => {
    const pageName = useLocation().pathname.split("/")[2];

    useEffect(() => {
        document.title = `Winc Dashboard from ${pageName}`
    })

    return (
        <div className="studentOverview">
            <Header pagename={pageName} />
            <NavBar pagename={pageName} />
            <Chart pagename={pageName} />
            <div className="menu">
                <SelectAssignment />
                <SortButtons />
            </div>
        </div>
    )
};
export default StudentOverview;