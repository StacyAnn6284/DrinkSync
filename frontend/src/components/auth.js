import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    const name = user.displayName;
    const profilePic = user.photoURL;

    if (name !== null) {
      localStorage.setItem("name", name);
    }
    if (profilePic !== null) {
      localStorage.setItem("profilePic", profilePic);
    }
    return user;
  } catch (err) {
    console.error("Error signing in with Google:", err);
    throw err;
  }
};
