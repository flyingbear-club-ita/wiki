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
        description: [<h1>Benchy</h1>, <h2>PLA Sunlu Silk Blue</h2>,<h2>By: ZeroPX</h2>],
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
        description: [<h1>Vegeta</h1>, <h2>PLA Eryone White</h2>, <h2>By: Luca2210</h2>],
      },
      {
        original: 'photos/soldatino.jpeg',
        thumbnail: 'photos/soldatino.jpeg',
        description: [<h1>Soldatino</h1>, <h2>PLA Eryone White</h2>, <h2>IG: @jacksalici</h2>],
      },
      {
        original: 'photos/yoda.jpg',
        thumbnail: 'photos/yoda.jpg',
        description: [<h1>Yoda</h1>, <h2>PLA Sunlu Silk Green</h2>, <h2>By: ZeroPX</h2>],
      },
      {
        original: 'photos/vasoOro.jpg',
        thumbnail: 'photos/vasoOro.jpg',
        description: [<h1>Vaso Oro</h1>, <h2>PLA Sunlu Silk Gold</h2>, <h2>By: Berlingo</h2>],
      },
      {
        original: 'photos/coniglio.jpg',
        thumbnail: 'photos/coniglio.jpg',
        description: [<h1>Coniglio arrabbiato</h1>, <h2>Unknown</h2>, <h2>By: Wolf87</h2>],
      },
      {
        original: 'photos/coniglioNormale.jpg',
        thumbnail: 'photos/coniglioNormale.jpg',
        description: [<h1>Coniglio</h1>, <h2>Unknown</h2>, <h2>By: Wolf87</h2>],
      },
      {
        original: 'photos/cuoreVoronoi.jpg',
        thumbnail: 'photos/cuoreVoronoi.jpg',
        description: [<h1>Cuore Voronoi</h1>, <h2>PET Basicfil Red</h2>, <h2>By: ZeroPX</h2>],
      },
      {
        original: 'photos/clock.jpg',
        thumbnail: 'photos/clock.jpg',
        description: [<h1>Orologio Star Wars</h1>, <h2>PLA Geetech Fluo</h2>, <h2>PLA GST3D Black</h2>, <h2>By: Wolf87</h2>],
      },
      {
        original: 'photos/polipo.jpg',
        thumbnail: 'photos/polipo.jpg',
        description: [<h1>Polipo articolato</h1>, <h2>PLA+ Esun Red</h2>],
      },
      {
        original: 'photos/batman.jpg',
        thumbnail: 'photos/batman.jpg',
        description: [<h1>Busto di Batman</h1>, <h2>PLA Eryone Black</h2>, <h2>By: Willysmitch</h2>],
      },
      {
        original: 'photos/alexa.jpg',
        thumbnail: 'photos/alexa.jpg',
        description: [<h1>Porta Alexa Sweepy</h1>, <h2>PLA Eryone Black</h2>, <h2>Thingiverse: WikiZell</h2>],
      },
      {
        original: 'photos/arthurFleck.jpg',
        thumbnail: 'photos/arthurFleck.jpg',
        description: [<h1>Arthur Fleck</h1>, <h2>By: Racknos</h2>],
      },
      {
        original: 'photos/diceTower.jpg',
        thumbnail: 'photos/diceTower.jpg',
        description: [<h1>Dice Tower</h1>, <h2>PLA Sunlu</h2>, <h2>By: Giomma98</h2>],
      },
      {
        original: 'photos/portaUova.jpg',
        thumbnail: 'photos/portaUova.jpg',
        description: [<h1>Porta uova</h1>, <h2>By: imatte14</h2>],
      },
      {
        original: 'photos/yodaWhite.jpg',
        thumbnail: 'photos/yodaWhite.jpg',
        description: [<h1>Yoda</h1>, <h2>By: Andrea Manca</h2>],
      },
      {
        original: 'photos/yodaBustGreen.jpg',
        thumbnail: 'photos/yodaBustGreen.jpg',
        description: [<h1>Yoda Bust</h1>, <h2>By: Racknos</h2>],
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