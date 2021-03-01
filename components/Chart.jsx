import React, { useContext } from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryLabel,
    VictoryAxis,
    VictoryLine,
    VictoryTooltip
} from 'victory';
import { StudentContext } from './context/StudentContext';
import { SortContext } from './context/SortContext';
import { AssignmentContext } from './context/AssignmentContext';

const Chart = ({ pagename }) => {
    const [students] = useContext(StudentContext);

    const filterStudents = () => {
        if (pagename) {
            return students.filter(student => student.name === pagename)
        } else {
            return students.filter(student => student.checked)
        }
    };

    const filteredStudents = filterStudents();

    const [assignments] = useContext(AssignmentContext);

    const weighedAssignments = assignments.filter(assignment => assignment.checked).map(item => item.assignmentName);

    const assembleAssignments = () => {
        const newArray = [];
        weighedAssignments.forEach(item => {
            newArray.push(filteredStudents.map(student => student.assignments.filter(assignment => assignment.assignmentName === item)))
        })
        return newArray
    };

    const allAssignmentsAssembled = assembleAssignments();

    const createAverageObjects = () => {
        const newArray = []
        if (filteredStudents.length > 0) {
            allAssignmentsAssembled.forEach(item => {
                if (item[0][0].assignmentName.length < 7) {
                    newArray.push({
                        assignmentName: item[0][0].assignmentName,
                        difficult: item.flat().map(item => item.difficult).reduce((a, b) => a + b) / item.length,
                        fun: item.flat().map(item => item.fun).reduce((a, b) => a + b) / item.length
                    })
                } else {
                    newArray.push({
                        assignmentName: item[0][0].assignmentName.slice(17),
                        difficult: item.flat().map(item => item.difficult).reduce((a, b) => a + b) / item.length,
                        fun: item.flat().map(item => item.fun).reduce((a, b) => a + b) / item.length
                    })
                }
            })
        }
        return newArray
    };

    const averageObjects = createAverageObjects();

    const [sort] = useContext(SortContext);

    const sortAssignments = array => {
        if (sort.difficult) {
            return array.sort((a, b) => b.difficult - a.difficult)
        } else if (sort.fun) {
            return array.sort((a, b) => b.fun - a.fun)
        } else {
            return array
        }
    };

    const sortedAssignments = sortAssignments(averageObjects);

    const createxyObject = () => {
        const data = {};
        data.difficult = [];
        data.fun = [];
        sortedAssignments.forEach(item => {
            data.difficult.push({ x: item.assignmentName, y: item.difficult })
            data.fun.push({ x: item.assignmentName, y: item.fun })
        })
        return data;
    }

    const barData = createxyObject();

    const getConditiontalLabel = () => {
        if (pagename) {
            return "Rating for difficult and fun for each assignment"
        } else {
            return "Average rating for diffucult and fun for each assignment"
        }
    };

    const conditiontalLabel = getConditiontalLabel();

    return (
        <div className="chartcomponent">
            {filteredStudents.length > 0 &&
                weighedAssignments.length > 0 &&
                <VictoryChart height={200}>
                    <VictoryLabel
                        text={conditiontalLabel}
                        x={225}
                        y={8}
                        textAnchor="middle"
                        style={{ fill: "#120faa" }} />
                    <VictoryLine
                        y={() => 1}
                        style={{
                            data: {
                                stroke: "#bbbbbb",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 2}
                        style={{
                            data: {
                                stroke: "#bbbbbb",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 3}
                        style={{
                            data: {
                                stroke: "#bbbbbb",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 4}
                        style={{
                            data: {
                                stroke: "#bbbbbb",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 5}
                        style={{
                            data: {
                                stroke: "#bbbbbb",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 4.5}
                        style={{
                            data: {
                                stroke: "#e8e8e8",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 0.5}
                        style={{
                            data: {
                                stroke: "#e8e8e8",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 1.5}
                        style={{
                            data: {
                                stroke: "#e8e8e8",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 2.5}
                        style={{
                            data: {
                                stroke: "#e8e8e8",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryLine
                        y={() => 3.5}
                        style={{
                            data: {
                                stroke: "#e8e8e8",
                                strokeWidth: 0.3
                            }
                        }} />
                    <VictoryGroup offset={150 / weighedAssignments.length}>
                        <VictoryBar
                            data={barData.difficult}
                            style={{ data: { fill: 'red' } }}
                            barWidth={130 / weighedAssignments.length}
                            animate={{
                                duration: 1500,
                                onLoad: { duration: 1000 }
                            }}
                            labels={({ datum }) => `${datum.x} \n difficult-grade: ${datum.y.toString().slice(0, 3)}`}
                            labelComponent={
                                <VictoryTooltip
                                    flyoutWidth={60}
                                    flyoutHeight={16}
                                    cornerRadius={2}
                                    pointerLength={4}
                                    pointerWidth={4}
                                    flyoutStyle={{
                                        stroke: "#120faa",
                                        strokeWidth: 0.8,
                                        fill: "#ffffa0"
                                    }}
                                    style={{
                                        fontSize: 8,
                                        fill: "#120faa"
                                    }} />
                            } />
                        <VictoryBar
                            data={barData.fun}
                            style={{ data: { fill: 'green' } }}
                            barWidth={130 / weighedAssignments.length}
                            animate={{
                                duration: 1500,
                                onLoad: { duration: 1000 }
                            }}
                            labels={({ datum }) => `${datum.x} \n fun-grade: ${datum.y.toString().slice(0, 3)}`}
                            labelComponent={
                                <VictoryTooltip
                                    flyoutWidth={60}
                                    flyoutHeight={16}
                                    cornerRadius={2}
                                    pointerLength={4}
                                    pointerWidth={4}
                                    flyoutStyle={{
                                        stroke: "#120faa",
                                        strokeWidth: 0.8,
                                        fill: "#ffffa0"
                                    }}
                                    style={{
                                        fontSize: 8,
                                        fill: "#120faa"
                                    }} />
                            } />
                    </VictoryGroup>
                    <VictoryAxis
                        tickLabelComponent={
                            <VictoryLabel
                                angle={-45}
                                dx={6}
                                dy={-9}
                                style={{
                                    fontSize: 5,
                                    fill: "#120faa"
                                }}
                                textAnchor={"end"}
                            />}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="Rating on a scale of 1 to 5"
                        domain={[0, 5]}
                        style={{
                            ticketLabels:
                            {
                                fontSize: 7,
                                fill: "#120faa"
                            },
                            axisLabel:
                            {
                                fontSize: 6,
                                padding: 35,
                                fill: "#120faa"
                            }
                        }} />
                    <VictoryLegend
                        x={185}
                        y={30}
                        orientation="horizontal"
                        data={[
                            {
                                name: "difficult",
                                symbol: { fill: 'red' }
                            },
                            {
                                name: "fun",
                                symbol: { fill: 'green' }
                            }
                        ]}
                        style={
                            {
                                labels: {
                                    fontSize: 6,
                                    fill: "#120faa"
                                }
                            }
                        }
                    />
                </VictoryChart>}
            {filteredStudents.length === 0 &&
                <h1>Please select at least one student.</h1>}
            {weighedAssignments.length === 0 &&
                <h1>Please select at least one assignment.</h1>}
        </div>
    )
};

export default Chart;