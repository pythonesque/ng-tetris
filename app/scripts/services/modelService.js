angular.module('ngTetrisApp').
service('modelService', function(){
  return {
    initialize: function(rowNumbers, colNumbers){
      this.nRows = rowNumbers ? rowNumbers : 30;
      this.nCols = colNumbers ? colNumbers : 10;
      this.grid = new Array(this.nRows * this.nCols);
    },

    outOfBounds: function(row, col) {
      return (row < 0 || this.nRows <= row || col < 0 || this.nCols <= col);
    },

    cell: function(row, col) {
      return this.grid[row * this.nCols + col];
    },

    setCell: function(row, col, color) {
      if (this.outOfBounds(row, col))
        return;
      this.grid[row * this.nCols + col] = color;
    },

    row: function(rowIndex) {
      var row = new Array(this.nCols);
      for (var col = 0; col < this.nCols; col++)
        row[col] = this.cell(rowIndex, col);
      return row;
    },

    rows: function() {
      var rows = new Array(this.nRows);
      for (var row = 0; row < this.nRows; row++)
        rows[row] = this.row(row);
      return rows;
    },

    col: function(colIndex) {
      var col = new Array(this.nRows);
      for (var row = 0; row < this.nRows; row++)
        col[row] = this.cell(row, colIndex);
      return col;
    },

    cols: function() {
      var cols = new Array(this.nCols);
      for (var col = 0; col < this.nCols; col++)
        cols[col] = this.col(col);
      return cols;
    }
  }
});