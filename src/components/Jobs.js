import React, { useState } from "react";
import { Link } from "react-router-dom";

function Jobs({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredJobs = jobs.filter((job) =>
    job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bg-gray-50">
      <div>
        <form>
          <div className="row" style={{ width: "50rem" }}>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Search Job"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col">
              {/* <input type="text" className="form-control" placeholder="Last name"/> */}
            </div>
          </div>
        </form>
      </div>
      <br />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "50%", padding: "10px" }}>
          {filteredJobs.map((job) => (
            <div
              className="card mt-10"
              key={job.id}
              onClick={() => setSelectedJob(job)}
            >
              <div className="card-header">
                <a href="#display" style={{ fontWeight: "bold" }}>
                  {job.job_title}
                </a>
                &emsp;&emsp;&emsp;&emsp;&emsp;
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ fontWeight: "bold" }}>
                  Deadline: {job.deadline}
                </li>
                <li className="list-group-item">{job.description}</li>
                {/* <li className="list-group-item">{job.qualification}</li> */}
              </ul>
            </div>
          ))}
        </div>
        {selectedJob ? (
          //  <div className="card mt-10">
          <div style={{ width: "50%", padding: "10px" }}>
            <h3 className="card-header" align="center">
              {selectedJob.job_title}
            </h3>
            <div className="list-group list-group-flush">
              <div>
                <h4 className="list-group-item">Description</h4>
                <p>{selectedJob.description}</p>
              </div>
              <div>
                <h4 className="list-group-item">Qualification</h4>
                <p>{selectedJob.qualification}</p>
              </div>

              <div className="list-group-item" style={{ fontWeight: "bold" }}>
                <h4>Deadline</h4>
                <p>{selectedJob.deadline}</p>
              </div>
              <div className="list-group-item">
                <h4>
                  <Link to="/upload" className="btn btn-primary" align="center">
                    Apply
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        ) : // </div>
        null}
      </div>
    </div>
  );
}
export default Jobs;
