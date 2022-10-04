import React, { Fragment, useState } from 'react'
import CalendarDays from './CalendarDays';
import JobCalendarList from './JobCalendarList';
import styles from './JobCalendar.module.css'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

function JobCalender(props) {

    let date = new Date()
    const [month, setMonth] = useState(date.getMonth())
    const [year, setYear] = useState(date.getFullYear())
    console.log(month)

    const months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    const calendarRows = 6

    let startingDate = new Date(year, month, 1)
    console.log(startingDate)
    startingDate.setDate((startingDate.getDate() - 1) - startingDate.getDay())
    console.log(startingDate)
    let dates = []

    for (let i = 0; i < calendarRows * 7; i++) {
        date = new Date(startingDate.setDate(startingDate.getDate() + 1))
        dates.push({
            date: date.getDate(),
            fullDate2: `${startingDate.getMonth()}-${startingDate.getDate()}-${startingDate.getFullYear()}`,
            fullDate3: `${startingDate.getMonth() + 1}-${startingDate.getDate()}-${startingDate.getFullYear()}`
        })
    }

    function forwardMonthHandler() {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
        }
        else {
            setMonth(month + 1)
        }
    }

    function backMonthHanlder() {
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
        }
        else {
            setMonth(month - 1)
        }
    }

    let monthString = months[month]

    return (
        <Fragment>
            <div className={styles['calendar-container']}>
                <div className={styles['calendar-title']}>
                    <h2>Calendar</h2>
                </div>
                <div className={styles['buttons']}>
                    <span><IoIosArrowBack onClick={backMonthHanlder} /></span>
                    <p>{monthString}</p>
                    <p>{year}</p>
                    <span><IoIosArrowForward onClick={forwardMonthHandler} /></span>
                </div>
            </div>
            <CalendarDays />
            <JobCalendarList Dates={dates} jobId={props.jobId} />
        </Fragment>
    )
}

export default JobCalender