import React from 'react'
import styles from './Sidebar.module.css'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BsCardText } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar(props) {

    function isViewingCalendar() {
        props.onViewingCalendar(true)
    }

    function isNotViewingCalendar() {
        props.onViewingCalendar(false)
    }

    return (
        <div className={styles['sidebar-container']}>
            <div onClick={isViewingCalendar} className={styles['menu-items']}>
                <AiTwotoneCalendar />
                <Link to="calendar">Calendar</Link>
            </div>
            <div onClick={isNotViewingCalendar} className={styles['menu-items']}>
                <BsCardText />
                <Link to="details">Job Details</Link>
            </div>
        </div>
    )
}

export default Sidebar