"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDay = countDay;
const daysOfTheWeek = {
    "sunday": 0,
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thurday": 4,
    "friday": 5,
    "saturday": 6
};
function daysInAMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function countDay(day) {
    let count = 0;
    const number = daysOfTheWeek[day];
    for (let year = 1901; year <= 2000; year++) {
        for (let month = 0; month < 12; month++) {
            let numberOfDays = daysInAMonth(year, month);
            for (let day = 1; day <= numberOfDays; day++) {
                const date = new Date(year, month, day);
                if (date.getDay() == number && date.getDate() == 1) {
                    count++;
                }
            }
        }
    }
    return count++;
}
