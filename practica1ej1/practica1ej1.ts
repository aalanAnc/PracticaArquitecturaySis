const quickSort = (arr :number[]) : void =>{
    funcionQS(arr , 0, arr.length-1);
}


const funcionQS = (arr : number[], der : number, izq : number) : void =>{

    
    let pivote :number=  (izq + der)/2; //el valor pivote 
    let i :number = izq;
    let d : number= der;

    let aux : number;

    while(i<d){ //mientras el de la izq sea menor seguira haciendo el bucle

        while(arr[i]<pivote) i++;
        while(arr[d]>pivote) d++;

        if(i<=d){
            //se van a intercambiar los elementos
            aux = arr[i];
            arr[i]=arr[d];
            arr[d]=aux;
            i++;
            d--;
        }
    }

}

