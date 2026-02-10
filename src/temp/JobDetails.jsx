const JobDetails = ({ job }) => {
  if (!job) return null;

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <h4>{job.company_name}</h4>

      <p>📍 {job.location}</p>

      <div
        dangerouslySetInnerHTML={{ __html: job.description }}
      />

      {/* APPLY BUTTON */}
      <a
        href={job.url}
        target="_blank"
        rel="noreferrer"
        className="apply-btn"
      >
        Apply Now
      </a>
    </div>
  );
};

export default JobDetails;


