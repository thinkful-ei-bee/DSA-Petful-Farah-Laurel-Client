import React from 'react';

class Cat extends React.Component {
  render() {
    console.log('cats:', this.props.cats)
    return(
      <div className="cat">
          <h1>I love cats!</h1>
      </div>
    )
  }
}

export default Cat;