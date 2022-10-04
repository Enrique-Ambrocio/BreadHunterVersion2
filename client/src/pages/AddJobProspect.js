import React from 'react'
import AddJob from '../components/NewJob/AddJob'

function AddJobProspect(props) {



    return (
        <section>
            <AddJob onFormSubmission={props.onNewJob} />
        </section>
    )
}

export default AddJobProspect