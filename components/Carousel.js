const Carousel = (props) => {
    const {images} = props;

    const renderIndicators = () => (
        images.map(({image}, index) => (
            <li
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index === 0 ? '  active' : ''}
                key={image}>
            </li>
        ))
    );

    const renderItems = () => (
        images.map(({image, name}, index) => (
            <div className={`carousel-item${index === 0 ? ' active' : ''}`}
                 key={image}
                 style={{maxHeight: 400}}>
                <img className="d-block img-fluid"
                     src={image}
                     alt={name}/>
            </div>
        ))
    );

    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {renderIndicators()}
            </ol>
            <div className="carousel-inner" role="listbox">
                {renderItems()}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
               data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
               data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;