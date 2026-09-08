"use client"

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function NewProductPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('') // <-- ESTADO AGREGADO
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const router = useRouter()

  // Función para comprimir y redimensionar la imagen en el navegador
  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target?.result as string
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const MAX_WIDTH = 1200
          const MAX_HEIGHT = 1200
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height
              height = MAX_HEIGHT
            }
          }

          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          ctx?.drawImage(img, 0, 0, width, height)

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Fallo al comprimir la imagen'))
                return
              }
              const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".jpg", {
                type: 'image/jpeg',
                lastModified: Date.now(),
              })
              resolve(compressedFile)
            },
            'image/jpeg',
            0.82
          )
        }
      }
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    let imageUrl = ''

    if (imageFile) {
      try {
        setLoadingText('Optimizando imagen...')
        const optimizedFile = await compressImage(imageFile)

        setLoadingText('Subiendo a Supabase Storage...')
        const fileExt = optimizedFile.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(fileName, optimizedFile)

        if (uploadError) {
          alert('Error al subir la imagen: ' + uploadError.message)
          setLoading(false)
          return
        }

        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(fileName)

        imageUrl = publicUrlData.publicUrl
      } catch (err) {
        alert('Error procesando la imagen.')
        setLoading(false)
        return
      }
    }

    setLoadingText('Guardando producto...')
    
    // AQUÍ ES DONDE AHORA SE ENVÍA LA CATEGORÍA A SUPABASE
    const { error } = await supabase.from('products').insert([
      {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        image_url: imageUrl,
        category: category // <-- ENVIADO A LA BASE DE DATOS
      }
    ])

    setLoading(false)

    if (error) {
      alert('Error al crear el producto: ' + error.message)
    } else {
      alert('¡Producto creado y optimizado con éxito!')
      router.push('/tienda') // Cambié esto para que te lleve directo a la tienda y veas el cambio
    }
  }

  return (
    <main className="min-h-screen bg-corp-light py-12 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold text-[#0F172A] mb-6">Nuevo Producto</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-bold text-slate-700 mb-2">Categoría del Producto</label>
            <select 
              name="category"
              value={category} // <-- CONECTADO AL ESTADO
              onChange={(e) => setCategory(e.target.value)} // <-- ACTUALIZA EL ESTADO AL ELEGIR
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0F172A] focus:outline-none text-slate-700"
              required
            >
              <option value="">Selecciona una categoría...</option>
              <option value="BATERIAS">BATERIAS</option>
              <option value="CABLES">CABLES</option>
              <option value="EQUIPOS SOLARES">EQUIPOS SOLARES</option>
              <option value="INVERSORES">INVERSORES</option>
              <option value="PANELES SOLARES">PANELES SOLARES</option>
              <option value="PERIFERICOS">PERIFERICOS</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Nombre del Producto</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Ej: Kit Solar On-Grid 5kW"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0F172A] focus:outline-none text-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Descripción Técnica</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              placeholder="Detalle de paneles, inversor y estructuras..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0F172A] focus:outline-none text-slate-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Precio (CLP)</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                required
                placeholder="1500000"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0F172A] focus:outline-none text-slate-700"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Stock Inicial</label>
              <input 
                type="number" 
                value={stock} 
                onChange={(e) => setStock(e.target.value)}
                required
                placeholder="5"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0F172A] focus:outline-none text-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Imagen del Producto</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImageFile(e.target.files[0])
                }
              }}
              required
              className="w-full border border-slate-300 rounded-lg p-2 text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0F172A] file:text-white hover:file:bg-slate-800 transition-colors cursor-pointer"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F172A] hover:bg-slate-800 text-white py-3 rounded-lg font-bold transition-colors mt-4 shadow-md disabled:opacity-50"
          >
            {loading ? loadingText : 'Publicar Producto'}
          </button>
        </form>
      </div>
    </main>
  )
}