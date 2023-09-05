import React from "react";
import "./Content.css";
import { Routes, Route } from "react-router-dom";
import Route1 from "../../views/Route1"
import Route2 from "../../views/Route2";
import Route3 from "../../views/Route3";
import Route4 from "../../views/Route4";
import NotFound from "../../views/NotFound";

export default (props) => {
    return(<React.Fragment>
        <main className="content">
            <Routes>
                <Route path="/route2" element={<Route2 />}/>
                <Route path="/route3" element={<Route3 />}/>
                <Route path="/route4" element={<Route4 />}/>
                <Route path="/" element={<Route1 />}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    </React.Fragment>);
};
