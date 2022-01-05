import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import allJobs from "./Jobs.js";
import searchIcon from "./imgs/search.svg";
import forward from "./imgs/forward.svg";

let departments = [];

function getDepartments() {
  allJobs.forEach((job) => {
    if (!departments.includes(job.department)) {
      departments.push(job.department);
    }
  });
}

function App() {
  
  let [jobs, setJobs] = useState(allJobs);

  

  function showAllJobs() {
    setJobs(allJobs);
  }

  function handleDepartmentClick(e) {
    let value = e.target.innerText;
    let filteredJobs = allJobs.filter((job) => {
      return job.department === value;
    });
    setJobs(filteredJobs);
  }

  

  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <div>JoBurque</div>
        </div>
        <div className="all-jobs">All jobs</div>
      </div>
      <div className="page-wrapper">
        <div className="banner">
          <h1>Tech Jobs in Albuquerque</h1>
        </div>
        <div className="search-box">
          <img src={searchIcon} alt="search" />
          <input id="search" placeholder="Search jobs..." />
        </div>
        <div className="jobs-and-department-wrapper">
          <div className="departments-wrapper">
            <h3 className="h3">Departments</h3>
            <div className="departments">
              <div
                className="department"
                id="all_departments"
                onClick={() => {
                  showAllJobs();
                }}
              >
                All Departments
              </div>
            
              {departments.map((department, i) => {
                return (
                  <div>
                    <div
                      key={i}
                      className="department"
                      onClick={(e) => {
                        handleDepartmentClick(e);
                      }}
                    >
                      {department}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="job-wrapper">
            <h3 className="featured">Featured Roles</h3>
            {jobs.map((job) => {
              return (
                <div className="job">
                  <div className="job-text">
                    <h2 className="title">{job.title}</h2>
                    <div className="company">{job.company}</div>
                    <div className="overview">{job.overview}</div>
                  </div>
                  <img className="forward" src={forward} alt="forward" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

getDepartments();
export default App;
