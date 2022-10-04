
import CalendarDate from './CalendarDate'
import styles from './JobCalendarList.module.css'

function JobCalendarList(props) {

    const days = props.Dates

    return (
        <ul className={styles['calendar-list']}>
            {days.map((day) =>
                <CalendarDate
                    day={day.date}
                    key={day.fullDate2}
                    id={day.fullDate2}
                    eventDate={day.fullDate3}
                    jobId={props.jobId}
                />
            )}
        </ul>
    )
}

export default JobCalendarList