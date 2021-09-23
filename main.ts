radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    if (receivedNumber == 2) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
radio.setGroup(2)
basic.forever(function () {
	
})
