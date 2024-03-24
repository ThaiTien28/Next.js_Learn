"use client";
import React from "react";
import "./card.scss";
import custom from "./custom.module.css";
import clsx from "clsx";
export default function Card() {
  const [expanding, setexpanding] = React.useState(false);
  return (
    <div
      className={clsx("card", {
        [custom.card]: expanding,
      })}
    >
      Card
    </div>
  );
}
