import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import JobCalender from '../components/Calendar/JobCalendar';
import JobItemDetail from '../components/Jobs/JobItemDetail';
import Sidebar from '../components/SideBar/Sidebar';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/Use-http';


function JobDetails() {

    const [isViewingCalendar, setViewingCalendar] = useState(true)
    const [details, setDetails] = useState([])
    const { Id } = useParams();

    function viewingCalendarHandler(statement) {
        setViewingCalendar(statement)
    }

    const transformDetails = useCallback((taskObj) => {
        setDetails(taskObj)
    }, [])

    console.log(details)

    const { isLoading, error, sendRequest: fetchDetails } = useHttp(transformDetails);

    useEffect(() => {
        fetchDetails({ url: `http://localhost:3002/job-details/${Id}` })
    }, [fetchDetails, Id])


    let content;

    if (!isViewingCalendar && isLoading) {
        content = <LoadingSpinner />
    }

    if (!isViewingCalendar && error) {
        content = <p>{error}</p>
    }

    if (!isViewingCalendar && !isLoading) {
        content = < JobItemDetail details={details} />
    }

    if (isViewingCalendar) {
        content = <JobCalender jobId={Id} />
    }


    return (
        <Fragment>
            <Sidebar onViewingCalendar={viewingCalendarHandler} />
            {content}
        </Fragment>
    )
}

export default JobDetails