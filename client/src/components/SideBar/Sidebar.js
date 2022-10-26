import styles from './Sidebar.module.css'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BsCardText } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar(props) {

    const isViewingCalendar = () => {
        props.toggleCalendarHandler(true)
    }

    const isViewingDetails = () => {
        props.toggleCalendarHandler(false)
    }

    return (
        <div className={styles['sidebar-container']}>
            <div className={styles['menu-items']} onClick={isViewingCalendar}>
                <AiTwotoneCalendar />
                <Link to="">Calendar</Link>
            </div>
            <div className={styles['menu-items']} onClick={isViewingDetails}>
                <BsCardText />
                <Link to="details">Job Details</Link>
            </div>
        </div>
    )
}

export default Sidebar