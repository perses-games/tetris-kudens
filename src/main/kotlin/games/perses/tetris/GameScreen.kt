package games.perses.tetris

import com.persesgames.game.Game
import com.persesgames.game.Screen
import com.persesgames.input.InputProcessor
import com.persesgames.input.KeyCode
import com.persesgames.input.Keys
import com.persesgames.sprite.Sprite
import com.persesgames.sprite.SpriteBatch
import com.persesgames.texture.Textures
import kotlin.js.Math

/**
 * User: rnentjes
 * Date: 8-2-17
 * Time: 11:51
 */

enum class PieceType(val positions: Array<Pair<Int, Int>>) {
    I(arrayOf(0 to 0, -1 to  0,  1 to  0,  2 to  0)),
    J(arrayOf(0 to 0, -1 to  0,  1 to  0,  1 to  1)),
    L(arrayOf(0 to 0, -1 to  0, -1 to -1,  1 to  0)),
    O(arrayOf(0 to 0,  1 to  0,  0 to  1,  1 to  1)),
    S(arrayOf(0 to 0,  1 to  0,  0 to -1, -1 to -1)),
    T(arrayOf(0 to 0, -1 to  0,  1 to  0,  0 to -1)),
    Z(arrayOf(0 to 0, -1 to  0,  0 to -1,  1 to -1));

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

class Piece() {
    var type = PieceType.values()[(Math.random() * PieceType.values().size).toInt()]
    var orientation = 0
    var x = 5
    var y = 21

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
    }

    fun canMoveDown(playfield: Array<Array<String>>): Boolean {
        var result = true
        val positions = type.getPositions(orientation)

        for (pos in positions) {
            if (y + pos.second - 1 < 0 || x + pos.first < 0 || x + pos.first > 9) {
                return false
            }

            result = result and (playfield[y + pos.second - 1][x + pos.first] == " ")
        }

        return result
    }

    fun canMoveLeft(playfield: Array<Array<String>>): Boolean {
        var result = true
        val positions = type.getPositions(orientation)

        for (pos in positions) {
            if (y + pos.second < 0 || y + pos.second > 21  || x + pos.first - 1< 0 || x + pos.first - 1 > 9) {
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
            if (y + pos.second < 0 || y + pos.second > 21  || x + pos.first + 1 < 0 || x + pos.first + 1 > 9) {
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
            if (y + pos.second < 0 || y + pos.second > 21 || x + pos.first < 0 || x + pos.first > 9) {
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

    fun nextPiece(playfield: Array<Array<String>>) {
        for (pos in type.getPositions(orientation)) {
            playfield[pos.second+y][pos.first+x] = type.name
        }

        orientation = 0
        x = 5
        y = 21

        type = PieceType.values()[(Math.random() * PieceType.values().size).toInt()]
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

    private val keys: MutableMap<Int, Int> = HashMap()

    var piece = Piece()

    override fun loadResources() {
        Keys.setInputProcessor(this)

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

        playfield[0] = arrayOf("I", "I", "I", "I", "I", "I", "I", "I", "I", "I")
    }

    override fun keyDown(keyCode: Int) {
    }

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

    private fun checkInput(delta: Float) {
        if (Keys.wasPressed(KeyCode.LEFT.keyCode, (delta * 1000).toDouble())) {
            if (piece.canMoveLeft(playfield)) {
                piece.moveLeft()
            }
        } else if (Keys.wasPressed(KeyCode.RIGHT.keyCode, (delta * 1000).toDouble())) {
            if (piece.canMoveRight(playfield)) {
                piece.moveRight()
            }
        } else if (Keys.wasPressed(KeyCode.UP.keyCode, (delta * 1000).toDouble())) {
            if (piece.canTurn(playfield)) {
                piece.turn()
            }
        } else if (Keys.wasPressed(KeyCode.DOWN.keyCode, (delta * 1000).toDouble())) {
            if (piece.canMoveDown(playfield)) {
                piece.moveDown()
            }
        }
    }

    override fun update(time: Float, delta: Float) {
        var tick = false
        timeTillNextTick -= delta
        while (timeTillNextTick < 0f) {
            timeTillNextTick += timePerTick
            tick = true
        }

        checkInput(delta)

        if (tick) {
            if (!piece.canMoveDown(playfield)) {
                nextPiece()
            }

            tick()
        }
    }

    private fun nextPiece() {
        piece.nextPiece(playfield)

        removeFilledLines()
    }

    fun tick() {
        if (piece.canMoveDown(playfield)) {
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

    private fun removeFilledLines() {
        val toRemove = ArrayList<Int>()

        for (y in 0..21) {
            var empty = false
            for (x in 0..9) {
                if (playfield[y][x] == " ") {
                    empty = true
                    break
                }
            }
            if (!empty) {
                toRemove.add(y)
            }
        }

        var linesRemoved = 0
        while (!toRemove.isEmpty()) {
            val line = toRemove.removeAt(0) - linesRemoved
            println("remove line $line")

            for (y in line..20) {
                playfield[y] = playfield[y + 1]
            }

            playfield[21] = Array(10, { " " })
            linesRemoved++
        }

    }

}
