import React from "react"

export default function ListView({setview}) {

    return (
        <div>
            <div className={"flex flex-row justify-center mt-10"}>
                <button
                    className={"bg-gray-200 w-40 font-bold"}
                    onClick={() => setview("map")}>
                    Carte
                </button>
                <button
                    className={"bg-orange-500 w-40 font-bold"}
                    onClick={() => setview("list")}>
                    Liste
                </button>
            </div>
            <h1>List</h1>
        </div>
    );
};

