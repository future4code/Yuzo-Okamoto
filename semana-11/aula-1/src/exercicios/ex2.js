export function checaPalindromo(frase) {
  // return (
  //   frase ===
  //   frase
  //     .split("")
  //     .reverse()
  //     .join("")
  // );

  const fraseOrdenada = frase.replace(/\s/g, '').toLowerCase();

  return fraseOrdenada === fraseOrdenada.split('').reverse().join('');
}
