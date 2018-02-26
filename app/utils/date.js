/**
 * Util for creating a new date
 *
 * @param  {bool} newDate   boolean expressing whether to create a date from scratch or not
 * @param  {number} old   number in MS of a date
 *
 * @return {object}          a new date with formattedDate, formattedTime, and ms.
 */

export function convertDate(newDate, old) {
  let date;
  if (newDate) {
    date = new Date();
  } else {
    date = new Date(old);
  }
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString();
  const dd = date.getDate().toString();
  const mmChars = mm.split('');
  const ddChars = dd.split('');
  const formattedDate = `${yyyy}-${(mmChars[1] ? mm : `0${mmChars[0]}`)}-${(ddChars[1] ? dd : `0${ddChars[0]}`)}`;

  const minutes = date.getMinutes().toString();
  const hours = date.getHours().toString();
  const formattedTime = `${(hours.length > 1 ? hours : `0${hours}`)}:${(minutes.length > 1 ? minutes : `0${minutes}`)}`;

  const ms = date.getTime();

  return {
    formattedDate,
    formattedTime,
    ms,
  };
}
