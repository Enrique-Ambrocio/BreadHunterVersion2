import React, { useState } from 'react'
import Modal from '../UI/Modal'
import styles from './AddEvent.module.css'
import { BsTextParagraph } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'

function AddEvent(props) {

    const [isAdding, setIsAdding] = useState(false)
    const [selectedTime, setSelectedTime] = useState(false)
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function addingTimeHanlder() {
        setIsAdding(true)
    }

    function selectedTimeHandler(event) {
        setSelectedTime(true)
        setTime(event.target.value)
    }

    function editTimeHandler(event) {
        event.preventDefault()
        setIsAdding(true)
        setSelectedTime(false)
    }

    function cancelEvent(event) {
        event.preventDefault()
        props.cancelAddingEvent(false)
    }

    function onTitleChangeHandler(event) {
        setTitle(event.target.value)
    }

    function onDescriptionHandler(event) {
        setDescription(event.target.value)
    }

    function eventSubmissionHandler(event) {
        event.preventDefault()
        if (description.trim() === '' || title.trim() === '') {
            return;
        }

        const dateEvent = {
            title: title,
            time: time,
            description: description
        }

        props.onAddEvent(dateEvent)

    }


    return (
        <Modal>
            <form onSubmit={eventSubmissionHandler} className={styles['add-event-form']}>
                <div className={styles['event-title']}>
                    <input onChange={onTitleChangeHandler} type='text' placeholder='Add Title' />
                </div>
                <div className={styles['event-time']}>
                    <AiOutlineClockCircle />
                    {!isAdding && <button onClick={addingTimeHanlder} className={styles['add-time-button']}>Add Time</button>}
                    {isAdding && !selectedTime && <select size={3} onChange={selectedTimeHandler}>
                        <option value='12:00am'>12:00am</option>
                        <option value='12:30am'>12:30am</option>
                        <option value='1:00am'>1:00am</option>
                        <option value='1:30am'>1:30am</option>
                        <option value='2:00am'>2:00am</option>
                        <option value='2:30am'>2:30am</option>
                        <option value='3:00am'>3:00am</option>
                        <option value='3:30am'>3:30am</option>
                        <option value='4:00am'>4:00am</option>
                        <option value='4:30am'>4:30am</option>
                        <option value='5:00am'>5:00am</option>
                        <option value='5:30am'>5:30am</option>
                        <option value='6:00am'>6:00am</option>
                        <option value='6:30am'>6:30am</option>
                        <option value='7:00am'>7:00am</option>
                        <option value='7:30am'>7:30am</option>
                        <option value='8:00am'>8:00am</option>
                        <option value='8:30am'>8:30am</option>
                        <option value='9:00am'>9:00am</option>
                        <option value='9:30am'>9:30am</option>
                        <option value='10:00am'>10:00am</option>
                        <option value='10:30am'>10:30am</option>
                        <option value='11:00am'>11:00am</option>
                        <option value='11:30am'>11:30am</option>
                    </select>}
                    {selectedTime && <button onClick={editTimeHandler} className={styles['add-time-button']}>{time}</button>}
                </div>
                <div className={styles['event-description']}>
                    <BsTextParagraph />
                    <input onChange={onDescriptionHandler} type='text' placeholder='Add Description' />
                </div>
                <div className={styles['event-buttons']}>
                    <button type='submit' className={styles['add-event-button']}>Add</button>
                    <button className={styles['cancel-event-button']} onClick={cancelEvent}>Cancel</button>
                </div>
            </form>
        </Modal>
    )
}

export default AddEvent