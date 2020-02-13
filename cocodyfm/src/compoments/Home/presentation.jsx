import React, { useState, useRef } from 'react'

import { Tabs, useTabState, Panel } from '@bumaga/tabs'

import { useInterval } from '@restart/hooks'
import { motion } from 'framer-motion'

import { useHover } from '../../useHover'

import Programme from './programme';
import Partener from "./partener";


const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
    const { isActive, onClick } = useTabState()

    return (
        <button className={cn('tab', isActive && 'active')} Style="margin-left: 7px;" onClick={onClick}>
            {children}
        </button>
    )
}

const duration = 5
const variants = {
    pd: { scaleX: 1 },
    pl: { scaleX: 0 }
}


let HomePage = () => {


    const tabsRef = useRef()
    const [index, setIndex] = useState(0)
    const [paused, stop] = useState(false)

    useHover(tabsRef, () => stop(true), () => stop(false))
    useInterval(() => setIndex(index => (index + 1) % 2), duration * 1000, paused)



    return (
        <div>

            <header class="header position-relative">
                <a href="#prog">
                    <div class="scroll_helper">
                        <div class="scroll_helper--container">
                        </div>
                    </div>
                </a>

            </header>

            <div class="section-presentation">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                            <div class="section-presentation__content">
                                <Tabs state={[index, setIndex]}>
                                    <div className='tabs' ref={tabsRef}>

                                        <motion.div className='tab-progress' key={index} initial={{ scaleX: 1 }} variants={variants} animate={paused
                                            ? 'pd' : 'pl'} transition={paused ? { ease: 'easeInOut', duration: 0.16 } : { ease: 'linear', duration }
                                            } />

                                        <Panel>
                                            <h1 class="heading-title"><span>L</span>e mot de la directrice</h1>
                                            <p class="paragraph u-marginTop-standard">
                                                Je suis Marie-Catherine KOISSY,
                                                Femme de média,
                                                Communicatrice spécialisée en management de radios de proximité.
                                                Je suis la Promotrice et Directrice Générale de la Radio Cocody FM 98.5 depuis 20ans aujourd'hui.
                                                Après avoir été animatrice Radio/TV RTI de 1991 à 1998, j'ai eu envie de créer ma propre Radio afin de
                                                mettre en exergue ce que j'avais appris auprès de mes formateurs en termes d'organisation d'antenne et
                                                d'animation .
                                                C'est ainsi que dès le lancement de la dite radio en Mai 1999,j'ai bénéficié d'une bourse de l'Ambassade
                                                de France en Juillet 1999 ,pour une formation en "Management de radios de proximité " à l'Institut
                                                National de l'Audiovisuel en France, ce qui a ajouté un plus à ma jeune expertise.
                                                Depuis 20ans, les missions de Cocody FM98.5 ont été, entre autres, d'accompagner l'Etat dans ses
                                                missions régaliennes de formation et d'éducation des populations.
                                                Nous avons donné la chance, à tous les jeunes passionnés de radio qui s'adressaient à nous, de réaliser
                                                leur rêve, en bénéficiant gratuitement de notre savoir-faire.
            </p>
                                            <a href="{}" class="basic-link">Continuez la lecture</a>
                                        </Panel>

                                        <Panel>
                                            <h1 class="heading-title"><span>H</span>&nbsp; istorique de la radio</h1>
                                            <p class="paragraph u-marginTop-standard">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Impedit, corporis odit ipsum enim libero non laborum dolor
                                                quidem deserunt! Minus nihil adipisci neque dolores ipsam?
                                                Alias magnam quisquam nulla pariatur.
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Impedit, corporis odit ipsum enim libero non laborum dolor
                                                quidem deserunt! Minus nihil adipisci neque dolores ipsam?
                                                Alias magnam quisquam nulla pariatur.
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Impedit, corporis odit ipsum enim libero non laborum dolor
                                                quidem deserunt! Minus nihil adipisci neque dolores ipsam?
                                                Alias magnam quisquam nulla pariatur.
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Impedit, corporis odit ipsum enim libero non laborum dolor
                                                quidem deserunt! Minus nihil adipisci neque dolores ipsam?
                                                Alias magnam quisquam nulla pariatur.
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Impedit, corporis odit ipsum enim libero non laborum dolor
                                                quidem deserunt! Minus nihil adipisci neque dolores ipsam?
                                                Alias magnam quisquam nulla pariatur.
            </p>
                                            <a href="#" class="basic-link">Continuez la lecture</a>
                                        </Panel>
                                        <hr className="mb-5 mt-5" />
                                        <div className="tab">
                                            {/* <div className='tab-list'> */}
                                            <Tab>
                                                <div class="tablinks" >
                                                    Mot de la directrice
            </div>
                                            </Tab>

                                            <Tab>
                                                <div class="tablinks" >
                                                    Historique de la radio
            </div>
                                            </Tab>
                                            {/* </div> */}
                                        </div>


                                    </div>
                                </Tabs>
                            </div>
                        </div>
                        <div class="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="section-presentation__img-box">
                                <img src="img/img1.jpg" class="img-fluid" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Programme />


            <div class="section-services_com">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="section-service__block">
                                <div>
                                    <h2 class="heading-title"><span>S</span> ervice commerciale</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="section-services_com__description text-center">
                                <div>
                                    <h3>
                                        Pour participer à nos émissions,<br />
                                        faire des spots publicitaires ou pour tout autre préoccupation.
            </h3>
                                    <a href="{}">
                                        <button type="button" class="btn-link_contact"> Contactez-nous</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="section-services_com__contact">
                                <div>
                                    <h2>Vous voulez en savoir plus?</h2>
                                    <p>
                                        N’hésitez pas à nous contacter par téléphone ou par email.
            </p>

                                    <ul class="mt-5">
                                        <li class="d-flex mb-3">
                                            <div class="circle">
                                                <img src="img/svg/telephone-handle-silhouette_icon-ic ons.com_73380.svg" alt="icon telephone" class="img-fluid" />
                                            </div>
                                            <div class="info">
                                                <h4>Contact</h4>
                                                <p>07074488 / 79778854</p>
                                            </div>
                                        </li>
                                        <li class="d-flex">
                                            <div class="circle">
                                                <img src="img/svg/email-envelope-outline-shape-with-r ounded-corners_icon-icons.com_56530.svg" alt="icon telephone" class="img-fluid" />
                                            </div>
                                            <div class="info">
                                                <h4>Email</h4>
                                                <p>cocodyfm@gmail.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="section-tv">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 u-marginTop-standard">
                            <h1 class="heading-title"><span>A</span> &nbsp; imska TV</h1>
                        </div>
                    </div>
                    <div class="row u-marginTop-standard">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="card-article">
                                <a href="{}">
                                    <div class="card-article__illustration"></div>
                                    <h3 class="mt-3">Lorem ipsum dolor sit amet consectetur azert adipisicing elit. Suscipit, sapiente?x</h3>
                                    <a href="{}" class="basic-link">lire plus</a>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="card-article">
                                <a href="{}">
                                    <div class="card-article__illustration"></div>
                                    <h3 class="mt-3">Lorem ipsum dolor sit amet consectetur azert adipisicing elit. Suscipit, sapiente?x</h3>
                                    <a href="{}" class="basic-link">lire plus</a>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="card-article">
                                <a href="{}">
                                    <div class="card-article__illustration"></div>
                                    <h3 class="mt-3">Lorem ipsum dolor sit amet consectetur azert adipisicing elit. Suscipit, sapiente?x</h3>
                                    <a href="{}" class="basic-link">lire plus</a>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="{}" class="btn-link">
                            <button type="button">Voir plus</button>
                        </a>
                    </div>
                </div>
            </div>



            <div class="section-team u-marginTop-standard">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 ">
                            <h1 class="heading-title"><span>N</span> &nbsp; otre équipe</h1>
                        </div>
                    </div>
                    <div class="row u-marginTop-standard">
                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                            <div class="user-card mb-3">
                                <div class="user-card__illustration">
                                    <img src="img/client.png" alt="photo-user" />
                                </div>
                                <div class="user-card__content mt-3">
                                    <h2 class="mb-0">Marie-Catherine KOISSY</h2>
                                    <p>Directrice générale</p>
                                    <ul class="mt-4">
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/network.svg" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/Twitter_Bird.png" alt="social lo go" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/insta.png" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                            <div class="user-card mb-3">
                                <div class="user-card__illustration">
                                    <img src="img/client.png" alt="photo-user" />
                                </div>
                                <div class="user-card__content mt-3">
                                    <h2 class="mb-0">Marie-Catherine KOISSY</h2>
                                    <p>Directrice générale</p>
                                    <ul class="mt-4">
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/network.svg" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/Twitter_Bird.png" alt="social lo go" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/insta.png" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                            <div class="user-card mb-3">
                                <div class="user-card__illustration">
                                    <img src="img/client.png" alt="photo-user" />
                                </div>
                                <div class="user-card__content mt-3">
                                    <h2 class="mb-0">Marie-Catherine KOISSY</h2>
                                    <p>Directrice générale</p>
                                    <ul class="mt-4">
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/network.svg" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/Twitter_Bird.png" alt="social lo go" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/insta.png" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                            <div class="user-card mb-3">
                                <div class="user-card__illustration">
                                    <img src="img/client.png" alt="photo-user" />
                                </div>
                                <div class="user-card__content mt-3">
                                    <h2 class="mb-0">Marie-Catherine KOISSY</h2>
                                    <p>Directrice générale</p>
                                    <ul class="mt-4">
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/network.svg" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/Twitter_Bird.png" alt="social lo go" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{}" >
                                                <div>
                                                    <img src="img/social/insta.png" alt="social logo" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Partener />
        </div>
    )
}


export default HomePage;