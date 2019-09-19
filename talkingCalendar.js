const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

const daySuffix = {
  '1': 'st',
  '2': 'nd',
  '3': 'rd'
};

const talkingCalendar = function(date) {
  let output = '';
  const year = date.split('/')[0];
  const month  = date.split('/')[1];
  const day = date.split('/')[2];
  let dayS;
  if (day.length === 2) {
    dayS = day.slice(-1);
  } else {
    dayS = day;
  }
  let dayText;
  const monthText = findValue(months, x => x === month);
  if (daySuffix[dayS]) {
    dayText = day + findValue(daySuffix, y => y === dayS);
  } else {
    dayText = day + 'th';
  }
  output += `${monthText} ${dayText}, ${year}`;
  return output;
};

const findValue = function(givenobj, callback) {
  for (const each in givenobj) {
    if (callback(each)) {
      return givenobj[each];
    }
  }
};


console.log(talkingCalendar('2012/06/06'));
console.log(talkingCalendar('2017/12/31'));
console.log(talkingCalendar('2017/12/22'));
console.log(talkingCalendar('2017/12/23'));
