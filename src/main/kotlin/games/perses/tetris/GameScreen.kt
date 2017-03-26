package games.perses.tetris

import games.perses.color.Color
import games.perses.game.Game
import games.perses.game.Screen
import games.perses.input.KeyCode
import games.perses.input.Keys
import games.perses.sound.Music
import games.perses.sound.Sound
import games.perses.sprite.Sprite
import games.perses.sprite.SpriteBatch
import games.perses.text.Texts
import games.perses.texture.Textures
import org.w3c.dom.HTMLAudioElement

/**
 * User: rnentjes
 * Date: 8-2-17
 * Time: 11:51
 */

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
    var timePerTick = 1f
    var timeTillNextTick = timePerTick
    var score = Score()
    var shadowColor = Color.hslToRgb(0.125f, SATURATION, SHADOW)
    var textColor = Color.hslToRgb(0.125f, SATURATION, NORMAL)
    var gameOver = false

    var music: HTMLAudioElement? = null
    var sndRotate: Sound? = null
    var sndRotateFail: Sound? = null
    var sndTick: Sound? = null
    var sndSingle: Sound? = null
    var sndDouble: Sound? = null
    var sndTriple: Sound? = null

    var greyBlocks = arrayOf(
      Sprite(""), Sprite("GREY_1"), Sprite("GREY_2"), Sprite("GREY_3"), Sprite("GREY_4"),
      Sprite("GREY_5"), Sprite("GREY_6"), Sprite("GREY_7"), Sprite("GREY_8"), Sprite("GREY_9") )
    private val keys: MutableMap<Int, Int> = HashMap()
    var deltaY = 0

    var piece = Piece()

    override fun loadResources() {
        Textures.create("RED", 8, 8, Block.create(0f))
        Textures.create("GREEN", 8, 8, Block.create(0.33f))
        Textures.create("BLUE", 8, 8, Block.create(0.66f))

        Textures.create("GREY_9", 8, 8, Block.createGrey(0.9f))
        Textures.create("GREY_8", 8, 8, Block.createGrey(0.8f))
        Textures.create("GREY_7", 8, 8, Block.createGrey(0.7f))
        Textures.create("GREY_6", 8, 8, Block.createGrey(0.6f))
        Textures.create("GREY_5", 8, 8, Block.createGrey(0.5f))
        Textures.create("GREY_4", 8, 8, Block.createGrey(0.4f))
        Textures.create("GREY_3", 8, 8, Block.createGrey(0.3f))
        Textures.create("GREY_2", 8, 8, Block.createGrey(0.2f))
        Textures.create("GREY_1", 8, 8, Block.createGrey(0.1f))

        Textures.create("I", 8, 8, Block.create(0.5f))
        Textures.create("J", 8, 8, Block.create(0.625f))
        Textures.create("L", 8, 8, Block.create(0.0625f))
        Textures.create("O", 8, 8, Block.create(0.125f))
        Textures.create("S", 8, 8, Block.create(0.25f))
        Textures.create("T", 8, 8, Block.create(0.75f))
        Textures.create("Z", 8, 8, Block.create(0f))

        Game.setClearColor(1f, 1f, 1f, 1f)

        sndRotate = Sound("ROTATE", "sounds/SFX_PieceRotateLR.ogg", 1.0, 1)
        sndRotateFail = Sound("ROTATEFAIL", "sounds/SFX_PieceRotateFail.ogg", 1.0, 1)
        sndTick = Sound("TICK", "sounds/SFX_PieceSoftDrop.ogg", 1.0, 1)
        sndSingle = Sound("TICK", "sounds/SFX_SpecialLineClearSingle.ogg", 1.0, 1)
        sndDouble = Sound("TICK", "sounds/SFX_SpecialLineClearDouble.ogg", 1.0, 1)
        sndTriple = Sound("TICK", "sounds/SFX_SpecialLineClearTriple.ogg", 1.0, 1)

        music = Music.play("music/Tetris.mp3", 0.1, looping = true)
    }

    private fun checkInput(delta: Float) {
        if (Keys.wasPressed(KeyCode.LEFT.keyCode, (delta * 1000).toDouble())) {
            if (piece.canMoveLeft(playfield)) {
                piece.moveLeft()
                sndTick?.play()
            }
        } else if (Keys.wasPressed(KeyCode.RIGHT.keyCode, (delta * 1000).toDouble())) {
            if (piece.canMoveRight(playfield)) {
                piece.moveRight()
                sndTick?.play()
            }
        } else if (Keys.wasPressed(KeyCode.UP.keyCode, (delta * 1000).toDouble())) {
            if (piece.canTurn(playfield)) {
                piece.turn()
                sndRotate?.play()
            } else {
                sndRotateFail?.play()
            }
        } else if (Keys.wasPressed(KeyCode.DOWN.keyCode, (delta * 1000).toDouble())) {
            if (piece.canMoveDown(playfield)) {
                piece.moveDown()
                score.tick()
                sndTick?.play()
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

        if (gameOver) {
            return
        }

        checkInput(delta)

        if (tick) {
            if (!piece.canMoveDown(playfield)) {
                if (piece.y == 21) {
                    gameOver = true
                } else {
                    nextPiece()
                }
            }

            tick()
        }

        deltaY = deltaY + (delta * 80f).toInt()
        while (deltaY > 320) {
            deltaY -= 320
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
        score.tick()
    }

    private fun drawGrey(x: Int, y: Int, c: Int) {
        sprites.draw(greyBlocks[c], 40f + x * 80f, - deltaY + 40f + y * 80f, scale = 10f)
    }

    override fun render() {
        for (x in 0..2) {
            for (y in 0..5) {
                val xx = x * 4
                val yy = y * 4

                drawGrey(xx + 0, yy + 0, 4)
                drawGrey(xx + 1, yy + 0, 4)
                drawGrey(xx + 1, yy + 1, 4)
                drawGrey(xx + 2, yy + 0, 4)
                drawGrey(xx + 0, yy + 1, 3)
                drawGrey(xx + 0, yy + 2, 3)
                drawGrey(xx + 1, yy + 2, 3)
                drawGrey(xx + 0, yy + 3, 3)
                drawGrey(xx + 1, yy + 3, 1)
                drawGrey(xx + 2, yy + 3, 1)
                drawGrey(xx + 2, yy + 2, 1)
                drawGrey(xx + 3, yy + 3, 1)
                drawGrey(xx + 3, yy + 0, 2)
                drawGrey(xx + 3, yy + 1, 2)
                drawGrey(xx + 2, yy + 1, 2)
                drawGrey(xx + 3, yy + 2, 2)
            }
        }

        sprites.render()

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

        val fs = score.formatted()
        Texts.drawText(10f, 58f, fs, font = "bold 48pt Arial", fillStyle = "rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, 1)")
        Texts.drawText(7f, 55f, fs, font = "bold 48pt Arial", fillStyle = "rgba(${textColor[0]}, ${textColor[0]}, ${textColor[0]}, 0.9)")

        if (gameOver) {
            Texts.drawText(53f, 803f, "GAME OVER!", font = "bold 80pt Arial", fillStyle = "rgba(55,0,0,1)")
            Texts.drawText(50f, 800f, "GAME OVER!", font = "bold 80pt Arial", fillStyle = "rgba(255,0,0,0.9)")
        }
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

            for (y in line..20) {
                playfield[y] = playfield[y + 1]
            }

            playfield[21] = Array(10, { " " })
            linesRemoved++
            timePerTick *= 0.95f
        }

        score.linesRemoved(linesRemoved)
        when(linesRemoved) {
            0 -> {}
            1 -> {
                sndSingle?.play()
            }
            2 -> {
                sndDouble?.play()
            }
            else -> {
                sndTriple?.play()
            }
        }
    }

}
