package games.perses.tetris

import org.khronos.webgl.Uint8Array
import kotlin.js.Math
import com.persesgames.color.Color

/**
 * User: rnentjes
 * Date: 8-2-17
 * Time: 12:17
 */

private val LIGHT   = 0.6f
private val NORMAL  = 0.5f
private val DARK    = 0.4f

private val SATURATION = 0.5f

object Block {

    fun create(hue: Float): Uint8Array {
        val array = Uint8Array(4*8*8)

        val light = Color.hslToRgb(hue, SATURATION, LIGHT)
        val normal = Color.hslToRgb(hue, SATURATION, NORMAL)
        val dark = Color.hslToRgb(hue, SATURATION, DARK)

        for (index in 0..7) {
            array.set(arrayOf(light[0].toByte(), light[1].toByte(), light[2].toByte(), 255.toByte()), 4 * (index * 8 + 0))
            array.set(arrayOf(dark[0].toByte(), dark[1].toByte(), dark[2].toByte(), 255.toByte()), 4 * (index * 8 + 7))
        }

        for (index in 1..6) {
            array.set(arrayOf(light[0].toByte(), light[1].toByte(), light[2].toByte(), 255.toByte()), 4 * (0 * 8 + index))
            array.set(arrayOf(dark[0].toByte(), dark[1].toByte(), dark[2].toByte(), 255.toByte()), 4 * (7 * 8 + index))
        }

        for (x in 1..6) {
            for (y in 1..6) {
                array.set(arrayOf(normal[0].toByte(), normal[1].toByte(), normal[2].toByte(), 255.toByte()), 4 * (y * 8 + x))
            }
        }

        return array
    }

}
