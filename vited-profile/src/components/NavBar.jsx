import { useState } from 'react';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState(false);
    const tabs = [
        {
            id: 1,
            text: 'Home',
            link: '/'

        },
        {
            id: 2,
            text: 'About',
            link: '/about'

        },
        {
            id: 3,
            text: 'Projects',
            link: '/projects'

        },
        {
            id: 4,
            text: 'Contact',
            link: '/contact'

        },
    ];

    return (
        <div className="z-60">
            <ul className="gap-x-5 text-lg md:text-xl lg:text-2xl text-white hidden sm:flex mr-4">
                {tabs.map(({ id, text, link }) => (
                    <a href={link} key={id}>
                        <li className="flex items-center justify-center cursor-pointer hover:scale-125 duration-225">
                            {text}
                        </li>
                    </a>
                ))}
            </ul>
            <div
                onClick={() => setActiveTab(!activeTab)}
                className="text-white cursor-pointer pr-3 sm:hidden"
                role="button"
                aria-label="Toggle Navigation"
            >
                {!activeTab ? 'Home' : 'Close'}
            </div>

            {activeTab && (
                <div className="z-60">
                    <ul className="text-6xl sm:hidden gap-y-12 flex flex-col justify-center items-center absolue top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-opacityBlue">
                        {tabs.map(({ id, text, link }) => (
                            <a href={link} key={id}>
                                <li className="text-white text-4xl flex items-center justify-center cursor-pointer hover:scale-125 duration-225">
                                    {text}
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    )
}

export default NavBar;
