"use client";

import { SingleBalloon } from "./Balloon";
import { useState } from "react";
import Input from "./SimpleInput";
import ButtonHover from "./ButtonHover";
import { X, Check } from "lucide-react";

export default function ({ color }: { color: string }) {
  // useState gives you a reference to the state (balloonHovering), and a (setter) function to change it
  // onMouseOver, onClick are places you can put the setter function to run
  // put the state in the common ancestor, aka. if a button needs state, put it in button.
  // .... If button and parent needs state, put it in parent and pass it into the child button

  const [balloonHovering, setBalloonHovering] = useState(false);
  return (
    <div
      className="relative"
      onMouseOver={() => {
        setBalloonHovering(true);
      }}
      onMouseLeave={() => {
        setBalloonHovering(false);
      }}
    >
      <SingleBalloon color={color} />
      <div className="rounded-sm absolute left-6.75 top-18.75 text-black drop-shadow-sm">
        <Input placeholder="Your Task Here" />
      </div>
      <div className="absolute bottom-22 right-14 text-red-600">
        {balloonHovering ? <ButtonHover icon={X} /> : <></>}
      </div>
      <div className="absolute bottom-22 left-14 text-green-600">
        {balloonHovering ? <ButtonHover icon={Check} /> : <></>}
      </div>
    </div>
  );
}
