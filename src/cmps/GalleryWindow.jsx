import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const GalleryWindow = () => {
  return <div className="h-[415px] w-[800px]"><ImageGallery loading="lazy" thumbnailPosition="left" showFullscreenButton={false} showPlayButton={false} originalHeight="200px" items={images} /> </div>
}

export default GalleryWindow
