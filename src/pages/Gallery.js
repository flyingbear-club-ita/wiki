import React from 'react'
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Layout from '@theme/Layout';
import '../css/Gallery.css';

class Gallery extends React.Component {

  render() {
    const images = [
      {
        original: 'photos/benchyBlu.jpg',
        thumbnail: 'photos/benchyBlu.jpg',
        description: [<h1>Benchy</h1>, <h2>PLA Sunlu Silk Blue</h2>],
      },
      {
        original: 'photos/alien.jpg',
        thumbnail: 'photos/alien.jpg',
        description: [<h1>Alien</h1>, <h2>PLA Sunlu White</h2>],
      },
      {
        original: 'photos/babyGroot.jpg',
        thumbnail: 'photos/babyGroot.jpg',
        description: [<h1>Baby Groot Rock</h1>, <h2>PLA Eryone White</h2>],
      },
      {
        original: 'photos/vegeta.jpg',
        thumbnail: 'photos/vegeta.jpg',
        description: [<h1>Vegeta</h1>, <h2>PLA Eryone White</h2>],
      },
      {
        original: 'photos/soldatino.jpeg',
        thumbnail: 'photos/soldatino.jpeg',
        description: [<h1>Soldatino</h1>, <h2>PLA Eryone White</h2>, <h2>IG: @jacksalici</h2>],
      },
      {
        original: 'photos/yoda.jpg',
        thumbnail: 'photos/yoda.jpg',
        description: [<h1>Yoda</h1>, <h2>PLA Sunlu Silk Green</h2>],
      },
      {
        original: 'photos/vasoOro.jpg',
        thumbnail: 'photos/vasoOro.jpg',
        description: [<h1>Vaso Oro</h1>, <h2>PLA Sunlu Silk Gold</h2>],
      },
      {
        original: 'photos/coniglio.jpg',
        thumbnail: 'photos/coniglio.jpg',
        description: [<h1>Coniglio arrabbiato</h1>, <h2>Unknown</h2>],
      },
      {
        original: 'photos/coniglioNormale.jpg',
        thumbnail: 'photos/coniglioNormale.jpg',
        description: [<h1>Coniglio</h1>, <h2>Unknown</h2>],
      },
      {
        original: 'photos/cuoreVoronoi.jpg',
        thumbnail: 'photos/cuoreVoronoi.jpg',
        description: [<h1>Cuore Voronoi</h1>, <h2>PET Basicfil Red</h2>],
      },
      {
        original: 'photos/clock.jpg',
        thumbnail: 'photos/clock.jpg',
        description: [<h1>Orologio Star Wars</h1>, <h2>PLA Geetech Fluo</h2>, <h2>PLA GST3D Black</h2>,],
      },
      {
        original: 'photos/polipo.jpg',
        thumbnail: 'photos/polipo.jpg',
        description: [<h1>Polipo articolato</h1>, <h2>PLA+ Esun Red</h2>],
      },
    ]

    return (
      <Layout>
        <ImageGallery items={images} showThumbnails={false} />
      </Layout>
    );
  }
}

export default Gallery