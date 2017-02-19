import { explosion } from "./explosion";

export class Bomb {
    constructor(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;    
    }

	getBombCell() {
		return this.board.getCell(this.x, this.y);
	}

	put() {
        const explosionDelay = 2000;
        const bombClass = "bomb";
		
        this.getBombCell().addClass(bombClass);

		setTimeout(() => {
			explosion.createBasicExplosion(this.board, this.x, this.y);
			this.getBombCell().removeClass(bombClass);
		}, explosionDelay);
	}
}