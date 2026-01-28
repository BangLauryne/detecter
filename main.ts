basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.ringTone(262)
        basic.showIcon(IconNames.Diamond)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        music.stopAllSounds()
    }
})
