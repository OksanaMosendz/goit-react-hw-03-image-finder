import React from 'react';
export class SearchBar extends React.Component {
  state = {
    inputValue: '',
  };

  onsubForm = e => {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    e.preventDefault();
    onSubmit(inputValue);
  };

  onHandleChangeInput = e => {
    this.setState({ inputValue: e.target.value });
    console.log(this.state);
    console.log(this.props);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className="Searchbar" onSubmit={this.onsubForm}>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChangeInput}
            value={inputValue}
          />
        </form>
      </header>
    );
  }
}
