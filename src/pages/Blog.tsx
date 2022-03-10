import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import HomeCard from "../components/Card";

const Blog = () => {
  const [ids, setIds] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [blogs, setBlogs] = useState<JSX.Element[]>([]);

  const moveHandler = (dragIndex: number, hoverIndex: number): void => {
    const dragItem = ids[dragIndex];

    if (dragItem) {
      setIds((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
        return coppiedStateArray;
      });
    }
  };

  useEffect(() => {
    setBlogs(
      ids.map((item: any, index: number) => {
        return (
          <HomeCard
            key={item}
            title={"Test " + item}
            body="Testing a bunch of cards with drag and drop"
            show={true}
            index={index}
            moveHandler={moveHandler}
          />
        );
      })
    );
  }, [ids]);

  return (
    <>
      {/* Header Area */}
      <h2 className="text-3xl text-slate-600">Test out my drag and drop until I get the blogs online.</h2>
      {/* Search */}

      {/* Blogs */}
      <div className={"flex flex-wrap flex-row"}>{blogs}</div>
    </>
  );
};

export default Blog;
