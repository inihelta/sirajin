const data = async () => {
    const res = await fetch('https://script.google.com/macros/s/AKfycbxzQKIbe5aOcG8k6VAV-NPiZW7JqJh354a-ijP6maxpMVlf29dDkeLL46fkasRJtXFk/exec')
    const datas = await res.json();
    return datas.siswa;
}
let allSiswa = await data()

const element = (siswa, type = 3, absen) => {
    let typevar  = 'alpha'
    let options = /* html */`
        <option
            value="3"
            label="Hadir"></option>
        <option
            value="0"
            label="Alpha"></option>
        <option
            value="1"
            label="Sakit"></option>
        <option
            value="2"
            label="Izin"></option>
    `
    switch (type) {
        case 0:
            typevar = 'alpha'
            break
        case 1:
            typevar = 'sakit'
            break
        case 2:
            typevar = 'izin'
            break
        case 3:
            typevar = 'hadir'
            break
    }
    switch (type) {
        case 0:
            options = /* html */`
                <option
                    value="0"
                    label="Alpha"></option>
                    <option
                    value="1"
                    label="Sakit"></option>
                    <option
                    value="2"
                    label="Izin"></option>
                    <option
                        value="3"
                        label="Hadir"></option>
                `
            break
        case 1:
            options = /* html */`
                    <option
                        value="1"
                        label="Sakit"></option>
                    <option
                        value="0"
                        label="Alpha"></option>
                    <option
                        value="2"
                        label="Izin"></option>
                    <option
                        value="3"
                        label="Hadir"></option>
                `
            break
        case 2:
            options = /* html */`
                    <option
                        value="2"
                        label="Izin"></option>
                    <option
                        value="0"
                        label="Alpha"></option>
                    <option
                        value="1"
                        label="Sakit"></option>
                    <option
                        value="3"
                        label="Hadir"></option>
                `
            break
        case 3:
            options = /* html */`
                    <option
                        value="3"
                        label="Hadir"></option>
                    <option
                        value="0"
                        label="Alpha"></option>
                    <option
                        value="1"
                        label="Sakit"></option>
                    <option
                        value="2"
                        label="Izin"></option>
                `
            break
    }
    return /* html */`
                        <div
                            id="${absen}"
                            class="w-[72dvw] min-2xl:w-[69dvw] max-lg:w-full h-fit rounded-xl p-3 font-poppins shadow-lg bg-absen-${typevar} _XDA">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row">
                                    <i
                                        class="fa-solid fa-user mr-1 text-blue-50 text-2xl rounded-md border-dotted mt-1 p-1 border-2"></i>
                                    <div
                                        class="ml-2 flex flex-col justify-center">
                                        <span
                                            class="text-lg text-blue-50 font-semibold"
                                            >${siswa}</span
                                        >
                                    </div>
                                </div>
                                <div
                                    class="bg-purple-400 hover:bg-purple-500 px-4 py-2 rounded-xl w-fit h-fit transition-all outline-none">
                                    <select 
                                        data-absen="${absen}"
                                        class="outline-none text-white *:text-black absenOptions">
                                        ${options}
                                    </select>
                                </div>
                            </div>
                        </div>
`
}
let inputValue = ''
document.getElementById('searchSiswa').addEventListener('input', async function () {
    // console.log(allSiswa.filter(str => str.Nama.includes(inputValue)) )
    let inputValue = this.value.toLowerCase()
    document.getElementById('siswas').innerHTML = ''
    // console.clear()
    // console.log(allSiswa.filter(siswa => siswa.Nama.toLowerCase().includes(inputValue)))
    allSiswa.filter(siswa => siswa.Nama.toLowerCase().includes(inputValue) | siswa.No.toString().includes(inputValue)).forEach(siswa => {
            document.getElementById('siswas').innerHTML += element(siswa.No + ". " + siswa.Nama, siswa.absen, siswa.No)
    });




    const dataSiswas = document.getElementsByClassName('_XDA')
    for (const datssiswa of dataSiswas) {
        datssiswa.addEventListener('mouseenter', async function () {
            let nama = allSiswa.find(siswa => siswa.No === Number(this.id))?.Nama
            let type = allSiswa.find(siswa => siswa.No === Number(this.id))?.absen
            document.getElementById('namaSelected').innerText = nama
            let typevar = ''
            switch (type) {
                case 0:
                    typevar = 'alpha'
                    break
                case 1:
                    typevar = 'sakit'
                    break
                case 2:
                    typevar = 'izin'
                    break
                case 3:
                    typevar = 'hadir'
                    break
            }
            document.getElementById('absenSelected').innerText = typevar
        });
        datssiswa.addEventListener('mouseleave', async function () {
            document.getElementById('namaSelected').innerText = ''
            document.getElementById('absenSelected').innerText = ''
        });
    }

    const allselect = document.getElementsByClassName('absenOptions');
    for (const select of allselect) {
        select.addEventListener("change", function () {
            const selectedValue = this.value;
            const absen = this.getAttribute('data-absen')
            const _absen = Number(absen) - 1
            allSiswa[_absen].absen = Number(selectedValue)
            let typevar = ''
            switch (Number(selectedValue)) {
                case 0:
                    typevar = 'alpha'
                    break
                case 1:
                    typevar = 'sakit'
                    break
                case 2:
                    typevar = 'izin'
                    break
                case 3:
                    typevar = 'hadir'
                    break
            }
            document.getElementById(absen).className = `w-[72dvw] min-2xl:w-[69dvw] max-lg:w-full h-fit rounded-xl p-3 font-poppins shadow-lg bg-absen-${typevar} _XDA`
        });
    }
});

