input.onButtonPressed(Button.A, function () {
    radio.sendString("yes")
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("come")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "yes") {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    } else if (receivedString == "no") {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
    } else if (receivedString == "come") {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("no")
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(7)
