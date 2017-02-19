import $ from "jquery";

import { Board } from "./board";
import { Player } from "./player";
import { Enemy } from "./enemy";

function Game(board) {

    const spaceKey = 32;

    this.board = board;

    this.doAction = (e) => {
        if (e.which === spaceKey) {
            this.board.player.putBomb();
        } else {
            this.board.player.move(e.which);
        }
    };

    this.drawWorld = () => {
        this.board.draw();
    };

    this.moveEnemies = () => {
        for (var i = 0; i < this.board.enemies.length; i++) {
            this.board.enemies[i].move();
        }
    };
}

var board = new Board(21, 11);
var player = new Player(board, 1, 1);
var enemy1 = new Enemy(board, 3, 3);
var enemy2 = new Enemy(board, 5, 5);
var enemy3 = new Enemy(board, 7, 7);
board.player = player;
board.enemies = [enemy1, enemy2, enemy3];
var game = new Game(board);
game.drawWorld();

$(document).keydown((e) => {
    game.doAction(e);
});

setInterval(() => {
    game.moveEnemies();
}, 500);