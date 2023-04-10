import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'assignment-1',
        marks: 57,

    },
    {
        name: 'assignment-2',
        marks: 53,
    },
    {
        name: 'assignment-3',
        marks: 60,
    },
    {
        name: 'assignment-4',
        marks: 57,
    },
    {
        name: 'assignment-5',
        marks: 58,
    },
    {
        name: 'assignment-6',
        marks: 53,
    },
    {
        name: 'assignment-7',
        marks: 60,
    },
    {
        name: 'assignment-8',
        marks: 58,
    },

];

const Statistics = () => {


    return (
        <div>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    )
};

export default Statistics;