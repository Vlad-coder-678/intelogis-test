import { useRef, useState } from "react";

/**
 * @func useDrag
 * @description задаёт ширину изменяемых блоков, в зависимости от положения ползунка
 * @returns { leftElementRef, rightElementRef, handleDragStart, handleDrag }
 * 
 * leftElementRef - реферальная ссылка на элемент находящийся слева от ползунка\
 * rightElementRef - реферальная ссылка на элемент находящийся правый от ползунка\
 * handleDragStart - событие начала перетаскивания ползунка\
 * handleDrag - событие перетаскивания ползунка
 */
const useDrag = () => {
  const [initialPositionDragElement, setInitialPositionDragElement] = useState(null);
  const [initialWidthLeftContainer, setInitialWidthLeftContainer] = useState(null);
  const [initialWidthRightContainer, setInitialWidthRightContainer] = useState(null);

  const leftElementRef = useRef();
  const rightElementRef = useRef();

  const handleDragStart = (event) => {
    setInitialPositionDragElement(event.clientX);
    setInitialWidthLeftContainer(leftElementRef.current.offsetWidth);
    setInitialWidthRightContainer(rightElementRef.current.offsetWidth);
  }

  const handleDrag = (event) => {
    if (event.clientX) {
      const variableWidth = parseInt(event.clientX - initialPositionDragElement);
      leftElementRef.current.style.width = `${parseInt(initialWidthLeftContainer) + variableWidth}px`;
      rightElementRef.current.style.width = `${parseInt(initialWidthRightContainer) - variableWidth}px`;
    }
  }

  return { leftElementRef, rightElementRef, handleDragStart, handleDrag };
};

export default useDrag;
