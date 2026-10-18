radio.onReceivedNumber(function (receivedNumber) {
    radio.sendString("BEACON")
})
input.onButtonPressed(Button.A, function () {
	
})
function goal_is_under_right_shell () {
    return 0 < 0
}
Maqueen_V5.I2CInit()
radio.setGroup(42)
radio.setTransmitPower(6)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
