import dayjs from 'dayjs';
export const generateTimeOptions = (startHour, endHour, intervalMinutes) => {
  const startTime = dayjs().hour(startHour).minute(0);
  const endTime = dayjs().hour(endHour).minute(0);

  const generateTimeOption = (startTime, endTime) => ({
    label: `${startTime.format('h:mm A')} - ${endTime.format('h:mm A')}`,
    value: `${startTime.format('h:mm A')} - ${endTime.format('h:mm A')}`,
  });

  const timeOptions = [];

  let currentTime = startTime;

  while (currentTime.isBefore(endTime)) {
    const nextTime = currentTime.add(intervalMinutes, 'minute');

    if (currentTime.hour() !== 12) {
      timeOptions.push(generateTimeOption(currentTime, nextTime));
    }

    currentTime = nextTime;
  }

  return timeOptions;
};
