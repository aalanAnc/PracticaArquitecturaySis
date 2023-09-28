import { assertEquals } from 'https://deno.land/std@0.202.0/assert/assert_equals.ts';

import { multTroCi } from './practica1ej2.ts';

Deno.test("segundo ejercicio test", () => {
    
  const result = multTroCi(23); //realiza los multiplos de 3 o 5 de 23
  
  assertEquals(result, [0, 3, 5, 6, 9, 10, 12, 15, 18, 20, 21]); 
  //corrobora que el resutlado sea igual a la cadena de la derecha
});