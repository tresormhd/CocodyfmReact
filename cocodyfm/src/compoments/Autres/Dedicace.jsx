import React from 'react'

const Dedicace = () => {
    return (
        <div>
        <header class="second-header"></header>

        <div class="section-dedicace u-marginTop-big u-marginBottom-big">
            <div class="container">
                <div class="row">
                    <div class="section-dedicace__content">
                        <div class="col-12 mb-5 text-center">
                            <button data-toggle="modal" data-target="#dedicace-modal" class="btn-link__dedicace">Envoyer une dédicade</button>
                        </div>

                        <div class="d-flex" style="align-items: center;">
                            <div class="modal fade" id="dedicace-modal" tabindex="-1" role="dialog" aria-labelledby="dedicace-modalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header" style="border: none;">
                                        <h5 class="modal-title" id="dedicace-modalLabel">Dédicace</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" class="section-dedicace__form">
                                            <div class="d-flex">
                                                <div class="section-dedicace__form-group">
                                                    <input type="text" placeholder="Votre pseudo"/>
                                                </div>
                                                <div class="section-dedicace__form-group">
                                                    <input type="mail" placeholder="Votre mail"/>
                                                </div>
                                            </div>
                                            <div class="section-dedicace__form-textarea mb-3">
                                                <textarea name="" id="" placeholder="Votre message" cols="10" rows="10"></textarea>
                                            </div>
                                            <div class="modal-footer text-center" style="border: none;">
                                                <button class="btn-link_modal">Save changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-dedicace_block">
                        <div class="row mb-5">
                            <div class="col-3 text-center section-dedicace_block-info">
                                <h5>lamia lamia</h5>
                                <span>il y'a 5 min</span>
                            </div>
                            <div class="col-9">
                                <div class="section-dedicace_block-card">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis nulla numquam officia quae modi enim! Iste, numquam est perferendis alias cumque hic, perspiciatis illum ipsa fugit sed mollitia consectetur!</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-3 text-center section-dedicace_block-info">
                                <h5>lamia lamia</h5>
                                <span>il y'a 5 min</span>
                            </div>
                            <div class="col-9">
                                <div class="section-dedicace_block-card">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis nulla numquam officia quae modi enim! Iste, numquam est perferendis alias cumque hic, perspiciatis illum ipsa fugit sed mollitia consectetur!</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-3 text-center section-dedicace_block-info">
                                <h5>lamia lamia</h5>
                                <span>il y'a 5 min</span>
                            </div>
                            <div class="col-9">
                                <div class="section-dedicace_block-card">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis nulla numquam officia quae modi enim! Iste, numquam est perferendis alias cumque hic, perspiciatis illum ipsa fugit sed mollitia consectetur!</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-3 text-center section-dedicace_block-info">
                                <h5>lamia lamia</h5>
                                <span>il y'a 5 min</span>
                            </div>
                            <div class="col-9">
                                <div class="section-dedicace_block-card">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis nulla numquam officia quae modi enim! Iste, numquam est perferendis alias cumque hic, perspiciatis illum ipsa fugit sed mollitia consectetur!</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-3 text-center section-dedicace_block-info">
                                <h5>lamia lamia</h5>
                                <span>il y'a 5 min</span>
                            </div>
                            <div class="col-9">
                                <div class="section-dedicace_block-card">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis nulla numquam officia quae modi enim! Iste, numquam est perferendis alias cumque hic, perspiciatis illum ipsa fugit sed mollitia consectetur!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
    
    export default Dedicace;
    