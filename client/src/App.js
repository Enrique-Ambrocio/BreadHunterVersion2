import React from "react";
import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/UI/MainHeader";
import AddJobProspect from "./pages/AddJobProspect";
import AppliedJobs from "./pages/AppliedJobs";
import JobDetails from "./pages/JobDetails";
import PageNoteFound from "./pages/PageNoteFound";

function App() {

  // 'https://job-helper-937e5-default-rtdb.firebaseio.com/jobs.json'

  async function addJobHandler(newJob) {
    const response = await fetch('http://localhost:3002/add-job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    const data = await response.json()
    console.log(data)
  }

  return (
    <Fragment>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/add-job' />} />
          <Route path='/jobs' element={<AppliedJobs />} />
          <Route path='/job-details/:Id/*' element={<JobDetails />} />
          <Route path='/add-job/' element={<AddJobProspect onNewJob={addJobHandler} />} />
          <Route path="*" element={<PageNoteFound />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
