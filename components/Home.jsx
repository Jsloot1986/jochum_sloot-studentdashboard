import React, { useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Chart from './Chart';
import SelectAssignment from './SelectAssignment';
import SortButtons from './SortButtons';

const Home = () => {
    useEffect(() => {
        document.title = "Winc Student Dashboard"
    })

    return (
        <div>
            <Header />
            <NavBar />
            <Chart />
            <div className="menu">
                <SelectAssignment />
                <SortButtons />
            </div>
        </div>
    )
};
export default Home;