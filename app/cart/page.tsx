'use client'

import { useCartStore } from '@/store/cartStore'
import MercadoPagoButton from '@/components/MercadoPagoButton'
import WebpayButton from '@/components/WebpayButton'

export default function CartPage() {
  // 1. Conectamos la página al estado global de Zustand
  const items = useCartStore((state) => state.items)
  
  // 2. Calculamos el total real basado en los productos
  const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-2xl font-black text-[#0F172A] mb-6">Tu Carrito de Compras</h1>
        
        {/* 3. Mostramos los productos reales del carrito */}
        <div className="space-y-4 mb-6">
          {items.length === 0 ? (
            <p className="text-slate-500 text-center py-10 font-medium">Tu carrito está vacío.</p>
          ) : (
            items.map((item: any) => (
              <div key={item.id} className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-semibold text-slate-800">{item.name}</h3>
                  <p className="text-sm text-slate-500">Cantidad: {item.quantity}</p>
                </div>
                <span className="font-bold text-slate-800">
                  {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price * item.quantity)}
                </span>
              </div>
            ))
          )}
        </div>
        
        {/* 4. Solo mostramos el total y los botones si hay productos */}
        {items.length > 0 && (
          <div className="border-t border-slate-200 pt-6 mt-6 flex flex-col items-end">
            <div className="text-lg font-bold text-slate-700 mb-4">
              Total a pagar: <span className="text-2xl font-black text-[#0F172A]">
                {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(totalAmount)}
              </span>
            </div>
            
            <div className="w-full sm:w-96 space-y-3">
              {/* Le pasamos los items a MercadoPago y el total a Webpay */}
              <MercadoPagoButton items={items} />
              <WebpayButton totalAmount={totalAmount} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}