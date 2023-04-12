import React, { useEffect, useState } from 'react';
import Jobcard from '../jobcard/Jobcard';
import JobDetails from '../JobDetails/JobDetails';



const FeaturedJobs = () => {
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        fetch('/job.json')
            .then(res => res.json())
            .then(data => setjobs(data))

    }, [])


    return (
        <div>
            <div className="text-center mb-6">
                <h3 className='text-3xl font-bold mb-2'>Featured Jobs</h3>
                <p> Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="md:grid grid-cols-2 items-center justify-center gap-10 pl-32 ">
                {
                    jobs.map(job => <Jobcard
                        key={job.id}
                        job={job}


                    ></Jobcard>)
                },






            </div>
            <div id='showall' className='text-center mb-5'>
                <button className='bg-orange-300 px-3 py-2 rounded-xl'>Show More</button>

            </div>
        </div>
    );
};

export default FeaturedJobs;