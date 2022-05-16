import Image from "next/image";
import { useState, useEffect } from "react";

function GalleryComponent({ data }) {
  const [images, setImages] = useState(null);

  useEffect(() => {
    setImages(data);
  }, []);
  return (
    <div className="gallery">
      {images &&
        images.map((img, index) => {
          return (
            <div className="galleryImages" key={index}>
              <Image
                src={img.url}
                layout="fill"
                alt="Gallery Pic"
                objectFit="contain"
              />
            </div>
          );
        })}
    </div>
  );
}

export default GalleryComponent;
