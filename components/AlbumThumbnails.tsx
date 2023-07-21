import { View, Image } from "react-native";

const images = [
  require('../assets/images/albums/awaken.png'),
  require('../assets/images/albums/nightmare.png'),
  require('../assets/images/albums/the_mountain.png'),
  require('../assets/images/albums/the_stage.png'),
  require('../assets/images/albums/vector.png'),
  require('../assets/images/albums/virus.png'),
];

const image = images[0];

const AlbumThumbnail = ({ image }) => {
    return (
      <View>
        <Image source={image} /> Adjust width and height as needed
      </View>
    );
  };

export { images, AlbumThumbnail }; // Export the images array and the AlbumThumbnail component to use them in other files.
