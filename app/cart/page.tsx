import MercadoPagoButton from '@/components/MercadoPagoButton'
import WebpayButton from '@/components/WebpayButton'

export default function CartPage() {
  // Supongamos que calculas el total de los productos en el carrito
  const totalAmount = 15990 // Reemplaza esto con el total real de tu carrito en CLP

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-2xl font-black text-[#0F172A] mb-6">Tu Carrito de Compras</h1>
        
        {/* Resumen de productos del carrito... */}
        
        <div className="border-t border-slate-200 pt-6 mt-6 flex flex-col items-end">
          <div className="text-lg font-bold text-slate-700 mb-4">
            Total a pagar: <span className="text-2xl font-black text-[#0F172A]">{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(totalAmount)}</span>
          </div>
          
          {/* Contenedor con los dos botones de pago */}
          <div className="w-full sm:w-96 space-y-3">
            <MercadoPagoButton totalAmount={totalAmount} />
            <WebpayButton totalAmount={totalAmount} />
          </div>
        </div>
      </div>
    </div>
  )
}