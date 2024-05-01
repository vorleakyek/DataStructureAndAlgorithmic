// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.
for(let i=1; i<=n; i++) {
  let sym = '';
  for(let j=1; j<=i; j++) {
      sym = sym+ '#';
  }
  console.log(sym.padStart(n,' '));
}
