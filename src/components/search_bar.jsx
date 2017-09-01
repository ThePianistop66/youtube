import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      temp: ''
    };
  }

  search() {
    let term = this.state.temp
    this.props.onSearchTermChange(term);
    this.setState({
      term,
      temp: ''
    })
  }

  render() {
    return (
      <div className = 'search-bar'>
        <input
          value = {this.state.temp}
          onChange = {event => this.setState({temp:event.target.value})}
          onKeyPress = {event => event.key ==='Enter' ? this.search() : ''}
        />
      </div>
    )
  }
}

export default SearchBar;
