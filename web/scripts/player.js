function Player(board, x, y) {

    const playerClass = "player";
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    this.board = board;
    this.x = x;
    this.y = y;

    this.getPlayerCell = () => {
        return board.getCell(this.x, this.y);
    };
    
    this.draw = () => {
        this.getPlayerCell().addClass(playerClass);
    };

    this.move = (key) => {
        var targetX = this.x;
        var targetY = this.y;
        if (key === left) {
            targetX--;
        } else if (key === right) {
            targetX++;
        } else if (key === up) {
            targetY--;
        } else if (key === down) {
            targetY++;
        }
        if (board.isObstacle(targetX, targetY)) {
            return;
        }
        this.getPlayerCell().removeClass(playerClass);
        this.x = targetX;
        this.y = targetY;
        this.getPlayerCell().addClass(playerClass);
    };

    this.putBomb = () => {
        var bomb = new Bomb(this.board, this.x, this.y);
        bomb.put();
    };
}