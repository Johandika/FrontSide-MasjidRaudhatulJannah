import React from 'react'

const Test = () => {
  return (
    // <div className="flex flex-wrap flex-row gap-4">
        //   {/* Badge */}

        //   {tahsins.map((tahsin) => (
        //     <div
        //       className={`px-4 py-2  rounded-md shadow-sm cursor-pointer  ${
        //         categoryActive === tahsin.kategori
        //           ? "bg-greenText text-white font-bold"
        //           : "hover:bg-yellow hover:scale-105 transition"
        //       }`}
        //       key={tahsin.kategori}
        //       onClick={() => {
        //         setCategoryActive(tahsin.kategori);
        //       }}>
        //       {tahsin.kategori}
        //     </div>
        //   ))}

        //   {tahsins.map((tahsin) =>
        //     tahsin.hari.map((hari) => (
        //       <div
        //         className={`px-4 py-2 rounded-md shadow-sm cursor-pointer  ${
        //           hariActive === hari.namaHari
        //             ? "bg-greenText text-white font-bold"
        //             : "hover:bg-yellow hover:scale-105 transition"
        //         }`}
        //         key={hari.namaHari}
        //         onClick={() => {
        //           setHariActive(hari.namaHari);
        //         }}>
        //         {hari.namaHari}
        //       </div>
        //     ))
        //   )}
        // </div>
        {/* Judul dan Deskripsi */}
        <div className="flex flex-col justify-center items-center text-center gap-9">
          <h1 className="text-judul ">Jadwal Tahsin Ikhwan</h1>
          <p className="w-full sm:w-[90%] md:w-[70%]">
            Tahsin ikhwan adalah program tahsin yang dimiliki oleh RJIC untuk peserta tahsin
            laki-laki dewasa.
          </p>
        </div>
        {/* Card */}
        {combinedFilter.map((item) => (
          <li key={item.namaKelas || item.kategori}>
            <div className="grid grid-cols-4 gap-4" key={item.id}>
              {/* Perulangan */}
              <div
                className="flex flex-1 justify-start flex-col  bg-white shadow rounded-md p-5 gap-4"
                key={item.namaKelas}>
                <div className="text-center">
                  <div className="text-greenText font-bold text-2xl">
                    {item.namaKelas || item.kategori}
                  </div>
                </div>
                <hr />
                <div className="text-greenBackground font-bold">{item.pemateri}</div>
                <div className="flex flex-col gap-1">
                  <p className="text-neutral-500 font-base text-sm">Peserta :</p>
                  <ol className="text-neutral-500 font-semibold">
                    {item.namaKelas ? (
                      // Ini adalah kelas, maka tampilkan peserta
                      item.peserta.map((peserta, index) => (
                        <li key={index}>
                          {index + 1}. {peserta}
                        </li>
                      ))
                    ) : (
                      // Ini adalah kategori, maka tidak perlu menampilkan peserta
                      <li>Tidak ada peserta</li>
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Test