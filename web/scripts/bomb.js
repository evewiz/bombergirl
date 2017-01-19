function Bomb(board, x, y) {

	const bombClass = "bomb";
	const explosionDelay = 2000;

	this.board = board;
	this.x = player.x;
	this.y = player.y;

	this.getBombCell = () => {
		return player.board.getCell(this.x, this.y);
	};

	this.put = () => {
		this.getBombCell().addClass(bombClass);

		setTimeout(() => {
			createBasicExplosion(this.board, this.x, this.y);
			this.getBombCell().removeClass(bombClass);
		}, explosionDelay);
	};
}