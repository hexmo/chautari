import { signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";

function SignIn({ providerImage, provider }) {
  function signInWithProvider() {
    signInWithRedirect(auth, provider);
  }

  return (
    <div className="grid justify-center">
      <img
        role="button"
        src={providerImage}
        onClick={signInWithProvider}
        alt="Sign in"
        className="h-9 object-contain hover:shadow-2xl hover:saturate-200"
      />
    </div>
  );
}
export default SignIn;
