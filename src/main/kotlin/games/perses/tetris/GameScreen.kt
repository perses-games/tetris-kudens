package games.perses.tetris

import com.persesgames.game.Game
import com.persesgames.game.Screen
import com.persesgames.sprite.Sprite
import com.persesgames.sprite.SpriteBatch
import com.persesgames.texture.Textures

/**
 * User: rnentjes
 * Date: 8-2-17
 * Time: 11:51
 */

enum class PieceType(val positions: Array<Pair<Int, Int>>) {
    I(arrayOf(0 to 0, -1 to 0, 1 to 0, 2 to 0)),
    J(arrayOf(0 to 0, -1 to 0, 1 to 0, 1 to 1)),
    L(arrayOf(0 to 0)),
    O(arrayOf(0 to 0)),
    S(arrayOf(0 to 0)),
    T(arrayOf(0 to 0)),
    Z(arrayOf(0 to 0));

    fun getPositions(orientation: Int): Array<Pair<Int, Int>> {
        val result = Array(positions.size, { 0 to 0 })

        for (index in 0..result.size-1) {
            when(orientation) {
                0 -> {
                    result[index] = positions[index].first to positions[index].second
                }
                1 -> {
                    result[index] = positions[index].second to positions[index].first
                }
                2 -> {
                    result[index] = -positions[index].first to positions[index].second
                }
                3 -> {
                    result[index] = positions[index].second to -positions[index].first
                }
            }
        }

        return result
    }
}

class Piece(val type: PieceType) {
    var orientation = 0
    var x = 5
    var y = 22

    fun clear(playfield: Array<Array<String>>) {
        for (position in type.getPositions(orientation)) {
            val xx = x + position.first
            val yy = y + position.second

            if (playfield.size > yy) {
                val line = playfield[yy]

                if (line.size > xx) {
                    line[xx] = " "
                }
            }
        }
    }

    fun draw(playfield: Array<Array<String>>) {
        for (position in type.getPositions(orientation)) {
            val xx = x + position.first
            val yy = y + position.second

            if (playfield.size > yy) {
                val line = playfield[yy]

                if (line.size > xx) {
                    println("draw: $xx, $yy -> ${type.name}")
                    line[xx] = type.name
                }
            }
        }
    }

    fun moveLeft(playfield: Array<Array<String>>) {

    }

    fun moveRight(playfield: Array<Array<String>>) {

    }

    fun moveDown(playfield: Array<Array<String>>) {
        clear(playfield)
        y -= 1
        draw(playfield)
    }

    fun turn(playfield: Array<Array<String>>) {
        clear(playfield)
        orientation += 1
        // mod operation missing infix in Int (?)
        if (orientation > 3) {
            orientation -= 4
        }
        draw(playfield)
    }
}

class GameScreen : Screen() {
    var sprites = SpriteBatch()
    var playfield = Array(22, { Array(10, { " " } ) })
    var blocks = mapOf(
      "I" to Sprite("I"),
      "J" to Sprite("J"),
      "L" to Sprite("L"),
      "O" to Sprite("O"),
      "S" to Sprite("S"),
      "T" to Sprite("T"),
      "Z" to Sprite("Z")
    )
    var timePerTick = 2.5f
    var timeTillNextTick = 1f

    var piece = Piece(PieceType.J)

    override fun loadResources() {
        Textures.create("RED", 8, 8, Block.create(0f))
        Textures.create("GREEN", 8, 8, Block.create(0.33f))
        Textures.create("BLUE", 8, 8, Block.create(0.66f))

        Textures.create("I", 8, 8, Block.create(0.5f))
        Textures.create("J", 8, 8, Block.create(0.625f))
        Textures.create("L", 8, 8, Block.create(0.0625f))
        Textures.create("O", 8, 8, Block.create(0.125f))
        Textures.create("S", 8, 8, Block.create(0.25f))
        Textures.create("T", 8, 8, Block.create(0.75f))
        Textures.create("Z", 8, 8, Block.create(0f))

        Game.setClearColor(1f, 1f, 1f, 1f)

        piece.y = 10
        piece.orientation = 3
        piece.draw(playfield)

        playfield[0] = arrayOf("I", "I", "I", "I", "I", "I", "I")
    }

    override fun update(time: Float, delta: Float) {
        timeTillNextTick -= delta
        if (timeTillNextTick < 0f) {
            timeTillNextTick += timePerTick

            tick()
        }
    }

    fun tick() {
        piece.turn(playfield)
        piece.moveDown(playfield)

    }

    override fun render() {
        var y = 40f
        for (line in 0..playfield.size-1) {
            var x = 40f
            for (char in playfield[line]) {
                val block = blocks[char]
                if (block != null) {
                    sprites.draw(block, x, y, scale = 10f)
                }
                x += 80f
            }
            y += 80f
        }

        sprites.render()
    }


}