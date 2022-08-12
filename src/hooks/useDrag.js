import { useRef, useState } from "react";

const useDrag = () => {
  const [initialPositionDragElement, setInitialPositionDragElement] = useState(null);
  const [initialWidthTableContainer, setInitialWidthTableContainer] = useState(null);
  const [initialWidthMapContainer, setInitialWidthMapContainer] = useState(null);

  const leftElementRef = useRef();
  const rightElementRef = useRef();

  const handleDragStart = (event) => {
    setInitialPositionDragElement(event.clientX);
    setInitialWidthTableContainer(leftElementRef.current.offsetWidth);
    setInitialWidthMapContainer(rightElementRef.current.offsetWidth);
  }

  const handleDrag = (event) => {
    if (event.clientX) {
      const variableWidth = parseInt(event.clientX - initialPositionDragElement);
      leftElementRef.current.style.width = `${parseInt(initialWidthTableContainer) + variableWidth}px`;
      rightElementRef.current.style.width = `${parseInt(initialWidthMapContainer) - variableWidth}px`;
    }
  }

  return { leftElementRef, rightElementRef, handleDragStart, handleDrag };
};

export default useDrag;
