import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import allJobs from "./Jobs.js";
import searchIcon from "./imgs/search.svg";
import forward from "./imgs/forward.svg";
import expand from "./imgs/expand.svg";

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
  let [showingDepartments, setShowingDepartments] = useState(false);
  let [mobileScreen, setMobileScreen] = useState(false);

  let departmentsMobile = document.querySelectorAll(".department");

  function mobileScreenSize() {
    if (window.innerWidth <= 790) {
      setMobileScreen(true);
    }
  }

  window.onload = mobileScreenSize;
  window.onresize = mobileScreenSize;

  function showAllJobs() {
    setJobs(allJobs);
    if (mobileScreen) {
      departmentsMobile.forEach((department) => {
        department.style.display = "none";
        setShowingDepartments(false);
      });
      console.log("mobile");
      console.log(window.innerWidth);
      console.log(mobileScreen);
    }
  }

  function handleDepartmentClick(e) {
    if (mobileScreen) {
      departmentsMobile.forEach((department) => {
        department.style.display = "none";
        setShowingDepartments(false);
      });
      console.log("mobile");
    }
    let value = e.target.innerText;
    let filteredJobs = allJobs.filter((job) => {
      return job.department === value;
    });
    setJobs(filteredJobs);
  }

  function showDepartmentsMobile() {
    if (mobileScreen) {
      departmentsMobile.forEach((department) => {
        if (!showingDepartments) {
          department.style.display = "block";
          setShowingDepartments(true);
        } else {
          department.style.display = "none";
          setShowingDepartments(false);
        }
      });
      console.log("mobile");
    }
  }

  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
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
            <div
              className="department-select"
              onClick={() => {
                showDepartmentsMobile();
              }}
            >
              <h3 className="h3">Departments</h3>
              <img className="expand" alt="expand" src={expand} />
            </div>

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
