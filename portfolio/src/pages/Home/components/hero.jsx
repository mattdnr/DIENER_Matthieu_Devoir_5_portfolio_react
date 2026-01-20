import React from 'react';
import AppModal from './modal';

export default function AppHero() {
    return (
      <div class="hero-image">  
        <div class="hero-text">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web Full stack</h2>
          <AppModal/>
        </div>
      </div>
    )  
}
