const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek) {
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}


// then and catch
// Disini saya input hari "sabtu", jadi functionnya mencari apakah "sabtu" === day
// dan "sabtu" bukan sama dengan day, jadi if akan jadi false dan menjalankan else
// dan else akan menampilkan error
cekHariKerja('sabtu').then((resolve) => {
    console.log(resolve)
}).catch(error => {
    console.log(error)
})


// try and catch
// Sedangkan try and catch harus melalui async function
// Disini saya buat dulu functionnya, lalu saya input dengan hari "senin", "senin" sama dengan (day)
// dan akan menjalankan if pertama karena "senin" === day
// dan mengembalikan day tersebut
async function tryCatch(day) {
    try {
        const hasil = await cekHariKerja(day)
        console.log(hasil)
    } catch (error) {
        console.error(error);
    }
}
tryCatch('senin')
