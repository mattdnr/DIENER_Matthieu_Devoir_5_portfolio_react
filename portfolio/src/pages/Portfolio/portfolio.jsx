import React from "react";
import { Card } from "react-bootstrap";


export default function Portfolio() {
    return (
        <div>
            <div class="container-fluid w-100 p-5 bg-body-tertiary text-white rounded">
                <div class="row">
                    <div class="col">
                        <Card>
                            <Card.Img variant="top" src="images/fresh-food.jpg" />
                            <Card.Body>
                                <Card.Title>Fresh Food</Card.Title>
                                <Card.Text>
                                    Site de vente de produits frais en ligne.
                                </Card.Text>
                                <Card.Link href="https://github.com/github-john-doe/fresh-food" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"></svg>
                                    <span>Code source</span>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}   