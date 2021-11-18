import { pcpa } from './calc/fifo-pcpa';
import { mp } from './calc/mp';
import { mtr } from './calc/mtr_v2';
import { rodizio } from './calc/rodizio';

export {
  pcpa, mp, mtr, rodizio
}

// const initialValues = [5,2,7,8,3,4,8,9,7,3];

// const pcpaResult = pcpa([...initialValues]);
// console.log(`TEMPO MÉDIO PCPA: ${pcpaResult.replace('.', ',')} ms`);

// const mpResult = mp([...initialValues]);
// console.log(`TEMPO MÉDIO MP: ${mpResult.replace('.', ',')} ms`);

// const mtrResult = mtr([...initialValues]);
// console.log(`TEMPO MÉDIO MTR: ${mtrResult.replace('.', ',')} ms`);

// const clock = 3;
// const rodizioResult = rodizio([...initialValues], clock);
// console.log(`TEMPO MÉDIO RODIZIO ${rodizioResult.replace('.', ',')} ms`);