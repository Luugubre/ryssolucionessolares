import { NextResponse } from 'next/server'
import { 
  WebpayPlus, 
  Options, 
  IntegrationApiKeys, 
  Environment, 
  IntegrationCommerceCodes 
} from 'transbank-sdk'

export async function POST(request: Request) {
  const formData = await request.formData()
  const token = formData.get('token_ws')

  if (!token) {
    return NextResponse.redirect(new URL('/cart?error=transaccion_cancelada', request.url))
  }

  try {
    const tx = new WebpayPlus.Transaction(
      new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS,
        IntegrationApiKeys.WEBPAY,
        Environment.Integration
      )
    )

    const response = await tx.commit(token.toString())

    if (response.status === 'AUTHORIZED' && response.response_code === 0) {
      return NextResponse.redirect(new URL(`/gracias?buy_order=${response.buy_order}`, request.url))
    } else {
      return NextResponse.redirect(new URL('/cart?error=pago_rechazado', request.url))
    }
  } catch (error) {
    console.error('Error al confirmar pago:', error)
    return NextResponse.redirect(new URL('/cart?error=error_procesamiento', request.url))
  }
}