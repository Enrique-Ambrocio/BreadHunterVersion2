import React, { Fragment } from 'react'
import JobItem from './JobItem'
import styles from './JobList.module.css'

function JobList(props) {

    return (
        <Fragment>
            <ul className={styles['job-list']}>
                {props.jobs.map((job) => (
                    <JobItem
                        key={job.id}
                        id={job.id}
                        company={job.company}
                        title={job.title}
                        location={job.location}
                        industry={job.industry}
                        onDeleteJob2={props.onDeletedJob}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default JobList;