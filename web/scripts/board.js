function Board(width, height) {

    this.width = width;
    this.height = height;

    this.isObstacle = (x, y) => {
        return (x % 2 === 0 && y % 2 === 0)
            || x < 1
            || y < 1
            || x > this.width
            || y > this.height;
    }
      
    this.getCell = (x, y) => {
        return $("table tr:nth-child(" + y + ") td:nth-child(" + x + ")");
    };

    this.draw = () => {
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
    };
}