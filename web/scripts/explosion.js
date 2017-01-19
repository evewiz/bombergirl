var particles = [];

var createBasicExplosion = (x, y) => {
    for (var angle = 0; angle < 360; angle += 90) {
        var particle = new Particle(x, y);
        var speed = 50.0;
        particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
        particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
        particles.push(particle);
    }
}

var update = (frameDelay) => {
    var canvas = $("#canvas")[0];
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        particle.update(frameDelay);
        particle.draw(context);
    }
}

setInterval(() => update(100), 50);