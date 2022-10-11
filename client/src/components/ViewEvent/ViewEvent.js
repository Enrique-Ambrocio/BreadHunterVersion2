import React from 'react'
import Modal2 from '../UI/Modal2'
import styles from './ViewEvent.module.css'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdOutlineCancel } from 'react-icons/md'
import { RiCalendarEventFill } from 'react-icons/ri'
import { FcDownRight } from 'react-icons/fc'

function ViewEvent(props) {

    function deleteEventHandler() {
        props.deleteHandler(props.id)
    }

    function stopIsViewingHandler() {
        props.isViewing(false)
    }

    return (

        <Modal2>
            <div className={styles['event-description_container']}>
                <div className={styles['event-description_icons']}>
                    {/* <RiDeleteBin6Line onClick={deleteEventHandler} /> */}
                    <MdOutlineCancel onClick={stopIsViewingHandler} />
                </div>
                <div className={styles['event-description_title']}>
                    <FcDownRight />
                    <h3>{props.title}</h3>
                </div>
                <div className={styles['event-description_date']}>
                    <h5>{props.date2}</h5>
                    <h5>{props.time}</h5>
                </div>
                <div className={styles['event-description_description']}>
                    <span><RiCalendarEventFill /></span>
                    {props.description}
                </div>
            </div>
        </Modal2>
    )
}

export default ViewEvent