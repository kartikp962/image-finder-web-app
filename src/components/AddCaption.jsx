import React, { useEffect, useRef, useState } from "react";
import {
  Canvas as FabricCanvas,
  FabricImage,
  Rect,
  Circle,
  FabricText,
} from "fabric";
import { useLocation } from "react-router-dom";
import { FaChevronRight, FaRegCircle, FaRegSquare } from "react-icons/fa";
import { LuDownload, LuType } from "react-icons/lu";

const AddCaption = () => {
  const { state } = useLocation();
  const imageSrc = state.urls.small;
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const canvasInstance = new FabricCanvas(canvasRef.current, {
      width: 560,
      height: 400,
      selection: false,
    });

    setCanvas(canvasInstance);

    const loadImg = async () => {
      const imgElement = new Image();
      imgElement.crossOrigin = "anonymous";
      imgElement.src = imageSrc;
      imgElement.onload = () => {
        const imgInstance = new FabricImage(imgElement, {
          left: 55,
          top: 50,
          scaleX: 1.1,
          scaleY: 1.1,
          selectable: false,
          evented: false,
        });

        const clipPath = new Rect({
          left: 0,
          top: 0,
          width: imgElement.width,
          height: imgElement.height,
          rx: 8,
          ry: 8,
          originX: "center",
          originY: "center",
        });

        imgInstance.clipPath = clipPath;

        canvasInstance.add(imgInstance);
      };
    };

    loadImg();

    // Clean up on unmount
    return () => {
      canvasInstance.dispose();
    };
  }, [imageSrc]);

  const addRectangle = () => {
    const rect = new Rect({
      left: 150,
      top: 150,
      width: 100,
      height: 100,
      fill: "rgba(255, 0, 0, 1)",
      selectable: true,
    });
    canvas.add(rect);
    canvas.setActiveObject(rect);
  };

  const addCircle = () => {
    const circle = new Circle({
      left: 200,
      top: 200,
      radius: 50,
      fill: "rgba(0, 0, 255, 1)",
      selectable: true,
    });
    canvas.add(circle);
    canvas.setActiveObject(circle);
  };

  const addCaption = () => {
    const text = new FabricText("Add Caption", {
      left: 50,
      top: 50,
      fill: "black",
      fontSize: 20,
      backgroundColor: "white",
    });
    canvas.add(text);
    canvas.setActiveObject(text);
  };

  const downloadCanvasAsImage = () => {
    const dataURL = canvas.toDataURL({
      format: "png",
      multiplier: 2,
    });

    // Trigger download
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas-image.png";
    link.click();
  };

  return (
    <main className="pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Preview */}
        <div className="bg-slate-800 border-0 rounded-lg">
          <div className="p-6">
            <canvas ref={canvasRef} />
          </div>
        </div>

        {/* Tools Panel */}
        <div className="space-y-4">
          {/* Add Rectangle */}
          <button
            onClick={addRectangle}
            className={`w-full flex items-center justify-between h-12 text-lg font-medium transition-all duration-200 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 rounded-lg`}
          >
            <div className="flex items-center">
              <FaRegSquare />
              <span className="ml-3">Add Rectangle</span>
            </div>
            <FaChevronRight className="w-5 h-5 opacity-50" />
          </button>

          {/* Add Circle */}
          <button
            onClick={addCircle}
            className={`w-full flex items-center justify-between h-12 text-lg font-medium transition-all duration-200 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 rounded-lg`}
          >
            <div className="flex items-center">
              <FaRegCircle />
              <span className="ml-3">Add Circle</span>
            </div>
            <FaChevronRight className="w-5 h-5 opacity-50" />
          </button>

          {/* Add Caption */}
          <button
            onClick={addCaption}
            className={`w-full flex items-center justify-between h-12 text-lg font-medium transition-all duration-200 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 rounded-lg`}
          >
            <div className="flex items-center">
              <LuType />
              <span className="ml-3">Add Caption</span>
            </div>
            <FaChevronRight className="w-5 h-5 opacity-50" />
          </button>

          {/* Download Button */}
          <button
            onClick={downloadCanvasAsImage}
            className={`w-full flex items-center justify-between h-12 text-lg font-medium transition-all duration-200 bg-green-600 hover:bg-green-700 text-slate-300 px-4 rounded-lg`}
          >
            <div className="flex items-center">
              <LuDownload className="w-5 h-5" />
              <span className="ml-3">Download</span>
            </div>
            <FaChevronRight className="w-5 h-5 opacity-50" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default AddCaption;
