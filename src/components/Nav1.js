import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useScrollPosition } from './useScrollPosition'




const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'New Releases', href: '#', current: false },
    { name: 'Podcast & Shows', href: '#', current: false },
    { name: 'Audiobooks', href: '#', current: false },
    { name: 'My Collection', href: '#', current: false },

]


//this function use to make in class name true and false class and also give somthing to the class inself happen all the time

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Nav1() {
    const scrollPosition = useScrollPosition()
    return (
        <>
            <Disclosure as="nav" className={classNames(
                scrollPosition ? "sm:py-2" : "sm:py-5", "bg-neutral-950  py-1 "
            )}>
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16  justify-between">
                                <div className={classNames(
                                    scrollPosition ? "sm:block" : "sm:hidden", "absolute    left-0 inset-y-3"
                                )}>
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className='absolute items-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2  inset-y-1'>
                                    <h1 className={classNames(
                                        scrollPosition ? 'sm:text-xl' : ' sm:text-3xl', 'text-white text-xl  font-black'
                                    )}>PODCAST</h1>
                                </div>




                                <div className="absolute  flex items-center  right-0 inset-y-5  ">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
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

                        <Disclosure.Panel className={classNames(
                            scrollPosition ? "sm:block" : "sm:hidden"
                        )}>
                            <div className="space-y-1 px-2 pb-3 pt-2 ">
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
                )}
            </Disclosure>
            <hr />

            <div className={classNames(
                scrollPosition ? 'sm:hidden' : ' sm:block', 'hidden  bg-neutral-950  py-2'
            )}>

                <div className="flex   justify-center">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? ' text-white' : ' text-slate-50/50   hover:text-white',
                                '  rounded-md px-3 py-2 text-sm font-medium'
                                //here i have function what happen when the item.current=true or false and after coma that is my class for this item 
                                //how will be like in all of this status
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Nav1
