import { useLocation } from 'react-router-dom'

function PrivacyPolicy() {
  const COMPANY_NAME = "Malesin.AI";
  const COMPANY_LEGAL_NAME = "PT Teknologi Riteck Indonesia";
  const EMAIL = "support@malesin.ai";

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Kebijakan Privasi</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: 27 April 2026</p>

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>
          Dalam rangka memastikan agar setiap data yang menyangkut identitas, kontak, profil, tingkah laku dalam Layanan {COMPANY_NAME} dan data terkait dengan informasi pribadi Anda yang dapat diidentifikasi baik secara langsung maupun tidak langsung (“Data Pribadi”) Anda selalu terlindungi ketika Anda mengakses Layanan {COMPANY_NAME} dan/atau menggunakan Fitur yang ada di dalamnya yang dikembangkan oleh {COMPANY_LEGAL_NAME} (“{COMPANY_NAME}” atau “Kami”), Kami berkomitmen untuk melindungi Data Pribadi yang diatur lebih lanjut dalam Kebijakan Privasi ini.
        </p>
        <p>
          Kebijakan Privasi ini (“Kebijakan”) merupakan serangkaian aturan yang merupakan satu kesatuan daripada Syarat dan Ketentuan Layanan {COMPANY_NAME}, yang dibuat sebagai dasar atas segala kegiatan Kami dalam hal perolehan dan pengumpulan, pengolahan, penyimpanan, penampilan, penyebarluasan dan pemusnahan dari Data Pribadi dalam Layanan {COMPANY_NAME}. Definisi maupun istilah yang diawali dengan huruf kapital yang terdapat pada halaman Syarat dan Ketentuan Layanan {COMPANY_NAME} dianggap memiliki arti dan penafsiran yang sama dengan istilah yang digunakan dalam Kebijakan ini, kecuali ditentukan lain dalam Kebijakan ini.
        </p>
        <p>
          Dengan mengakses dan/atau menggunakan Layanan {COMPANY_NAME}, Anda telah membaca, mengerti dan memberikan persetujuan kepada {COMPANY_NAME} untuk memperoleh, mengumpulkan, menyimpan, mengelola dan menggunakan Data Pribadi tersebut sebagaimana tercantum dalam Kebijakan serta mengikatkan diri atas seluruh ketentuan dalam Kebijakan ini. Data Pribadi Anda sangat penting bagi kami, dan Anda sewaktu-waktu dapat menarik persetujuan Anda atas pengumpulan Data Pribadi. Jika Anda tidak menyetujui Kebijakan ini, maka Anda tidak diperkenankan untuk mengakses dan/atau menggunakan Layanan {COMPANY_NAME}.
        </p>
        <p>
          Dengan tunduk pada Kebijakan Privasi ini, Anda juga dianggap mengikatkan diri dengan Syarat dan Ketentuan {COMPANY_NAME} dan/atau syarat dan ketentuan produk atau Layanan {COMPANY_NAME} lainnya yang relevan (sebagaimana berlaku). Dalam keadaan apapun, ketidakberlakuan Syarat dan Ketentuan {COMPANY_NAME} dan/atau syarat dan ketentuan produk atau Layanan {COMPANY_NAME} lainnya yang relevan tidak akan menyebabkan Kebijakan Privasi ini menjadi tidak sah, tidak berlaku, dan/atau tidak dapat dilaksanakan.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Perolehan atau Pengumpulan Data Pribadi</h2>
          <div className="space-y-4">
            <div>
              <p>1.1. Ketika Anda melakukan akses ke dalam Layanan {COMPANY_NAME} atau menggunakan Fitur yang terdapat di dalam Layanan {COMPANY_NAME}, Anda secara langsung maupun tidak langsung memberikan Data Pribadi kepada Kami. Sebagai contoh, pada saat Anda mendaftarkan diri dengan membuat Akun, Kami akan mengumpulkan dan menyimpan Data Pribadi Anda berupa nama, alamat email, password, maupun data lainnya. Selain itu, Kami mengumpulkan Data Pribadi Anda antara lain pada saat Anda:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>mengakses Layanan {COMPANY_NAME} dan/atau menggunakan Fitur;</li>
                <li>melakukan registrasi dengan membuat Akun pada Layanan {COMPANY_NAME};</li>
                <li>merespon survei yang dikirimkan oleh Kami;</li>
                <li>mengirimkan ulasan, kesan, pesan, kritik dan/atau saran Anda untuk Kami;</li>
                <li>menghubungi Kami, melalui sarana komunikasi yang Kami sediakan;</li>
                <li>menggunakan Fitur yang membutuhkan izin akses pada perangkat Anda; atau</li>
                <li>memasukkan informasi sehubungan dengan Data Pribadi dalam bentuk apa pun ke dalam Layanan {COMPANY_NAME} dan/atau Fitur.</li>
              </ul>
            </div>
            
            <div>
              <p>1.2. Data Pribadi yang Kami kumpulkan adalah data yang memang Anda berikan kepada Kami melalui cara yang telah Kami jelaskan sebelumnya. Data Pribadi tersebut mencakup, antara lain:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>data perorangan yang menyangkut informasi pribadi Anda termasuk namun tidak terbatas pada alamat, nomor telepon, dan alamat email;</li>
                <li>data badan usaha yang menyangkut informasi badan usaha Anda antara lain nama, alamat, nomor telepon, Akta badan usaha, NPWP Badan Usaha, Nomor Induk Berusaha (NIB), dan Izin Operasional lainnya;</li>
                <li>respon Anda terhadap survei yang Kami berikan;</li>
                <li>data lokasi riil atau perkiraannya seperti alamat Internet Protocol, lokasi Wi-Fi, geo-location, dan sebagainya;</li>
                <li>data berupa waktu dari setiap aktivitas penggunaan, termasuk aktivitas pendaftaran, login, dan lain sebagainya;</li>
                <li>data penggunaan dan/atau preferensi Anda, diantaranya interaksi Anda dalam menggunakan Layanan {COMPANY_NAME} serta pengaturan yang dipilih;</li>
                <li>informasi mengenai perangkat lunak dan perangkat keras yang Anda gunakan untuk mengakses Layanan {COMPANY_NAME} dan/atau menggunakan Fitur;</li>
                <li>informasi spesifik tentang perangkat Anda termasuk model perangkat keras Anda, sistem operasi dan versinya, informasi profil pengguna untuk mengidentifikasi perangkat secara unik dan mencegah penipuan. Kami tidak mengumpulkan pengidentifikasi perangkat unik apa pun seperti IMEI atau nomor seri;</li>
                <li>informasi kontak pelanggan akhir Anda (End-User) yang secara spesifik terbatas pada nama dan nomor telepon (sehubungan dengan peran Kami sebagai Pemroses Data Pribadi);</li>
                <li>data catatan (log), diantaranya catatan pada server yang menerima data seperti alamat IP perangkat, tanggal dan waktu akses, Fitur atau laman yang dilihat;</li>
                <li>interaksi, ulasan, kritik, saran dan/atau pesan dari Anda yang ditujukan kepada Kami; dan/atau</li>
                <li>hal lainnya yang Anda lakukan dalam Layanan {COMPANY_NAME} dan/atau Fitur dan data lainnya yang Anda masukkan.</li>
              </ul>
            </div>

            <p>1.3. Dengan ini Anda menyatakan dan menjamin bahwa Data Pribadi yang Anda masukkan ke dalam Layanan {COMPANY_NAME} dan/atau Fitur adalah data yang tepat, lengkap, akurat serta berdasarkan keadaan yang sebenar-benarnya, dan Anda bertanggung jawab penuh atas Data Pribadi tersebut.</p>
            <p>1.4. Kami berhak dari waktu ke waktu meminta autentifikasi, verifikasi dan/atau pemutakhiran Data Pribadi Anda, sehingga data dan informasi Anda akurat, lengkap, dan terbaru.</p>
            <p>1.5. Dengan tetap mengakses Layanan {COMPANY_NAME}, menggunakan Fitur, dan/atau layanan Kami lainnya, Anda dengan ini memberikan persetujuan secara tegas kepada Kami untuk memperoleh dan mengumpulkan Data Pribadi Anda sebagai yang dijabarkan pada Pasal 1.1 dan 1.2.</p>
            <p>1.6. Khusus dalam konteks penggunaan Layanan {COMPANY_NAME} dan/atau Fitur yang memungkinkan Anda untuk mengunggah, mengelola, atau mengirimkan pesan kepada pelanggan akhir Anda (End-User), kedudukan Kami secara hukum adalah murni sebagai Pemroses Data Pribadi (Data Processor). Anda berkedudukan sebagai Pengendali Data Pribadi (Data Controller).</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Penggunaan Data Pribadi</h2>
          <div className="space-y-4">
            <div>
              <p>2.1. Data Pribadi yang telah Kami kumpulkan dan peroleh akan Kami gunakan sepenuhnya untuk kepentingan Anda, Kami, dan/atau mitra dan afiliasi Kami. Kami dapat menggunakan Data Pribadi tersebut untuk, antara lain:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>memproses data Anda untuk kebutuhan Anda dalam mengakses Layanan {COMPANY_NAME} dan/atau menggunakan Fitur;</li>
                <li>mengelola, mengoperasikan, mengurus dan memberikan Anda layanan yang ditawarkan di Layanan {COMPANY_NAME};</li>
                <li>menghubungi Anda mengenai hal-hal yang berkaitan dengan penggunaan Anda dan/atau akses Layanan {COMPANY_NAME};</li>
                <li>untuk melakukan komunikasi kepada Anda sehubungan dengan permintaan kritik dan saran;</li>
                <li>memberitahukan informasi, pengetahuan, jajak pendapat, program-program, atau promosi menarik untuk Anda;</li>
              </ul>
            </div>
            <div>
              <p>2.2. Pengembangan Layanan {COMPANY_NAME} dan/atau Fitur dalam rangka meningkatkan layanan Kami, termasuk diantaranya menggunakan informasi yang diperoleh untuk tujuan penelitian, analisis, pengembangan dan pengujian, serta untuk:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>pengembangan bisnis, layanan-layanan, Fitur, produk baru dan/atau strategi pemasaran;</li>
                <li>mengukur dan meningkatkan pengalaman dan kepuasan pengguna Layanan {COMPANY_NAME};</li>
                <li>membantu Anda pada saat memberikan laporan kepada Kami terkait penggunaan Layanan {COMPANY_NAME};</li>
                <li>menegakkan dan menerapkan ketentuan dalam Syarat dan Ketentuan Penggunaan Layanan {COMPANY_NAME};</li>
                <li>menyelesaikan pengaduan yang Kami terima serta memecahkan masalah terkait Layanan {COMPANY_NAME}; dan/atau</li>
                <li>untuk tujuan lain yang diberitahukan kepada Anda pada saat pengumpulan Data Pribadi maupun tujuan lainnya sepanjang dilakukan sesuai Hukum Yang Berlaku.</li>
              </ul>
            </div>
            <p>2.3. Anda dengan ini memahami bahwa pemanfaatan Fitur dalam Layanan {COMPANY_NAME} memerlukan proses autentifikasi, verifikasi, dan/atau pemutakhiran Data Pribadi dari Anda.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">3. Pembagian Data Pribadi ke Pihak Ketiga</h2>
          <div className="space-y-4">
            <p>3.1. Kami menghargai kerahasiaan Data Pribadi Anda dan Kami berkomitmen untuk tidak menjual, menyewakan, menampilkan, atau menyebarkan Data Pribadi Anda tanpa persetujuan dari Anda, kecuali ditentukan lain dalam Kebijakan ini.</p>
            <p>3.2. Dengan mengesampingkan ketentuan pasal 3.1 di atas, dengan tetap mengakses Layanan {COMPANY_NAME}, Anda dengan ini secara langsung memberikan persetujuan untuk mengungkapkan Data Pribadi Anda kepada pihak ketiga terpilih yang membantu dan/atau bekerja sama dengan Kami (“Pihak Ketiga Terpilih”).</p>
            <p>3.3. Kami senantiasa berupaya wajar untuk memastikan bahwa Pihak Ketiga Terpilih yang bekerjasama dengan Kami menerapkan standar pelindungan data yang memadai (seperti kebijakan Meta/WhatsApp atau OpenAI).</p>
            <p>3.4. Kami berwenang untuk mengungkapkan Data Pribadi Anda untuk mematuhi perintah pengadilan, otoritas berwenang lainnya, atau berdasarkan ketentuan Hukum Yang Berlaku.</p>
            <p>3.5. Anda memahami dan menyetujui bahwa dalam rangka mengembangkan Layanan {COMPANY_NAME}, Kami mungkin akan menggunakan dan membagikan data dan informasi Anda yang tidak mengidentifikasi Anda secara individu (data agregat).</p>
            <p>3.6. Untuk keperluan penyediaan dan operasionalisasi Layanan {COMPANY_NAME}, Data Pribadi yang dikumpulkan mungkin dipindahkan, dikirimkan, disimpan, dan/atau diproses di server atau oleh pihak ketiga yang berlokasi di luar wilayah Republik Indonesia, dengan senantiasa berupaya memastikan tingkat perlindungan yang setara.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">4. Penggunaan Cookies dan Layanan Pihak Ketiga</h2>
          <div className="space-y-4">
            <p>4.1. Cookies merupakan berkas teks yang ditempatkan pada komputer Anda untuk kepentingan pencatatan. Kami menggunakan cookies untuk membantu Kami meningkatkan kenyamanan Anda.</p>
            <p>4.2. Cookies akan mencatat Data Pribadi Anda seperti data yang Anda masukkan ke Layanan {COMPANY_NAME} untuk mempermudah Anda dalam mengakses Layanan pada kunjungan berikutnya.</p>
            <p>4.3. Anda dapat mengatur untuk tidak mengaktifkan cookies pada browser Anda secara sebagian atau keseluruhan, namun Anda mungkin tidak dapat mengakses seluruh atau sebagian Layanan {COMPANY_NAME} dan/atau Fitur.</p>
            <p>4.4. Untuk mengetahui cookies lebih lanjut, Anda dianjurkan untuk mengunjungi www.aboutcookies.org atau www.allaboutcookies.org.</p>
            <p>4.5. Kami berhak untuk menggunakan layanan pihak ketiga untuk menganalisa Data Pribadi untuk Kami, seperti Google Analytics dan layanan pihak ketiga lainnya.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">5. Pilihan Anda dan Transparansi</h2>
          <div className="space-y-4">
            <p>5.1. Berdasarkan peraturan perundang-undangan pelindungan data pribadi di Indonesia, Kami menghormati hak-hak Anda atas Data Pribadi Anda, yang meliputi:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Hak untuk mengakses, melihat, mengubah, atau memperbarui Data Pribadi Anda yang ada pada sistem Kami;</li>
              <li>Hak untuk menghentikan, menunda, atau membatasi pemrosesan Data Pribadi Anda secara proporsional;</li>
              <li>Hak untuk mencabut atau menarik kembali persetujuan (consent) atas pemrosesan Data Pribadi Anda;</li>
              <li>Hak untuk meminta penghapusan dan/atau pemusnahan Data Pribadi Anda dari sistem Kami (Right to be Forgotten); dan</li>
              <li>Hak untuk mendapatkan dan/atau menggunakan Data Pribadi Anda dari Kami dalam bentuk yang lazim digunakan (Hak Portabilitas Data).</li>
            </ul>
            <p>5.2. Pelaksanaan hak-hak tersebut dapat dilakukan dengan menghubungi Kami melalui sarana komunikasi yang tertera pada Kebijakan ini.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">6. Penyimpanan dan Penghapusan</h2>
          <div className="space-y-4">
            <p>6.1. Data Pribadi Anda akan disimpan dengan prosedur dan sarana pengamanan sesuai dengan ketentuan peraturan perundang-undangan yang berlaku di Indonesia.</p>
            <p>6.2. Apabila Anda bermaksud untuk menutup Akun milik Anda pada Layanan {COMPANY_NAME}, Anda dapat mengajukan permohonan penutupan Akun dengan mengirimkan permintaan tertulis kepada Kami.</p>
            <p>6.3. Kami memiliki wewenang untuk memblokir Akun milik Anda berdasarkan ketentuan Kami, berdasarkan penetapan atau putusan Pengadilan, dan/atau sesuai peraturan perundang-undangan.</p>
            <p>6.4. Kami memiliki wewenang untuk menghapus Data Pribadi Anda berdasarkan permintaan tertulis dari Anda atau berdasarkan kebijakan Kami.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">7. Pembatasan Tanggung Jawab</h2>
          <div className="space-y-4">
            <p>7.1. Anda bertanggung jawab atas keamanan dan menerapkan pengamanan yang tepat dalam menjaga Data Pribadi anda.</p>
            <p>7.2. Kami tidak bertanggung jawab atas pertukaran dan/atau pemberian Data Pribadi Anda yang dilakukan sendiri oleh Anda.</p>
            <p>7.3. Kami hanya bertanggung jawab atas perlindungan dan pengamanan Data Pribadi Anda sebatas pada Data Pribadi yang disimpan dalam sistem yang dikembangkan dan dikelola oleh Kami.</p>
            <p>7.4. Kami tidak bertanggung jawab atas keaslian, keotentikan, kebenaran, keakuratan dan/atau kelengkapan Data Pribadi yang diberikan oleh Anda.</p>
            <p>7.5. Walaupun Kami telah menerapkan standar keamanan industri yang wajar, sistem tidak luput dari risiko kebocoran. Dalam hal terjadi kegagalan pelindungan Data Pribadi murni di bawah kendali sistem Kami, Kami berkomitmen untuk menyampaikan pemberitahuan secara tertulis paling lambat 3x24 jam.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">8. Lain-lain</h2>
          <div className="space-y-4">
            <p>8.1. Kami berhak untuk melakukan perubahan terhadap Kebijakan ini guna menyesuaikan dengan perkembangan bisnis dan ketentuan hukum yang berlaku. Perubahan akan diunggah ke Layanan {COMPANY_NAME}.</p>
            <p>8.2. Apabila terdapat ketentuan dari Kebijakan ini yang melawan hukum, tidak dapat diterapkan atau menjadi tidak berlaku, maka ketentuan tersebut akan dianggap dihapus dan tidak mempengaruhi ketentuan lainnya.</p>
            <p>8.3. Dalam hal terjadi perubahan kendali atau perubahan kepemilikan usaha Kami, maka Data Pribadi Anda dapat/akan menjadi bagian dari pengalihan berdasarkan tindakan korporasi tersebut.</p>
            <p>8.4. Apabila terdapat perbedaan penafsiran antara versi Bahasa Indonesia dan versi bahasa asing dari Kebijakan ini, maka versi Bahasa Indonesia yang akan berlaku.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">9. Kontak Kami</h2>
          <div className="space-y-4">
            <p>
              9.1. Anda dapat menyampaikan pertanyaan, kritik dan saran, keluhan, maupun pengaduan sehubungan dengan Data Pribadi dengan menghubungi Kami melalui email{' '}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>.
            </p>
            <p>9.2. Untuk merespon pertanyaan atau pengaduan Anda, Kami akan terlebih dahulu melakukan verifikasi atas data Anda.</p>
            <p>9.3. Kami akan memberikan upaya terbaik Kami untuk membantu Anda menyelesaikan setiap kendala yang Anda alami.</p>
            <p>
              9.4. Anda dengan ini menyatakan bahwa memahami ketentuan bahwa penyampaian pertanyaan, keluhan, maupun pengaduan sehubungan dengan Data Pribadi hanya dapat dilakukan melalui email ke{' '}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>{' '}
              dan tidak dapat dilakukan melalui telepon atau media sosial dalam bentuk apapun.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

function TermsOfService() {
    const COMPANY_NAME = "Malesin.AI";
  const COMPANY_LEGAL_NAME = "PT Teknologi Riteck Indonesia";
  const EMAIL = "support@malesin.ai";

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Syarat & Ketentuan</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: 27 April 2026</p>

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>
          Syarat dan Ketentuan Penggunaan Layanan {COMPANY_NAME} (“Syarat dan Ketentuan {COMPANY_NAME}”) ini mengatur syarat dan ketentuan penggunaan Layanan {COMPANY_NAME} (sebagaimana didefinisikan di bawah ini) oleh Anda (“Anda” atau “Pengguna”) termasuk setiap dan semua Fitur (sebagaimana didefinisikan di bawah ini) yang ada di dalamnya yang dikembangkan, dioperasikan dan/atau disediakan oleh {COMPANY_LEGAL_NAME} (“{COMPANY_NAME}” atau “Kami”).
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Istilah dan Pengertian</h2>
          <div className="space-y-3">
            <p>1.1. "{COMPANY_NAME}" sesuai konteksnya merujuk kepada {COMPANY_LEGAL_NAME} sebagai perusahaan penyedia platform Omnichannel CRM berbasis Artificial Intelligence (AI) yang memungkinkan otomatisasi interaksi pelanggan, pengelolaan komunikasi lintas kanal, serta peningkatan efisiensi operasional.</p>
            <p>1.2. "Akun" berarti kumpulan informasi mengenai Anda yang disampaikan kepada {COMPANY_NAME} sehubungan dengan penggunaan Layanan {COMPANY_NAME} yang digunakan untuk membedakan satu Pengguna dari Pengguna lainnya.</p>
            <p>1.3. "Anda" atau "Pengguna" merujuk pada individu, badan hukum, atau entitas lainnya yang telah mendaftar dan terverifikasi oleh {COMPANY_NAME} sebagai Pengguna.</p>
            <p>1.4. "Biaya Layanan {COMPANY_NAME}" berarti biaya yang dapat dikenakan oleh {COMPANY_NAME} kepada Pengguna atas penggunaan Layanan {COMPANY_NAME}.</p>
            <p>1.5. "Data" atau "Informasi" merujuk pada setiap data, informasi dan/atau keterangan dalam bentuk apapun yang, dari waktu ke waktu, Anda atau Pengguna sampaikan kepada {COMPANY_NAME}.</p>
            <p>1.6. "Fitur" berarti suatu fungsi atau kemampuan khusus dalam suatu Layanan {COMPANY_NAME} yang diciptakan, dikembangkan dan/atau dikelola oleh {COMPANY_NAME}.</p>
            <p>1.7. "Hari Kerja" berarti hari pada kalender masehi, selain hari Sabtu, Minggu, dan hari libur resmi nasional.</p>
            <p>1.8. "Layanan" sesuai konteksnya merujuk pada masing-masing layanan yang tercakup dalam Layanan {COMPANY_NAME} termasuk didalamnya adalah setiap dan/atau seluruh Fitur yang tersedia.</p>
            <p>1.9. "Layanan {COMPANY_NAME}" berarti segala layanan yang dapat diakses oleh Pengguna melalui {COMPANY_NAME} termasuk di dalamnya Layanan Chat, Layanan CRM, atau layanan lain yang dioperasikan {COMPANY_NAME} atau bersama Mitra {COMPANY_NAME}.</p>
            <p>1.10. "Mitra {COMPANY_NAME}" berarti pihak ketiga yang bekerjasama dengan {COMPANY_NAME} baik langsung maupun tidak langsung.</p>
            <p>1.11. "Peraturan Perundang-undangan Yang Berlaku" berarti setiap produk pengaturan pemerintah Indonesia di berbagai tingkat pemerintahan.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Pendaftaran Akun dan Proses Verifikasi</h2>
          <div className="space-y-3">
            <p>2.1. Anda harus berusia 17 (tujuh belas) tahun ke atas dan cakap secara hukum untuk dapat membuat Akun pada {COMPANY_NAME}.</p>
            <p>2.2. Pembuatan Akun dilakukan dengan cara mendaftarkan diri Anda melalui {COMPANY_NAME} dengan menyampaikan informasi sebagai berikut:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>nama lengkap;</li>
              <li>nomor telepon;</li>
              <li>alamat email; dan</li>
              <li>kata sandi.</li>
            </ul>
            <p>2.3. {COMPANY_NAME} akan mengirimkan Link Verifikasi ke Email Anda. Kemudian Anda dapat Login ke {COMPANY_NAME}.</p>
            <p>2.4. {COMPANY_NAME} berhak dan berwenang secara penuh untuk menolak permohonan pembuatan Akun Anda apabila {COMPANY_NAME} menemukan bahwa informasi yang Anda sampaikan belum benar dan/atau lengkap.</p>
            <p>2.5. Dalam hal Akun Anda telah terdaftar, Anda tidak dapat melakukan pendaftaran Akun berikutnya dengan menggunakan data pribadi yang sama tanpa izin tertulis.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">3. Ketentuan Umum Penggunaan Akun</h2>
          <div className="space-y-3">
            <p>3.1. Pengguna akan bertanggung jawab sepenuhnya atas keamanan dan kerahasiaan Akun beserta Data yang ada didalamnya.</p>
            <p>3.2. Pengguna membebaskan {COMPANY_NAME} dari segala tanggung jawab, tuntutan, ganti kerugian, atau gugatan apapun yang mungkin timbul atas penggunaan (termasuk penyalahgunaan) Akun dan Layanan.</p>
            <p>3.3. {COMPANY_NAME} memiliki hak untuk menangguhkan sebagian atau keseluruhan Layanan termasuk membekukan Akun dalam hal adanya dugaan pelanggaran.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">4. Biaya Layanan Cekat.AI</h2>
          <div className="space-y-3">
            <p>4.1. {COMPANY_NAME} dapat mengenakan Biaya Layanan untuk masing-masing Layanan yang digunakan oleh Pengguna.</p>
            <p>4.3. {COMPANY_NAME} dapat mengubah Biaya Layanan sewaktu-waktu dan akan memberitahukan kepada Pengguna atas perubahan tersebut.</p>
            <p>4.5. Setiap paket berlangganan sudah mencakup alokasi awal WhatsApp Credits dan AI Credits dalam jumlah tertentu.</p>
            <p>4.6. Terkait dengan alokasi penggunaan kredit, status Akun Pengguna terbagi menjadi 2 (dua) fase utama:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Fase In Development:</strong> Fase yang berlangsung selama proses onboarding/setup. Pengguna diberikan kuota terbatas khusus untuk keperluan pengujian.</li>
              <li><strong>Fase LIVE:</strong> Fase operasional yang dimulai sejak proses setup selesai. Pengguna menerima alokasi penuh sesuai paket berlangganan.</li>
            </ul>
            <p>4.10. Ketentuan mengenai sisa kredit (unused credits) pada akhir periode penagihan:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Kredit Bawaan Paket:</strong> Tidak dapat diakumulasi (non-rollover) dan akan hangus/di-reset ke jumlah awal.</li>
              <li><strong>Kredit Tambahan (Add-on):</strong> Tidak akan hangus, diakumulasikan secara otomatis (automatic rollover).</li>
            </ul>
            <p>4.15. Seluruh biaya yang berkaitan dengan layanan pihak ketiga atau Mitra {COMPANY_NAME} (seperti Meta, WhatsApp, OpenAI) dapat berubah sewaktu-waktu mengikuti kebijakan harga mitra tersebut.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">5. Onboarding dan Pelatihan</h2>
          <div className="space-y-3">
            <p>5.1. Setiap paket berlangganan mencakup sesi onboarding dan pengaturan dasar (basic setup) tanpa biaya tambahan, terbatas pada: integrasi maksimal 5 akun WhatsApp Business, pelatihan dasar platform, dan konfigurasi awal AI standar.</p>
            <p>5.2. Kebutuhan pengaturan kompleks/kustom (advanced setup) dapat dikenakan biaya profesional tambahan.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">6. Langganan, Penagihan, dan Pembayaran</h2>
          <div className="space-y-3">
            <p>6.1. Masa berlangganan Anda berlangsung sesuai pilihan langganan dan dimulai sejak Tanggal LIVE.</p>
            <p>6.4. Anda setuju melakukan pembayaran penuh paling lambat 5 hari kalender sejak tanggal faktur dikirimkan ("Batas Waktu Standar").</p>
            <p>6.5. Denda keterlambatan sebesar 2% per bulan dapat dikenakan atas tagihan yang belum dibayarkan, dan akses Layanan dapat dibatasi/ditangguhkan.</p>
            <p>6.8. Pesanan yang telah dikonfirmasi atau Purchase Order (PO) bersifat final dan tidak dapat dibatalkan secara sepihak.</p>
            <p>6.12. Pengakhiran Layanan dapat dilakukan melalui menu pembatalan di dashboard (Paket Reguler/Bulanan) atau pemberitahuan tertulis paling lambat 30 hari sebelumnya (Paket Enterprise/Tahunan).</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">7. Perjanjian Tingkat Layanan (Service Level Agreement/SLA)</h2>
          <div className="space-y-3">
            <p>7.3. Waktu respons dukungan menyesuaikan dengan tingkat layanan: Normal (24 jam), Dedicated (4 jam), 24/7 Support (1 jam).</p>
            <p>7.6. Kami berkomitmen menjaga ketersediaan platform (uptime) sebesar 99,5%, tidak termasuk waktu pemeliharaan terjadwal.</p>
            <p>7.8. Jika uptime bulanan berada di bawah 99,5% akibat kegagalan sistem internal Kami, Pengguna berhak atas kompensasi senilai total sisa masa berlangganan yang belum berjalan (dengan pengecualian tertentu seperti Force Majeure atau gangguan pihak ketiga).</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">8. Tindakan-Tindakan Yang Dilarang</h2>
          <div className="space-y-3">
            <p>8.1. Pada saat mengakses {COMPANY_NAME} dan/atau menggunakan Layanan beserta segala Fiturnya, Pengguna dilarang untuk:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Melakukan intersepsi/penyadapan atas transmisi informasi elektronik.</li>
              <li>Merusak, mengubah, menghilangkan informasi elektronik pada platform.</li>
              <li>Mendistribusikan, melisensikan, atau mengakui kepemilikan {COMPANY_NAME} tanpa hak.</li>
              <li>Memanfaatkan Layanan untuk penipuan atau melanggar hak pihak ketiga.</li>
              <li>Melakukan reverse engineering, dekompilasi, atau pembongkaran kode pemrograman {COMPANY_NAME}.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">9. Perlindungan Data & Hak Kekayaan Intelektual</h2>
          <div className="space-y-3">
            <p>9.1. {COMPANY_NAME} akan selalu menjaga data pribadi Pengguna dengan mengacu pada Kebijakan Privasi yang menjadi bagian yang tidak terpisahkan dari Syarat dan Ketentuan ini.</p>
            <p>13.1. Seluruh hak kekayaan intelektual (logo, desain, kode, konten) dari Materi adalah milik {COMPANY_NAME}.</p>
            <p>13.4. Pengguna memberikan persetujuan kepada Kami untuk menggunakan nama dan logo perusahaan Pengguna sebagai referensi pemasaran.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">10. Batasan Tanggung Jawab dan Ganti Rugi</h2>
          <div className="space-y-3">
            <p>14.4. Layanan ini adalah perangkat pendukung. Seluruh hasil, output, atau keputusan bisnis yang diambil berdasarkan penggunaan Layanan sepenuhnya menjadi tanggung jawab Pengguna.</p>
            <p>14.5. Kami memanfaatkan teknologi AI. Hasil AI tidak selalu akurat atau lengkap, dan dihasilkan secara otomatis tanpa peninjauan kami. Pengguna wajib meninjau output tersebut.</p>
            <p>14.9. Apabila terdapat kerugian yang terbukti murni kesalahan {COMPANY_NAME}, kewajiban Kami terbatas pada jumlah paling rendah antara jumlah biaya transaksi yang telah dibayarkan oleh Pengguna.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">11. Keadaan Kahar (Force Majeure)</h2>
          <div className="space-y-3">
            <p>15.1. {COMPANY_NAME} dibebaskan dari kewajiban (termasuk SLA) apabila kegagalan diakibatkan oleh Keadaan Kahar, seperti bencana alam, gangguan jaringan internet global, serangan siber skala besar, atau gangguan dari Mitra {COMPANY_NAME} (seperti WhatsApp/Meta).</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">12. Penyelesaian Perselisihan</h2>
          <div className="space-y-3">
            <p>16.1. Segala perselisihan akan diselesaikan secara musyawarah mufakat dalam 30 Hari Kerja.</p>
            <p>16.3. Apabila musyawarah tidak tercapai, perselisihan akan diajukan kepada Badan Arbitrase Nasional Indonesia (BANI) di Jakarta.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">13. Lain-lain & Kontak Kami</h2>
          <div className="space-y-3">
            <p>18.1. Jika Pengguna memiliki pertanyaan, permintaan, atau keluhan, dapat menghubungi Kami melalui E-mail: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>.</p>
            <p>19.3. Syarat dan Ketentuan ini dapat diubah atau ditambahkan dari waktu ke waktu tanpa pemberitahuan sebelumnya. Versi terbaru akan diunggah pada laman {COMPANY_NAME}.</p>
            <p>19.7. Dengan mengakses dan menggunakan Layanan, Pengguna dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan ini.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function LegalPage() {
  const APP_NAME = 'malesin.ai'
  const COMPANY_NAME = 'malesin.ai'
  const { pathname } = useLocation()
  const isPrivacy = pathname === '/privacy'

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-6">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to {APP_NAME}
        </a>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
          {isPrivacy ? <PrivacyPolicy /> : <TermsOfService />}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </div>
  )
}
