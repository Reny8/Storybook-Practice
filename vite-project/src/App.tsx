import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/nav-bar/nav-bar";
import CounterPage from "./pages/counter-page";
function App() {
  const links = [{ name: "Counter", href: "/" }];
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
