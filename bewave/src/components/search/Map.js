import React from "react"
import {Map, Marker} from "pigeon-maps"

export default function MapView({setview}) {

    return (
        <Map height={2000} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <div className={"flex flex-row justify-center mt-10"}>
                <button
                    className={"bg-orange-500 text-white w-40 font-bold rounded-l-xl"}
                    onClick={() => setview("map")}>
                    Carte
                </button>
                <button
                    className={"bg-gray-200 w-40 font-bold rounded-r-xl"}
                    onClick={() => setview("list")}>
                    Liste
                </button>
            </div>
            <Marker width={50} anchor={[50.879, 4.6997]}/>
        </Map>

    );
};

