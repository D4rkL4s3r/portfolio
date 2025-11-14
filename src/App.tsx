import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
