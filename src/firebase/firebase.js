import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const auth = firebase.auth();
const databaseSettings = {timestampsInSnapshots: true};
database.settings(databaseSettings);

// Enable offline persistence
database.enablePersistence()
  .then(() => {
    console.log('offline persistence enabled');
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          window.alert('Egyszerre csak egy fülben futhat az offline persistence!');
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          window.alert('Ez a böngésző nem támogatja az offline persistence-t!');
      }
  });

// export { firebase, auth, database as default };
export { firebase, auth, database };