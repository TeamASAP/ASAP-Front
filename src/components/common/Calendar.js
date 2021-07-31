import React from 'react';
<<<<<<< HEAD
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
const { REACT_APP_API_KEY, REACT_APP_CALENDAR_ID} = process.env;
=======
import styled from 'styled-components';

const FullCalendar = styled.div`
    background-color : lightgray;
    width : 900px;
    height : 700px;
    margin-left : 25px;
    float : right;
`
>>>>>>> 286eba292a40a9d98689f32296a232a86d7dedc5

const Calendar = () => {
    return (
        <>
<<<<<<< HEAD
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
=======
        <FullCalendar>캘린더</FullCalendar>
        </>
    );
}

export default Calendar
>>>>>>> 286eba292a40a9d98689f32296a232a86d7dedc5
