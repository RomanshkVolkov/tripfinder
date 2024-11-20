export function Format(date: Date, str: string, non?: boolean) {
  const day = new Date(date).getDay();
  const n = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear().toString();
  let sym;
  if (str.includes('-')) {
    sym = '-';
  } else if (str.includes('/')) {
    sym = '/';
  } else {
    throw 'Symbol - / is missing from the string!';
  }
  const res = str.split(sym).map((ele) => {
    switch (ele) {
      case 'DD':
        return n < 10 && non ? '0' + n : n;
      case 'MM':
        return month + 1 < 10 && non ? '0' + `${month + 1}` : month + 1;
      case 'YY':
        return year.slice(year.length - 2, year.length);
      case 'YYYY':
        return year;
    }
  });
  return res.join(sym);
}
