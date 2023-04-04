import React from "react"
import {Map, Marker} from "pigeon-maps"

export default function Search() {

    return (
        <Map height={2000} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]}/>
        </Map>
    );
};

