import React from 'react'
import '../../style/TCModal.css'

function TCModal() {
  return (
    <div className="TCWrap">
      <div className="TCSection">
        <div className="term-text-buy">
              
              <h3>Pembelian Tiket</h3>
              <ol>
                <li>Pemesanan tiket HANYA untuk penggunaan pribadi.</li>
                <li>Tiket yang dianggap sah adalah yang dibeli melalui laman www.????.com. Panitia tidak bertanggung jawab atas pembelian tiket melalui calo/platform yang bukan mitra resmi GMCO Live. </li>
                <li>Satu tiket HANYA berlaku untuk satu orang.</li>
                <li>Batas waktu transaksi pembayaran adalah 2 jam setelah pemesanan tiket (place order). Apabila pembeli tidak melalukan transaksi selama kurun waktu 2 jam setelah pemesanan tiket, maka pemesanan dianggap batal.</li>
                <li>Apabila terdapat perubahan terkait alamat penerimaan tiket, seperti nomor telepon atau alamat email, harap menghubungi pihak panitia. Panitia akan menghubungi pembeli melalui email. Mohon untuk memastikan bahwa alamat email yang diberikan adalah valid dan terkini. Pembeli dimohon untuk menyadari terkait pengaturan filter email Anda yang mungkin menganggap email kami sebagai spam atau dialihkan menuju folder sampah Anda.</li>
                <li>Jalannya konser dapat didokumentasikan atau direkam. Membeli tiket artinya setuju bahwa pembeli mengizinkan panitia untuk mendokumentasikan diri Anda sebagai anggota penonton. Apabila pembeli keberatan untuk didokumentasikan saat konser berlangsung, mohon untuk menghubungi salah satu anggota box office di tempat tersebut.</li>
                <li>Nomor tempat duduk yang sudah dibeli TIDAK dapat ditukar.</li>
                <li>Seluruh penonton WAJIB  sudah melakukan vaksin COVID-19 minimum dosis dua (2)/booster yang dibuktikan pada aplikasi Peduli Lindungi.</li>
                <li>Penonton WAJIB memilki aplikasi Peduli Lindungi untuk melakukan check-in sebelum memasuki venue. </li>
              </ol>      
        </div>
        <div className="term-text-send">
          <h3>Pengiriman Tiket</h3>
          <ol>
            <li>e-Ticket akan kami kirimkan kepada Anda melalui email dan dapat ditukarkan dengan gelang tiket pada tanggal 12 November 2022 pukul ???-??? WIB.</li>
            <li>Kami tidak bertanggung jawab atas kelalaian pembeli tiket yang mengakibatkan e-ticket jatuh ke tangan orang lain</li>
          </ol>
        </div>
        <div className="term-cancel-return">
          <h3>Hak Pembatalan dan Pengembalian Uang</h3>
          <ol>
            <li>Kecuali dinyatakan dalam ketentuan lain, tiket yang telah terkonfirmasi pembayarannya tidak dapat ditukar dan tidak dapat diuangkan dalam situasi dan kondisi apapun.</li>
            <li>Apabila konser telah berlangsung dan tiket belum diterima oleh pembeli karena alasan berikut; panitia tidak mengirimkan e-ticket kepada pembeli; maka pembeli berhak mendapatkan pengembalian dana (refund) sejumlah harga tiket yang telah dibeli.</li>
            <li>Panitia hanya menerima pengajuan pembatalan atau pengembalian dana oleh pembeli yang data dirinya sesuai dengan identitas yang digunakan untuk membeli tiket konser GMCO Live</li>
            <li>Pengajuan pengembalian dana akan dilayani selambat-lambatnya SATU hari sebelum acara berlangsung.</li>
            <li>Pengembalian dana yang diajukan oleh pembeli melalui narahubung yang tertera akan dikonfirmasi terlebih dahulu oleh panitia dan akan diinformasikan lebih lanjut kepada pembeli mengenai keputusan pengembalian dana.</li>
            <li>Apabila pengajuan pengembalian dana disetujui oleh panitia, pembeli diharap bersedia untuk memberikan nomor rekening sebagai bentuk tindak lanjut pengembalian dana yang diajukan.</li>
            <li>Panitia tidak bertanggung jawab apabila terdapat kesalahan pencantuman nomor rekening atau nama pembeli yang menyebabkan tidak diterimanya uang pengembalian.</li>
            <li>Dimohon untuk tidak mengajukan pembatalan atau pengembalian dana dalam satu kurun waktu berturut-turut (spamming) atau permintaan pembeli tidak akan dilayani oleh panitia.</li>
          </ol>
        </div>
        <div className="term-concert-change">
          <h3>Pembatalan, Perubahan, atau Penundaan Konser</h3>
          <ol>
            <li>Segala perihal tentang pengubahan atau pembatalan konser adalah tanggung jawab panitia. </li>
            <li>Panitia menjamin memberikan pemberitahuan terkait pengubahan atau pembatalan konser dan akan bertanggung jawab atas hasil apa pun.</li>
            <li>Tamu yang tidak menaati tata tertib, berperilaku tidak pantas atau menyinggung, dan tidak mematuhi instruksi dari panitia akan segera dikeluarkan dari venue serta TIDAK diberikan pengembalian uang.</li>
            <li>Panitia TIDAK bertanggung jawab untuk memberikan refund tiket yang telah terkonfirmasi pembayarannya apabila Anda batal menonton konser karena alasan pribadi.</li>
            <li>Tiket yang sudah dibeli tidak dapat ditukar atau dikembalikan kecuali konser ditunda atau dibatalkan.</li>
            <li>Biaya terkait kebutuhan pribadi seperti biaya perjalanan atau akomodasi lain yang Anda keluarkan apabila konser ditunda atau dibatalkan BUKAN tanggung jawab panitia.</li>
          </ol>

        </div>
      </div>
    </div>
    
  )
}

export default TCModal