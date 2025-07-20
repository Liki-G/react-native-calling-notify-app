const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const msg = {
  notification: { title: 'Incoming Call', body: 'You have a call!' },
  token: process.argv[2]
};

admin.messaging().send(msg)
  .then(res => console.log('Sent:', res))
  .catch(err => console.error('Error:', err));
