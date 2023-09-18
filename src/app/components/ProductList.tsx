'use client';
import { useState } from 'react';
import QuickViewer from './QuickViewer'; 
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}
const products = [
    {
      id: 1,
      name: 'Ejemplo',
      href: '#',
      imageSrc: '',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 6,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 7,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 8,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 9,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 10,
        name: 'Ejemplo',
        href: '#',
        imageSrc: '',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      
    // More products...
  ]
  
  export default function ProductList() {
    const [open, setOpen] = useState(false);
    const [showQuickViewer, setShowQuickViewer] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openQuickViewer = () => {
      setOpen(true);
    };
  
    const closeQuickViewer = () => {
      setOpen(false);
    };

    return (
      <div className="bg-white  z-0">
{/* Renderiza QuickViewer con el estado open */}
<QuickViewer open={open} onClose={closeQuickViewer} />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lo mas Comprado</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
               <div
               key={product.id}
               className="group relative"
               onClick={openQuickViewer}
             >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 r">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between cursor-pointer  ">
                  <div>
                    <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }