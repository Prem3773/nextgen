// console.log("hello word")

                        // var a=10;
                        // var b= 20;
                        // var c= a+b;

// console.log("addition of 2 number = " +c)
//  c=a-b
// console.log("addition of 2 number = " +c)
//  c=a*b

// console.log("addition of 2 number = " +c)

// let km = 1 // kms to miles
// let mile = km*0.621
// console.log(km + "km ="+ mile + " miles" )

// let  degree = 3 // degress to far
// let far = (degree*(9/5)) + 32 
// console.log(  degree+"deg to " + far + far)


// let kg = 4
// let pounds = kg*2.20462 // kg to pounds
// console.log(kg + "kg ="+ pounds+ " pounds" )


// const a = prompt("enter your weight")
// const weight = a

// if (weight <18.5)
// {
//     console.log("You are underweight. You should eat more and exercise less."+a)
// } else if (weight >18.5)
// {
//     console.log("You are normal weight. .")
// }else if( weight<25)
// {
//     console.log("You are overweight. You should eat less and exercise more.")
    
// }else if( weight>30)
// {
//     console.log("You are obese. You should eat less and exercise very intense.")
    
// }
    

const unit = prompt("enter your units ")
let charge =0

if (unit <=100){
    console.log("no charge: "+charge)
} else if(unit>100 && unit<200){
    charge =(unit-100)*5
    console.log("charges "+charge)
} else if( unit>200)
    {
        charge = (unit-200)*10
    console.log("charges"+ (charge + 500 ) )
    }
