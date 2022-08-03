import {
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { auth } from "../firebase";
import SignIn from "../components/auth/SignIn";

import googleImage from "../assets/images/landing-page/google-signin.png";
import facebookImage from "../assets/images/landing-page/facebook-signin.png";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

getRedirectResult(auth)
  .then((result) => {
    console.log(result.user);
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });

function LandingPage() {
  return (
    <div className="h-screen flex flex-row">
      <div className="lg:basis-2/5 w-full text-center">
        <div className="h-full flex flex-col justify-center space-y-4 lg:mx-10 mx-5">
          <h1 className="text-4xl font-bold text-slate-900">Chautari🌳</h1>
          <h4 className="text-2xl text-slate-700">
            A video communication app!
          </h4>
          <p className="text-slate-600">
            Create the perfect memories with your loved ones with high quality
            uninterrupted live video streams.
          </p>

          <SignIn provider={googleProvider} providerImage={googleImage} />
          <SignIn provider={facebookProvider} providerImage={facebookImage} />
        </div>
      </div>
      <div className="lg:block lg:basis-3/5 bg-chautari-image bg-bottom bg-contain bg-no-repeat opacity-20 lg:opacity-95 h-screen w-screen lg:static fixed -z-10"></div>
    </div>
  );
}
export default LandingPage;
