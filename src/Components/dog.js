import React from 'react';

class Dog extends React.Component {
  render() {
    console.log('dogs:', this.props.dogs)
    return(
      <div className="dog">
          <h1>I love dogs!</h1>
      </div>
    )
  }
}

export default Dog;