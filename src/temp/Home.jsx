import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import JobList from "./JobList";
import JobDetails from "./JobDetails";
import Navbar from "./Navbar";
import "./temp.css"  



const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH DATA
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://www.arbeitnow.com/api/job-board-api");
        setJobs(res.data.data);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // FILTER JOBS
  const filteredJobs = useMemo(() => {
  return jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company_name.toLowerCase().includes(search.toLowerCase())
  );
}, [jobs, search]);

  

  // FIND SELECTED JOB
  const selectedJob = useMemo(() => {
    return jobs.find((job) => job.slug=== selectedJobId);
  }, [jobs, selectedJobId]);

  // CONDITIONAL RENDERING
  if (loading) return <h2> Loading jobs...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
  <div className="home">
    

    {jobs.length > 0 && (
    <Navbar 
    search={search} setSearch={setSearch} />
    )}


    {filteredJobs.length === 0 ? (
      <p className="empty">No jobs found</p>
    ) : (
      <JobList
        jobs={filteredJobs}
        onSelectJob={setSelectedJobId}
      />
    )}

    {selectedJob && (
      <JobDetails job={selectedJob} />
    )}
  </div>
);


  
   
};

export default Home;



