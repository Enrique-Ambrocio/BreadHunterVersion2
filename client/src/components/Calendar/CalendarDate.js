import React, { Fragment, useCallback, useEffect, useState } from 'react'
import useHttp1 from '../../hooks/use-http1';
import { addNote, deleteNote, getAllNotes } from '../../lib/api';
import AddEvent from '../AddEvent/AddEvent'
import CalendarDayEvent from './CalendarDayEvent';
import styles from './CalendarDay.module.css'
import { GrFormAdd } from 'react-icons/gr'


function CalendarDate(props) {

    const [isAddingEvent, setIsAddingEvent] = useState(false)

    // const [dateEvent, setDateEvent] = useState('')

    function addingEventFunctionHandler() {
        setIsAddingEvent(true)
    }

    function cancelAddingEventHandler(statement) {
        setIsAddingEvent(statement)
    }

    // ------------------ Custom UseEffect Hooks


    const { sendRequest: sendRequest2, status: status2, error } = useHttp1(addNote)

    const { sendRequest, status, data: Event } = useHttp1(getAllNotes)

    // ------------------  Fetch Notes

    useEffect(() => {
        sendRequest({ Id: props.jobId, eventId: props.id })
    }, [props.jobId, sendRequest, props.id])

    const fetchNoteHandler = useCallback(() => {
        sendRequest({ Id: props.jobId, eventId: props.id })
    }, [sendRequest, props.jobId, props.id])


    //------------------- Add Note 


    useEffect(() => {
        if (status2 === 'completed' && !error) {
            setIsAddingEvent(false)
            fetchNoteHandler()
        }
    }, [fetchNoteHandler, error, status2])


    const addEventTaskHandler = async (eventTask) => {
        sendRequest2({ commentData: { ...eventTask, dateId: props.id }, Id: props.jobId, dayId: props.id })
    }


    // ------------------- Delete Note

    const { sendRequest: sendRequest3, status: status3 } = useHttp1(deleteNote)


    const deleteEvent = async (eventId) => {
        console.log(eventId)
        sendRequest3({ Id: props.jobId, eventId: props.id, calendarEventId: eventId })
    }

    useEffect(() => {
        if (status3 === 'completed') {
            setIsAddingEvent(false)
            fetchNoteHandler()
        }
    }, [fetchNoteHandler, status3])


    let event;

    if (status === 'completed' && Event) {
        event = <ul className={styles['calendar-list']}>
            {Event.map((event) =>
                < CalendarDayEvent
                    date2={props.eventDate}
                    title={event.title}
                    time={event.time}
                    description={event.description}
                    key={event.key}
                    id={event.key}
                    date={props.id}
                    deleteHandler1={deleteEvent}
                />
            )}
        </ul>
    }


    return (
        <Fragment>
            {isAddingEvent && <AddEvent cancelAddingEvent={cancelAddingEventHandler} onAddEvent={addEventTaskHandler} />}
            <li className={styles['calendar-item']}>
                <p>{props.day}</p>
                <span onClick={addingEventFunctionHandler}><GrFormAdd /></span>
                {event}
            </li>
        </Fragment>
    )
}

export default CalendarDate