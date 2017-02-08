package games.perses.tetris

import com.persesgames.game.Game
import com.persesgames.game.Screen
import com.persesgames.input.InputProcessor
import com.persesgames.input.KeyCode
import com.persesgames.input.Keys
import com.persesgames.sprite.Sprite
import com.persesgames.sprite.SpriteBatch
import com.persesgames.texture.Textures

/**
 * User: rnentjes
 * Date: 8-2-17
 * Time: 11:51
 */

enum class PieceType(val positions: Array<Pair<Int, Int>>) {
    I(arrayOf(0 to 0, -1 to  0, 1 to  0,  2 to  0)),
    J(arrayOf(0 to 0, -1 to  0, 1 to  0,  1 to  1)),
    L(arrayOf(0 to 0, -1 to -1, 1 to  0,  2 to  0)),
    O(arrayOf(0 to 0,  1 to  0, 0 to  1,  1 to  1)),
    S(arrayOf(0 to 0,  1 to  0, 0 to -1, -1 to -1)),
    T(arrayOf(0 to 0, -1 to  0, 1 to  0,  0 to -1)),
    Z(arrayOf(0 to 0, -1 to  0, 0 to -1,  1 to -1));

    fun getPositions(orientation: Int): Array<Pair<Int, Int>> {
        val result = Array(positions.size, { 0 to 0 })

        for (index in 0..result.size-1) {
            when(orientation) {
                0 -> {
                    result[index] = positions[index].first to positions[index].second
                }
                1 -> {
                    result[index] = positions[index].second to -positions[index].first
                }
                2 -> {
                    result[index] = -positions[index].first to -positions[index].second
                }
                3 -> {
                    result[index] = -positions[index].second to positions[index].first
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

    fun moveLeft() {
        // todo: check boundaries
        x--
    }

    fun moveRight() {
        // check edge
        x++
    }

    fun moveDown() {
        y -= 1
        println("move down: $y")
    }

    fun canMoveDown(playfield: Array<Array<String>>): Boolean {
        var result = true
        val positions = type.getPositions(orientation)

        for (pos in positions) {
            if (y + pos.second - 1 < 0 || x + pos.first < 0 || x + pos.first > 9) {
                println("Can't move down outside screen (${x+pos.first}, ${y+pos.second-1})")
                return false
            }

            println("Playfield [${y + pos.second - 1}][${x + pos.first}] == [${playfield[y + pos.second - 1][x + pos.first]}]")
            result = result and (playfield[y + pos.second - 1][x + pos.first] == " ")
        }

        println("Can move down result: $result")
        return result
    }

    fun canMoveLeft(playfield: Array<Array<String>>): Boolean {
        var result = true
        val positions = type.getPositions(orientation)

        for (pos in positions) {
            if (y + pos.second < 0 || x + pos.first - 1< 0 || x + pos.first - 1 > 9) {
                return false
            }

            result = result and (playfield[y + pos.second][x + pos.first - 1] == " ")
        }

        return result
    }

    fun canMoveRight(playfield: Array<Array<String>>): Boolean {
        var result = true
        val positions = type.getPositions(orientation)

        for (pos in positions) {
            if (y + pos.second < 0 || x + pos.first + 1 < 0 || x + pos.first + 1 > 9) {
                return false
            }

            result = result and (playfield[y + pos.second][x + pos.first + 1] == " ")
        }

        return result
    }

    fun canTurn(playfield: Array<Array<String>>): Boolean {
        var result = true
        var newOrient = orientation + 1

        if (newOrient > 3) {
            newOrient -= 4
        }
        val positions = type.getPositions(newOrient)

        for (pos in positions) {
            if (y + pos.second < 0 || x + pos.first < 0 || x + pos.first > 9) {
                return false
            }

            result = result and (playfield[y + pos.second][x + pos.first] == " ")
        }

        return result
    }

    fun turn() {
        orientation += 1
        // mod operation missing infix in Int (?)
        if (orientation > 3) {
            orientation -= 4
        }
    }
}

class GameScreen : Screen(), InputProcessor {
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
    var timePerTick = 1f
    var timeTillNextTick = timePerTick

    var piece = Piece(PieceType.Z)

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

        playfield[0] = arrayOf("I", "I", "I", "I", "I", "I", "I")

        Keys.setInputProcessor(this)
    }

    override fun keyDown(keyCode: Int) {}

    override fun keyPressed(charCode: Int) {
        println("keypress: $charCode")
        when(charCode) {
            KeyCode.LEFT.keyCode -> {
                if (piece.canMoveLeft(playfield)) {
                    piece.moveLeft()
                }
            }
            KeyCode.RIGHT.keyCode -> {
                if (piece.canMoveLeft(playfield)) {
                    piece.moveLeft()
                }
            }
            KeyCode.UP.keyCode -> {
                if (piece.canTurn(playfield)) {
                    piece.turn()
                }
            }
            KeyCode.DOWN.keyCode -> {
                if (piece.canMoveDown(playfield)) {
                    piece.moveDown()
                }
            }
        }
    }

    override fun keyUp(keyCode: Int) {}

    override fun pointerClick(pointer: Int, x: Float, y: Float) {}

    override fun update(time: Float, delta: Float) {
        var tick = false
        timeTillNextTick -= delta
        while (timeTillNextTick < 0f) {
            timeTillNextTick += timePerTick
            tick = true
        }

        if (tick) {
            tick()
        }
    }

    fun tick() {
        println("tick")
        if (piece.canMoveDown(playfield)) {
            println("move-down")
            piece.moveDown()
        }
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

        val px = piece.x * 80f + 40f
        val py = piece.y * 80f + 40f
        val block = blocks[piece.type.name];
        if (block != null) {
            for (position in piece.type.getPositions(piece.orientation)) {
                sprites.draw(block, px + position.first * 80f, py + position.second * 80f, scale = 10f)
            }
        }

        sprites.render()
    }


}