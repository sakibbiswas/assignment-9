import React from 'react';

const Detailsjob = ({ detail }) => {
    const { JobDescription, JobResponsibility, EducationalRequirements } = detail;
    // console.log(detail)
    return (
        <div>
            <h2>{JobDescription}</h2>
        </div>
    );
};

export default Detailsjob;