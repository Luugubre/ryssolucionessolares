"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import CartDrawer from '@/components/CartDrawer'

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const items = useCartStore((state) => state.items)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-8 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-orange-400 font-semibold">🌱 Energía limpia hoy, un mejor mañana</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hover:text-white transition-colors font-medium">Mi cuenta</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white sticky top-0 z-45 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white font-black px-3.5 py-2.5 rounded-xl text-lg shadow-sm tracking-wider">
              R&S
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight block leading-none">SOLUCIONES</span>
              <span className="text-[11px] font-bold text-orange-600 tracking-widest uppercase mt-0.5 block">SOLARES</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-sm">
            <Link href="/" className="text-orange-600">Inicio</Link>
            <Link href="#acerca" className="hover:text-orange-600 transition-colors">Acerca de</Link>
            <Link href="#servicios" className="hover:text-orange-600 transition-colors">Servicios</Link>
            <Link href="#tienda" className="hover:text-orange-600 transition-colors">Tienda</Link>
            <Link href="#contacto" className="hover:text-orange-600 transition-colors">Contacto</Link>
          </div>

          {/* Search & Cart */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-slate-50 rounded-full px-4 py-2 border border-slate-200 w-64 focus-within:border-orange-500 transition-colors">
              <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Buscar productos, servicios..." 
                className="bg-transparent text-sm outline-none w-full text-slate-700 placeholder-slate-400"
              />
            </div>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#0F172A] hover:bg-slate-850 text-white px-4.5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4.4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>
                Carrito / <span className="text-orange-400">{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(totalPrice)}</span>
              </span>
              <span className="bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            </button>
          </div>

        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}