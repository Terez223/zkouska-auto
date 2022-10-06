radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        RingbitCar.forward()
    }
    if (receivedNumber == 1) {
        RingbitCar.back()
    }
    if (receivedNumber == 2) {
        RingbitCar.turnleft()
    }
    if (receivedNumber == 3) {
        RingbitCar.turnright()
    }
    if (receivedNumber == 4) {
        RingbitCar.brake()
    }
})
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
