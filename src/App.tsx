import { Avatar } from "./components/avatar/avatar";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-gradient-to-t from-gray-200 to-transparent h-screen flex flex-col items-center justify-center text-center gap-10">
        <Avatar />
        <h1 className="font-bold text-5xl">
          Hi, I'm <span className="text-red-600">Mark</span>.
        </h1>
        <p className="text-2xl">
          I'm a developer with focus on front-end. I love building web and
          mobile apps.
        </p>
      </div>
    </>
  );
}

export default App;
