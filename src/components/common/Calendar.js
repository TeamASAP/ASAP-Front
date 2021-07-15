import React from 'react';
import styled from 'styled-components';

const FullCalendar = styled.div`
    background-color : lightgray;
    width : 900px;
    height : 700px;
    margin-left : 25px;
    float : right;
`

const Calendar = () => {
    return (
        <>
        <FullCalendar>캘린더</FullCalendar>
        </>
    );
}

export default Calendar