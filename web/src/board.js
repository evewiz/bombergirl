import $ from "jquery";

export class Board {

    constructor(width, height, player, enemies) {
        this.width = width;
        this.height = height;
        this.player = player;
        this.enemies = enemies;
    }

    canEnter(x, y) {
        return !this.isObstacle(x, y)
            && !this.isPlayer(x, y)
            && !this.isEnemy(x, y);
    }

    isObstacle(x, y) {
        return (x % 2 === 0 && y % 2 === 0)
            || x < 1
            || y < 1
            || x > this.width
            || y > this.height;
    }

    isPlayer(x, y) {
        return x === this.player.x && y === this.player.y;
    }

    getCell(x, y) {
        return $("table tr:nth-child(" + y + ") td:nth-child(" + x + ")");
    }

    isEnemy(x, y) {
        for (var i = 0; i < this.enemies.length; i++) {
            if (x === this.enemies[i].x && y === this.enemies[i].y) {
                return true;
            } 
        }
        return false;
    }

    draw() {
        var boardTable = $("<table></table>");
        for (var h = 1; h <= this.height; h++) {
            var row = $("<tr></tr>");
            for (var w = 1; w <= this.width; w++) {
                var cell = $("<td></td>");
                if (this.isObstacle(w, h)) {
                    cell.addClass("obstacle");
                }
                row.append(cell);
            }
            boardTable.append(row);
        }
        $("#board").append(boardTable);

        this.player.draw();

        for (var i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw();
        }
    }
}