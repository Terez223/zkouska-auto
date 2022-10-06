radio.onReceivedNumber(function (receivedNumber) {
    let recivedNumber = 0
    if (recivedNumber == 0) {
        RingbitCar.forward()
    }
    if (recivedNumber == 1) {
        RingbitCar.back()
    }
})
radio.setGroup(1)
