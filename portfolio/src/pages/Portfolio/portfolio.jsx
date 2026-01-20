import React from "react";
import { Card, Button} from "react-bootstrap";


export default function Portfolio() {
    return (
        <div>
            <header>
                <img src="images/banner.jpg" className="img-fluid"/>
                <div className="container-fluid p-5">
                    <h2 className="text-center">Portfolio</h2>
                    <p className="text-center">Voici quelques-unes de mes réalisations</p>
                    <hr className="border border-primary border-3 opacity-75 w-50 mx-auto"></hr>
                </div>
            </header>
            <div className="portfolio-cards row row-cols-1 row-cols-md-3 g-4 container-fluid w-100 p-5 bg-body-tertiary rounded">
                <Card className="portfolio-card col" style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="/images/portfolio/fresh-food.jpg"/>
                    <Card.Body className="text-center" >
                        <Card.Title>Fresh Food</Card.Title>
                        <Card.Text>
                            Site de vente de produits frais en ligne.
                        </Card.Text>
                        <Button variant="primary" className="portfolio-button">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">Site réalisé avec PHP et MySQL</Card.Footer>
                </Card>
                <Card className="portfolio-card col" style={{ width: ' 22rem' }}>
                    <Card.Img variant="top" src="/images/portfolio/restaurant-japonais.jpg" />
                    <Card.Body className="text-center">
                        <Card.Title>Restaurant Akira</Card.Title>
                        <Card.Text>
                            Site d'un restaurant japonais.
                        </Card.Text>
                        <Button variant="primary" className="portfolio-button">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">Site réalisé avec Wordpress</Card.Footer>
                </Card>
                <Card className="portfolio-card col" style={{ width: ' 22rem' }}>
                    <Card.Img variant="top" src="/images/portfolio/espace-bien-etre.jpg" />
                    <Card.Body className="text-center">
                        <Card.Title>Espace bien-être</Card.Title>
                        <Card.Text>
                            Site d'un salon de massage.
                        </Card.Text>
                        <Button variant="primary" className="portfolio-button">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">Site réalisé avec LARAVEL</Card.Footer>
                </Card>
                <Card className="portfolio-card col" style={{ width: ' 22rem' }}>
                    <Card.Img variant="top" src="/images/portfolio/seo.jpg" />
                    <Card.Body className="text-center">
                        <Card.Title>SEO</Card.Title>
                        <Card.Text>
                            Amélioration du référencement d'un site e-commerce.
                        </Card.Text>
                        <Button variant="primary" className="portfolio-button" >Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">Utilisation des outils SEO</Card.Footer>
                </Card>
                <Card className="portfolio-card col" style={{ width: ' 22rem' }}>
                    <Card.Img variant="top" src="/images/portfolio/coder.jpg" />
                    <Card.Body className="text-center">
                        <Card.Title>Création d'une API</Card.Title>
                        <Card.Text>
                            Création d'une API RESTFULL publique.
                        </Card.Text>
                        <Button variant="primary" className="portfolio-button">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">PHP - SYMFONY</Card.Footer>
                </Card>
                <Card className="portfolio-card col" style={{ width: ' 22rem' }}>
                    <Card.Img variant="top" src="/images/portfolio/screens.jpg" />
                    <Card.Body className="text-center">
                        <Card.Title>Maquette d'un site web</Card.Title>
                        <Card.Text>
                            Création du prototype d'un site.
                        </Card.Text>
                        <Button variant="primary" className="portfolio-button" href="https://github.com/mattdnr/Diener_Matthieu_Devoir_4_Maquetter_le_site_Probeats_avec_Figma" target="_blank">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">Site réalisé avec Wordpress</Card.Footer>
                </Card>
            </div>
        </div>
    );
}   