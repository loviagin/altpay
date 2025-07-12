import { NextRequest, NextResponse } from 'next/server';

// Exchange rates (mock values - should be fetched from external API)
const USD_TO_KZT = 523.28; // 1 USD = 450 KZT
const BYN_TO_KZT = 159.5; // 1 BYN = 150 KZT  
const RUB_TO_BYN = 3.66;  // 1 RUB = 30 BYN

function summarize(price: number): number | null {
  // price in USD
  if (price <= 0) {
    return null;
  }
  
  const kztPrice = price * USD_TO_KZT;
  const bynPrice = kztPrice / BYN_TO_KZT;
  const bynPlusCommission = bynPrice + 3 + (bynPrice * 0.01);
  const rubPrice = bynPlusCommission / RUB_TO_BYN * 100;
  const sum = rubPrice + 30 + 100; // 30 is a russian bank commission

  return sum;
}

function roundedSum(sum: number): number | null {
  // already checked for negative value
  // sum can't be < 130
  let res = Math.ceil(sum);
  
  if (res < 1000) { // and > 130
    if (res % 100 === 0) {
      return res;
    } else {
      const firstNum = Math.floor(res / 100);
      return (firstNum + 1) * 100;
    }
  } else if (res < 10000) {
    if (res % 100 === 0) {
      return res;
    } else {
      const twoNums = Math.floor(res / 100);
      return (twoNums + 1) * 100;
    }
  } else if (res < 100000) {
    if (res % 1000 === 0) {
      return res;
    } else {
      const threeNums = Math.floor(res / 1000);
      return (threeNums + 1) * 1000;
    }
  }
  
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, service } = body;
    
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Сумма должна быть больше 0' },
        { status: 400 }
      );
    }
    
    // Calculate price using the provided logic
    const calculatedSum = summarize(amount);
    
    if (calculatedSum === null) {
      return NextResponse.json(
        { error: 'Ошибка расчета суммы' },
        { status: 400 }
      );
    }
    
    const finalPrice = roundedSum(calculatedSum);
    
    if (finalPrice === null) {
      return NextResponse.json(
        { error: 'Ошибка округления суммы' },
        { status: 400 }
      );
    }
    
    return NextResponse.json({
      amount: amount,
      service: service,
      calculatedPrice: calculatedSum,
      finalPrice: finalPrice,
      exchangeRates: {
        usdToKzt: USD_TO_KZT,
        bynToKzt: BYN_TO_KZT,
        rubToByn: RUB_TO_BYN
      }
    });
    
  } catch (error) {
    console.error('Calculation error:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
} 