import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Speed', AI: 90, Traditional: 40 },
    { name: 'Accuracy', AI: 95, Traditional: 75 },
    { name: 'Scalability', AI: 85, Traditional: 45 },
    { name: 'Cost Efficiency', AI: 80, Traditional: 50 },
];

const BarChartComponent = () => {
    return (
        <ResponsiveContainer width="150%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="AI" fill="#ff00c8" barSize={40} />
                <Bar dataKey="Traditional" fill="#00C0FF" barSize={40} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;