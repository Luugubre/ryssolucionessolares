import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN || '' 
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items } = body

    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ error: 'No se recibieron los items del carrito' }, { status: 400 })
    }

    const host = request.headers.get('host') || 'localhost:3000'
    const protocol = host.includes('localhost') ? 'http' : 'https'
    const origin = request.headers.get('origin') || `${protocol}://${host}`

    const preference = new Preference(client)

    const result = await preference.create({
      body: {
        items: items.map((item: any) => ({
          title: String(item.title || 'Producto'),
          unit_price: Number(item.unit_price),
          quantity: Number(item.quantity || 1),
          currency_id: 'CLP',
        })),
        back_urls: {
          success: `${origin}/tienda?status=success`,
          failure: `${origin}/tienda?status=failure`,
          pending: `${origin}/tienda?status=pending`,
        },
        auto_return: 'approved',
      }
    })

    return NextResponse.json({ url: result.init_point })

  } catch (error: any) {
    console.error("DETALLE DEL ERROR MERCADO PAGO:", error)
    return NextResponse.json({ 
      error: error.message || 'Error al procesar el pago' 
    }, { status: 500 })
  }
}
