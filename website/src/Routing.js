import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import PythonPage from "./pages/PythonPage";
import HomePage from "./pages/HomePage";
import Construction from "./pages/Construction";

export default function Routing() {
    return (
        <Router>
            <Routes>
                { /* Main page */ }
                <Route path="/" element={<HomePage />} />
                { /* Python blog page */ }
                <Route path="/python" element={<PythonPage />}/>
                { /* C++ blog page */ }
                <Route path="/cpp" element={<Construction header={
                    <h1 className="text-cpp text-header-text font-semibold flex justify-center pt-6">{'{'}&nbsp;<a href="https://cplusplus.com" target="_blank" rel="noreferrer" className="hover:underline">C++</a>&nbsp;{'}'}</h1>
                } /> } />
                <Route path="/rust" element={<Construction header={
                    <h1 className="text-rust text-header-text font-semibold flex justify-center pt-6">{'{'}&nbsp;<a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer" className="hover:underline">Rust</a>&nbsp;{'}'}</h1>
                } />} />
                <Route path="/java" element={<Construction header={
                    <h1 className="text-java text-header-text font-semibold flex justify-center pt-6">{'{'}&nbsp;<a href="https://dev.java/" target="_blank" rel="noreferrer" className="hover:underline">Java</a>&nbsp;{'}'}</h1>
                } />} />
            </Routes>
        </Router>
    );
}
