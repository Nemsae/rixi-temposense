/**
 * Util for transforming date to date object.
 *
 * @param  {string} time '15:19'
 * @param  {string} date '2018-02-25'
 * @param  {string} timeZone
 *
 * @return {object}          a new date with formattedDate, formattedTime, and ms.
 */

// time: '15:19',
// date: '2018-02-25',

//  DARK SKY API FORMAT
//  [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]
// 2018-02-25T12:12:12
// 2018-02-25T00:00:00

function convertDate(time, date, timeZone) {
  const timeEmpty = isEmpty(time);
  const dateEmpty = isEmpty(date);
  if (dateEmpty) return false;

  let finalDate = date;

  if (timeEmpty) {
    finalDate += 'T00:00:00';
  } else {
    finalDate += `T${time}:00`;
  }

  return finalDate;
}

function isEmpty(string) {
  return string.length === 0;
}

module.exports = {
  convertDate,
};
