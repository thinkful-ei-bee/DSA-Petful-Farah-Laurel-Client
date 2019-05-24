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
                    <p>Here at petful we rescue animals from abusive homes and relentless streets. We bring them in and providing love, shelter, food, and shots. We nurse them back to health and place them up for adoption in loving homes.</p>
                </section>
                <section>
                    <h2>About You</h2>
                    <p>Do you have a love for animals that is unparalleled? If so, we want fur-parents like you. We have many dogs and cats up for adoption. Click the button below to adopt your next fur-baby.</p>
                </section>
                <button type="button">Adopt Here!</button>
            </div>
        )
    }
}

export default MainPage;