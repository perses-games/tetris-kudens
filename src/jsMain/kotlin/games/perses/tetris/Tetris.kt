package games.perses.tetris

import games.perses.kudens.game.DrawMode
import games.perses.kudens.game.Game

/**
 * Kudens example game
 */

fun main(args: Array<String>) {
    // Don't clear the screen every frame (everything is redrawn anyway)
    // otherwise set clear color with: Game.setClearColor(<red>, <green>, <blue>, <alpha>), values 0f - 1f
    Game.clearScreenEveryFrame = false

    // From the game perspective the game will always be 800 pixels (units?) wide
    Game.view.setToWidth(800f)
    Game.view.drawMode = DrawMode.NEAREST

    // Fixed aspect ratio, heigt is always 2 * width (e.g. 1600)
    Game.view.minAspectRatio = 160f/320f
    Game.view.maxAspectRatio = 160f/320f

    // Start with the GameScreen Screen
    Game.start(GameScreen())
}
