import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clipLoader from "../../components/clip-loader/clip-loader";
import { ClipLoader } from "react-spinners";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {toast} from 'react-toastify'

const JobScreen = ({delJob}) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`https://jobs-portal-react-7z54.onrender.com/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const deleteJob = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?")
    if(!confirm) return;
    
    delJob(jobId)
    toast.success('Job Deleted Successfully')
    navigate('/jobs')

  }
  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-10">
          <ClipLoader loading={loading} />
        </div>
      ) : (
        <>
      {/* Back Button */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
             <FaArrowLeft className="mr-2"/>  Back to Job Listings
          </Link>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">

          {/* GRID FIXED HERE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

            {/* LEFT SIDE */}
            <main className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-gray-500 mb-4">{job.type}</div>

                <h1 className="text-3xl font-bold mb-4">
                  {job.title}
                </h1>

                <div className="text-gray-500 mb-4 flex items-center">
                  <FaMapMarker className="text-orange-700 mr-2" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary}</p>
              </div>
            </main>

            {/* RIGHT SIDE (SIDEBAR) */}
            <aside className="md:col-span-1 space-y-6">

              {/* Company Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company?.name}</h2>

                <p className="my-2">
                  {job.company?.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company?.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company?.contactPhone}
                </p>
              </div>

              {/* Manage Job */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>

                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full block"
                >
                  Edit Job
                </Link>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
                  onClick={() => deleteJob(id)}
                >
                  Delete Job
                </button>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
      )}
    </>
  );
};

export default JobScreen;
