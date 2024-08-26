function gridSearch(G, P) {
  const [rows, rowChars] = [G.length, G[0].length]; //
  const [ptrns, ptrnChars] = [P.length, P[0].length];

  for (let row = 0; row <= rows - ptrns; row++) {
    for (let col = 0; col <= rowChars - ptrnChars; col++) {
      let matched = true;
      /**
       * Expand the window to find all patterns.
       * Therefore, the window size = ptrnChars (width) * i (height),
       * and i is the pattern idx.
       */
      for (let i = 0; i < ptrns; i++) {
        const substr = G[row + i].substring(col, col + ptrnChars);
        if (substr !== P[i]) {
          matched = false;
          break; // move the window
        }
      }

      if (matched) return 'YES';
    }
  }

  return 'NO';
}
