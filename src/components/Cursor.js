import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCursor = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50% -50%);
  pointer-events: none;
  z-index: 10;
  mix-blend-mode: difference;
  transition-property: opacity, background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: ease;
`;

const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);
    handleLinkHoverEvents();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };
  const onMouseDown = () => {
    setClicked(true);
  };
  const onMouseUp = () => {
    setClicked(false);
  };
  const getBackgroundColor = () => {
    if (clicked) {
      return "#fff";
    } else if (linkHovered) {
      return "#fff";
    } else {
      return "transparent";
    }
  };
  const setScaleLinkHovered = () => {
        console.log("LinkHovered : ", linkHovered);

    if (clicked) {
      return "translate(-50%, -50%) scale(0.9)";
    } else if (linkHovered) {
      return "translate(-50%, -50%) scale(1.5)";
    } else {
      return "translate(-50%, -50%) scale(1)";
    }
  };

  const handleLinkHoverEvents = () => {
document.querySelectorAll('a').forEach((el) => {
    el.addEventListener("mouseover", () => setLinkHovered(true))
    el.addEventListener("mouseout", () => setLinkHovered(false))
})
  };

if (typeof navigator !== "undefined" && isMobile()) return null

  return (
    <StyledCursor
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
        backgroundColor: getBackgroundColor(),
        transform: setScaleLinkHovered(),
      }}
    />
  );
}

export default Cursor;
