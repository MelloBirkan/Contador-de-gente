"use client"

import { Fragment } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const months = [{'name': 'January',
  'days': [{'date': '2024-01-01', 'isCurrentMonth': true, isToday: true },
    {'date': '2024-01-02', 'isCurrentMonth': true},
    {'date': '2024-01-03', 'isCurrentMonth': true},
    {'date': '2024-01-04', 'isCurrentMonth': true},
    {'date': '2024-01-05', 'isCurrentMonth': true},
    {'date': '2024-01-06', 'isCurrentMonth': true},
    {'date': '2024-01-07', 'isCurrentMonth': true},
    {'date': '2024-01-08', 'isCurrentMonth': true},
    {'date': '2024-01-09', 'isCurrentMonth': true},
    {'date': '2024-01-10', 'isCurrentMonth': true},
    {'date': '2024-01-11', 'isCurrentMonth': true},
    {'date': '2024-01-12', 'isCurrentMonth': true},
    {'date': '2024-01-13', 'isCurrentMonth': true},
    {'date': '2024-01-14', 'isCurrentMonth': true},
    {'date': '2024-01-15', 'isCurrentMonth': true},
    {'date': '2024-01-16', 'isCurrentMonth': true},
    {'date': '2024-01-17', 'isCurrentMonth': true},
    {'date': '2024-01-18', 'isCurrentMonth': true},
    {'date': '2024-01-19', 'isCurrentMonth': true},
    {'date': '2024-01-20', 'isCurrentMonth': true},
    {'date': '2024-01-21', 'isCurrentMonth': true},
    {'date': '2024-01-22', 'isCurrentMonth': true},
    {'date': '2024-01-23', 'isCurrentMonth': true},
    {'date': '2024-01-24', 'isCurrentMonth': true},
    {'date': '2024-01-25', 'isCurrentMonth': true},
    {'date': '2024-01-26', 'isCurrentMonth': true},
    {'date': '2024-01-27', 'isCurrentMonth': true},
    {'date': '2024-01-28', 'isCurrentMonth': true},
    {'date': '2024-01-29', 'isCurrentMonth': true},
    {'date': '2024-01-30', 'isCurrentMonth': true},
    {'date': '2024-01-31', 'isCurrentMonth': true},
    {'date': '2024-02-01'},
    {'date': '2024-02-02'},
    {'date': '2024-02-03'},
    {'date': '2024-02-04'},
    {'date': '2024-02-05'},
    {'date': '2024-02-06'},
    {'date': '2024-02-07'},
    {'date': '2024-02-08'},
    {'date': '2024-02-09'},
    {'date': '2024-02-10'},
    {'date': '2024-02-11'}]},
  {'name': 'February',
    'days': [{'date': '2024-01-29'},
      {'date': '2024-01-30'},
      {'date': '2024-01-31'},
      {'date': '2024-02-01', },
      {'date': '2024-02-02', },
      {'date': '2024-02-03', },
      {'date': '2024-02-04', },
      {'date': '2024-02-06', },
      {'date': '2024-02-07', },
      {'date': '2024-02-05', },
      {'date': '2024-02-08', },
      {'date': '2024-02-09', },
      {'date': '2024-02-10', },
      {'date': '2024-02-11', },
      {'date': '2024-02-12', },
      {'date': '2024-02-13', },
      {'date': '2024-02-14', },
      {'date': '2024-02-15', },
      {'date': '2024-02-16', },
      {'date': '2024-02-17', },
      {'date': '2024-02-18', },
      {'date': '2024-02-19', },
      {'date': '2024-02-20', },
      {'date': '2024-02-21', },
      {'date': '2024-02-22', },
      {'date': '2024-02-23', },
      {'date': '2024-02-24', },
      {'date': '2024-02-25', },
      {'date': '2024-02-26', },
      {'date': '2024-02-27', },
      {'date': '2024-02-28', },
      {'date': '2024-02-29', },
      {'date': '2024-03-01'},
      {'date': '2024-03-02'},
      {'date': '2024-03-03'},
      {'date': '2024-03-04'},
      {'date': '2024-03-05'},
      {'date': '2024-03-06'},
      {'date': '2024-03-07'},
      {'date': '2024-03-08'},
      {'date': '2024-03-09'},
      {'date': '2024-03-10'}]},
  {'name': 'March',
    'days': [{'date': '2024-02-26'},
      {'date': '2024-02-27'},
      {'date': '2024-02-28'},
      {'date': '2024-02-29'},
      {'date': '2024-03-01', },
      {'date': '2024-03-02', },
      {'date': '2024-03-03', },
      {'date': '2024-03-04', },
      {'date': '2024-03-05', },
      {'date': '2024-03-06', },
      {'date': '2024-03-07', },
      {'date': '2024-03-08', },
      {'date': '2024-03-09', },
      {'date': '2024-03-10', },
      {'date': '2024-03-11', },
      {'date': '2024-03-12', },
      {'date': '2024-03-13', },
      {'date': '2024-03-14', },
      {'date': '2024-03-15', },
      {'date': '2024-03-16', },
      {'date': '2024-03-17', },
      {'date': '2024-03-18', },
      {'date': '2024-03-19', },
      {'date': '2024-03-20', },
      {'date': '2024-03-21', },
      {'date': '2024-03-22', },
      {'date': '2024-03-23', },
      {'date': '2024-03-24', },
      {'date': '2024-03-25', },
      {'date': '2024-03-26', },
      {'date': '2024-03-27', },
      {'date': '2024-03-28', },
      {'date': '2024-03-29', },
      {'date': '2024-03-30', },
      {'date': '2024-03-31', },
      {'date': '2024-04-01'},
      {'date': '2024-04-02'},
      {'date': '2024-04-03'},
      {'date': '2024-04-04'},
      {'date': '2024-04-05'},
      {'date': '2024-04-06'},
      {'date': '2024-04-07'}]},
  {'name': 'April',
    'days': [{'date': '2024-04-01', },
      {'date': '2024-04-02', },
      {'date': '2024-04-03', },
      {'date': '2024-04-04', },
      {'date': '2024-04-05', },
      {'date': '2024-04-06', },
      {'date': '2024-04-07', },
      {'date': '2024-04-08', },
      {'date': '2024-04-09', },
      {'date': '2024-04-10', },
      {'date': '2024-04-11', },
      {'date': '2024-04-12', },
      {'date': '2024-04-13', },
      {'date': '2024-04-14', },
      {'date': '2024-04-15', },
      {'date': '2024-04-16', },
      {'date': '2024-04-17', },
      {'date': '2024-04-18', },
      {'date': '2024-04-19', },
      {'date': '2024-04-20', },
      {'date': '2024-04-21', },
      {'date': '2024-04-22', },
      {'date': '2024-04-23', },
      {'date': '2024-04-24', },
      {'date': '2024-04-25', },
      {'date': '2024-04-26', },
      {'date': '2024-04-27', },
      {'date': '2024-04-28', },
      {'date': '2024-04-29', },
      {'date': '2024-04-30', },
      {'date': '2024-05-01'},
      {'date': '2024-05-02'},
      {'date': '2024-05-03'},
      {'date': '2024-05-04'},
      {'date': '2024-05-05'},
      {'date': '2024-05-06'},
      {'date': '2024-05-07'},
      {'date': '2024-05-08'},
      {'date': '2024-05-09'},
      {'date': '2024-05-10'},
      {'date': '2024-05-11'},
      {'date': '2024-05-12'}]}]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative z-7 mt-14 w-full pt-4 pl-80 pr-[60px]">
      <header className="flex items-center justify-between w-screen border-b border-gray-200 px-6 py-4">
        <h1 className="text-base font-semibold leading-6 text-gray-900 pr-96">
          <time dateTime="2024">2024</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Ano passado</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Hoje
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Proximo ano</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Ano atual
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-blue-Atech-claro px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Relatório
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Create event
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Go to today
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Day view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Week view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Month view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div className="bg-white">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-3">
          {months.map((month) => (
            <section key={month.name} className="text-center">
              <h2 className="text-sm font-semibold text-gray-900">{month.name}</h2>
              <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                {month.days.map((day, dayIdx) => (
                  <button
                    key={day.date}
                    type="button"
                    className={classNames(
                      day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                      dayIdx === 0 && 'rounded-tl-lg',
                      dayIdx === 6 && 'rounded-tr-lg',
                      dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                      dayIdx === month.days.length - 1 && 'rounded-br-lg',
                      'py-1.5 hover:bg-gray-100 focus:z-10'
                    )}
                  >
                    <time
                      dateTime={day.date}
                      className={classNames(
                        day.isToday && 'bg-blue-Atech-claro font-semibold text-white',
                        'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
                      )}
                    >
                      {day.date.split('-').pop().replace(/^0/, '')}
                    </time>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
