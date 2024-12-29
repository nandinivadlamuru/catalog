import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Actions from './actions'; // Import the Actions component

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

const Chart = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const chartContainerRef = useRef(null);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example x-axis labels
    datasets: [
      {
        label: 'Revenue', // Dataset label
        data: [5000, 10000, 7500, 12000, 15000, 20000], // Example y-axis data
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color under the line
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
      },
    ],
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreenActive = document.fullscreenElement === chartContainerRef.current;
      setIsFullScreen(isFullScreenActive);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (chartContainerRef.current.requestFullscreen) {
        chartContainerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const options = {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        grid: {
          color: '#ccc',
          drawBorder: false,
        },
        title: {
          display: true,
          text: 'Revenue (USD)',
        },
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      {/* Move Actions component outside the chart container */}
      <Actions onFullScreen={handleFullScreen} />
      
      {/* Chart container */}
      <div
        ref={chartContainerRef}
        style={{
          border: '1px solid #ddd',
          borderRadius: '5px',
          overflow: 'hidden',
          background: isFullScreen ? '#fff' : 'inherit',
        }}
      >
        <div style={{ height: '400px', padding: '10px' }}>
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
