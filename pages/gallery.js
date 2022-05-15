import GalleryComponent from "../components/GalleryComponent";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { app } from "../firebase_config";
function Gallery({ dataBeforeJSON }) {
  console.log(dataBeforeJSON);
  return (
    <div className="container galleryContainer">
      <h1>Gallery</h1>
      <GalleryComponent data={dataBeforeJSON} />
    </div>
  );
}

export async function getServerSideProps() {
  const firebase = getFirestore(app);
  const colRef = collection(firebase, "images");
  const dataBeforeJSON = [];
  const imagesDocs = await getDocs(colRef);
  const imagesPromise = imagesDocs.docs;
  imagesPromise.map((images) => {
    dataBeforeJSON.push({
      ...images.data(),
      id: images.id,
    });
  });
  return {
    props: {
      dataBeforeJSON,
    },
  };
}

export default Gallery;
