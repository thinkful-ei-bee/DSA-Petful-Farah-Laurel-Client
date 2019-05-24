import React from 'react';
import { Link } from 'react-router-dom';

class AdoptionPage extends React.Component {
    render() {
    console.log('dogs:', this.props.dogs)
    console.log('cats:', this.props.cats)
        return(
            <div className="adoption-page">
                <nav role="navigation">
                    <Link to="/">Home</Link>
                </nav>
                <h1>Adopt Me!</h1>
                <div className="pet-info">  
                </div>
            </div>
        )
    }
}

export default AdoptionPage;