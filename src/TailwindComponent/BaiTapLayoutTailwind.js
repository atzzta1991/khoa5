import React from "react";
import Card from "./Card";

export default function BaiTapLayoutTailwind() {
  return (
    <div className="container mx-3">
      <h1 className="text-center text-4xl text-green-500">
        Welcome to cybersoft frontend
      </h1>
      <div className="grid grid-cols-3 gap-4 my-3">
        <div className="text-center">
          <Card />
        </div>
        <div className="text-center">
          <Card />
        </div>
        <div className="text-center">
          <Card />
        </div>
      </div>
    </div>
  );
}
