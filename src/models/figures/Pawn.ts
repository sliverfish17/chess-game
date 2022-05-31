import { Cell } from "models/Cell";
import { Colors } from "models/Colors";
import { Figure, FigureNames } from "models/figures/Figure";
import blackLogo from "assets/black-pawn.png";
import whiteLogo from "assets/white-pawn.png";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
}
