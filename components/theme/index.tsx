import * as React from "react";

interface IThemeProps {
    children: React.ReactNode;
}

class Theme extends React.Component<IThemeProps, {}> {
    public canvas = React.createRef<HTMLCanvasElement>();

    public componentDidMount() {
        const ele = this.canvas.current;
        const ctx = ele.getContext("2d");

  // Get proper height and width for canvas, then set resize handler.
  ele.width = window.innerWidth;
  ele.height = window.innerHeight;
  window.addEventListener(
    "resize",
    ({ target: { innerWidth, innerHeight } }) => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    },
    false
  );

  const startAnimation = () => {
    // Use a closure here to keep internal state.
    let lastX = 0;
    let lastY = 0;
    let currX = 0;
    let currY = 0;

    const update = () => {
      ctx.beginPath();
      ctx.lineWidth = 7;
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(currX, currY);
      ctx.strokeStyle = "#b200f0";
      ctx.stroke();

      lastX = currX;
      lastY = currY;

      // Fade out the previous tails
      ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Request an animation frame to update it for a smooth 60fps independent of mousemove updates.
      requestAnimationFrame(update);
    };

    // On mouse move update cursor position.
    window.addEventListener(
      "mousemove",
      ({ pageX, pageY }) => {
        currX = pageX;
        currY = pageY;
      },
      false
    );

    // Start the update cycle.
    update();
  };

  startAnimation();
    }

    public render() {
        const module = (
            <canvas width="1345px" height="979px" ref = { this.canvas }>
                { this.props.children }
            </canvas>
        );

        return module;
    }
}

export default Theme;
