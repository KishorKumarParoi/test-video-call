import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string | null>(null);
  const handleJoinRoom = useCallback(() => {
    if (value) navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Join a Video Room
        </h1>
        <input
          value={value ?? ""}
          type="text"
          placeholder="Enter room code"
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 text-lg"
        />
        <button
          onClick={handleJoinRoom}
          className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition"
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Home;
