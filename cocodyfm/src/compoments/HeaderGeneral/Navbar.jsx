import React from 'react';
// import { NavLink } from 'react-router-dom'


let Navbar = () => {
    
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light container-fluid fixed-top">
        <a class="navbar-brand" href="{}">Cocody Fm <span>.</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-nav" aria-controls="menu-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="menu-nav">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
        <a class="nav-link" href="{}">Accueil</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="{}">Actualités</a>
        <ul class="nav-link_dropdown submenu">
        <li class="menu-item">
        <a href="{}" class="menu-link">New d'ici et d'ailleur</a>
        </li>
        <li class="menu-item">
        <a href="{}" class="menu-link">Events</a>
        </li>
        </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="{}">playlists</a>
        <ul class="nav-link_dropdown submenu">
        <li class="menu-item">
        <a href="{}" class="menu-link">Playlist Aimsika</a>
        </li>
        <li class="menu-item">
        <a href="{}" class="menu-link">Nos Artiste</a>
        </li>
        </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="{}"> Showbizz</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="{}">Galeries</a>
        <ul class="nav-link_dropdown submenu">
        <li class="menu-item">
        <a href="{}" class="menu-link">Radio</a>
        </li>
        <li class="menu-item">
        <a href="{}" class="menu-link">Autres</a>
        </li>
        </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="{}">AimsikaTV</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="{}">Tchat</a>
        </li>
        </ul>
        </div>
        </nav>
        
        </div >
        
        )
        
        
        
    }
    
    
    export default Navbar;