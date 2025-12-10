import Board from "./components/board";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center mt-20 justify-center text-center ">
        <Board />
      </div>
    </>
  );
}
