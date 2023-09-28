import { assertArrayIncludes } from 'https://deno.land/std@0.202.0/testing/asserts.ts';

import { assertEquals } from 'https://deno.land/std@0.202.0/testing/asserts.ts';
import { ordenarAlfab } from './practica1ej3.ts';

Deno.test("tercer ejercicio test", () => {
    const palabras : string[] = ["casa", "hola", "agua", "luz"];

    const result = ordenarAlfab(palabras);

    assertEquals(result,  "a g u a"); 

  });