import React, { Component } from 'react';
import Animals from './Animals'
import Header from './Header'
import Footer from './Footer'
import { animals } from './animalsList'

class App extends Component {
  state = {
    animals: animals,
    title: 'Animal Land',
    searchInput: ''
  }
  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
  }
  likesHandler = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === 'add') {
            return { ...animal, likes: animal.likes + 1 }
          } else {
            return { ...animal, likes: animal.likes - 1 }

          }
        } else {
          return animal
        }

      })
      return {
        animals: updatedArray
      }
    })
  }
  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (

      <div className='list'>
        <Header />
        <Animals data={this.state.animals} removeHandler={this.removeHandler}
          likesHandler={this.likesHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput}
        />
        <Footer />
      </div>
    );
  }
}

export default App;