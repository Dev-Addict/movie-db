import {Fragment, createRef} from 'react';

import CreateMovieFrom from "./CreateMovieForm";

const Modal = () => {
    let closeButtonRef = createRef();

    const createMovie = () => {
        closeButtonRef.current.click();
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Movie
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <CreateMovieFrom createMovie={createMovie}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={closeButtonRef}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Modal;