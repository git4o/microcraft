bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    action = 3
})
input.onGesture(Gesture.TiltLeft, function () {
    action = 1
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    absmouse.send(
    cx,
    cy,
    false,
    false,
    false,
    false
    )
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    mouse.click()
})
input.onGesture(Gesture.TiltRight, function () {
    action = 2
})
input.onGesture(Gesture.LogoDown, function () {
    action = 4
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (action == 1) {
        keyboard.sendString("a")
    } else if (action == 2) {
        keyboard.sendString("d")
    } else if (action == 3) {
        keyboard.sendString("w")
    } else if (action == 4) {
        keyboard.sendString("s")
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    absmouse.send(
    cx,
    cy,
    true,
    false,
    false,
    false
    )
})
let action = 0
let cx = 0
let cy = 0
mouse.startMouseService()
absmouse.startAbsoluteMouseService()
keyboard.startKeyboardService()
cy = 0
cx = 0
action = 0
basic.forever(function () {
	
})
