// utils/dataGenerator.js
let cachedData = {};

export const generateRandomData = (timeRange) => {
  // Check if data for the requested timeRange is already cached
  if (cachedData[timeRange]) {
    return cachedData[timeRange];
  }

  const data = [];
  const now = new Date();
  let startDate;
  let numberOfPoints;
  let valueRange;

  switch (timeRange) {
    case '1d':
      numberOfPoints = 24; // 24 hours
      valueRange = [60000, 70000];
      startDate = new Date(now.setDate(now.getDate() - 1));
      break;
    case '3d':
      numberOfPoints = 30; // 3 days
      valueRange = [60000, 70000];
      startDate = new Date(now.setDate(now.getDate() - 3));
      break;
    case '1w':
      numberOfPoints = 30; // 7 days
      valueRange = [60000, 70000];
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case '1m':
      numberOfPoints = 30; // 30 days
      valueRange = [60000, 70000];
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case '6m':
      numberOfPoints = 40; // 6 months
      valueRange = [50000, 80000];
      startDate = new Date(now.setMonth(now.getMonth() - 6));
      break;
    case '1y':
      numberOfPoints = 45; // 1 year
      valueRange = [40000, 90000];
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      numberOfPoints = 30;
      valueRange = [60000, 70000];
      startDate = new Date(now.setMonth(now.getMonth() - 1));
  }

  for (let i = 0; i < numberOfPoints; i++) {
    const date = new Date(startDate);
    date.setHours(date.getHours() + i);
    const value = Math.random() * (valueRange[1] - valueRange[0]) + valueRange[0];
    const volume = Math.random() * 1500;
    data.push({
      date: date.toISOString().split('T')[0],
      value: parseFloat(value.toFixed(2)),
      volume: parseInt(volume, 10),
      tooltipValue: value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    });
  }

  // Cache the generated data for the timeRange
  cachedData[timeRange] = data;

  return data;
};
