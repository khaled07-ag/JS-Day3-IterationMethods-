const numbers = [10, 13, 20, 25, 38, 35, 40];
const greater25 = numbers.filter((num)=>{
    if(num>=25){
        return num;
    }
});
console.log(greater25);
const div5 = numbers.filter((num2)=>{
    if(num2%5==0){
        return num2;
    }
});
console.log(div5);
const sqr = numbers.map((num3)=>{
    return num3**2;
});
console.log(sqr)
const dbl = numbers.map((num4)=>{
    return num4*2;
});
console.log(dbl)
const fsqr = numbers.filter((num)=>{
   return num >=20
});
const fsqr1 = fsqr.map((num)=>{
    return num**2;
})
console.log(fsqr1);
const fdiv = numbers.filter((num)=>{
    return num%5==0;
})
const fdiv1 = fdiv.map((num)=>{
    return num*3;
})
console.log(fdiv1);

// EXTRA
const temp =[80,70,100,120]
let ther = [120,100,130,90]
const toCelsius = temp.map((num)=>{
     return (num - 32) * (5/9);
});


const toCelsius2 = ther.map((num)=>{
    return (num - 32) * (5/9);
});

console.log(toCelsius);
const  hottestDays = toCelsius.filter((num)=>{
    threshhold = 40;
    return num >threshhold;
});
console.log(hottestDays);




let logHottestDay= ([[93,343,23,4,77],40])
const logHottestDays=logHottestDay.map((num)=>{
    return (num - 32) * (5/9);
    
})
console.log(logHottestDays);



const logHottestDa=logHottestDays.filter((temp,ther)=>{
    
    
    return temp>ther;
})
console.log(temp)
