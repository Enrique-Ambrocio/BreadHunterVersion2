import React, { Fragment } from 'react'
import styles from './JobItemDetail.module.css'

function JobItemDetail(props) {
    return (
        <Fragment>
            <section className={styles['job-details']}>
                <div className={styles['job-details_title']}>
                    <h2>Job Details</h2>
                </div>
                <div className={styles['job-details_description']}>
                    <p>{`Company Name: ${props.details.company}`}</p>
                    <p>{`Job Position: ${props.details.title}`}</p>
                    <p>{`Location: ${props.details.location}`}</p>
                    <p>{`Industry: ${props.details.industry}`}</p>
                </div>
            </section>
        </Fragment>
    )
}

export default JobItemDetail