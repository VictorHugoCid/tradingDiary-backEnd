export async function calcIndexBr(entryPrice: number, exitPrice: number, amount: number) {
  const factor = 0.2;

  const value = Math.abs(entryPrice - exitPrice) * (amount * factor);
  return value;
}

export async function calcDol(entryPrice: number, exitPrice: number, amount: number) {
  const factor = 10 ** 4;

  const value = Math.abs(entryPrice - exitPrice) * (amount * factor);
  return value;
}

export async function calcStocks(entryPrice: number, exitPrice: number, amount: number) {
  const factor = 1;

  const value = Math.abs(entryPrice - exitPrice) * (amount * factor);
  return value;
}

export function isGainOrLoss(entryPrice: number, exitPrice: number, buyOrSell: string) {
  if (entryPrice === exitPrice) {
    return null;
  }
  if (buyOrSell.toLowerCase() === "buy") {
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
  const points = Math.abs(entryPrice - exitPrice);

  let value;
  if (stockType === "win") {
    value = calcIndexBr(entryPrice, exitPrice, amount);
  } else if (stockType === "dol") {
    value = calcDol(entryPrice, exitPrice, amount);
  } else {
    value = calcStocks(entryPrice, exitPrice, amount);
  }

  return { value, points };
}
