const formatDate = ( timeInSeconds ) => {
    //ancillary variables
    const minutes = Math.floor(timeInSeconds/60);
    const hours = Math.floor(timeInSeconds/3600);
    const seconds = timeInSeconds%60;

    //test cases//////////////////////////////////////////////////////////////////////

    //nothing passed to function
    if( timeInSeconds == null ) 
        return '0s';

    //minutes
    if( timeInSeconds > 60 && timeInSeconds < 3600) {
        if( seconds == 0 )
            return `${minutes}m`;
        return `${minutes}m ${seconds}s`;
    }

    //hours
    if( timeInSeconds > 3600 ) {
        if( minutes%60 == 0  && seconds == 0)
            return `${hours}h`;
        if( seconds == 0 )
            return `${hours}h ${minutes%60}m`;
        if( minutes%60 == 0 ) 
            return `${hours}h ${seconds}s`;
        return `${hours}h ${minutes%60}m ${seconds}s`;
    }
       
    //default case with seconds only
    return `${seconds}s`;
}

module.exports = formatDate;