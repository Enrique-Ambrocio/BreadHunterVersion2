import React from 'react'
import styles from './Sidebar.module.css'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BsCardText } from 'react-icons/bs'

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
                <p>Calendar</p>
            </div>
            {/* <div onClick={isNotViewingCalendar} className={styles['menu-items']}>
                <BsCardText />
                <p>Job Details</p>
            </div> */}
        </div>
    )
}

export default Sidebar