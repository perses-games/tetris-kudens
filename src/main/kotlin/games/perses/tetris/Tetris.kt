package games.perses.tetris

import com.persesgames.game.DrawMode
import com.persesgames.game.Game
import com.persesgames.game.Screen
import com.persesgames.sprite.Sprite
import com.persesgames.sprite.SpriteBatch
import com.persesgames.text.Texts
import com.persesgames.texture.Textures
import kotlin.js.Math

/**
 * Shapes:
 *
 * OOOO
 *
 * OO
 *  OO
 *
 *  OO
 * OO
 *
 * OO
 * OO
 *
 * O
 * OOO
 *
 *   O
 * OOO
 *
 *  O
 * OOO
 */

private val SCALE = 4f

class WelcomeScreen : Screen() {
    var sprites = SpriteBatch()
    var blue = Sprite("BLUE")
    var red = Sprite("RED")
    var deltaY = 0f
    var deltaX = 0f

    override fun loadResources() {
        Textures.load("BLUE", "img/blue.png")
        Textures.load("RED", "img/red.png")
    }

    override fun update(time: Float, delta: Float) {
        deltaY = 10f + (Math.sin(time / 3.0) * 25f * SCALE).toFloat()
        deltaX = (Math.cos(time / 5.0) * 25f * SCALE).toFloat()
    }

    override fun render() {
        for (x in 5..14) {
            for (y in 1..9) {
                sprites.draw(blue, x*8f * SCALE + deltaX, y*8f*SCALE + deltaY, scale = SCALE * 1.075f)
                sprites.draw(red, x*8f * SCALE, 100f * SCALE + y*8f*SCALE, scale = SCALE * 1.075f)
            }
        }

        sprites.render()

        Texts.drawText(7f, 42f, "FPS ${Game.fps}", font = "bold 24pt Arial", fillStyle = "rgba(50, 50, 50, 1)")
        Texts.drawText(5f, 40f, "FPS ${Game.fps}", font = "bold 24pt Arial", fillStyle = "rgba(200, 255, 200, 1)")
    }
}

fun main(args: Array<String>) {
    Game.view.setToWidth(800f)
    Game.view.drawMode = DrawMode.LINEAR

    Game.view.minAspectRatio = 160f/320f
    Game.view.maxAspectRatio = 160f/320f

    Game.start(GameScreen())
}
