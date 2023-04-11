import React from 'react';
import Jobcard from '../jobcard/Jobcard';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div className=''>
            <div>
                <Jobcard job={[]}></Jobcard>
            </div>


        </div>
    );
};

export default AppliedJobs;