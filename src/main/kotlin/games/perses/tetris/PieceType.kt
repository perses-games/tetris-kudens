package games.perses.tetris

/**
 * User: rnentjes
 * Date: 18-3-17
 * Time: 14:06
 */
enum class PieceType(val positions: Array<Pair<Int, Int>>) {
    I(arrayOf(0 to 0, -1 to  0,  1 to  0,  2 to  0)),
    J(arrayOf(0 to 0, -1 to  0,  1 to  0,  1 to  1)),
    L(arrayOf(0 to 0, -1 to  0, -1 to  1,  1 to  0)),
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