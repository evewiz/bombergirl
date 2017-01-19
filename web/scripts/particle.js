function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.scale = 1.0;
    this.scaleSpeed = 0.7;
    this.radius = 20;
    this.color = "#F00";
    this.velocityX = 0;
    this.velocityY = 0;

    this.update = (ms) => {
        this.scale -= this.scaleSpeed * ms / 1000.0;

        if (this.scale <= 0) {
            this.scale = 0;
        }

        // moving away from explosion center
        this.x += this.velocityX * ms / 1000.0;
        this.y += this.velocityY * ms / 1000.0;
    };

    this.draw = (context) => {
        context.save();
        context.translate(this.x, this.y);
        context.scale(this.scale, this.scale);

        context.beginPath();
        context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        context.closePath();

        context.fillStyle = this.color;
        context.fill();

        context.restore();
    };
}