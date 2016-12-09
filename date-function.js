// get the first day of the week
function getMonday(value) {
    var date = new Date(value);
    var day = date.getDay() || 7;
    if (day !== 1)
        date.setHours(-24 * (day - 1));
    return date;
}

// get the last day of the week
function getSunday(value) {
    var date = new Date(value);
    var day = date.getDay() || 7;
    if (day !== 7)
        date.setHours(-24 * (day - 7));
    return date;
}

// get the first day of the month
function getFirstDayOfMonth(value) {
    var date = new Date(value);
    var y = date.getFullYear();
    var m = date.getMonth();
    return new Date(y, m, 1);
}

// get the last day of the month
function getLastDayOfMonth(value) {
    var date = new Date(value);
    var y = date.getFullYear();
    var m = date.getMonth();
    return new Date(y, m + 1, 0);
}

// get the first day of the year
function getFirstDayOfYear(value) {
    var date = new Date(value);
    date = new Date(date.getFullYear(), 0, 1);
    return date;
}

// get the last day of the year
function getLastDayOfYear(value) {
    var date = new Date(value);
    date = new Date(date.getFullYear(), 11, 31);
    return date;
}