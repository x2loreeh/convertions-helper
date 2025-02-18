function hourtoSecond (hour) {
    return (hour * 60) * 60
}

function secondToHour (second) {
    return (second * 60) * 60
}


module.exports = {
    hourtoSecond,
    secondToHour
}