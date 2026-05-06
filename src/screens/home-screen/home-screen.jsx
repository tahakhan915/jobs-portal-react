import React from 'react'
import Hero from '../../components/hero/hero';
import HomeCards from "../../components/home-cards/home-cards";
import JobListings from "../../components/job-listings/job-listings";
import ViewAllJobs from '../../components/view-all-jobs/view-all-jobs'

const HomeScreen = () => {
  return (
    <>
        {/* <!-- Hero --> */}
      <Hero/>
      <HomeCards/>
      
      

      {/* <!-- Browse Jobs --> */}
      <JobListings isHome={true}/>

      {/* View All Jobs  */}
      <ViewAllJobs />
    </>
  )
}

export default HomeScreen