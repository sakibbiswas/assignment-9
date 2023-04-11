import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './components/Layout/Main';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/Applied Jobs/AppliedJobs';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Jobcard from './components/jobcard/Jobcard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('job.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-Jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('job.json')
      },
      {
        path: "blog",
        element: <Blogs></Blogs>
      },

      {
        path: "jobdetail/:jobdetailId",
        element: <JobDetails></JobDetails>,


      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
