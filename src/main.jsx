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
import Detailsjob from './components/Detailsjob/Detailsjob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-Jobs",
        element: <AppliedJobs></AppliedJobs>,

      },
      {
        path: "blog",
        element: <Blogs></Blogs>
      },

      {
        path: "jobdetail/:jobdetailId",
        element: <JobDetails></JobDetails>,
        // loader: () => fetch('\data.json')



      },
      {
        path: "jobdetail",
        element: <Detailsjob></Detailsjob>,


      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
