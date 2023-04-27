input.onButtonPressed(Button.A, function () {
    images.createImage(`
        # # # # #
        . . # # #
        # . # . .
        # . . . #
        # # # # #
        `).showImage(0)
    point = led.pointBrightness(1, 2)
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    images.createImage(`
        # . # # #
        # . # # #
        # . . # #
        # # . . .
        # # # # #
        `).showImage(0)
    point = led.pointBrightness(2, 1)
})
input.onButtonPressed(Button.B, function () {
    images.createImage(`
        # # # # #
        . . # . .
        # . # . #
        # . . . #
        # # # # #
        `).showImage(0)
    point = led.pointBrightness(1, 2)
})
input.onGesture(Gesture.TiltRight, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let point = 0
basic.showString("Welcome to maze")
basic.showString("Tilt the screen to escape the maze")
basic.forever(function () {
    if (!(false)) {
        point = randint(0, 5)
    }
    for (let index = 0; index < 3; index++) {
        let Border = 0
        if (point == Border) {
            basic.showString("Game over")
        }
    }
})
