input.onPinPressed(TouchPin.P0, function () {
    basic.showString("ALT")
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showString("SNAKE 3 2 1 GO")
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        # . . . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . # .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . # .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("GAME OVER")
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("im dead bye")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("I see the roof")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("SECRET FOUND")
    basic.showString("heads or tails 3 2 1")
    if (Math.randomBoolean()) {
        basic.showString("heads")
    } else {
        basic.showString("tails")
    }
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("T")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("CTRL")
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("help")
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . #
        . . # . #
        . . # # #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . # # #
        . . . . #
        . . # # #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
})
