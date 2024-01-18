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
                { /* Other languages blog page */ }
                <Route path="/other" element={<Construction header={
                    <h1 className="text-other text-header-text font-semibold text-center pt-6 pb-2">{'{'}&nbsp;Other&nbsp;{'}'}</h1>
                }/>} />
            </Routes>
        </Router>
    );
}
