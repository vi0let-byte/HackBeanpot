"use client";

import { SingleBalloon } from "./Balloon";
import { useState, useRef } from "react";
import Input from "./SimpleInput";
import ButtonHover from "./ButtonHover";
import { X, Check } from "lucide-react";
import ConfettiExplosion from "react-confetti-explosion";
import { motion } from "framer-motion";

export default function ({ color }: { color: string }) {
  // useState gives you a reference to the state (balloonHovering), and a (setter) function to change it
  // onMouseOver, onClick are places you can put the setter function to run
  // put the state in the common ancestor, aka. if a button needs state, put it in button.
  // .... If button and parent needs state, put it in parent and pass it into the child button
  // let audio = new Audio("../public/pop.mp3");

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const [balloonHovering, setBalloonHovering] = useState(false);
  const variants = {
    still: { y: 0 },
    moving: { y: -1000 },
  };
  return (
    <div>
      {isPopping && <ConfettiExplosion height="140vh" />}
      {!isPopping && (
        <motion.div
          variants={variants}
          initial="still"
          animate={isAnimating ? "moving" : "still"}
          transition={{ duration: 0.5 }}
        >
          <div
            className={"relative"}
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
            <div
              onClick={() => {
                audioRef.current?.play();
                setTimeout(() => {
                  setIsPopping(true);
                }, 300);
              }}
              className="absolute bottom-22 right-14 text-red-600"
            >
              {balloonHovering ? <ButtonHover icon={X} /> : <></>}
            </div>
            <div
              onClick={() => {
                setIsAnimating(true);
              }}
              className="absolute bottom-22 left-14 text-green-600"
            >
              {balloonHovering ? <ButtonHover icon={Check} /> : <></>}
            </div>
            <audio ref={audioRef} src={"/pop.mp3"}></audio>
          </div>
        </motion.div>
      )}
    </div>
  );
}
