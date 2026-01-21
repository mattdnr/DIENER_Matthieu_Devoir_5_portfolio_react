import React from "react";

export default function AppMapEmbed() {
    return(
        <div class="row w-100">
            <div class="col-lg-12">
                <div className="ratio ratio-16x9">
                    <iframe
                    title="john-doe-address-google-map"
                    className="my-3"
                    allowFullScreen
                    id="map-canvas" class="map_part" width="600"  height="400"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=40 rue Laure Diebold, 69009 Lyon, France&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                </div>
            </div>
        </div>
    )
}