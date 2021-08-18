import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import dotenv from 'dotenv'
dotenv.config()

const Wrapper = styled.div`
    width : 850px;
    height : auto;
    margin-left : 25px;
    float : right;
    padding: 1.5rem;
    border:2px solid lightgray;
    border-radius: 15px;
`
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;

const Calendar = () => {
    return (
        <>
        <Wrapper>
        <FullCalendar
        plugins={[ dayGridPlugin, googleCalendarPlugin ]}
        initialView="dayGridMonth"
        googleCalendarApiKey={REACT_APP_API_KEY}
        eventSources={[
        {
          googleCalendarId: REACT_APP_CALENDAR_ID,
        }
        ]}
        />
        </Wrapper>
        </>
    );

}

export default withRouter(Calendar);
