import React from "react"
import {Map, Marker} from "pigeon-maps"

export default function MapView({setview}) {

    return (
        <Map height={2000} defaultCenter={[47.3, -0.563166]} defaultZoom={12}>
            <div className={"fixed flex flex-row justify-center self-center top-10 w-full"}>
                <button
                    className={"bg-orange-500 text-white w-32 font-bold rounded-l-xl"}
                    onClick={() => setview("map")}>
                    Carte
                </button>
                <button
                    className={"bg-gray-200 w-32 font-bold rounded-r-xl"}
                    onClick={() => setview("list")}>
                    Liste
                </button>
            </div>
            <Marker width={50} color={"black"} anchor={[47.478419, -0.563166]}/>
            <Marker width={50} color={"black"} anchor={[47.47, -0.55]}/>
            <Marker width={50} color={"black"} anchor={[47.45, -0.53]}/>
        </Map>

    );
};

