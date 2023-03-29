import { FaSearch } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

export default function BottomTab({setPage}) {
    return (
        <div className="w-full">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                <div id="tabs" className="flex justify-between">
                    <button
                        onClick={() => setPage("index")}
                        className="w-full flex flex-col focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <FaHome className="self-center"/>
                        <span className="tab self-center tab-home block text-xs">Index</span>
                    </button>
                    <button
                        onClick={() => setPage("search")}
                        className="w-full flex flex-col focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <FaSearch className="self-center"/>
                        <span className="tab self-center tab-home block text-xs">Search</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
