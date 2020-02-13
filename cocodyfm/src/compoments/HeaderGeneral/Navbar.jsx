import React from 'react';
import { NavLink } from 'react-router-dom'


let Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light container-fluid fixed-top">
                <a className="navbar-brand" Style="" href="{}">Cocody Fm <span>.</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-nav" aria-controls="menu-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Accueil</NavLink>
                            {/* <a className="nav-link" href="/">Accueil</a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/actualite">Actualités</a> */}
                            <NavLink className="nav-link" to="/actualite">Actualités</NavLink>
                            <ul className="nav-link_dropdown submenu">
                                <li className="menu-item">
                                    {/* <a href="/actualite" className="menu-link">New d'ici et d'ailleur</a> */}
                                    <NavLink className="menu-link" to="/actualite">New d'ici et d'ailleur</NavLink>
                                </li>
                                <li className="menu-item">
                                    {/* <a href="/events" className="menu-link">Events</a> */}
                                    <NavLink className="menu-link" to="/events">Events</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="{}">playlists</a> */}
                            <NavLink className="nav-link" to="/playlist">playlists</NavLink>
                            <ul className="nav-link_dropdown submenu">
                                <li className="menu-item">
                                    {/* <a href="/playlist" className="menu-link">Playlist Aimsika</a> */}
                                    <NavLink className="menu-link" to="/playlist">Playlist Aimsika</NavLink>
                                </li>
                                <li className="menu-item">
                                    {/* <a href="/artiste" className="menu-link">Nos Artiste</a> */}
                                    <NavLink className="menu-link" to="/artiste">Nos Artiste</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/showbiz"> Showbizz</a> */}
                            <NavLink className="nav-link" to="/showbiz">Showbizz</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/galerie">Galeries</a> */}
                            <NavLink className="nav-link" to="/galerie">Galeries</NavLink>
                            <ul className="nav-link_dropdown submenu">
                                <li className="menu-item">
                                    {/* <a href="{}" className="menu-link">Radio</a> */}
                                    <NavLink className="menu-link" to="{}">Radio</NavLink>
                                </li>
                                <li className="menu-item">
                                    {/* <a href="{}" className="menu-link">Autres</a> */}
                                    <NavLink className="menu-link" to="{}">Autres</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/space">AimsikaTV</a> */}
                            <NavLink className="nav-link" to="/space">AimsikaTV</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tchat">Tchat</NavLink>
                            {/* <a className="nav-link" href="/tchat">Tchat</a> */}
                        </li>
                    </ul>
                </div>
            </nav>

        </div >

    )



}


export default Navbar;