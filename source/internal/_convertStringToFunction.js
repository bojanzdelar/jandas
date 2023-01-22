const _convertStringToFunction = (fnString) =>
  new Function(`return ${fnString}`)();

export default _convertStringToFunction;
