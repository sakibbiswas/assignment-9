import React, { useEffect, useState } from 'react';
import Jobcard from '../jobcard/Jobcard';
import { useLoaderData } from 'react-router-dom';
import Jobapplied from '../Jobapply/Jobapplied';


const AppliedJobs = () => {
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        fetch("/job.json")
            .then(res => res.json())
            .then(data => setjobs(data))
    }, [])
    return (
        <div className=''>
            <div>
                {
                    jobs.map(job => <Jobapplied
                        key={job.id}
                        job={job}></Jobapplied>)
                }
            </div>


        </div>
    );
};

export default AppliedJobs;