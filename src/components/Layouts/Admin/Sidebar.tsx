import { useState } from "react";
import { SidebarDashBoardItem } from "../../../config/SidebarDashBoardItem";
import { Link,useLocation } from 'react-router-dom';


const Sidebar = () =>{
    const location = useLocation();
    const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(null);
    const toggleDropdown = (index:number) => {
        setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
    };
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <>
            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">

                        {
                            SidebarDashBoardItem.map((groups, indexGroup) => (
                                <div key={indexGroup}>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            {groups.icon}
                                            <span className="ms-3">{groups.label}</span>
                                        </a>
                                    </li>
                                    <li>
                                        {
                                            groups.items.map((item, indexItem) => (
                                                <div key={indexItem}>
                                                    <button type="button" onClick={() => toggleDropdown(indexGroup)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                                        {item.icon}
                                                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{item.label}</span>
                                                        <svg className={`w-3 h-3 ${dropdownOpenIndex === indexGroup ? "transform rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                    </button>
                                                    <ul className={`py-2 space-y-2 ${dropdownOpenIndex === indexGroup ? "block" : "hidden"}`}>
                                                        {
                                                            item.links.map((itemLink, indexLink) => (
                                                                <li key={indexLink}>
                                                                    <Link 
                                                                    to={itemLink.to}
                                                                    className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isActive(itemLink.to) ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
                                                                    >{itemLink.title}
                                                                    </Link>
                                                                </li>
                                                            ))  
                                                        }
                                                    </ul>
                                                </div>
                                            ))
                                        }
                                    </li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
