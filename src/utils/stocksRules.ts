export function calcIndexBr(entryPrice: number, exitPrice: number, amount: number) {
  const factor = 0.2;

  const value = Math.abs(entryPrice - exitPrice) * (amount * factor);
  return value;
}

export function calcDol(entryPrice: number, exitPrice: number, amount: number) {
  const factor = 10;

  const value = Math.abs(entryPrice - exitPrice) * (amount * factor);
  return value;
}

export function calcStocks(entryPrice: number, exitPrice: number, amount: number) {
  const factor = 1;

  const value = Math.abs(entryPrice - exitPrice) * (amount * factor);
  return value;
}

export function isGainOrLoss(entryPrice: number, exitPrice: number, buyOrSell: string) {
  if (entryPrice === exitPrice) {
    return null;
  }
  if (buyOrSell.toLowerCase() === "buy" || buyOrSell.toLowerCase() === "compra") {
    if (exitPrice > entryPrice) {
      return true;
    } else if (exitPrice < entryPrice) {
      return false;
    }
  }
  if (exitPrice < entryPrice) {
    return true;
  } else if (exitPrice > entryPrice) {
    return false;
  }
}

// function isGainOrLoss(entryPrice: number, exitPrice: number, buyOrSell: string) {
//   if (entryPrice === exitPrice) {
//     return null;
//   }

//   const isBuy = buyOrSell.toLowerCase() === "buy";
//   return exitPrice > entryPrice === isBuy;
// }

export function stockValues(stock: string, entryPrice: number, exitPrice: number, amount: number) {
  const stockType = stock.toLowerCase();
  const points = Number(Math.abs(entryPrice - exitPrice).toFixed(2));

  let value;
  if (stockType === "win") {
    value = calcIndexBr(entryPrice, exitPrice, amount);
  } else if (stockType === "wdo") {
    value = calcDol(entryPrice, exitPrice, amount);
  } else {
    value = calcStocks(entryPrice, exitPrice, amount);
  }
  value = Math.floor(value);
  
  return { value, points };
}
