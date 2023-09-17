'use client';
  import { Fragment, useState } from 'react'
  import logo from '../../../public/logo.jpg'
  import español from '../../../public/español.jpg'
  import mujer from '../../../public/mujer.jpg'
  import mujer2 from '../../../public/mujer2.jpg'
  import hombre from '../../../public/hombre.jpg'
  import balanza from '../../../public/balanza.jpg'
  import tijera from '../../../public/tijera.jpg'
  import termometro from '../../../public/termometro.jpg'
  import nebulizador from '../../../public/nebulizador.jpg'
  import hombre2 from '../../../public/hombre2.jpg'
  import Image from 'next/image'
  import { Dialog, Popover, Tab, Transition} from '@headlessui/react'
  import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

  const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Mujer',
        featured: [
          {
            name: 'mujer',
            imageSrc: mujer,
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'mujer2',
            href: '#',
            imageSrc: mujer2,
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'Uniformes',
            name: 'Uniformes',
            items: [
              { name: 'Linea estandar', href: '#' },
              { name: 'Linea Exclusiva', href: '#' },
              { name: 'Linea Institucional', href: '#' },
            ],
          },
          {
            id: 'accessorios',
            name: 'Accessorios',
            items: [
              { name: 'Gorros Antifluido', href: '#' },
              { name: 'Calzado Enfermeria', href: '#' },
              { name: 'Linea Confort', href: '#' },
            ],
          },
          {
            id: 'batas',
            name: 'Batas',
            items: [
              { name: 'Linea Antifluido', href: '#' },
              { name: 'Linea Exclusiva', href: '#' },
              { name: 'Linea Confort', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Hombre',
        featured: [
          {
            name: 'hombre',
            imageSrc: hombre,
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'hombre2',
            imageSrc: hombre2,
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
             {
            id: 'Uniformes',
            name: 'Uniformes',
            items: [
              { name: 'Linea estandar', href: '#' },
              { name: 'Linea Exclusiva', href: '#' },
              { name: 'Linea Institucional', href: '#' },
            ],
          },
          {
            id: 'accessorios',
            name: 'Accessorios',
            items: [
              { name: 'Gorros Antifluido', href: '#' },
              { name: 'Calzado Enfermeria', href: '#' },
              { name: 'Linea Confort', href: '#' },
            ],
          },
          {
            id: 'batas',
            name: 'Batas',
            items: [
              { name: 'Linea Antifluido', href: '#' },
              { name: 'Linea Exclusiva', href: '#' },
              { name: 'Linea Confort', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'insumos',
        name: 'Insumos',
        featured: [
          {
            name: 'termometro',
            imageSrc: termometro,
            imageAlt: 'Un termometro digital que se utiliza para medir la temperatu',
          },
          {
            name: 'nebulizador',
            imageSrc: nebulizador,
            imageAlt: 'Un nebulizador',
          }
        ],
        sections: [
          {
            id: 'dispositivos',
            name: 'Dispositivos',
            items: [
            {
              name: 'Equipo de organos', href: '#'
            },
            {
              name: 'Trasiometros', href: '#'
            },
            {
              name: 'Pulsiometros', href: '#'
            },
            {
              name: 'Balanza Digitales', href: '#'
            },
            {
              name: 'Glacometros', href: '#'
            },
            {
              name: 'Nebulizadoras', href: '#'
            },
            ]
          },{
            id: 'insumos2',
            name: 'Insumos',
            items: [
              {name: 'Termometro Digital', href: '#'},
              {name: 'Linternas', href: '#'},
              {name: 'Tijeras trauma', href: '#'},
              {name: 'Lamparas', href: '#'}
            ]
          }
        ]
      }
    ],
    pages: [
    ],
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  export default function StoreNavigation() {

    const [open, setOpen] = useState(false)

    return (
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Cerrar menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item) => (
                              <div key={item.name} className="group relative text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <Image src={item.imageSrc} alt={item.imageAlt}  width={160} height={40}  className="object-cover object-center" />
                                </div>
                               
                
                              </div>
                            ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                        Iniciar Sesion
                      </a>
                    </div>
                    <div className="flow-root">
                      <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                        Crear cuenta
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <a href="#" className="-m-2 flex items-center p-2">
                      <Image
                        src={español}
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                        width={160} height={40}
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">Es</span>
                      <span className="sr-only">change Language</span>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir Menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <Image
                      className="h-8 w-auto"
                      src={logo}
                      alt=""
                      width={160} height={40}
                    />
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                  'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                        {category.featured.map((item) => (
                                          <div key={item.name} className="group relative text-base sm:text-sm">
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                              <Image
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                width={160} height={40}
                                                className="object-cover object-center"
                                              />
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                     Iniciar Sesion
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Crear Cuenta
                    </a>
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                      <Image
                        src={español}
                        alt=""
                        width={160} height={40}
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-sm font-medium">Es</span>
                      <span className="sr-only">Cambiar lenguaje</span>
                    </a>
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }