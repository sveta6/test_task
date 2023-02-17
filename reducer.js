#!/usr/bin/node


process.stdin
  .on("data", (data) => {
    let lastKey = '';
    let lastValue = {};
    const arr = String(data).trim().split(/\r\n|\r|\n/g);
    for (let a = 0; a < arr.length; a+=1){
      const el = arr[a].split('\t').map(el => el.trim())
      const key = el[0]
      const value = JSON.parse(el[1])
      if (lastKey === key){
        const keys = Object.keys(value)
        for(let j = 0; j<keys.length; j++){
          if(lastValue[keys[j]]) lastValue[keys[j]] = lastValue[keys[j]] + 1
          else lastValue[keys[j]] = 1
        }
      } else {
        const keys = Object.keys(lastValue)
        for(let j = 0; j<keys.length; j++){
          process.stdout.write(`${lastKey},${keys[j]}\t${lastValue[keys[j]]}\n`);
        }
        lastKey=key
        lastValue=value
      }
    }
    const keys = Object.keys(lastValue)
    for(let j = 0; j<keys.length; j++){
      process.stdout.write(`${lastKey},${keys[j]}\t${lastValue[keys[j]]}\n`);
    }
})
