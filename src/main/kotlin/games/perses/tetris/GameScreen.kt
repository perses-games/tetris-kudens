package games.perses.tetris

import com.persesgames.game.Screen
import com.persesgames.sprite.Sprite
import com.persesgames.sprite.SpriteBatch
import com.persesgames.texture.Textures

/**
 * User: rnentjes
 * Date: 8-2-17
 * Time: 11:51
 */

class GameScreen : Screen() {
    var sprites = SpriteBatch()
    var red = Sprite("RED")
    var green = Sprite("GREEN")
    var blue = Sprite("BLUE")


    override fun loadResources() {
        Textures.create("RED", 8, 8, Block.create(0f))
        Textures.create("GREEN", 8, 8, Block.create(0.33f))
        Textures.create("BLUE", 8, 8, Block.create(0.66f))
    }

    override fun update(time: Float, delta: Float) {
    }

    override fun render() {
        sprites.draw(red, 200f, 200f, scale = 25f)
        sprites.draw(green, 200f, 500f, scale = 25f)
        sprites.draw(blue, 200f, 800f, scale = 25f)

        sprites.draw(red, 400f, 200f, scale = 5f)
        sprites.draw(red, 400f, 240f, scale = 5f)
        sprites.draw(red, 400f, 280f, scale = 5f)
        sprites.draw(red, 440f, 240f, scale = 5f)

        sprites.draw(blue, 440f, 280f, scale = 5f)
        sprites.draw(blue, 480f, 280f, scale = 5f)
        sprites.draw(blue, 480f, 240f, scale = 5f)
        sprites.draw(blue, 480f, 200f, scale = 5f)

        sprites.render()
    }


}