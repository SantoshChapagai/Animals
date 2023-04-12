import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Animals from './pages/Animals';
import Birds from './pages/Birds';
import './App.css';
// import Header from './Header';
// import Footer from './Footer';
import Home from './pages/Home'
import About from './pages/About'
import { animals, birds } from './animalsList';


class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    title: 'Animal Land',
    searchInput: ''
  }
  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
    const birdsArray = this.state.birds.filter(bird => bird.name !== name)
    this.setState({
      birds: birdsArray
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
      };
    });
    this.setState((prevState) => {
      const birdsArray = prevState.birds.map((bird) => {
        if (bird.name === name) {
          if (action === 'add') {
            return { ...bird, likes: bird.likes + 1 }
          } else {
            return { ...bird, likes: bird.likes - 1 }

          }
        } else {
          return bird;
        }

      })
      return {
        birds: birdsArray
      };
    });

  }
  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="./animals" className={animals}>Animals({animals.length})</NavLink>
                </li>
                <li>
                  <NavLink to="./Birds">Birds({birds.length})</NavLink>
                </li>
                <li>
                  <NavLink to="./About">About</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Animals" element={<Animals data={this.state.animals} removeHandler={this.removeHandler}
              likesHandler={this.likesHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput} />} />
            <Route path="Birds" element={<Birds data={this.state.birds}
              removeHandler={this.removeHandler}
              likesHandler={this.likesHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput} />} />
            <Route path="About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>


      // <div className='list'>
      //   <Header title={this.state.title} />
      //   <Animals data={this.state.animals} removeHandler={this.removeHandler}
      //     likesHandler={this.likesHandler}
      //     searchHandler={this.searchHandler}
      //     searchInput={this.state.searchInput}
      //   />
      //   <Birds data={this.state.birds}
      //     removeHandler={this.removeHandler}
      //     likesHandler={this.likesHandler}
      //     searchHandler={this.searchHandler}
      //     searchInput={this.state.searchInput}
      //   />
      //   <Footer />
      // </div>
    );
  }
}

export default App;