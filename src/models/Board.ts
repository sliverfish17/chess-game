import { Colors } from "models/Colors";
import { Cell } from "models/Cell";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // Черные ячейки
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // белые
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addPawns() {}

  private addKings() {}

  private addQueens() {}

  private addElephants() {}

  private addKnights() {}

  private addRooks() {}

  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addQueens();
    this.addElephants();
    this.addKnights();
    this.addRooks();
  }
}
