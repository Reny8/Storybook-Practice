import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/nav-bar/nav-bar";
import CounterPage from "./pages/counter-page";
import TaskPage from "./pages/task-page";
function App() {
  const links = [
    { name: "Counter", href: "/" },
    { name: "Task Taker", href: "/task" },
  ];
  return (
    <>
      <BrowserRouter>
        <NavBar
          title="Storybook Practice"
          links={links}
          backgroundColor="#2e3841"
        />
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/task" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
