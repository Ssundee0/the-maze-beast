scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.purpleSwitchDown)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.cameraShake(8, 1000)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.purpleSwitchDown)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.splash("The Orb Level ")
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
    tiles.setTilemap(tilemap`Orb Level`)
    info.startCountdown(10)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 . . . . 
        . 6 6 7 7 7 6 7 7 7 7 6 6 6 . . 
        . 6 7 7 6 6 6 6 6 6 6 7 7 6 6 6 
        . 6 7 7 6 7 7 6 6 7 6 6 7 7 7 6 
        . 6 7 6 6 7 6 7 6 6 7 7 7 6 6 6 
        . 6 6 7 6 6 6 6 7 7 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . c c c c c c c . . . . . 
        . . . c 6 7 7 7 7 7 6 c . . . . 
        . . c 6 7 c 6 6 6 6 c 7 c . . . 
        . . c 7 7 6 f 6 6 f 6 7 6 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 7 7 6 1 f f 1 8 7 f . . 
        . . f 7 7 7 f 1 f f 1 f 6 f . . 
        . . f 6 7 7 f 2 2 2 2 f f . . . 
        . . c f 6 7 7 2 2 2 2 f c c . . 
        . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
        c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
        c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 1 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . c c c c c c c . . . . . . 
        . . c 7 f f 6 6 f f c . . . . . 
        . c 6 7 6 6 6 6 6 6 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . c c c c c c c . . . . . . 
        . . c 7 f f 6 6 f f c . . . . . 
        . c 6 7 6 6 6 6 6 6 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `,img`
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c . . . . . . . . 
        . c c 6 6 6 c c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `,img`
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c . . . . . . . . 
        . c c 6 6 6 c c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth2, function (sprite, location) {
    game.splash("Invisible Level")
    tiles.setTilemap(tilemap`Hardest Level Nothingness`)
    scene.setBackgroundImage(img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444424444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444422444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444222444444444444444444444444444444444444444444444444444444444444424444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444222244444444444444444444444444424444444444444444444444444444444422444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444442222244444444444444444444444444224444444444444444444444444444444422244444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444442222244444444444444444444444442224444444444444444444444444444444422244444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444442222244444444444444444444444422224444444444444444444444444444444422222444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444422222224444444444444444444444422224444444444444444444444444444444422222444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444422222224444444444444444444444222222444444444444444444444444444444422222244444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444422222224444444444444444444444222222444444444444444444444444444444422222224444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444422222222444444444444444444442222222444444444444444444444444444444422222224444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444222222222444444444444444444442222222444444444444444444444444444444422222222444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444222222222444444444444444444422222222444444444444444444444444444444442222222244444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444222222222244444444444444444222222222244444444444444444444444444444422222222244444444444444444444444444444444444444444444444444444444
        4444444444444444444444444442222222222244444444444444444222222222244444444444444444444444444444422222222222444444444444444444444444444444444444444444444444444444
        4444444444444444444444444442222222222244444444444444442222222222244444444444444444444444444444422222222222244444444444444444444444444444444444444444444444444444
        4444444444444444444444444442222222222224444444444444442222222222244444444444444444444444444444422222222222244444444444444444444444444444444444444444444444444444
        4444444444444444444444444442222222222224444444444444422222222222224444444444444444444444444444422222222222224444444444444444444444444444244444444444444444444444
        4444444444444444444444444442222222222224444444444444422222222222224444444444444444444444444444422222222222224444444444444444444444444444224444444444444444444444
        4444444444444444444444444442222222222224444444444444222222222222224444444444444444444444444444222222222222222444444444444444444444444442224444444444444444444444
        4444444444444444444444444442222222222222444444444442222222222222222444444444444444444444444444222222222222222444444444444444444444444442224444444444444444444444
        4444444444444444444444444442222222222222444444444442222222222222222444444444444444444444444444222222222222222244444444444444444444444422224444444444444444444444
        4444444444444444444444444442222222222222244444444422222222222222222444444444444444444444444444222222222222222244444444444444444444444222224444444444444444444444
        4444444444444444444444444442222222222222244444444422222222222222222244444444444444444444444444222222222222222224444444444444444444444222224444444444444444444444
        4444444444444444444444444442222222222222224444444222222222222222222244444444444444444444444444222222222222222222444444444444444444444222224444444444444444444444
        4444444444444444444444444422222222222222224444444222222222222222222244444444444444444444444444222222222222222222444444444444444444442222224444444444444444444444
        4444444444444444444444444422222222222222222444442222222222222222222244444444444444444444444442222222222222222222244444444444444444422222222444444444444444444444
        4444444444444444444444444422222222222222222444442222222222222222222224444444444444444444444442222222222222222222224444444444444444422222222444444444444444444444
        4444444444444444444444444422222222222222222244442222222222222222222224444444444444444444444442222222222222222222222444444444444444222222222244444444444444444444
        4444444444444444444444444222222222222222222244442222222222222222222224444444444444444444444442222222222222222222222244444444444444222222222224444444444444444444
        4444444444444444444444444222222222222222222224422222222222222222222224444444444444444444444442222222222222222222222224444444444442222222222224444444444444444444
        444444444444444444444444422222222222222222222442222222222222222222222444444444444444444444444f222222222222222222222224444444444442222222222224444444444444444444
        444444444444444444444444222222222222222222222242222222222222222222222444444444444444444444444ff22222222222222222222222444444444422222222222222444444444444444444
        444444444444444444444444222222222222222222222242222222222222222222222444444444444444444444444ff22222222222222222222222244444444422222222222222244444444444444444
        444444444444444444444442222222222222222222222222222222222222222222222444444444444444444444444fff22222222222f2222222222224444444222222222222222244444444444444444
        444444444444444444444442222222222222222222222222222222222222222222222444444444444444444444444ffff222222222fffff222222222f444444222222222222222244444444444444444
        f4444444444444444444444222222222222222222222222222fff222222222222222244444444444444444444444fffff222222222ffffff22222222ff44444f22222222222222224444444444444444
        ff444444444444444444442222222222222222222222222222fff222222222222222244444444444444444444444fffffff2222222ffffffff222222ff4444ff22222222222222222444444444444444
        ff44444444444444444444222222222222222222222222222fffff22222222222222224444444444444444444444fffffff2222222fffffffffff222fff44ffff2222222222222222244444444444444
        fff444444444444444444222222222222222222222222222ffffff2222222222222222444444444444444444444ffffffff2222222fffffffffffffffff44ffff2222222222222222222444444444444
        ffff4444444444444444222222222222222222222222222fffffff222222222222222244444444444444444444ffffffffff222222fffffffffffffffffffffff2222222222222222222444444444444
        ffffff44444444444422222222222222222222222222222fffffff222222222222222244444444444444444444ffffffffff222222ffffffffffffffffffffffff22222222f222222222f44444444444
        fffffff444444444f22222222222222222222222222222ffffffff22222222222222224444444444444444444ffffffffffff222222fffffffffffffffffffffff22222222ff22222222ff4444444444
        ffffffff44444fffff222222222222222222222222222ffffffffff2222222222222224444444444444444444ffffffffffff222222fffffffffffffffffffffff2222222ffff2222222fff444444444
        fffffffff44fffffff2222222222222ff22222222222fffffffffff222222222222222f444444444444444444fffffffffffff22222fffffffffffffffffffffff2222222fffff22222ffff444444444
        fffffffffffffffffff222222222222ff22222222222fffffffffff222222222222222f44444444444444444ffffffffffffff222222ffffffffffffffffffffff2222222fffff22222fffff4444444f
        ffffffffffffffffffff2222222222ffff2222222222ffffffffffff2222222222222ff44444444444444444fffffffffffffff22222ffffffffffffffffffffff2222222ffffff2222fffff444444ff
        fffffffffffffffffffff222222222ffff2222222222ffffffffffff2222222222222ff4444444444444444ffffffffffffffff22222ffffffffffffffffffffff2222222ffffff2222ffffff44444ff
        fffffffffffffffffffff222222222fffff222222222ffffffffffff2222222222222ff4444444444444444ffffffffffffffff22222ffffffffffffffffffffff222222ffffffff222ffffff44444ff
        ffffffffffffffffffffff2222222ffffff222222222ffffffffffffff2222222222ffff44444444444444fffffffffffffffff2222ffffffffffffffffffffff22222222fffffffffffffffff444fff
        fffffffffffffffffffffff222222ffffff222222222fffffffffffffff22222222fffff44444444444444fffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffff444fff
        fffffffffffffffffffffff22222ffffffff22222222fffffffffffffffff2222fffffff4444444444444ffffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffffffffff44fff
        fffffffffffffffffffffff2222fffffffff22222222ffffffffffffffffffffffffffff4444444444444ffffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffffffffff44fff
        ffffffffffffffffffffffff222fffffffff22222222ffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffff4fff
        ffffffffffffffffffffffff22ffffffffff22222222ffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffff
        ffffffffffffffffffffffff22ffffffffff2222222ffffffffffffffffffffffffffffff4444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff22fffffffff22222222ffffffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff2fffffffff22222222ffffffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff22222222ffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444fffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444ffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.setLife(1)
    game.splash("THE FINAL LEVEL!!!")
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.purpleSwitchDown)
    info.changeScoreBy(10)
    info.startCountdown(100)
    tiles.setTilemap(tilemap`level14`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `,img`
        . . . . . . . c c c c c c . . . 
        . . . . . . c 6 7 7 7 7 6 c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . . . f 6 7 7 c 6 7 7 7 7 f . 
        . . c c c f 6 7 7 c c c c f . . 
        . c 7 7 7 c c f 7 7 7 2 6 c . . 
        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
        . . c c 6 6 7 1 1 1 1 1 6 c . . 
        . . . c c c c c c c c c c . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    game.splash("Confusion Level")
    tiles.setTilemap(tilemap`level4`)
    info.startCountdown(15)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.coral5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.player2.setLife(250)
    mySprite2 = sprites.create(img`
        .........................
        ....ffffffff2............
        ....ffffffff22...........
        ...ff2ffff2ff22..........
        ...ff22ff22fff22.........
        ..fffffffffffff2.........
        ..f424424ffffff2.........
        ...f44444ffffff22........
        ....ffffffffffff2........
        ......222fffffff2........
        ......ffffffffff2........
        ......222fffffff2........
        ......fffffffff22.....2..
        ......2222fffff2.....22..
        ......fffffffff2....22f..
        ......22222ffff2...22f...
        ......fffffffff22.22ff...
        .......2222fffff222ff....
        ........fffffffffffff....
        ........222222ffffff.....
        `, SpriteKind.Enemy)
    mySprite2.follow(mySprite, 65)
    tiles.setCurrentTilemap(tilemap`level16`)
    animation.runImageAnimation(
    mySprite2,
    [img`
        ...........22.22.2.................
        ..........22222222.22..............
        .......ffffffffff2222..............
        .....fffffffffffffff22.............
        .....fff2fffffff2ffff2.............
        .....fff22fffff22ffff22............
        .....fff222fff222fffff2............
        ....ffffffffffffffffff22...........
        ...fff4ffffffffffff4ff22...........
        ...fff24fff2f2ffff42ff22...........
        ...fff224ffffffff422fff2...........
        ...ffff222424242422ffff2...........
        ...fffff2424242422ffff22...f.......
        ...fffffffffffffffffff22.2fff......
        ...ffff4444444444fffff22.22fffff...
        ...ff444444444444fffff22..22fffff..
        ...fffffffffffffffffff222..2fffff..
        ...ff444444444444fffff22...22ffff..
        ...ff444444444444fffff222...22ffff.
        ...ff444444ffffffffff22..2.222ffff.
        ...ffffffff44444444ff222.22222ffff.
        ...fff4444444444444fff2222ffffffff.
        ...fff4444444444fff44fffffffffffff.
        ...ffff4444fffff4444ff44ffffffffff.
        ....fffffff4444444ff4444f444ffff...
        ....fffff4444444ff4444ff444f4ff....
        .....ffff4444fff44444f4444f44f.....
        ......ffff4ff4444444f444ff44ff.....
        .........ff4444444ff444f4444.......
        ..........ff44444f4444f444f........
        `,img`
        .......f2ffffff2ff.................
        ......ff22ffff22fff22..............
        ......ff222ff222fffff..............
        .....ffffffffffffffff2.............
        .....fffffffffffffffff.............
        .....fffffffffffffffff2............
        .....f4ffffffffffff4fff............
        ....ff244fffffffff42fff2...........
        ...fff22424442424242fff2...........
        ...fff22422222222242fff2...........
        ...fff42222222222224fff2...........
        ...ffff422222222224ffff2...........
        ...fffff4242242224ffff22...f.......
        ...fffffffffffffffffff22.2fff......
        ...ffff4444444444fffff22.22fffff...
        ...ff444444444444fffff22..22fffff..
        ...fffffffffffffffffff222..2fffff..
        ...ff444444444444fffff22...22ffff..
        ...ff444444444444fffff222...22ffff.
        ...ff444444ffffffffff22..2.222ffff.
        ...ffffffff44444444ff222.22222ffff.
        ...fff4444444444444fff2222ffffffff.
        ...fff4444444444fff44fffffffffffff.
        ...ffff4444fffff4444ff44ffffffffff.
        ....fffffff4444444ff4444f444ffff...
        ....fffff4444444ff4444ff444f4ff....
        .....ffff4444fff44444f4444f44f.....
        ......ffff4ff4444444f444ff44ff.....
        .........ff4444444ff444f4444.......
        ..........ff44444f4444f444f........
        `,img`
        .......f2ffffff2ff.................
        ......ff22ffff22fff22..............
        ......ff222ff222fffff..............
        .....ffffffffffffffff2.............
        .....fffffffffffffffff.............
        .....fffffffffffffffff2............
        .....f4ffffffffffff4fff............
        ....ff244fffffffff42fff2...........
        ...fff22424442424242fff2...........
        ...fff22422222222242fff2...........
        ...fff42222222222224fff2...........
        ...ffff422222222224ffff2...........
        ...fffff4242242224ffff22...f.......
        ...fffffffffffffffffff22.2fff......
        ...ffff4444444444fffff22.22fffff...
        ...ff444444444444fffff22..22fffff..
        ...fffffffffffffffffff222..2fffff..
        ...ff444444444444fffff22...22ffff..
        ...ff444444444444fffff222...22ffff.
        ...ff444444ffffffffff22..2.222ffff.
        ...ffffffff44444444ff222.22222ffff.
        ...fff4444444444444fff2222ffffffff.
        ...fff4444444444fff44fffffffffffff.
        ...ffff4444fffff4444ff44ffffffffff.
        ....fffffff4444444ff4444f444ffff...
        ....fffff4444444ff4444ff444f4ff....
        .....ffff4444fff44444f4444f44f.....
        ......ffff4ff4444444f444ff44ff.....
        .........ff4444444ff444f4444.......
        ..........ff44444f4444f444f........
        `,img`
        ...........22......................
        ..........2222.....................
        .......ffffffff....................
        .....fffffffffffffff...............
        .....fff2fffffff2ffff..............
        .....fff22fffff22ffff.2............
        .....fff222fff222fffff.............
        ....ffffffffffffffffff.2...........
        ...fff4ffffffffffff4ff2............
        ...fff24fff2f2ffff42ff2............
        ...fff224ffffffff422fff............
        ...ffff222424242422ffff2...........
        ...fffff2424242422ffff22...........
        ...fffffffffffffffffff22...........
        ...ffff4444444444fffff22...........
        ...ff444444444444fffff22...........
        ...fffffffffffffffffff2.ff.........
        ...ff444444444444fffff2fff.........
        ...ff444444444444fffff2ff..........
        ...ff444444ffffffffff2fff..........
        ...ffffffff44444444ff2fff..........
        ...fff4444444444444ffffff..........
        ...fff4444444444fff44fff...........
        ...ffff4444fffff4444ffff...........
        ...ffffffff4444444ff4fff...........
        ...ffffff4444444ff444ff............
        ....fffff4444fff44444f.............
        ....ffffff4ff4444444ff.............
        ....fffffff4444444ffff.............
        .....fffffff44444f44ff.............
        `,img`
        ......................22...........
        .....................2222..........
        ....................ffffffff.......
        ...............fffffffffffffff.....
        ..............ffff2fffffff2fff.....
        ............2.ffff22fffff22fff.....
        .............fffff222fff222fff.....
        ...........2.ffffffffffffffffff....
        ............2ff4ffffffffffff4fff...
        ............2ff24ffff2f2fff42fff...
        ............fff224ffffffff422fff...
        ...........2ffff224242424222ffff...
        ...........22ffff2242424242fffff...
        ...........22fffffffffffffffffff...
        ...........22fffff4444444444ffff...
        ...........22fffff444444444444ff...
        .........ff.2fffffffffffffffffff...
        .........fff2fffff444444444444ff...
        ..........ff2fffff444444444444ff...
        ..........fff2ffffffffff444444ff...
        ..........fff2ff44444444ffffffff...
        ..........ffffff4444444444444fff...
        ...........fff44fff4444444444fff...
        ...........ffff4444fffff4444ffff...
        ...........fff4ff4444444ffffffff...
        ............ff444ff4444444ffffff...
        .............f44444fff4444fffff....
        .............ff4444444ff4ffffff....
        .............ffff4444444fffffff....
        .............ff44f44444fffffff.....
        `,img`
        ..............2222.2.22............
        .............22222222222...........
        ............2222fff2ffffff.........
        ............22fffffffffffffff......
        ............22fff2fffffff2ffff.....
        ...........222fff22fffff22ffff.....
        ..........2.22fff222fff222fffff....
        ..........222ffffffffffffffffff....
        ..........22fff4ffffffffffff4ff....
        ..........22fff24fff2f2ffff42ff....
        .........222fff224ffffffff422fff...
        ...........2ffff222424242422ffff...
        ..........22fffff2424242422fffff...
        ..........22ffffffffffffffffffff...
        ..........22fffffffffffff444ffff...
        ...........2fffffff44444444444ff...
        ..........22ffffff444444444444ff...
        222.......22ffffffffffffffffffff...
        2f22.......2ffffff4444444444444f...
        fff2......22fffffffffffff444444f...
        fff2....222ffffff44444444fffffff...
        .ff222..222ffffff4444444444444ff...
        .fff22222fffffffffff4444444444ff...
        .ffff22ffffffffff444fffffff444f....
        .fffffffffffffff44444444444ffff....
        ffffffffffffffffff444444444444f....
        .ffffffffffffff444ffff44444444.....
        .ffffffffff444ff444444ffff4444.....
        .fffff4ff44ff444fff4444444fff......
        ..fffff44ff44ff4444ff44444444......
        `,img`
        ......................22...........
        .....................2222..........
        ....................ffffffff.......
        ...............fffffffffffffff.....
        ..............ffff2fffffff2fff.....
        ............2.ffff22fffff22fff.....
        .............fffff222fff222fff.....
        ...........2.ffffffffffffffffff....
        ............2ff4ffffffffffff4fff...
        ............2ff24ffff2f2fff42fff...
        ............fff224ffffffff422fff...
        ...........2ffff224242424222ffff...
        ...........22ffff2242424242fffff...
        ...........22fffffffffffffffffff...
        ...........22fffff4444444444ffff...
        ...........22fffff444444444444ff...
        .........ff.2fffffffffffffffffff...
        .........fff2fffff444444444444ff...
        ..........ff2fffff444444444444ff...
        ..........fff2ffffffffff444444ff...
        ..........fff2ff44444444ffffffff...
        ..........ffffff4444444444444fff...
        ...........fff44fff4444444444fff...
        ...........ffff4444fffff4444ffff...
        ...........fff4ff4444444ffffffff...
        ............ff444ff4444444ffffff...
        .............f44444fff4444fffff....
        .............ff4444444ff4ffffff....
        .............ffff4444444fffffff....
        .............ff44f44444fffffff.....
        `,img`
        ...........22......................
        ..........2222.....................
        .......ffffffff....................
        .....fffffffffffffff...............
        .....fff2fffffff2ffff..............
        .....fff22fffff22ffff.2............
        .....fff222fff222fffff.............
        ....ffffffffffffffffff.2...........
        ...fff4ffffffffffff4ff2............
        ...fff24fff2f2ffff42ff2............
        ...fff224ffffffff422fff............
        ...ffff222424242422ffff2...........
        ...fffff2424242422ffff22...........
        ...fffffffffffffffffff22...........
        ...ffff4444444444fffff22...........
        ...ff444444444444fffff22...........
        ...fffffffffffffffffff2.ff.........
        ...ff444444444444fffff2fff.........
        ...ff444444444444fffff2ff..........
        ...ff444444ffffffffff2fff..........
        ...ffffffff44444444ff2fff..........
        ...fff4444444444444ffffff..........
        ...fff4444444444fff44fff...........
        ...ffff4444fffff4444ffff...........
        ...ffffffff4444444ff4fff...........
        ...ffffff4444444ff444ff............
        ....fffff4444fff44444f.............
        ....ffffff4ff4444444ff.............
        ....fffffff4444444ffff.............
        .....fffffff44444f44ff.............
        `],
    100,
    true
    )
})
info.player1.onLifeZero(function () {
    mySprite.destroy(effects.spray, 5000)
    game.over(false, effects.confetti)
})
info.player2.onLifeZero(function () {
    mySprite2.destroy(effects.spray, 5000)
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.splash("castle")
    info.changeScoreBy(10)
    info.changeScoreBy(info.highScore())
    info.startCountdown(25)
    tiles.setTilemap(tilemap`Hardest level`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.player2.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    info.player1.changeLifeBy(-1)
    info.player2.changeLifeBy(1)
})
let mySprite2: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
game.splash("The Maze! (space=A wasd/arrow key to move")
game.splash("Welcome to the maze ")
scene.setBackgroundImage(img`
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ff444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444fff4444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444f3f44444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ff33f44444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ff333ff44444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ff33333f444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ff33333ff444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ff33333ff4444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444f333333ff44444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ffffffffff44444f333333ff444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444fff88888888ffffff3333333f4444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444f888888888888888ffff333ff4444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444444ff8888888888888888888ff3ff44444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444ff888888888888888888888fff444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444ff8888888888888888888888ff4444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444f888888888888888888888888f4444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444444ff888888888888888888888888ff444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444ff88888888888888888888888888f444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444f888888ffffffffff88888888888f444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444f888ffff999999999fff88888888ff44444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444f8fff9ff999fff99999ff88888888f44444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444444fffff9f9999f9fff9999ff8888888f44444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444ff999fff9999f99f9999999f888888fffff4444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444ff99999ff9fffff999999999f8888888f88ff444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444ff9999999fff333f9999999999f888888f888ff44444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444f9999999ff333333f999999999f888888f8888ff4444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444f999999ff333333ff999999999f8888888f8888f4444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444ff9999ff333333fff999f99999f8888888f8888f4444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444f999f3333333ff9f99ff99999f8888888f88888f444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444ffff33333333f99f9ff99999ff8888888f88888f444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444fff3333333ff999f9999999f8888888f8888888f44444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444444fff33333333f9999fffff99ff8888888f8888888f44444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444444f3333333333ff9999999999ff88888888f8888888f44444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444444ff33333333333ff999999999ff888888888f88888888f4444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444444444444444444444444444444ff33333333333f9ff999999ff88888888888f88888888f4444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444f333333333333ff99ff99fff8888888888888ff8888888f4444444444444444444444444444444444444444
    444444444444444444444444444444444444444444444444444444444444444444444444f3333333333333f999fffff8888888888888888f8888888ff444444444444444444444444444444444444444
    444444444444444444444444444444444ffff4444444444444444444444444444444444f3333333333333f8ffff88888888888888888888f88888888f444444444444444444444444444444444444444
    4444444444444444444444444444444ff999ffff444444444444444444444444444444f3333333333333ff8888888888888888888888888f88888888f444444444444444444444444444444444444444
    4444444444444444444444444444fff99999999ff4444444444444444444444444444f3333333333333ff88888888888888888888888888f88888888f444444444444444444444444444444444444444
    4444444444444444444444444fff22f999999999fff4444444444444444444444444f33333333333333f888888888888888888888888888f88888888f444444444444444444444444444444444444444
    44444444444444444444444ff22222f99999999999ff444444444444444444444444f333333333333ff8888888888888888888888888888f88888888f444444444444444444444444444444444444444
    444444444444444444444fff222222f99999999999fff4444444444444444444444f3333333333333ff8888888888888888888888888888f88888888f444444444444444444444444444444444444444
    44444444444444444444ff22222222f99999999999fffff4444444444444444444f333333333333ff4f8888888888888888888888888888f8888888ff444444444444444444444444444444444444444
    4444444444444444444ff222222222f99999999999ff22fff4444444444444444f3333333333333f44f8888888888888888888888888888f8888888f4444444444444444444444444444444444444444
    4444444444444444444f2222222222f9999999999ff22222ff44444444444444f3333333333333f444f8888888888888888888888888888f8888888f4444444444444444444444444444444444444444
    444444444444444444f22222222222f9999999999f222222f1f444444444444f3333333333333ff444f8888888888888888888888888888f8888888f4444444444444444444444444444444444444444
    444444444444444444f22222222222f9999999999f222222f1ff4444444444f3333333333333f444444f888888888888888888888888888f888888ff4444444444444444444444444444444444444444
    44444444444444444f222222222222ff999999999f222222f11f444444444f3333333333333f4444444f888888888888888888888888888f888888f44444444444444444444444444444444444444444
    44444444444444444f2222222222222f999999999f222222f11ff4444444f33333333333333f4444444f888888888888888888888888888f8888ff444444444444444444444444444444444444444444
    44444444444444444f22222222222222f9999999ff222222f111f444444f33333333333333f44444444f888888888888888888888888888ffffff4444444444444444444444444444444444444444444
    4444444444444444f2222222222222222ff99999f2222222ff1ff444444f3333333333333ff44444444ff88888888888888888888888888f444444444444444444444444444444444444444444444444
    4444444444444444f22222222222222222ff99ff22222222fff4444444f3333333333333ff4444444444ff8888888888888888888888888f444444444444444444444444444444444444444444444444
    4444444444444444f2222222222222222222fff222222222f44444444f3333333333333f4444444444444ff888888888888888888888888f444444444444444444444444444444444444444444444444
    444444444444444f22222222222222222222222222222222f4444444f3333333333333ff44444444444444f888888888888888888888888f444444444444444444444444444444444444444444444444
    444444444444444f22222222222222222222222222222222fff4444f333333333333fff444444444444444f888888888888888888888888f444444444444444444444444444444444444444444444444
    444444444444444f22222222222222222222222222222222f1ff444f33333333333ff444444444444444444f88888888888888888888888f444444444444444444444444444444444444444444444444
    44444444444444f222222222222222222222222222222222f11ff4f33333333333f44444444444444444444f88888888888888888888888f444444444444444444444444444444444444444444444444
    4444444444444f2222222222222222222222222222222222f111fff333333333ff4444444444444444444444f8888888888888888888888f444444444444444444444444444444444444444444444444
    4444444444444f2222222222222222222222222222222222f11fff33333333fff44444444444444444444444f8888888888888888888888f444444444444444444444444444444444444444444444444
    4444444444444f2222222222222222222222222222222222f1ff333333fffff4444444444444444444444444f88888888fff88888888888f444444444444444444444444444444444444444444444444
    4444444444444ff22222222222222222222222222222222ffff33333fff444444444444444444444444444444f888888ff4fff888888888f444444444444444444444444444444444444444444444444
    44444444444444f22222222222222222222222222222222fff333333f44444444444444444444444444444444f888888f4444ff88888888f444444444444444444444444444444444444444444444444
    444444444444444ff222222222222222222222222222222f3333333ff4444444444ff444444444444444444444f88888f44444ff8888888f444444444444444444444444444444444444444444444444
    4444444444444444ff22222222222222222222222222222f333333ff44444ff444fff444444444444444444444f88888f444444ff888888f444444444444444444444444444444444444444444444444
    44444444444444444ff2222222222222222222222222222f333333fff444f1ff44f1f444444444444444444444ff8888f4444444f888888f444444444444444444444444444444444444444444444444
    444444444444444444fff22222222222222222222222222f333333f1f444f11f44f1f4444444444444444444444f888f44444444ff8888ff444444444444444444444444444444444444444444444444
    44444444444444444444fffff2222222222222222222222f333333f1ff44f11f44f1ff444444444444444444444ff88f444444444f8888f4444444444444444444444444444444444444444444444444
    44444444444444444444444fffffff22222222222222222f33333ff11f44f1fffffffff444444444444444444444f88f444444444fff88f4444444444444444444444444444444444444444444444444
    444444444444444444444444f22222ff222222222222222ff3333fffffffffff222222f444444444444444444444ffff44444444444ff8f4444444444444444444444444444444444444444444444444
    444444444444444444444444ff22222ff2222222222222222ffff22222f22222222222ff444444444444444444444ff4444444444444fff4444444444444444444444444444444444444444444444444
    4444444444444444444444444f2222222ff222222222222222222222222222222222222f4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444ff2222222ff22222222222222222222222222222222222f4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444f22222222ff2222222222222222222222222222222222f4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444f22222222f2222222222222222222222222222222222f4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444f22222222ff222222222222222222222222222222222f4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444f22222222f2222222222222222222222222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444ff2222222ff222222222222222222222222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444ff2222222f222222222222222222222222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444fff2222ff22222222222222222222222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444fffffff22222222222222222222222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444ff222222222222ffff222222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444f222222222ffff44ff22222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444f222222222f444444ff2222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444f222222222f4444444f2222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444f22222222ff444444f2222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444f222222222f444444ff222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444ff22222222f4444444f222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444f22222222f4444444f222222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    444444444444444444444444444444444444444444f22222222f44444444fff222222222f444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444f2222222f4444444444ffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444fffff22f4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    44444444444444444444444444444444444444444444444ffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `)
mySprite = sprites.create(assets.image`Among us Orb`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
animation.runImageAnimation(
mySprite,
[img`
    . . . . c c c c c c c . . . . . 
    . . . c 6 7 7 7 7 7 6 c . . . . 
    . . c 6 7 c 6 6 6 6 c 7 c . . . 
    . . c 7 7 6 f 6 6 f 6 7 6 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 7 6 1 f f 1 8 7 f . . 
    . . f 7 7 7 f 1 f f 1 f 6 f . . 
    . . f 6 7 7 f 2 2 2 2 f f . . . 
    . . c f 6 7 7 2 2 2 2 f c c . . 
    . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
    c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
    c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 1 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . c c c c c c c . . . . . . 
    . . c 7 f f 6 6 f f c . . . . . 
    . c 6 7 6 6 6 6 6 6 7 c . . . . 
    . c 7 7 7 7 7 7 7 7 7 7 c . . . 
    . c 7 7 7 6 1 f f 1 8 7 c . . . 
    . f 7 7 7 f 1 f f 1 f 6 f . . . 
    . f 7 7 7 f 2 2 2 2 f 6 f . . . 
    . f 6 7 7 f 2 2 2 2 f 6 c c . . 
    . . c f 7 7 2 2 2 2 7 7 7 7 c . 
    . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
    c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
    c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
    . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
    . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . c 6 6 6 6 6 1 1 1 1 6 f . 
    . . . . c c c c c c c c f f . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `,img`
    c c c c c . . . . . . . . . . . 
    c 6 7 7 7 c c . . . . . . . . . 
    . c c 7 7 7 c c . . . . . . . . 
    . . . c 7 7 6 c . . . . . . . . 
    . . . c 6 6 6 c . . . . . . . . 
    . . c c 6 6 6 c . . . . . . . . 
    . c c 6 6 6 c c c c c c c . . . 
    . c 6 6 6 c c 6 7 7 7 7 6 c . . 
    c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
    c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
    c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
    c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
    c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
    . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
    . c c 6 6 f 6 7 c 1 f f c 1 c . 
    . . . c c c c c c c c c c c c . 
    `],
100,
true
)
tiles.setTilemap(tilemap`Lava Level`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.startCountdown(15)
forever(function () {
    music.playMelody("C5 B A G F E D C ", 500)
})
game.onUpdateInterval(500, function () {
	
})
