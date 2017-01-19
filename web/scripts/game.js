function Game(board, player) {

    const spaceKey = 32;

    this.board = board;
    this.player = player;

    this.doAction = (e) => {
        if (e.which === spaceKey) {
            player.putBomb();
        } else {
            player.move(e.which);
        }
    };

    this.drawWorld = () => {
        this.board.draw();
        this.player.draw();
    };
}

var board = new Board(21, 11);
var player = new Player(board, 1, 1);
var game = new Game(board, player);
game.drawWorld();

$(document).keydown((e) => {
    game.doAction(e);
});