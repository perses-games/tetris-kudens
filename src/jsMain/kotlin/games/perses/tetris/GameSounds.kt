package games.perses.tetris

import games.perses.kudens.sound.Sounds

/**
 * User: rnentjes
 * Date: 29-3-17
 * Time: 12:07
 */
enum class GameSounds(val file: String, val defaultVolume: Double, val channels: Int) {
    ROTATE("sounds/SFX_PieceRotateLR.mp3", 1.0, 1),
    ROTATE_FAIL("sounds/SFX_PieceRotateFail.mp3", 1.0, 1),
    TICK("sounds/SFX_PieceSoftDrop.mp3", 1.0, 1),
    WHOOSH("sounds/SFX_PieceSoftDrop.mp3", 1.0, 1),
    SINGLE("sounds/SFX_SpecialLineClearSingle.mp3", 1.0, 1),
    DOUBLE("sounds/SFX_SpecialLineClearDouble.mp3", 1.0, 1),
    TRIPLE("sounds/SFX_SpecialLineClearTriple.mp3", 1.0, 1),
    ;

    fun play(volume: Double? = null) {
        Sounds.play(name, volume)
    }

    fun pause() {
        Sounds.pause(name)
    }

    companion object {
        fun loadAll() {
            for (sound in GameSounds.values()) {
                Sounds.load(sound.name, sound.file, sound.defaultVolume, sound.channels)
            }
        }
    }

}