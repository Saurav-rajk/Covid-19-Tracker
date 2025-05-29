import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';

// Chart.js registration
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Legend,
  Tooltip
);

function Chart({ data, country }) {
  const [dailyData, setDailyData] = useState({
    cases: {},
    deaths: {},
  });

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };

    if (!country || country === 'global') {
      fetchAPI(); // Only fetch for global line chart
    }
  }, [country]);

  // Line Chart for Global
  const lineChart = dailyData.cases ? (
    <Line
      data={{
        labels: Object.keys(dailyData.cases),
        datasets: [
          {
            label: 'Infected',
            data: Object.values(dailyData.cases),
            borderColor: '#3333ff',
            backgroundColor: 'rgba(51, 51, 255, 0.2)',
            fill: true,
            tension: 0.3,
          },
          {
            label: 'Deaths',
            data: Object.values(dailyData.deaths),
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            fill: true,
            tension: 0.3,
          },
        ],
      }}
      options={{ responsive: true }}
    />
  ) : null;

  // Bar Chart for Selected Country
  const barChart = data.cases ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#3333ff', '#28a745', '#ff073a'],
            data: [data.cases, data.recovered, data.deaths],
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${country}`,
          },
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
}

export default Chart;
