function lxr(src) {
  let ps = 0;
  let cl = 1;
  let ln = 1;
  let ts = [];
  let ar = {
    '+': "PLUS",
    '-': "MINUS",
    '*': "TIMES",
    "/": "DIV",
    "%": "MOD",
    "^": "POW",
    "~": "ROUND",
    "|": "ABS",
    "!": "FACT",
    "?": "TERM"
  };
  function t(tp, vl) {ts.push({
      type: tp,
      value: vl,
      line: ln,
      col: cl,
    })};
  function mv(n = 1) {cl += n; ps += n};
  function dg(c) {return c >= '0' && c <= '9'};
  function lt(c) {return c >= 'a' && c <= 'z'};
  function al(c) {return dg(c) || lt(c)};
  while(ps < src.length) {
    const c = src[ps];
    switch(true) {
      case dg(c):
        let vl = '';
        while(ps < src.length && dg(src[ps]) {vl += src[ps]; mv()};
        if(src[ps] === '.' && ps < src.length) {vl += src[ps]; mv(); while(ps < src.length && dg(c) {vl += src[pos]; mv()}};
        t("NUM", vl);
        break;
      case c in ar:
        t(ar[c], c);
        break;
    };
  };
};
