function kilobyteToBit(kilobyte) {
    return kilobyte * 8000
}

function bitToKilobyte (bit) {
    return bit / 8000
}


module.exports = {
    kilobyteToBit,
    bitToKilobyte
}