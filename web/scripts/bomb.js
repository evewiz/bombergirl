function Bomb(player) {

	const bombClass = "bomb";
    const explosionDelay = 2000;

    this.player = player;
	this.x = player.x;
	this.y = player.y;

	this.getBombCell = () => {
		return player.board.getCell(this.x, this.y);
	};

	this.put = () => {
		this.getBombCell().addClass(bombClass);
		var position = player.position();
		var playerX = position.left + player.width() / 2;
		var playerY = position.top + player.height() / 2;

		setTimeout(() => {
			createBasicExplosion(playerX, playerY);
			this.getBombCell().removeClass(bombClass);
		}, explosionDelay);
	};
}