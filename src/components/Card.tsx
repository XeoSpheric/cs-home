import { Card, Group, Badge, Text } from "@mantine/core";
import { useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { HomeCardParams } from "../models/cardParam";
import "../styles/Card.scss";

const HomeCard = ({
  show,
  title,
  body,
  index,
  moveHandler,
}: HomeCardParams) => {
  const ref = useRef(null);

  const [, drag] = useDrag({
    item: { show, title, body, index },
    type: "Card",
    end: (item: HomeCardParams, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "Card",
    drop: (item: HomeCardParams, monitor) => {
      if (!ref.current) return;
      if (!moveHandler) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      // Not recommended by docs, but this was the quickest way to reorder the cards indexes
      item.index = hoverIndex;
      index = dragIndex;
      moveHandler(dragIndex, hoverIndex);
    },
  });

  // Creating a ref that does both drag and drop. 
  drag(drop(ref));

  return (
    <>
      <Card
        ref={ref}
        shadow="sm"
        padding="lg"
        className={show ? "card show m-4" : "card"}
      >
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: 5 }}
          className=""
        >
          <span className="font-medium">{title}</span>
          <Badge color="blue" variant="light">
            Future
          </Badge>
        </Group>

        <div className="text-sm">{body}</div>
      </Card>
    </>
  );
};

export default HomeCard;
