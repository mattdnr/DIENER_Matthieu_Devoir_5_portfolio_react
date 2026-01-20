import React from "react";
import { Card } from "react-bootstrap";

export default function Contact() {
    return (
        <div>
            <header className="text-center p-5 container-fluid">
                <h2>Contact</h2>
                <p>
                    Pour me contacter en vue d'un entretien ou d'une future collaboration, meci de remplir le formulaire de contact.
                </p>
                <hr className="border border-primary border-3 opacity-75 w-50 mx-auto"></hr>
            </header>
            <div className="container shadow p-5 mb-5 bg-body-tertiary rounded">
                <div className="row">
                    <div className="col-xxl-6 col-xl-12">
                        <h3>Formulaire de Contact</h3>
                        <hr className="border border-primary border-3 opacity-75"></hr>
                        <div className="input-group mb-3">
                            
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-12">
                        <h3>Mes coordonnées</h3>
                        <hr className="border border-primary border-3 opacity-75"></hr>
                    </div>
                </div>
            </div>
        </div>
    );
}