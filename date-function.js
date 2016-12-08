$(document).ready(function(){

	
	// get the first day of the week
    function getMonday( date ) {
        var day = date.getDay() || 7;
        if( day !== 1 )
            date.setHours(-24 * (day - 1));
        return date;
    }

    // get the last day of the week
    function getSunday( date ) {
        var day = date.getDay() || 7;
        if( day !== 7 )
            date.setHours(-24 * (day - 7));
        return date;
    }

    // get the first day of the month
    function getFirstDayOfMonth(date){
        var y = date.getFullYear();
        var m = date.getMonth();
        return new Date(y, m, 1);
    }

    // get the last day of the month
    function getLastDayOfMonth(date){
        var y = date.getFullYear();
        var m = date.getMonth();
        return new Date(y, m + 1, 0);
    }

}); // end ready function