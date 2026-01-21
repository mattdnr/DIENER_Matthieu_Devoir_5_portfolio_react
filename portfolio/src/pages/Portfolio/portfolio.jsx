import React from "react";
import { Card, Button } from "react-bootstrap";

import AppBanner from "../../components/banner"
import PortfolioCards from "./components/cards"

export default function Portfolio() {
  return (
    <div>
      <header>
        <AppBanner />
        <div className="container p-5">
          <h2 className="text-center">Portfolio</h2>
          <p className="text-center">
            Voici quelques-unes de mes réalisations
          </p>
          <hr className="border border-primary border-3 opacity-75 w-50 mx-auto" />
        </div>
      </header>
      <PortfolioCards />
    </div>
  );
}
