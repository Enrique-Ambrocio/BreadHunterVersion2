import React, { Fragment, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import JobCalender from '../components/Calendar/JobCalendar';
import JobItemDetail from '../components/Jobs/JobItemDetail';
import Sidebar from '../components/SideBar/Sidebar';

function JobDetails() {

    const { Id } = useParams();
    const [isViewingCalendar, setIsViewingCalendar] = useState(true)

    const toggleCalendarView = (value) => {
        setIsViewingCalendar(value)
    }
    console.log(isViewingCalendar)

    let content;

    if (isViewingCalendar) {
        content = <JobCalender jobId={Id} />
    }

    if (!isViewingCalendar) {
        content = null
    }

    return (
        <Fragment>
            <Sidebar toggleCalendarHandler={toggleCalendarView} />
            {content}
            <Routes>
                <Route path="details" element={<JobItemDetail Id={Id} />} />
            </Routes>
        </Fragment>
    )
}

export default JobDetails