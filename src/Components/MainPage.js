import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return(
            <div className="main-page">
            <nav role="navigation">
            <Link to ="/">Home</Link>
            <Link to="adoptions">Adoptions</Link>
            </nav>
                <h1>Welcome to Petful</h1>
                <section>
                    <h2>About Us</h2>
                    <p>Lorem Ipsum</p>
                    <button type="button">Adopt Here!</button>
                </section>
            </div>
        )
    }
}

export default MainPage;