allSiswa.forEach(siswa => {
    document.getElementById('siswas').innerHTML += element(siswa.No + ". " + siswa.Nama, siswa.absen, siswa.No)
});


const dataSiswas = document.getElementsByClassName('_XDA')
for (const datssiswa of dataSiswas) {
    datssiswa.addEventListener('mouseenter', async function () {
        let nama = allSiswa.find(siswa => siswa.No === Number(this.id))?.Nama
        let type = allSiswa.find(siswa => siswa.No === Number(this.id))?.absen
        document.getElementById('namaSelected').innerText = nama
        let typevar = ''
        switch (type) {
            case 0:
                typevar = 'alpha'
                break
            case 1:
                typevar = 'sakit'
                break
            case 2:
                typevar = 'izin'
                break
            case 3:
                typevar = 'hadir'
                break
        }
        document.getElementById('absenSelected').innerText = typevar
    });
    datssiswa.addEventListener('mouseleave', async function () {
        document.getElementById('namaSelected').innerText = ''
        document.getElementById('absenSelected').innerText = ''
    });
}
const allselect = document.getElementsByClassName('absenOptions');
for (const select of allselect) {
    select.addEventListener("change", function () {
        const selectedValue = this.value;
        const absen = this.getAttribute('data-absen')
        const _absen = Number(absen) - 1
        allSiswa[_absen].absen = Number(selectedValue)
        let typevar = ''
        switch (Number(selectedValue)) {
            case 0:
                typevar = 'alpha'
                break
            case 1:
                typevar = 'sakit'
                break
            case 2:
                typevar = 'izin'
                break
            case 3:
                typevar = 'hadir'
                break
        }
        document.getElementById(absen).className = `w-[72dvw] min-2xl:w-[69dvw] max-lg:w-full h-fit rounded-xl p-3 font-poppins shadow-lg bg-absen-${typevar} _XDA`
    });
}
const totSis = document.getElementById('totalSiswa')
totSis.innerText = allSiswa.length

document.getElementById("submitabsen").addEventListener('click', async () => {
    const btn = document.getElementById("submitabsen")

    btn.disabled = true;// disable tombol
    btn.innerText = "Mengirim data..."; // kasih indikator loading
    const tanggal = document.getElementById("dateTanggal").value;

    // buat array absensi
    const dataAbsen = allSiswa.map(s => ({
        No: s.No,
        Nama: s.Nama.toUpperCase(),
        tanggal: tanggal,
        absen: s.absen   // misalnya default hadir = 3
    }));

    console.log("Data absen siap dikirim:", dataAbsen);

    // kirim ke Google Apps Script
    const res = await fetch("https://script.google.com/macros/s/AKfycbz73SnG66DiSQT_KVmkrBxxbM7ZDlrT2zcz-Ju6n3lwEkW4ynjrezHIVSUzg2Ail8Q/exec", {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(dataAbsen),
        headers: { "Content-Type": "application/json" }
    });

    // kalau API Apps Script balikin JSON
    const result = res;
    console.log("Respon dari server:", result);

    if (result != null) {
        console.log("Semua absen berhasil dikirim!");
    }
    btn.disabled = false;
    btn.innerText = "Submit";
    document.getElementById('modal').setAttribute('data-toggle', "false"); 
    document.getElementById('modal').style.display = "none"; 
    const element2 = document.getElementById('modalSelesai')
    element2.style.display = "block"
    element2.setAttribute('data-toggle', "true"); 
})