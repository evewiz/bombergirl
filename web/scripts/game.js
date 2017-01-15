var board = new Board(21, 11);
var player = new Player(board, 3, 3);

board.draw();
player.draw();

$(document).keydown(function (e) {
    player.move(e.which);
});