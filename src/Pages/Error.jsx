import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import error from "/public/error_animation.json";

export default function Error() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center lg:max-w-[800px] h-[500px] md:max-w-[600px] max-w-[425px] mx-auto mb-8 mt-8">
      <Lottie
        loop
        animationData={error}
        play
        style={{ width: "100%", height: "100%" }}
      />
      <button
        onClick={handleHome}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mt-8 mb-8"
      >
        Go Home
      </button>
    </div>
  );
}
