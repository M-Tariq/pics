import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  onFormSubmit = async (term) => {
    const images = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({
      images: images.data.results,
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
