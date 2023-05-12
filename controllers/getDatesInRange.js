export function getDatesInRange(startDate, endDate) {
  const dates = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dates.push(currentDate.toISODate());
    currentDate = currentDate.plus({ days: 1 });
  }

  return dates;
}
