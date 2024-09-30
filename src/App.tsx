// src/App.tsx
import { Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

function App() {
    return (
        <div className="app">
            <Routes>
                {/* Main route that shows the BlogList */}
                <Route path="/" element={<BlogList />} />

                {/* Route that shows the BlogDetail when a specific post is clicked */}
                <Route path="/posts/:id" element={<BlogDetail />} />
            </Routes>
        </div>
    );
}

export default App;
