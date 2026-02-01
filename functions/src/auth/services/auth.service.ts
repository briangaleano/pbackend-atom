
import {auth, db} from "../../config/firebase";
// import {sendEmail} from "../../email/services/email.service";


export const checkUser = async (email: string) => {
  let user;

  console.log("email", email);
  try {
    console.log("1");
    user = await auth.getUserByEmail(email);
  } catch {
    console.log("2");
    user = await auth.createUser({email});
    await db.collection("users").doc(user.uid).set({
      email,
      createdAt: new Date(),
    });
  }

  console.log("3");
  const token = await auth.createCustomToken(user.uid);

  return token;

  // sendEmail(email, `Ingresa con el
  //  siguiente link ${link}`, 
  // typeProcess ? "Creacion de 
  // usuario":"Confirma tu login")*/
};


