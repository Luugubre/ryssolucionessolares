import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import { Suspense } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  image_url: string
  category?: string
}

export default async function TiendaPage() {
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans py-16">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-12">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest block mb-2">Catálogo Completo</span>
          <h1 className="text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Todos nuestros <span className="text-orange-600">Kits y Equipos Solares</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products && products.length > 0 ? (
            products.map((product: Product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  
                 <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
  <Image 
    src={product.image_url || 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=600&auto=format&fit=crop'} 
    alt={product.name}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
  
  {/* Etiqueta dinámica de categoría sobre la imagen */}
  <div className="absolute top-3 left-3 bg-[#0F172A]/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
    {product.category || 'Equipo Solar'}
  </div>
</div>

                  <div className="p-5">
                    <Link href={`/products/${product.id}`} className="block group">
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">IVA Incluido</span>
                    <span className="text-xl font-black text-[#0F172A]">
                      {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}
                    </span>
                  </div>
                  <AddToCartButton product={product} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 font-medium">No hay productos publicados todavía.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
