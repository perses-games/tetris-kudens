package games.perses.tetris

import kotlin.js.Math

/**
 * User: rnentjes
 * Date: 18-3-17
 * Time: 14:07
 */
class Piece {
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
