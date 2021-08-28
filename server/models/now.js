const dayjs = require('dayjs');

let now = dayjs();

console.log(now.format('YYYY-MM-DD [at] HH:mm:ss'));

console.log(now.toString());
// The isSame(), isBefore(), and isAfter() functions can be used to determine if a date is before or after another date.

let d1 = dayjs("2018-05-19");
let d2 = dayjs("2018-05-20");
let d3 = dayjs("2018-05-22");
let d4 = dayjs("2018-05-19");

if (d1.isSame(d4)) {

    console.log('these are same dates');
} else {

    console.log('these are not the same dates');
}

if (d1.isAfter(d2)) {

    console.log(`${d1.format('YYYY-MM-DD')} is after ${d2.format('YYYY-MM-DD')}`);
} else {

    console.log(`${d1.format('YYYY-MM-DD')} is before ${d2.format('YYYY-MM-DD')}`);
}

if (d2.isBefore(d3)) {

    console.log(`${d2.format('YYYY-MM-DD')} is before ${d3.format('YYYY-MM-DD')}`);
} else {

    console.log(`${d2.format('YYYY-MM-DD')} is after ${d3.format('YYYY-MM-DD')}`);
}