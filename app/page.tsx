import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import ContactForm from '@/components/ContactForm'
import BrandCarousel from '@/components/BrandCarousel'
import BrandsAndFeatures from '@/components/BrandsAndFeatures'
import { Search, ShoppingCart, Leaf } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  image_url: string
  category?: string
}

export default async function HomePage() {
  // Trae primero los marcados como destacados (true) y completa hasta 8 elementos
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(8)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

    
     {/* HERO SECTION */}
      <section className="relative bg-slate-100 text-slate-900 overflow-hidden pt-8 pb-16">
        {/* Background Image with Light/Transparent Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://dceupbfonovchzinruai.supabase.co/storage/v1/object/public/imagenes-pagina/ChatGPT%20Image%207%20sept%202026,%2012_08_39.webp" 
            alt="Panel solar background"
            fill
            className="object-cover object-center opacity-100"
            priority
          />
<div className="absolute inset-0 bg-gradient-to-r from-[#113256] via-[#113256]/80 to-transparent" />        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-2xs">
              <span>⚡ Energía solar para un futuro mejor</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-white">
              Soluciones solares integrales para <span className="text-orange-500">hogares y empresas.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-normal">
              Transformamos la luz del sol en energía que impulsa tu vida con los más altos estándares de ingeniería y autonomía.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#tienda"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-3 group text-center"
              >
                <span>COTICE SUS PRODUCTOS AHORA!</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#servicios"
                className="bg-white/80 hover:bg-white backdrop-blur-md text-[#0F172A] border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-center shadow-sm"
              >
                <span>Conoce nuestros servicios</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="bg-white/80 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-xl w-72 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center text-xl mb-4">
                🍃
              </div>
              <h4 className="font-extrabold text-[#0F172A] text-sm mb-1">Energía limpia hoy,</h4>
              <h4 className="font-extrabold text-orange-600 text-sm mb-4">un mejor mañana</h4>
              <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Feature Badges Grid Container (Floating at bottom) */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 mt-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 font-bold text-xl flex-shrink-0">🌱</div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-sm">Energía limpia</h4>
                <p className="text-xs text-slate-500">Cuida el planeta</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2 border-t sm:border-t-0 sm:border-l border-slate-100 pl-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 font-bold text-xl flex-shrink-0">📈</div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-sm">Ahorro real</h4>
                <p className="text-xs text-slate-500">Reduce tus costos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2 border-t lg:border-t-0 lg:border-l border-slate-100 pl-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 font-bold text-xl flex-shrink-0">🏠</div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-sm">Soluciones a medida</h4>
                <p className="text-xs text-slate-500">Hogares y empresas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2 border-t sm:border-t-0 sm:border-l border-slate-100 pl-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 font-bold text-xl flex-shrink-0">🛡️</div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-sm">Asesoría experta</h4>
                <p className="text-xs text-slate-500">En todo el proceso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl transition-transform hover:scale-110 cursor-pointer"
            aria-label="WhatsApp"
          >
            💬
          </a>
        </div>
      </section>

      {/* BRAND CAROUSEL */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Trabajamos con las mejores marcas del mercado
          </p>
          <BrandCarousel />
        </div>
      </section>

      {/* ACERCA DE SECTION */}
      <section id="acerca" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest block mb-2">Sobre R&S Soluciones Solares</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">
              Impulsando la transición energética en Chile con ingeniería de vanguardia.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Somos una empresa especializada en el diseño, suministro e instalación de sistemas fotovoltaicos avanzados. Nuestro propósito es otorgar independencia energética y reducción drástica de costos operativos a residencias, comercios e industrias.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div>
                <div className="text-3xl font-black text-orange-600 mb-1">+500</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Proyectos instalados</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#0F172A] mb-1">25 Años</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Garantía en paneles</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl bg-slate-100">
            <Image 
              src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop" 
              alt="Instalación solar" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="tienda" className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest block mb-2">Nuestros Productos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Todo lo que necesitas para <span className="text-orange-600">aprovechar el sol</span>
            </h2>
          </div>
          <Link href="/tienda" className="text-sm font-bold text-[#0F172A] hover:text-orange-600 transition-colors mt-4 md:mt-0 flex items-center gap-2">
            Ver otros productos →
          </Link>
        </div>

        {/* Catalog Grid: 4 columnas, máximo 8 productos (2 filas) con formato 1:1 */}
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
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Aquí va tu etiqueta dinámica */}
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
              <Link href="/login" className="inline-block mt-4 text-orange-600 font-bold hover:underline">
                Accede como administrador para crear productos →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* SERVICES & VALUE PROPOSITION */}
      <section id="servicios" className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest block mb-2">Por qué elegirnos</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Excelencia en Ingeniería Solar</h2>
            <p className="text-slate-600 mt-3">Garantizamos proyectos de alta durabilidad respaldados por los mejores fabricantes globales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 transition-colors">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">🌍</div>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Marcas Mundiales</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Trabajamos con las principales marcas del mundo en inversores y paneles.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 transition-colors">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">⭐</div>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Calidad Garantizada</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Todos nuestros equipos cuentan con certificación internacional y garantía de hasta 25 años.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 transition-colors">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">🏷️</div>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Ofertas y Retorno</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Optimiza tu inversión con kits diseñados para el máximo retorno financiero.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 transition-colors">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">🔒</div>
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">Seguridad y Soporte</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Métodos de pago confiables y soporte técnico especializado post-venta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & SOCIALS */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest block mb-2">Testimonios Reales</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Lo que dicen nuestros clientes en Facebook</h2>
            <p className="text-slate-400 text-sm">Comentarios y experiencias extraídas directamente de nuestra comunidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <blockquote className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-between shadow-lg">
              <p className="italic text-slate-300 text-sm mb-6 leading-relaxed">
                &ldquo;Excelente atención y servicio de instalación. Totalmente recomendado para quienes buscan reducir sus costos de energía de forma segura y profesional.&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-slate-700/60 pt-4">
                <div>
                  <h4 className="font-bold text-white text-sm">María Elena Soto</h4>
                  <p className="text-xs text-orange-400">Opinión verificada</p>
                </div>
                <span className="text-blue-400 text-xs font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </span>
              </div>
            </blockquote>

            <blockquote className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-between shadow-lg">
              <p className="italic text-slate-300 text-sm mb-6 leading-relaxed">
                &ldquo;Muy buena asesoría desde el primer contacto. El kit solar funciona a la perfección y el equipo técnico resolvió todas nuestras dudas paso a paso.&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-slate-700/60 pt-4">
                <div>
                  <h4 className="font-bold text-white text-sm">Carlos Morales</h4>
                  <p className="text-xs text-orange-400">Opinión verificada</p>
                </div>
                <span className="text-blue-400 text-xs font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </span>
              </div>
            </blockquote>
          </div>

          <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700 text-center max-w-xl mx-auto shadow-sm">
            <h3 className="text-lg font-bold mb-2">Síguenos en Redes Sociales</h3>
            <p className="text-slate-400 text-xs mb-6">Conoce más opiniones y proyectos ejecutados en nuestras plataformas oficiales.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md hover:opacity-90 transition-opacity flex items-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
            <div className="text-center mb-10">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-widest block mb-2">Ponte en contacto</span>
              <h2 className="text-3xl font-extrabold text-[#0F172A]">Contáctanos</h2>
              <p className="text-slate-600 mt-2">Completa el formulario y un especialista en energía solar te responderá a la brevedad.</p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      

    </div>
  )
}
