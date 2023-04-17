import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Animals from './pages/Animals';
import Birds from './pages/Birds';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { animals, birds } from './animalsList';

class App extends Component {

  state = {
    animals: animals,
    birds: birds,
    title: 'Animal Land',
    searchInput: ''
  }



  // Handler function for removing
  removeHandler = (type, name) => {
    const updatedArray = this.state[type].filter(item => item.name !== name);
    this.setState({ [type]: updatedArray });
  }

  // Handler function for liking or disliking
  likesHandler = (type, name, action) => {
    this.setState(prevState => {
      const updatedArray = prevState[type].map(item => {
        if (item.name === name) {
          return { ...item, likes: action === 'add' ? item.likes + 1 : item.likes - 1 };
        }
        return item;
      });
      return { [type]: updatedArray };
    });
  }

  searchHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  }


  render() {
    const { animals, birds, searchInput } = this.state;

    // Filter the animals and birds
    const filteredAnimals = animals.filter(animal => animal.name.includes(searchInput));
    const filteredBirds = birds.filter(bird => bird.name.includes(searchInput));

    return (
      <div className="App">
        <BrowserRouter>
          <Header type={this.state} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<Animals
              data={filteredAnimals}
              searchInput={searchInput}
              removeHandler={name => this.removeHandler('animals', name)}
              likesHandler={(name, action) => this.likesHandler('animals', name, action)}
              searchHandler={this.searchHandler}
            />} />
            <Route path="/birds" element={<Birds
              data={filteredBirds}
              searchInput={searchInput}
              removeHandler={name => this.removeHandler('birds', name)}
              likesHandler={(name, action) => this.likesHandler('birds', name, action)}
              searchHandler={this.searchHandler}
            />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;