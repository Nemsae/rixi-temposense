/**
 * Util for creating a new date
 *
 * @param  {} n/a
 *
 * @return {object}           The response data
 */
export function createNewDate() {
  const date = new Date();
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString();
  const dd = date.getDate().toString();
  const mmChars = mm.split('');
  const ddChars = dd.split('');
  const formattedDate = `${yyyy}-${(mmChars[1] ? mm : `0${mmChars[0]}`)}-${(ddChars[1] ? dd : `0${ddChars[0]}`)}`;

  const minutes = date.getMinutes().toString();
  const hours = date.getHours();
  const formattedTime = `${hours}:${(minutes.length > 1 ? minutes : `0${minutes}`)}`;

  const ms = date.getTime();

  return {
    formattedDate,
    formattedTime,
    ms,
  }
}
