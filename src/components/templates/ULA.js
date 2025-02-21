export function calculadora (input) {
  let result = input.replace(/\s÷/g, "/").replace(/\sx/g, "*");      // converter para sinal suportado

  try{
    result = eval(result);

    return String(result).slice(0, 16); 
  }
  catch {
    return "syntax error!";
  }
}