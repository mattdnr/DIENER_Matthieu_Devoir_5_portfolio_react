import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div>
      <header>
        <img src="/images/banner.jpg" className="img-fluid" alt="banner" />
        <div className="container p-5">
          <h2 className="text-center">Portfolio</h2>
          <p className="text-center">
            Voici quelques-unes de mes réalisations
          </p>
          <hr className="border border-primary border-3 opacity-75 w-50 mx-auto" />
        </div>
      </header>

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/images/portfolio/fresh-food.jpg"
                className="img-fluid"
              />
              <Card.Body className="text-center">
                <Card.Title>Fresh Food</Card.Title>
                <Card.Text>
                  Site de vente de produits frais en ligne.
                </Card.Text>
                <Button className="portfolio-button" variant="primary">Voir le site</Button>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                Site réalisé avec PHP & MySQL
              </Card.Footer>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/portfolio/restaurant-japonais.jpg" />
              <Card.Body className="text-center">
                <Card.Title>Restaurant Akira</Card.Title>
                <Card.Text>Site d'un restaurant japonais.</Card.Text>
                <Button className="portfolio-button" variant="primary">Voir le site</Button>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                Site réalisé avec Wordpress
              </Card.Footer>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/portfolio/espace-bien-etre.jpg" />
              <Card.Body className="text-center">
                <Card.Title>Espace bien-être</Card.Title>
                <Card.Text>Site d'un salon de massage.</Card.Text>
                <Button className="portfolio-button" variant="primary">Voir le site</Button>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                Site réalisé avec LARAVEL
              </Card.Footer>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/portfolio/seo.jpg" />
              <Card.Body className="text-center">
                <Card.Title>SEO</Card.Title>
                <Card.Text>Amélioration du référencement d'un site e-commerce.</Card.Text>
                <Button className="portfolio-button" variant="primary">Voir le site</Button>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                Utilisation des outils SEO
              </Card.Footer>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/portfolio/coder.jpg" />
              <Card.Body className="text-center">
                <Card.Title>Création d'une API</Card.Title>
                <Card.Text>Création d'une API RESTFULL publique.</Card.Text>
                <Button className="portfolio-button" variant="primary">Voir le site</Button>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                PHP - SYMFONY
              </Card.Footer>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/images/portfolio/screens.jpg" />
              <Card.Body className="text-center">
                <Card.Title>Maquette d'un site web</Card.Title>
                <Card.Text>Création du prototype d'un site.</Card.Text>
                <Button className="portfolio-button"
                  variant="primary"
                  href="https://github.com/mattdnr/Diener_Matthieu_Devoir_4_Maquetter_le_site_Probeats_avec_Figma"
                  target="_blank"
                >
                  Voir le site
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                Réalisé avec Figma
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
