import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 1800, 3908, 800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
];

export default function Dashboard() {
  return (
    <div className='card shadow'  style={{ width: '350px' }}>
    <div className='card-header  bg-primary text-white'>
        <h1 className='mb-4'>Dashboard</h1>
        </div>

    <LineChart
      width={350}
      height={250}
      series={[
        { data: pData, label: 'Variable Expenses' },
        { data: uData, label: 'Discretionary Expenses:' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
  );
}