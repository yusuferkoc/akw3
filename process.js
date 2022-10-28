 //consolda girilen değerleri  alır - array yapar
 const radius =  process.argv.slice(2)[0]*1;
 

 function CircleArea(radius){
    let area = Math.PI.toFixed(2)*radius*radius
    console.log(`Yarıçapı (${radius}) olan dairenin alanı: (${area})`)
 }

 CircleArea(radius)