import { useState, useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import JobListingContainer from '../JobListingContainer';
import PageNumbers from '../PageNumbers';

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
}

function Jobs() {
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState('job'); // Store the search query (default to 'job')
  const [location, setLocation] = useState(''); // Store the location query (default to empty)
  const jobsPerPage = 10; // Limit the jobs to display per page
  const API_KEY = import.meta.env.VITE_X_RAPIDAPI_KEY;
  const API_HOST = import.meta.env.VITE_X_RAPIDAPI_HOST;


  // Function to perform the job search (can be used for both default and user-triggered searches)
  const performSearch = (message: string, location: string, page: number = 1) => {
    setLoading(true);

    fetch(
      `https://jsearch.p.rapidapi.com/search?query=${message}%20in%20${location}&page=${page}&num_pages=${jobsPerPage}&date_posted=all`,
      // ^^^^ REACHED MONTHLY QUOTA
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY, // Replace with your API key
          'x-rapidapi-host': API_HOST,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setJobListings(data.data || []); // Store all results in the state
        const totalJobs = data.data.length;
        setTotalPages(Math.ceil(totalJobs / jobsPerPage)); // Calculate total pages based on the number of jobs
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  };

  // Default search when the component mounts
  useEffect(() => {
    performSearch(query, location, currentPage); // Perform default search
  }, [currentPage]);

  // Handle user-triggered searches from SearchBar
  const handleSearch = (message: string, location: string) => {
    setQuery(message); // Store the search query in state
    setLocation(location); // Store the location in state
    setCurrentPage(1); // Reset to the first page for a new search
    performSearch(message, location, 1); // Perform the search
  };

  // Handle page change from Pagination component
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Update the current page
    performSearch(query, location, pageNumber); // Use the current search query and location
  };

  // Slice the jobs for the current page
  const jobsToShow = jobListings.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <JobListingContainer jobListings={jobsToShow} loading={loading} />
      <PageNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
}

export default Jobs;
