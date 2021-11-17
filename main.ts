input.onButtonPressed(Button.A, function () {
    Bonba.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        Bonba.change(LedSpriteProperty.Y, 0.25)
        basic.pause(200)
        Bonba.change(LedSpriteProperty.Y, 0.25)
        basic.pause(200)
        Bonba.change(LedSpriteProperty.Y, 0.25)
        basic.pause(200)
        Bonba.change(LedSpriteProperty.Y, 0.25)
    }
    if (4 > 0) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(200)
        basic.showIcon(IconNames.Diamond)
        basic.pause(200)
        basic.showIcon(IconNames.SmallDiamond)
        Bonba.set(LedSpriteProperty.X, 2)
        Bonba.set(LedSpriteProperty.Y, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    Bonba.move(1)
})
let Bonba: game.LedSprite = null
Bonba = game.createSprite(2, 0)
