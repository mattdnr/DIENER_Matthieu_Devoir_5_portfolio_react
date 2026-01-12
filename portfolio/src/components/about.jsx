import React from "react";
import { ProgressBar } from "react-bootstrap";

/* About and skills section at the bottom of the Home page */

export default function AppAbout() {
    return (
       /* Using container class to center the content */
       /* hr to add the horizontal line */
       /* ProgressBar component from react-bootstrap to add the progress bar */
      <div className="about container shadow -sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="about-me container">
            <h3>A propos</h3>
            <hr class="border border-primary border-3 opacity-75"></hr>
            <div className="about-me-image">
                <img src="images/john-doe-about.jpg" alt="john-doe-about" />
            </div>
            <div className="about-me-text">
                <p className="text-left, text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus earum numquam cupiditate culpa magnam, ex officiis commodi. Tenetur, eum omnis mollitia delectus ut officiis aut temporibus distinctio optio? Libero, debitis!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sapiente sit facere, atque repellendus dicta eius quo. Sequi molestiae doloremque, aspernatur dolore iste corporis veritatis id itaque enim aperiam optio.</p>
            </div>
        </div>
        <div className="about-skills, container">
            <h3>Mes compétences</h3>
            <hr class="border border-primary border-3 opacity-75"></hr>
            <div class="skills">
                <p>HTML5 90%</p>
                <ProgressBar variant="danger" now={90} />
            </div>
            <div class="skills">
                <p>CSS3 80%</p>
                <ProgressBar variant="info" now={80} />
            </div>
            <div class="skills">
                <p>JAVASCRIPT 70%</p>
                <ProgressBar variant="warning" now={70} />
            </div>
            <div class="skills">
                <p>PHP 60%</p>
                <ProgressBar variant="success" now={60} />
            </div>
            <div class="skills">
                <p>REACT 50%</p>
                <ProgressBar now={50} />
            </div>
        </div>
      </div>
    )
}