import { FaSearch } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

export default function BottomTab({setPage, page}) {
    return (
        <div className="w-full">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-stone-950 shadow ">
                <div id="tabs" className="flex justify-evenly overflow-visible h-[50px] shadow-[0_-10px_50px_10px_rgba(100,100,100,0.4)]">
                    <button
                        onClick={() => setPage("index")}
                        className={`w-[90px] h-[90px] relative bottom-[50px] rounded-full hover:bg-orange-500 hover:text-stone-950 ${page === "index" ? "bg-orange-500 text-stone-950" : "bg-stone-950 text-orange-500"} flex flex-col justify-center inline-block text-center pt-2 pb-1`}>
                        <FaHome className="self-center text-4xl"/>
                    </button>
                    <button
                        onClick={() => setPage("search")}
                        className={`w-[90px] h-[90px] relative bottom-[50px] rounded-full hover:bg-orange-500 hover:text-stone-950 ${page === "search" ? "bg-orange-500 text-stone-950" : "bg-stone-950 text-orange-500"} flex flex-col justify-center inline-block text-center pt-2 pb-1`}>
                        <FaSearch className="self-center text-3xl"/>
                    </button>
                </div>
            </section>
        </div>
    );
}
