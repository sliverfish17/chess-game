import { Cell } from "models/Cell";
import { Colors } from "models/Colors";
import { Figure, FigureNames } from "models/figures/Figure";
import blackLogo from "assets/black-knight.png";
import whiteLogo from "assets/white-knight.png";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }
}
