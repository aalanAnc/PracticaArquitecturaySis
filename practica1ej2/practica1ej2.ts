export const multTroCi=(num : number): Array<number> =>{
    const arr:number[] = [];

    for(let i : number = 0; i <= num; i++){
        if(i % 3 == 0 || i %5==0){ //multiplos de 3 o 5 si el resto es 0
            arr.push(i);
        }
    }
    return  arr;
}

console.log(multTroCi(23));


