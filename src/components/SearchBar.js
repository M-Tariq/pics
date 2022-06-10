import React from "react";
class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render(props) {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label htmlFor="searchKey">Search for images</label>
          <input
            className="field"
            placeholder="Type..."
            value={this.state.term}
            type="text"
            name=""
            id="searchKey"
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
