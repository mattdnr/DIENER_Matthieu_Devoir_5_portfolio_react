import React from "react";

import AppAddress from '../../components/address'
import AppMapEmbed from "./components/mapembed"

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
                        <div className="mb-3">
                            <input type="text" className="form-control" id="userName" placeholder="Votre nom" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="userEmail" placeholder="Votre adresse email" required></input>
                        </div>
                        <div className="mb-3">
                            <input type="tel" className="form-control" id="userPhone" placeholder="Votre numéro de téléphone" required  />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="userSubject" placeholder="Sujet" required></input>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="userMessage" placeholder="Votre message" required></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary d-block mx-auto">Envoyer</button>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-12">
                        <h3>Mes coordonnées</h3>
                        <hr className="border border-primary border-3 opacity-75"></hr>
                        <AppAddress />
                        <AppMapEmbed />
                    </div>
                </div>
            </div>
        </div>
    );
}