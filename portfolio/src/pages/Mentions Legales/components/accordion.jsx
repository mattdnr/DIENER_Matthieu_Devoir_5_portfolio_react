import React from "react";
import { Accordion, AccordionHeader, AccordionItem } from "react-bootstrap";

import AppAddress from "../../../components/address"

export default function AppAccordion() {
    return (
        <Accordion defaultActiveKet="0" className="container p-5 mb-5 bg-body-tertiary">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Éditeur du site
                </Accordion.Header>
                <Accordion.Body>
                    <AppAddress />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Hébergeur
                </Accordion.Header>
                <Accordion.Body>
                    <address>
                        <h4>alwaysdata</h4>
                        <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span><br />
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColorfill" class="bi bi-globe2" viewBox="0 0 16 16" aria-hidden='true'>
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                            </svg>
                            <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a>
                        </span>
                    </address>
                </Accordion.Body>
            </Accordion.Item>
            <AccordionItem eventKey="2">
                <AccordionHeader>
                    Crédits
                </AccordionHeader>
                <Accordion.Body>
                    <h4>Crédits</h4>
                    <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://centre-europeen-formation.fr" target="_blank" rel="noreferrer" >Centre Européen de formation</a>.</p>
                    <p>
                        <em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel='noreferrer'>Pixabay</a>.</em>
                    </p>
                    <p>
                        <em>Le favicon de ce site a été fourni par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>.</em>
                    </p>
                </Accordion.Body>
            </AccordionItem>
        </Accordion>
    )
}