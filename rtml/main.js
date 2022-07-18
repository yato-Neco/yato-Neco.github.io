// wasm-pack build --release --target web -d ./dist/js

import init, { greet, test, rtml } from "./wasm_test.js";


export async function LoadWASM(){

  await init();

}


function ConversionButton(){
  document.getElementById('button').addEventListener('click', Conversion)

}

function Conversion(){
  let input = document.getElementById("input").value;

  document.getElementById("output").value = rtml(input);
}

await LoadWASM();


ConversionButton();