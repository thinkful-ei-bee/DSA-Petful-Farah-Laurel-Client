import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import './Header.css'

class MainPage extends React.Component {
    render() {
        return(
            <div className="main-page">
            <Header />
              <section>
                <div className="about-us">
                  <h2>About Us</h2>
                  <p>Here at petful we rescue animals from abusive homes and relentless streets. We bring them in and providing love, shelter, food, and shots. We nurse them back to health and place them up for adoption in loving homes.</p>
                </div>
              </section>

              <section>
                <div className="about-you">
                  <h2>About You</h2>
                  <p>Do you have a love for animals that is unparalleled? If so, we want fur-parents like you. We have many dogs and cats up for adoption. Please take time to read up on how the adoption process works. Once you've done that, click the button below to adopt your next fur-baby.</p>
                </div>
              </section>

              <section>
                <div className="how-it-works">
                  <h2>How it works</h2>
                  <p>We have many dogs and cats ready to find their forever home! However there is a process to follow. We operate on a first come, first serve basis. This applies to dogs, cats, and humans.</p>
                  <p>Dogs and cats at the front of the line are available for adoption immediately, as long as there is no one in line ahead of you.</p>
                </div>
              </section>
                <Link to="/adoptions" className="adopt-here">Adopt Here!</Link>
            </div>
        )
    }
}

export default MainPage;