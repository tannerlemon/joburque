import logo from "./logo.svg";
import "./App.css";
import jobs from "./Jobs.js";
import searchIcon from "./imgs/search.svg";
import forward from "./imgs/forward.svg";

function App() {
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
          <div className="departments-wrapper"></div>

          <div className="job-wrapper">
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

export default App;
