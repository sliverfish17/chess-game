import { Fragment } from "react";
import { Board } from "models/Board";
import { CellComponent } from "components/CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent = ({ board, setBoard }: BoardProps) => {
  const Board = board.cells.map((row, index) => (
    <Fragment key={index}>
      {row.map((cell) => (
        <CellComponent key={cell.id} cell={cell} />
      ))}
    </Fragment>
  ));

  return <div className="board">{Board}</div>;
};
