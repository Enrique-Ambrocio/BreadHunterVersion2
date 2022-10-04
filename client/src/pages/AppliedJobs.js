import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import JobsList from '../components/Jobs/JobList'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp1 from '../hooks/use-http1'
import { deleteJob } from '../lib/api'
import styles from '../components/Jobs/JobList.module.css'


function AppliedJobs() {

    const [loadedJobs, setLoadedJobs] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [error1, setError] = useState(null)

    // https://job-helper-937e5-default-rtdb.firebaseio.com/jobs.json

    const fetchJobHandler = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch('http://localhost:3002/jobs')
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
            const data = await response.json();
            const loadedJobs = [];
            for (const key in data) {
                loadedJobs.push(
                    {
                        id: data[key]._id,
                        company: data[key].company,
                        industry: data[key].industry,
                        title: data[key].title,
                        location: data[key].location
                    }
                )
            }
            console.log(loadedJobs)
            setIsLoading(false)
            setLoadedJobs(loadedJobs)
        } catch (err) {
            setError(err.message)
            setIsLoading(false)
        }
    }, [])

    const { sendRequest, status, error } = useHttp1(deleteJob)

    useEffect(() => {
        fetchJobHandler()
    }, [fetchJobHandler])

    useEffect(() => {
        if (status === 'completed' && !error) {
            fetchJobHandler()
        }
    }, [status, error, fetchJobHandler])


    async function deleteJobHandler(jobId) {
        console.log(jobId)
        sendRequest(jobId)
    }

    let content;

    if (isLoading) {
        content = <LoadingSpinner />
    }

    if (!isLoading && error1) {
        content = <p>{error1}</p>
    }

    if (!isLoading && !error1) {
        content = <JobsList jobs={loadedJobs} onDeletedJob={deleteJobHandler} isLoading={isLoading} />
    }

    if (!isLoading && !error1 && loadedJobs.length === 0) {
        content = <div className={styles['no-job']}>
            <h2>No Current Jobs</h2>
            <NavLink className={styles['no-job_button']} to='/add-job'>Add Job</NavLink>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default AppliedJobs