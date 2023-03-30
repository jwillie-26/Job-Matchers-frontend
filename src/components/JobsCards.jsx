import React from 'react';
import RecentJobsCard from "./RecentJobsCard"


const JobCard = (props) => {
    const { name, title, location, employmentType } = props;
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px' }}>
            <h3>{title}</h3>
            <p>{location}</p>
            <p>{employmentType}</p>
        </div>
    )
}

const JobGroup = (props) => {
    const { label, jobs } = props;
    return (
        <div style={{ margin: '16px' }}>
            <h2>{label}</h2>
            {jobs.map((job) => <JobCard key={job.title} {...job} />)}
        </div>
    )
}

const JobsCards = (props) => {
    const featuredJobs = [
        { name: "Featured Jobs", title: "Software Engineer", location: "Nairobi, Kenya", employmentType: "Full-time" },
        { name: "Featured Jobs", title: "DevOps Engineer", location: "Nairobi, Kenya", employmentType: "Full-time" },
        { name: "Featured Jobs", title: "Front-end Developer", location: "Nairobi, Kenya", employmentType: "Full-time" },
        { name: "Featured Jobs", title: "Back-end Developer", location: "Nairobi, Kenya", employmentType: "Full-time" }
    ];
    
    const recentJobs = [
        { name: "Recent Jobs", title: "Data Scientist", location: "Nakuru, Kenya", employmentType: "Part-time" },
        { name: "Recent Jobs", title: "Data Analyst", location: "Nakuru, Kenya", employmentType: "Part-time" },
        { name: "Recent Jobs", title: "Business Analyst", location: "Nakuru, Kenya", employmentType: "Part-time" },
        { name: "Recent Jobs", title: "Project Manager", location: "Nakuru, Kenya", employmentType: "Part-time" },
    ];
    return (
      <div >
        <div className="mx-auto" style={{ display: 'flex', flexDirection: 'row', width:"100vh"}} align="center" >
            <JobGroup label="Featured Jobs"  jobs={featuredJobs} />
            <JobGroup label="Recent Jobs" jobs={recentJobs} />
        </div>
      </div>
    );

}


  
  export default JobsCards;
