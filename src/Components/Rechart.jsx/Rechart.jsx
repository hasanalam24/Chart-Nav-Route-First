import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Rechart = () => {

    const data = [
        {
            name: 'Page A',
            marks: 70,
        },
        {
            name: 'Page B',
            marks: 90,
        },
        {
            name: 'Page C',
            marks: 56,
        },
        {
            name: 'Page D',
            marks: 37,
        },
        {
            name: 'Page E',
            marks: 66,
        },
        {
            name: 'Page F',
            marks: 88,
        },
        {
            name: 'Page G',
            marks: 45,
        },
        {
            name: 'Page H',
            marks: 12,
        },
        {
            name: 'Page I',
            marks: 67,
        }
    ]
    return (
        <div>
            <BarChart width={500} height={300} data={data}

            >

                <CartesianGrid strokeDasharray="3 5" />
                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip></Tooltip>
                <Bar dataKey="marks" barSize={30} fill="red" />

            </BarChart>
        </div>
    );
};

export default Rechart;