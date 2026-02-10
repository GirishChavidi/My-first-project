const JobCard = ({ job, onSelect }) => {
  return (
    <div className="job-card" onClick={onSelect}>
      {/* POSTER */}
      <div
        className="job-poster"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/office-${job.slug}/400/300)`

        }}
      >
        <span>{job.company_name?.[0]}</span>
      </div>

      {/* INFO */}
      <div className="job-info">
        <h3>{job.title}</h3>

        <p className="company">
          <strong>Company:</strong> {job.company_name}
        </p>

        <p className="location">📍 {job.location}</p>

        <div className="tags">
          {job.tags?.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          href={job.url}
          target="_blank"
          rel="noreferrer"
          className="apply-btn-card"
          onClick={(e) => e.stopPropagation()}
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default JobCard;






