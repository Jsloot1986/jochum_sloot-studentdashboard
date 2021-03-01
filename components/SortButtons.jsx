import React, { useContext } from 'react';
import { SortContext } from './context/SortContext';

const SortButtons = () => {
    const [, setSort] = useContext(SortContext);

    const sortAssignments = e => {
        switch (e.target.value) {
            case "sortstandard":
                setSort(prevState => {
                    return { ...prevState, difficult: false, fun: false }
                })
                break;
            case "sortdifficult":
                setSort(prevState => {
                    return { ...prevState, difficult: true, fun: false }
                })
                break;
            case "sortfun":
                setSort(prevState => {
                    return { ...prevState, difficult: false, fun: true }
                })
                break;
            default:
                setSort(prevState => {
                    return { ...prevState, difficult: false, fun: false }
                })
        }
    };

    return (
        <div className="sortButtons">
            <h3>Sort the assignments</h3>
            <ul>
                <li>
                    <input type="radio"
                        id="standard"
                        name="sortchoice"
                        value="sortstandard"
                        onChange={(e) => sortAssignments(e)}
                    />
                    <label htmlFor="standard">Sort on assignment order</label>
                </li>
                <li>
                    <input type="radio"
                        id="difficult"
                        name="sortchoice"
                        value="sortdifficult"
                        onChange={(e) => sortAssignments(e)}
                    />
                    <label htmlFor="difficult">Sort on difficult rating</label>
                </li>
                <li>
                    <input type="radio"
                        id="fun"
                        name="sortchoice"
                        value="sortfun"
                        onChange={(e) => sortAssignments(e)}
                    />
                    <label htmlFor="fun">Sort on fun rating</label>
                </li>
            </ul>
        </div>
    )
};
export default SortButtons;