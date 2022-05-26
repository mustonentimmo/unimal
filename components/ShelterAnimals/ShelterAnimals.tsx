import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { FilterIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import cn from 'classnames';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnimalCard from '@/components/AnimalCard/AnimalCard';
import { animalFilters, animalSortOptions } from '@/shared/filters';
import { getFullAPIUrl } from '@/shared/utilities';

import {
  addAnimalsFilter,
  animalsFilterSelector,
  removeAnimalsFilter,
} from '../../features/filtersSlice';

export default function ShelterAnimals({ animals, shelterID }: any) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const dispatch = useDispatch();
  const filters = useSelector(animalsFilterSelector);

  const filteringCriteria = (animal) => {
    const speciesCriteria = filters.species.includes(animal.species);
    const sexCriteria = filters.sex.includes(animal.sex);
    const colorCriteria = filters.color.includes(animal.color);
    const characterCriteria = filters.character.includes(animal.character);

    if (!speciesCriteria && !sexCriteria && !colorCriteria && !characterCriteria) {
      return animals;
    }
  };

  return (
    <div className="">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filtreeri</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {animalFilters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-blue-700">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto">
        <div className="relative z-10 flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Varjupaiga loomad
          </h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {animalSortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={cn(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filtrid</span>
              <FilterIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            loomad
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
            {/* Filters */}
            <form className="hidden lg:block">
              {animalFilters.map((section) => (
                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-blue-600 hover:text-blue-700">
                          <span className="font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                            ) : (
                              <PlusSmIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                onChange={(event) => {
                                  // TODO: Add as a handler function
                                  event.target.checked
                                    ? dispatch(
                                        addAnimalsFilter({
                                          value: event.target.value,
                                          section: section.id,
                                        })
                                      )
                                    : dispatch(
                                        removeAnimalsFilter({
                                          value: event.target.value,
                                          section: section.id,
                                        })
                                      );
                                }}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>
            <div className="grid gap-3 sm:grid-cols-1 lg:col-start-2 lg:col-end-6 lg:grid-cols-4">
              {animals.filter(filteringCriteria).map((animal) => {
                const profilePicturePath = animal.images.data[0].attributes.url;
                const profilePicture = profilePicturePath
                  ? getFullAPIUrl(profilePicturePath)
                  : '/animalPlaceholder.jpg';

                return (
                  <AnimalCard
                    key={animal.id}
                    name={animal.name}
                    profilePicture={profilePicture}
                    shelterID={shelterID}
                    animalID={animal.id}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
