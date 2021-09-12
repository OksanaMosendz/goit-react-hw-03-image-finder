import React from 'react';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends React.Component {
  state = {
    inputValue: '',
    isLoading: 'false',
    images: [],
  };

  onHadleSubmitForm = e => {
    e.preventDefault();
  };

  onHadleClickLoadMoreButton = () => {};

  render() {
    const { isLoading, images } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onHadleSubmitForm} />
        {isLoading ? (
          <Loader
            visible={isLoading}
            type="Circles"
            color="#003cff"
            height={80}
            width={80}
          />
        ) : (
          <ImageGallery images={images} />
        )}
        {images.length > 0 && (
          <Button onClick={this.onHadleClickLoadMoreButton} />
        )}
        <Modal images={images} />
      </>
    );
  }
}
