import React from 'react'
import JobForm from './JobForm'
import styles from './AddForm.module.css'

function AddJob(props) {

    function submissionHandler(enteredJobData) {
        const Data = {
            ...enteredJobData,
            id: Math.random().toString()
        }

        props.onFormSubmission(Data)
    }


    return (
        <div className={styles['job-form-container']}>
            <JobForm onSubmission={submissionHandler} />
        </div>
    )
}

export default AddJob