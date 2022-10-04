import React, { Fragment, useState } from 'react'
import ViewEvent from '../ViewEvent/ViewEvent'
import styles from './CalendarDayEvent.module.css'

function CalendarDayEvent(props) {

    const [isViewing, setIsViewing] = useState(false)

    function onClickHandler() {
        setIsViewing(true)
        props.isViewingEvent(isViewing)
    }

    function isViewingHandler(statement) {
        setIsViewing(statement)
    }

    return (
        <Fragment>
            {isViewing && <ViewEvent
                title={props.title}
                description={props.description}
                id={props.id}
                deleteHandler={props.deleteHandler1}
                date={props.date}
                date2={props.date2}
                isViewing={isViewingHandler}
            />}
            <li onClick={onClickHandler} className={styles['default-viewing']}>
                <h5>{props.title}</h5>
            </li>
        </Fragment>
    )
}

export default CalendarDayEvent