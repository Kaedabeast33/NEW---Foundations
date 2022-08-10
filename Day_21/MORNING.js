// function generateChange(Obj){
//     let {Q, D, N, P}=Obj
//     let qV=Q*.25
//     let dV=D*.10
//     let nV=N*.05
//     let pV=P*.01
//     let total=qV+dV+nV+pV
//     return total

// }
// console.log(generateChange({Q:5,D:8,N:5,P:89}))

// function generateChange(num){
    
//     let coinObj= {Q:0,D:0,N:0,P:0}
//     let theNum=num
//     while(theNum >=25){ 
//         coinObj.Q+=1
//         theNum-=25
//     }
//     while(theNum>=10){
//         coinObj.D+=1
//         theNum-=10
//     }
//     while(theNum>=5){
//         coinObj.N+=1
//         theNum-=5
//     }while(theNum>0){
//         coinObj.P+=1
//         theNum-=1
//     }
// return coinObj
// }
// console.log(generateChange(259))