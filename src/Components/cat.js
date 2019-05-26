import React from 'react';

class Cat extends React.Component {
  render() {
    const cats = (!this.props.cats.first) ? {} : this.props.cats.first;
    const catInfo = (!cats.value) ? {} : cats.value;

    const catList = 
    <div>
      <div className="cat-name">
        <h3>{catInfo.name}</h3> 
        <button> > </button>
      </div>
      <img src={catInfo.imageURL} alt={catInfo.imageDescription}/>
      <p>Sex: {catInfo.sex}</p>
      <p>Age: {catInfo.age} year</p>
      <p>Breed: {catInfo.breed}</p>
      <p>Story: {catInfo.story}</p>

      <button onClick={this.props.catAdoptionLine}>Adopt!</button>
    </div>

    return(
      <div className="cat">
          {catList}

        <div className="cat-queue-position">
          <p>Place in line: {this.props.catQueue}</p>
        </div>
      </div>
    )
  }
}

export default Cat;