import React, { Fragment, useCallback, useEffect, useState } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './JobItemDetail.module.css'
import { getJobDetails } from '../../lib/api';
import useHttp1 from '../../hooks/use-http1';


function JobItemDetail(props) {

    // const [details, setDetails] = useState([])

    // const transformDetails = useCallback((taskObj) => {
    //     setDetails(taskObj)
    // }, [])

    // console.log(details)

    // const { isLoading, error, sendRequest: fetchDetails } = useHttp(transformDetails);

    // useEffect(() => {
    //     fetchDetails({ url: `http://localhost:3002/job-details/${Id}/details` })
    // }, [fetchDetails, Id])

    const { sendRequest, status, data, error } = useHttp1(getJobDetails)
    console.log(props.Id)

    // ------------------  Fetch Notes

    useEffect(() => {
        sendRequest({ eventId: props.Id })
    }, [sendRequest, props.Id])


    let content;

    if (status === 'pending') {
        content = <LoadingSpinner />
    }

    if (status === 'completed' && error) {
        content = <p>{error}</p>
    }

    if (status === "completed" && !error && data) {
        content = <Fragment>
            <section className={styles['job-details']}>
                <div className={styles['job-details_title']}>
                    <h2>Job Details</h2>
                </div>
                <div className={styles['job-details_description']}>
                    <p>{`Company Name: ${data.company}`}</p>
                    <p>{`Job Position: ${data.title}`}</p>
                    <p>{`Location: ${data.location}`}</p>
                    <p>{`Industry: ${data.industry}`}</p>
                </div>
            </section>
        </Fragment>
    }


    return (
        <Fragment>
            {content}
        </Fragment>
    )
}

export default JobItemDetail