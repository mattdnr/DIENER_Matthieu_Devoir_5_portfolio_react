import React from "react";
import { Card, CardBody, CardText } from "react-bootstrap";

import AppBanner from "../../components/banner"
import ServiceCards from "./components/cards"

export default function Services() {
    return (
        <div>
            <header>
                <AppBanner />
                <div className="container p-5">
                    <h2 className="text-center">Mon offre de services</h2>
                    <p className="text-center">
                        Voici les prestations sur lesquelles je peux intervenir
                    </p>
                    <hr className="border border-primary border-3 opacity-75 w-50 mx-auto" />
                </div>
            </header>
            <ServiceCards />
        </div>
    );
}