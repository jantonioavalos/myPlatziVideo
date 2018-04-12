import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi',
  };
  handleSubmit = event => {
    event.preventDefault ();
    console.log (this.input.value, 'submited');
  };
  setInputRef = element => {
    this.input = element;
  };
  handleInputChange = event => {
    this.setState ({
      value: event.target.value.replace (' ', '-'), //this.input.value //Lo mismo.
    });
  };
  render () {
    return (
      <Search
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

export default SearchContainer;
