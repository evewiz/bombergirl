import { Board } from "../src/board"
import { Player } from "../src/player"

describe('Player', function () {
    describe('put bomb', function () {
        it('should return bomb with player location', function () {
            const playerX = 10;
            const playerY = 20;
            const board = new Board(21, 11);
            const player = new Player(board, playerX, playerY);
            const bomb = player.putBomb();

            expect(bomb.x).toBe(playerX);
            expect(bomb.y).toBe(playerY);
        });
    });
});