function daysToMinute(days) {
    return (days * 24 ) * 60
}

function minuteToDay(minutes) {
    return (minutes * 60 ) * 24
}

module.exports = {
    daysToMinute,
    minuteToDay
}