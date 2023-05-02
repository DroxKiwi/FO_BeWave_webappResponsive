import React from "react"
import MapView from '../components/search/Map'
import ListView from "../components/search/List";
import {useState} from "react";

export default function Search() {

    const [view, setView] = useState("map")

    return (

        <>
            {view === "map" && <MapView setview={setView}/>}
            {view === "list" && <ListView setview={setView}/> }
        </>
    );
};

