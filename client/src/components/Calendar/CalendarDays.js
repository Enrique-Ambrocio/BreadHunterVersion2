import React from 'react'
import styles from './CalendarDays.module.css'

function CalendarDays() {

    const days = [{ name: "Sun" },
    { name: "Mon" },
    { name: "Tue" },
    { name: "Wed" },
    { name: "Thu" },
    { name: "Fri" },
    { name: "Sat" }];

    return (
        <ul className={styles['calendar-days']}>
            {days.map((day) => (
                <li>
                    <p>{day.name}</p>
                </li>
            ))}
        </ul>
    )
}

export default CalendarDays