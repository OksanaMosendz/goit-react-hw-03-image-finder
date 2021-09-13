import React from 'react';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getImages } from '../store/request/getImages';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends React.Component {
  state = {
    isLoading: false,
    images: [],
    isModalOpen: false,
    page: 1,
    searchWord: '',
    modalImage: {},
  };

  onHadleSubmitForm = word => {
    if (word.trim() !== '') {
      getImages(word, 1).then(images =>
        this.setState({
          images: images,
          page: 1,
          searchWord: word,
        }),
      );
    }
  };

  onHadleClickLoadMoreButton = () => {
    const { page, images, searchWord } = this.state;
    getImages(searchWord, page + 1).then(imgs => {
      this.setState({
        images: images.concat(imgs),
        page: page + 1,
      });
    });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  closeModal = e => {
    if (e.target.id === 'overley') {
      this.setState({ isModalOpen: false });
    }
  };

  onHandleClickImage = e => {
    const { images } = this.state;
    const modalImage = images.find(image => e.target.id === String(image.id));
    this.setState({ isModalOpen: true, modalImage: modalImage });

    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({ isModalOpen: false });
      }
    });
  };

  render() {
    const { isLoading, images, isModalOpen, modalImage } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onHadleSubmitForm} />

        {isLoading ? (
          <Loader type="Circles" color="#003cff" height={80} width={80} />
        ) : (
          <ImageGallery images={images} onClick={this.onHandleClickImage} />
        )}

        {images.length > 0 && (
          <Button onClick={this.onHadleClickLoadMoreButton} />
        )}

        {isModalOpen && (
          <Modal
            image={modalImage}
            onClick={this.closeModal}
            isModalOpen={isModalOpen}
          />
        )}
      </>
    );
  }
}
