const p1=new Promise((resolve,reject)=>{
    let str1="suyog";
     let str2="suyog";
    if(str1===str2){
        resolve("success");
    }else{
        reject("error")
    }
});

p1.catch((res)=>console.log(res)).then((data)=>console.log(data))
