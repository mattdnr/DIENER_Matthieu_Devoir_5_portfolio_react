
import { Button } from 'react-bootstrap';
import React from 'react';


function HeroImage() {
    return (
      <div class="hero-image">  
        <div class="hero-text">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web Full stack</h2>
          <Button variant="danger" href='#modal'>En savoir plus</Button>
        </div>
      </div>
    )
}



export default function AppHero() {
    return (
        <div>
            {HeroImage()}
        </div>
    )  
}
