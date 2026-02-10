import JobCard from "./JobCard";

const JobList = ({ jobs, onSelectJob }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.slug}
          job={job}
          onSelect={() => onSelectJob(job.slug)}
        />
      ))}
    </div>
  );
};

export default JobList;

