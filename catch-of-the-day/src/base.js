import Rebase from "re-base";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWMZCa0OoLjytJxo2mP0BMZ7XvoKb9aD0",
  authDomain: "catch-of-the-day-jencios.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jencios.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
