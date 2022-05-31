import { Cell } from "models/Cell";

interface CellProps {
  cell: Cell;
}

export const CellComponent = ({ cell }: CellProps) => {
  const displayFigureLogo = (cell: Cell) =>
    cell.figure?.logo ? <img alt="Figure" src={cell.figure.logo} /> : null;

  return (
    <div className={["cell", cell.color].join(" ")}>
      {displayFigureLogo(cell)}
    </div>
  );
};
