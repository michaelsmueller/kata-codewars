function isPrime(num) {
  if (num < 2) return false;
  else if (num === 2) return true;
  else {
    let factor = 2;
    do {
      if (num % factor === 0) return false
      else factor++
    } while (factor < num / 2)
  }
  return true;
}

for (let i = -2; i < 100; i++) {
  if(isPrime(i)) console.log(i);
}
