import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/home-screen/home-screen";
import JobsScreen from "../screens/jobs-screen/jobs-screen";
import JobScreen from "../screens/job-screen/job-screen";
import NotFoundScreen from "../screens/not-found-screen/not-found-screen";
import AddJobScreen from "../screens/add-job-screen/add-job-screen";
import EditJobScreen from "../screens/edit-job-screen/edit-job-screen";


// import { JobLoader } from './job-loader'

const AppRoutes = () => {
  // add job
  const addJobSubmit = async (newJob) => {
    const res = await fetch(`/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    console.log(newJob);
    return;
  };

  // delete job
  const delJob = async (jobId) => {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    });

    // console.log(jobId);
  };

  const updateJob = async (Job) => {
    const res = await fetch(`/api/jobs/${Job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Job),
    });
    // console.log(newJob);
    return;
  };

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/jobs" element={<JobsScreen />} />
      <Route path="/jobs/:id" element={<JobScreen delJob={delJob} />} />
      <Route
        path="/add-job"
        element={<AddJobScreen addJobSubmit={addJobSubmit} />}
      />
      <Route
        path="/edit-job/:id"
        element={<EditJobScreen updateJob={updateJob} />}
      />
      <Route path="*" element={<NotFoundScreen />} />

    </Routes>
  );
};

export default AppRoutes;
