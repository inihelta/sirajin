const data = async () => {
    const res = await fetch('src/data/siswa.json')
    const datas = await res.json();
    return datas;
}
let allSiswa = await data()

const element = (siswa, type = 3, absen) => {
    let typevar  = 'alpha'
    let options = /* html */`
        <option
            value="3"
            label="hadir"></option>
        <option
            value="0"
            label="alpha"></option>
        <option
            value="1"
            label="sakit"></option>
        <option
            value="2"
            label="izin"></option>
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
                    label="alpha"></option>
                    <option
                    value="1"
                    label="sakit"></option>
                    <option
                    value="2"
                    label="izin"></option>
                    <option
                        value="3"
                        label="hadir"></option>
                `
            break
        case 1:
            options = /* html */`
                    <option
                        value="1"
                        label="sakit"></option>
                    <option
                        value="0"
                        label="alpha"></option>
                    <option
                        value="2"
                        label="izin"></option>
                    <option
                        value="3"
                        label="hadir"></option>
                `
            break
        case 2:
            options = /* html */`
                    <option
                        value="2"
                        label="izin"></option>
                    <option
                        value="0"
                        label="alpha"></option>
                    <option
                        value="1"
                        label="sakit"></option>
                    <option
                        value="3"
                        label="hadir"></option>
                `
            break
        case 3:
            options = /* html */`
                    <option
                        value="3"
                        label="hadir"></option>
                    <option
                        value="0"
                        label="alpha"></option>
                    <option
                        value="1"
                        label="sakit"></option>
                    <option
                        value="2"
                        label="izin"></option>
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
    let inputValue = this.value
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