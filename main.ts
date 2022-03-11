input.onButtonPressed(Button.A, function () {
    radio.sendString("Mike")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Mike") {
        if (Sprite.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
            Score += 1
            TIME += -20
            if (Score == 10) {
                LIFE += 1
            }
            if (Score == 20) {
                Score += 3
            }
        } else {
            if (LIFE > 0) {
                LIFE += -1
                TIME += 40
            } else {
                basic.showIcon(IconNames.Sad)
                game.gameOver()
            }
        }
    }
})
let LIFE = 0
let Sprite: game.LedSprite = null
let Score = 0
radio.setGroup(103)
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.showString("POWER ON")
basic.pause(5000)
Score = 0
Sprite = game.createSprite(2, 2)
let TIME = 500
LIFE = 3
basic.forever(function () {
    Sprite.move(1)
    basic.pause(TIME)
    Sprite.ifOnEdgeBounce()
})
