function dayToSecond(days) {
    return ((days * 24) * 60 ) * 60
}

function secondToDay(seconds) {
    return ((seconds / 60) / 60 ) / 24
}


module.exports = {
    dayToSecond,
    secondToDay
}