import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './JobForm.module.css'

function JobForm(props) {

    const [companyName, setCompanyName] = useState('')
    const [title, setTitle] = useState('')
    const [industry, setIndustry] = useState('')
    const [location, setLocation] = useState('')
    const [valid, setValid] = useState(false)
    const [inputTouched, setInputTouched] = useState(false)

    const navigate = useNavigate()

    function nameChangeHandler(event) {
        setCompanyName(event.target.value)
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }

    function industryChangeHandler(event) {
        setIndustry(event.target.value)
    }

    function locationChangeHandler(event) {
        setLocation(event.target.value)
    }

    function submitFormHandler(event) {
        event.preventDefault()
        setInputTouched(true)

        if (companyName.trim() === '' || title.trim() === '' || industry.trim() === '' || location.trim() === '') {
            setValid(false)
            return;
        }

        const data = {
            company: companyName,
            job: title,
            location: location,
            industry: industry
        }

        props.onSubmission(data)
        setValid(true)
        setCompanyName('')
        setIndustry('')
        setLocation('')
        setTitle('')

        navigate('/jobs')

    }

    const inputInvalid = !valid && inputTouched;

    return (
        <form className={styles['form']} onSubmit={submitFormHandler}>
            <div className={styles['input-field']}>
                <label htmlFor='name'>Company Name</label>
                <input type='text' value={companyName} id='name' onChange={nameChangeHandler} />
            </div>
            <div className={styles['input-field']}>
                <label htmlFor='title'>Job Title</label>
                <input type='text' value={title} id='title' onChange={titleChangeHandler} />
            </div>
            <div className={styles['input-field']}>
                <label htmlFor='location'>Location</label>
                <input type='text' value={location} id='location' onChange={locationChangeHandler} />
            </div>
            <div className={styles['input-field']}>
                <label htmlFor='industry'>Industry</label>
                <input type='text' value={industry} id='industry' onChange={industryChangeHandler} />
            </div>
            <div className={styles['submission']}>
                {inputInvalid && <p>* Please enter required information</p>}
                <button>Add Prospect</button>
            </div>
        </form>
    )
}

export default JobForm