import React, { Fragment, useEffect } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './JobItemDetail.module.css'
import { getJobDetails } from '../../lib/api';
import useHttp1 from '../../hooks/use-http1';


function JobItemDetail(props) {

    const { sendRequest, status, data, error } = useHttp1(getJobDetails)

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