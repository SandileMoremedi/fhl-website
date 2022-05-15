import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { app } from "../firebase_config";
import { useState, useEffect } from "react";

function AddImageButton() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitFunction = async () => {
    const storageRef = ref(getStorage(app), file.name);
    console.log(file.name);
    const colRef = collection(getFirestore(app), "images");
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
        console.log(snapshot);
        addDoc(colRef, { url: downloadURL })
          .then(setSubmitted(true))
          .catch((err) => console.log(err));
      });
    });
  };
  return (
    <>
      <div className="addDocButton">
        <span className="leftStroke"></span>
        <label htmlFor="image">+</label>
        <input
          type="file"
          name=""
          id="image"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <span className="rightStroke"></span>
      </div>
      {file && (
        <button
          type="submit"
          onClick={() => {
            submitFunction();
          }}
        >
          Submit
        </button>
      )}
      {submitted && <span className="submittedHeading">Submitted</span>}
    </>
  );
}

export default AddImageButton;
