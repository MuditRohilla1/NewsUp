import React, { Component } from 'react';

export class Newsitem extends Component {
    render() {
        const { title, description, imageUrl, newsUrl, Author, date, Source, mode } = this.props;
        const cardBackgroundColor = mode === 'dark' ? 'bg-secondary' : 'bg-light';

        return (
            <div className='container'>
                <div className={`card text-center my-3 ${cardBackgroundColor}`}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{Source}</span>
                    <img src={imageUrl ? imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className={`card-title text-${mode === 'dark' ? 'light' : 'dark'}`}>{title}...</h5>
                        <p className={`card-text text-${mode === 'dark' ? 'light' : 'dark'}`}>{!description ? "Description not available" : description}...</p>
                        <p className={`card-text text-${mode === 'dark' ? 'light' : 'dark'}`}><small className="text-body-primary">By {!Author ? "UnKnown" : Author} <br /> On {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-dark text-center">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsitem;
