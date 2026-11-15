/* Halfsies: deployment settings.
   Fill in these values for your own deployment (see "Deploy your own copy" in README.md).
   While apiKey is empty, the app shows "Il collegamento al database non è configurato".

   The Firebase web config is not a secret: it ships to every browser that opens the site.
   Who can read and write data is decided by the Firestore security rules (firestore.rules). */
window.HALFSIES_CONFIG = {
  // Domain of the deployed site, without https:// (for example "my-halfsies.vercel.app").
  // On this domain, Google sign-in goes through the site itself (vercel.json forwards
  // /__/auth to Firebase), which Safari on iPhone requires.
  site: "",

  // Firebase console → Project settings → General → Your apps → Web app → SDK setup and configuration.
  firebase: {
    apiKey: "",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "",
    appId: ""
  }
};
