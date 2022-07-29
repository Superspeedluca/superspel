input.onButtonPressed(Button.A, function () {
    Kogel = game.createSprite(Pistool.get(LedSpriteProperty.X), 3)
    Kogel.turn(Direction.Left, 90)
    Geschoten = true
})
let Geschoten = false
let Kogel: game.LedSprite = null
let Pistool: game.LedSprite = null
let score = 0
Pistool = game.createSprite(0, 4)
basic.forever(function () {
    Pistool.move(1)
    basic.pause(300)
    if (Pistool.get(LedSpriteProperty.X) == 4) {
        Pistool.turn(Direction.Right, 45)
    }
    if (Pistool.get(LedSpriteProperty.X) == 0) {
        Pistool.turn(Direction.Left, 45)
    }
    if (Geschoten) {
        Kogel.move(1)
    }
})
