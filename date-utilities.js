// date-utilities.js

// Get the first day of the week (Monday)
function getMonday(dateString) {
    const date = new Date(dateString);
    const day = date.getDay() || 7;
    if (day !== 1) {
        date.setHours(-24 * (day - 1));
    }
    return date;
}

// Get the last day of the week (Sunday)
function getSunday(dateString) {
    const date = new Date(dateString);
    const day = date.getDay() || 7;
    if (day !== 7) {
        date.setHours(-24 * (day - 7));
    }
    return date;
}

// Get the first day of the month
function getFirstDayOfMonth(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1);
}

// Get the last day of the month
function getLastDayOfMonth(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0);
}

// Get the first day of the year
function getFirstDayOfYear(dateString) {
    const date = new Date(dateString);
    return new Date(date.getFullYear(), 0, 1);
}

// Get the last day of the year
function getLastDayOfYear(dateString) {
    const date = new Date(dateString);
    return new Date(date.getFullYear(), 11, 31);
}

// Add or subtract days from a given date
function addDays(dateString, days) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date;
}

// Get the ISO week number for a given date
function getISOWeekNumber(dateString) {
    const date = new Date(dateString);
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Format a date into a specific string pattern (e.g., YYYY-MM-DD)
function formatDate(dateString, format) {
    const date = new Date(dateString);
    const map = {
        'YYYY': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'DD': String(date.getDate()).padStart(2, '0'),
        'HH': String(date.getHours()).padStart(2, '0'),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'ss': String(date.getSeconds()).padStart(2, '0')
    };

    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, matched => map[matched]);
}

// Get the day of the year for a given date
function getDayOfYear(dateString) {
    const date = new Date(dateString);
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Check if a given date is a weekend
function isWeekend(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6;
}

// Check if a given year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


export default {
    getMonday,
    getSunday,
    getFirstDayOfMonth,
    getLastDayOfMonth,
    getFirstDayOfYear,
    getLastDayOfYear,
    addDays,
    getISOWeekNumber,
    formatDate,
    getDayOfYear,
    isWeekend,
    isLeapYear
};
