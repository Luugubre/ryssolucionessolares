import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F0] border-t border-orange-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Columna Izquierda: Imagen de Formas de Pago */}
        <div>
          <div className="mb-6">
            <span className="h-[2px] w-10 bg-orange-500 inline-block mb-2"></span>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Aceptamos todas las formas de pago
            </h3>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm inline-block w-full max-w-md">
            <div className="relative w-full h-28">
              <Image 
                src="/webpay.png" 
                alt="Webpay Plus y Formas de Pago" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Columna Derecha: Mapa de Google Maps */}
        <div>
          <div className="mb-6 flex justify-between items-center">
            <div>
              <span className="h-[2px] w-10 bg-orange-500 inline-block mb-2"></span>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Estamos ubicados en
              </h3>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-orange-600 hover:underline bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-lg shadow-2xs"
            >
              Abrir en Maps ↗
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-orange-100 shadow-md h-64 w-full relative bg-slate-200">
            <iframe
              title="Ubicación R&S Soluciones Solares"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.849331512531!2d-70.63749732446254!3d-33.533575473356706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da633f85dfb9%3A0xdbdd1bbd7099ff4c!2sAv.%20Sta.%20Rosa%208065%2C%208860536%20Santiago%2C%20San%20Ram%C3%B3n%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1788798278423!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Barra inferior naranja */}
      <div className="bg-orange-500 text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs font-medium">
          <div className="flex gap-6 mb-2 sm:mb-0">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="/tienda" className="hover:underline">Tienda</Link>
          </div>
          <div>
            Copyright 2026 © R&S Soluciones Solares. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
