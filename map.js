#!/usr/bin/node

process.stdin.on("data", (data) => {
  const baskets = String(data).trim().split(/\r\n|\r|\n/g);
  for (let a = 0; a < baskets.length; a += 1 ){
    const basket = baskets[a].split(',').map(el=>el.trim())
    for (let i = 0; i < basket.length; i += 1) {
      const H = {};
      for (let j = i + 1; j < basket.length; j += 1) {
        if(H[basket[j]]) H[basket[j]] = H[basket[j]] + 1
        else H[basket[j]] = 1
      }
      process.stdout.write(`${basket[i]}\t${JSON.stringify(H)}\n`);
    }
  }
});
