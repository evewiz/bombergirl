const playerClass = "player";
const left = 37;
const up = 38;
const right = 39;
const down = 40;

function Player(board, x, y) {
    this.board = board;
    this.x = x;
    this.y = y;
}

Player.prototype.getPlayerCell = function () {
    return $("table tr:nth-child(" + this.y + ") td:nth-child(" + this.x + ")");
}

Player.prototype.draw = function () {
    this.getPlayerCell().addClass(playerClass);
};

Player.prototype.move = function (key) {
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