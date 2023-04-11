import React, { useEffect, useState } from 'react';
import Detailsjob from '../Detailsjob/Detailsjob';
import { useLoaderData } from 'react-router-dom';
import Jobcard from '../jobcard/Jobcard';


const JobDetails = () => {
    const [details, usedetails] = useState([])
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(detail => usedetails(detail))
    }, [])

    return (
        <div>
            {
                details.map(detail => <Detailsjob
                    key={detail.id}
                    detail={detail}
                ></Detailsjob>)
            }

        </div >
    );
};

export default JobDetails;