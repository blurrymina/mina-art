import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, set, push, remove, update } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANdwlpY4ZNrKhq6GfCXUuQaUs4y2W9Yq4",
    authDomain: "mina-art.firebaseapp.com",
    databaseURL: "https://mina-art-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "mina-art",
    storageBucket: "mina-art.firebasestorage.app",
    messagingSenderId: "595256450426",
    appId: "1:595256450426:web:c1f34a0c2a52c17b8a8ac3",
    measurementId: "G-H8Y5S6RNRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

// Sign in admin function
export const signInAdmin = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error('Authentication failed: ' );
  }
};

// Sign out function
export const signOutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error('Sign-out failed: ');
  }
};

// Image upload function
export const uploadImage = async (file: File) => {
  const storageRef = ref(storage, `images/${file.name}`);
  try {
    // Upload file to Firebase Storage
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { url, name: file.name }; // Return URL and name of the image
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Error uploading image');
  }
};

// Save image to the database with the name and order
// Image metadata saving function
export const saveImageWithOrder = async (imageName: string, order: number) => {
    const imagesRef = dbRef(database, 'images');
    const newImageRef = push(imagesRef); // Create a new unique ref for the image
    try {
      await set(newImageRef, {
        name: imageName,
        order,
      });
    } catch (error) {
      console.error('Error saving image with order:', error);
      throw new Error('Error saving image');
    }
  };
  

// Delete image from the database
export const deleteImage = async (imageId: string) => {
  const imageRef = dbRef(database, `images/${imageId}`);
  try {
    await remove(imageRef); // Remove the image from Firebase Realtime Database
  } catch (error) {
    console.error('Error deleting image:', error);
    throw new Error('Error deleting image');
  }
};

// Reorder image in the database
export const reorderImage = async (imageId: string, newOrder: number) => {
  const imageRef = dbRef(database, `images/${imageId}`);
  try {
    await update(imageRef, { order: newOrder });
  } catch (error) {
    console.error('Error updating image order:', error);
    throw new Error('Error updating image order');
  }
};

export { auth, storage, database, signInWithEmailAndPassword, signOut, ref, set, push };
