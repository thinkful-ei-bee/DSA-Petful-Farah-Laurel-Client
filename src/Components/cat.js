import React from 'react';

class Cat extends React.Component {
  render() {
    const cats = this.props.cats;
    const catInfo = cats.map((cat, i) => 
      <div key={i}>
        <img src={cat.imageURL} alt={cat.imageDescription}/>
        <h3>More about: {cat.name}</h3>
        <p>Sex: {cat.sex}</p>
        <p>Age: {cat.age}</p>
        <p>Breed: {cat.breed}</p>
        <p>Story: {cat.story}</p>
      </div>
      )

    return(
      <div className="cat">
          {catInfo}
      </div>
    )
  }
}

export default Cat;