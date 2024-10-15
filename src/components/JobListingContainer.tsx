import React, { useState } from 'react';
import './JobListingContainer.css';

interface Job {
  job_id: string;
  job_title: string;
  employer_name: string;
  employer_logo: string;
  job_description: string;
  job_apply_link: string;
  job_employment_type: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_is_remote: boolean;
  // Add other properties you want to display here
}

interface JobListingContainerProps {
  jobListings: Job[];
  loading: boolean;
}

const JobListingContainer: React.FC<JobListingContainerProps> = ({ jobListings, loading }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (loading) {
    return <div className='loading-job-listings-container'>Loading job listings...</div>;
  }

  if (!jobListings || jobListings.length === 0) {
    return (
      <>
        <div className="no-job-listings-container">No job listings found.</div>
      </>
    );
  }

  return (
    <div className="job-listing-container">
      {jobListings.map((job) => (
        <div key={job.job_id} className="job-listing">
          <img src={job.employer_logo} alt={job.employer_name} className="employer-logo" />
          <h3>{job.job_title}</h3>
          <p>{job.employer_name}</p>
          <p>{job.job_city}, {job.job_state}, {job.job_country}</p>
          <p>Employment type: {job.job_employment_type} </p>
          <pre className="job-description"><br />
            {/* Truncate description if not fully displayed */}
            {showFullDescription ? job.job_description : `${job.job_description.substring(0, 500)}...`}
            <br />
            {/* Link to expand/collapse description */}
            <span className="read-more" onClick={() => setShowFullDescription(!showFullDescription)}>
              {showFullDescription ? ' Read Less' : ' Read More'}
            </span>

          </pre>
          <a className='applylink' href={job.job_apply_link} target="_blank" rel="noopener noreferrer">
            Apply Here
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobListingContainer;
