import $ from "jquery";

import { Particle } from "./particle";

class Explosion {
    constructor() {
        this.particles = [];
        this.directions = [
            { angle: 0, offsetX: 1, offsetY: 0 },
            { angle: 90, offsetX: 0, offsetY: 1 },
            { angle: 180, offsetX: -1, offsetY: 0 },
            { angle: 270, offsetX: 0, offsetY: -1 }];
    }

    createBasicExplosion(board, x, y) {
        var bombCell = board.getCell(x, y);
        var bombX = bombCell.position().left + bombCell.width() / 2;
        var bombY = bombCell.position().top + bombCell.height() / 2;

        for (var i = 0; i < this.directions.length; i++) {

            var direction = this.directions[i];

            if (!board.isObstacle(x + direction.offsetX, y + direction.offsetY)) {
                var particle = new Particle(bombX, bombY);
                var speed = 50.0;
                particle.velocityX = speed * Math.cos(direction.angle * Math.PI / 180.0);
                particle.velocityY = speed * Math.sin(direction.angle * Math.PI / 180.0);
                this.particles.push(particle);
            }
        }
    }

    update(frameDelay) {
        var canvas = $("#canvas")[0];
        var context = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            particle.update(frameDelay);
            particle.draw(context);
        }
    }
}

var explosion = new Explosion();
setInterval(() => explosion.update(100), 50);
export { explosion };