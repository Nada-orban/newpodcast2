import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { useTheme } from "next-themes";


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Design', href: '/design' },
    { name: 'Development', href: '/development' },
    { name: 'Design & Dev', href: '/designDev' },
    { name: 'Business', href: '/business' },
    { name: 'Lifestyle', href: '/lifestyle' },
    { name: 'My collection', href: '/mycollection' },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




function Nav2() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const router = useRouter()
    return (
        <Disclosure as="nav" className="bg-neutral-950  sticky top-0 z-10 border-b-2 border-neutral-500 ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <Link href='/'>
                                <div className='absolute items-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 md:left-12 md:px-auto '>
                                    <h1 className='text-white text-xl  font-black '
                                    >PODCAST</h1>
                                </div>
                            </Link>

                            <div className="hidden  md:block absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2  inset-y-1">
                                <div className="flex  items-center gap-2 pt-1 ">
                                    {navigation.map((item) => {
                                        const isActive = router.asPath === item.href;
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    isActive ? ' text-white' : ' text-slate-50/50   hover:text-white',
                                                    '  rounded-md px-1 text-sm font-medium'
                                                    //here i have function what happen when the item.current=true or false and after coma that is my class for this item 
                                                    //how will be like in all of this status
                                                )}
                                                aria-current={isActive ? 'page' : undefined}


                                            >
                                                {item.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="absolute  flex items-center  right-2 sm:right-1 inset-y-5  justify-between ">
                                <div className='rounded-full w-8 h-8  bg-gray-800 p-2 text-gray-400  cursor-pointer mx-1' onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}> {theme === "light" ? <MdDarkMode style={{ color: "white", }} /> : <BsFillSunFill style={{ color: "#fbbf24", }} />} </div>
                                <Link href='/search'>
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>

                                        <MagnifyingGlassIcon className=" h-6 w-6 " aria-hidden="true" />



                                    </button>
                                </Link>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3 hidden sm:block">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

export default Nav2
