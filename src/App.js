import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e =>{
    this.setState({ searchField: e.target.value });
  }

  //e represents the synthetic event, and in that synthetic event we have target which provide the HTML element which fires that event.
  //When we type in input the state will not update instantly because setState is an asynchronous call.
  //We can pass a callback as second argument in setState which after the setState is finished.
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox placeholder="Search Monsters" handleChange={ this.handleChange } />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
