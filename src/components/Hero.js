import React from "react";
import heroImg from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="p-4 flex flex-col">
      <div className="p-4">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">Online Experiences</h1>
        <p className="text-sm text-gray-700 max-w-64">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
