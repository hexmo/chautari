import {
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "../firebase";
import google from "../assets/images/landing-page/google-signin.png";

const provider = new GoogleAuthProvider();

getRedirectResult(auth)
  .then((result) => {
    console.log(result.user);
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });

function LandingPage() {
  function signInWithProvider() {
    signInWithRedirect(auth, provider);
  }

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

          <div className="grid justify-center">
            <img
              role="button"
              src={google}
              onClick={signInWithProvider}
              alt="Sign in with Google"
              className="h-9 object-contain hover:shadow-2xl hover:saturate-200"
            />
          </div>
        </div>
      </div>
      <div className="lg:block lg:basis-3/5 bg-chautari-image bg-bottom bg-contain bg-no-repeat opacity-20 lg:opacity-95 h-screen w-screen lg:static fixed -z-10"></div>
    </div>
  );
}
export default LandingPage;
