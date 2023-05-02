import React from "react"

export default function ListView({setview}) {

    let events = {}

    fetch("http://backendv2.bewaveofficial.com/api/getevents")
        .then(response => response.json())
        .then(data => {
            events = data
            console.log(events)
        })

    return (
        <div className={"text-white min-h-[100vh]"}>
            <div className={"flex flex-row justify-center mt-10"}>
                <button
                    className={"bg-gray-200 w-40 font-bold text-black rounded-l-xl"}
                    onClick={() => setview("map")}>
                    Carte
                </button>
                <button
                    className={"bg-orange-500 w-40 font-bold rounded-r-xl"}
                    onClick={() => setview("list")}>
                    Liste
                </button>
            </div>
            <h1>List</h1>
        </div>
    );
};

