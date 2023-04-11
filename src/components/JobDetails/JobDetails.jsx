import React, { useEffect, useState } from 'react';
import Detailsjob from '../Detailsjob/Detailsjob';
import { useLoaderData } from 'react-router-dom';
import Jobcard from '../jobcard/Jobcard';
import { addToDb } from '../../utilities/fakedb';


const JobDetails = () => {
    const [details, usedetails] = useState([])
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(detail => usedetails(detail))
    }, [])

    const addhandeljob = (detail) => {
        addToDb()
    }

    return (
        <div>
            {
                details.map(detail => <Detailsjob
                    key={detail.id}
                    detail={detail}
                    addhandeljob={addhandeljob}
                ></Detailsjob>)
            }

        </div >
    );
};

export default JobDetails;