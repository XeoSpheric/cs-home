export type HomeCardParams = {
  index: number;
  show: boolean;
  title: string;
  body: string;
  moveHandler?: (dragIndex: number, hoverIndex: number) => void;
};