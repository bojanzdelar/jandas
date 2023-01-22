const convertStringToFunction = (fnString) =>
  new Function(`return ${fnString}`)();

export default convertStringToFunction;
