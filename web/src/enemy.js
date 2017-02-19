export class Enemy {

    constructor(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    }

    getEnemyCell() {
        return this.board.getCell(this.x, this.y);
    }

    draw() {
        const enemyClass = "enemy";
        this.getEnemyCell().addClass(enemyClass);
    }

    move() {
        const enemyClass = "enemy";
        var moved = false;
        var targetX, targetY;

        while (!moved) {
            var direction = Math.random();
            targetX = this.x;
            targetY = this.y;

            if (direction < 0.25) {
                targetX--;
            } else if (direction < 0.5) {
                targetX++;
            } else if (direction < 0.75) {
                targetY--;
            } else {
                targetY++;
            }

            if (this.board.canEnter(targetX, targetY)) {
                moved = true;
            }
        }

        this.getEnemyCell().removeClass(enemyClass);
        this.x = targetX;
        this.y = targetY;
        this.getEnemyCell().addClass(enemyClass);
    }
}