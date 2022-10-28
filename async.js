function getData (data) {
    return new Promise((resolve,reject)=>{
        console.log("Veriler alınıyor..")
        
        if(data) {
            resolve("veriler alındı")
        } else {
            reject("veriler alınamadı")
        }
    })
}

function cleanData (receiveddata) {
    return new Promise((resolve,reject)=>{
        console.log("Veriler düzenleniyor..")
        
        if(receiveddata) {
            resolve("veriler düzenlendi")
        } else {
            reject("veriler düzenlenemedi")
        }
    })
}

async function processData() {

    try{
        const receivedData = await getData(false);
        console.log(receivedData)
        const cleanedData = await cleanData(true);
        console.log(cleanedData)
    }
    catch(error){
        console.log(error)
    }
    }


processData();