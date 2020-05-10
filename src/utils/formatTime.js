const secondsPerMinute = 60;

/**
 * @param  {number} value number to be formatted to time value
 * @return {string} formatted value to time
 */
const formatValue = (value) => (value < 10 ? `0${value}` : value);

/**
 * @param  {number} duration value of seconds to be converted
 * @return {string} formatted string of the seconds into {mm:ss}
 */
const formatTime = (duration) => {
  if (typeof duration !== 'number') {
    throw Error('the value of duration is not a numeric value');
  }

  const minutes = Math.floor(duration / secondsPerMinute);
  const seconds = Math.floor(duration % secondsPerMinute);
  const formatMinutes = formatValue(minutes);
  const formatSeconds = formatValue(seconds);
  return `${formatMinutes}:${formatSeconds}`;
};

export default formatTime;
