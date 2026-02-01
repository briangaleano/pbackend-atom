import * as functions from "firebase-functions";

const config = functions.config();

export const env = {
  mail: {
    email: config.mail.email,
    password: config.mail.password,
  },
  firebase: {
    api: config.firebase.FIREBASE_API_KEY,
  },
};
