import React, { useEffect, useRef } from 'react'
import {Canvas, Circle, Line, Rect, Text} from 'fabric'

const CanvasComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new Canvas(canvasRef.current);

        // Add a Rectangle
        const rect = new Rect({
            left: 100,
            top: 100,
            fill: "red",
            width: 200,
            height: 200
        });

        canvas.add(rect);

        // Add a circle
        const circle = new Circle({
          left: 300,
          top: 100,
          radius: 50,
          fill: 'blue',
        });

        canvas.add(circle);

         // Add a line
         const line = new Line([50, 50, 200, 200], {
          stroke: 'green',
          strokeWidth: 5,
         });

        canvas.add(line);

        // Add a Text
        const text = new Text('Hello, Fabric.js!', {
          left: 100,
          top: 300,
          fill: "white",
          fontSize: 24,
        });

        canvas.add(text);

        // Clean up on unmount
        return () => {
            canvas.dispose();
        }
    }, []);

  return (
   <>
    <h1 className='text-3xl text-white font-bold text-center'>Fabric js with React</h1>
    <canvas ref={canvasRef} width={600} height={400} />
   </>
  )
}

export default CanvasComponent;