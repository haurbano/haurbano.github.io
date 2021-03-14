import React from 'react';
import info from '../data/skills-basic-info.json'

function Lenguages() {
    return(
        <section class="resume-section language-section mb-5">
            <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
            <div class="resume-section-content">
                <ul class="list-unstyled resume-lang-list">
                {info.lenguages.map( lenguage => (
                    <li class="mb-2"><span class="resume-lang-name font-weight-bold">{lenguage.name}</span> <small class="text-muted font-weight-normal">({lenguage.level})</small></li>
                ))}
                </ul>
            </div>
        </section>
    );
}

export default Lenguages
