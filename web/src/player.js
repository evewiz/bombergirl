import { Bomb } from "./bomb";

export class Player {

    constructor(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    }

    getPlayerCell() {
        return this.board.getCell(this.x, this.y);
    }
    
    draw() {
        const playerClass = "player";
        this.getPlayerCell().addClass(playerClass);
    }

    move(key) {
        const playerClass = "player";
        const left = 37;
        const up = 38;
        const right = 39;
        const down = 40;

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
        if (!this.board.canEnter(targetX, targetY)) {
            return;
        }
        this.getPlayerCell().removeClass(playerClass);
        this.x = targetX;
        this.y = targetY;
        this.getPlayerCell().addClass(playerClass);
    }

    putBomb() {
        var bomb = new Bomb(this.board, this.x, this.y);
        bomb.put();
        return bomb;
    }
}