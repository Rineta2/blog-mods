//================== Image ==================//
import ImgHome from "@/components/assest/Home/home.jpg";

//================== Aplikasi ==================//
import tt from "@/components/assest/layout/aplikasi/tt.jpg";
import ig from "@/components/assest/layout/aplikasi/instagram.jpeg";
import sp from "@/components/assest/layout/aplikasi/spotify.png";

//================== Software ==================//

import iobitUninstaller from "@/components/assest/layout/software/iobit-uninstaller.png";

//================== Game PC ==================//

import gtaV from "@/components/assest/layout/game-pc/gta-v.jpg";

//================== Game Mobile ==================//

import minicreft from "@/components/assest/layout/game-mobile/minicreft.webp";

//================== Windows ==================//

import windows11 from "@/components/assest/layout/windows/windows11.jpg";
import windows10 from "@/components/assest/layout/windows/windows10.jpg";
import windows8 from "@/components/assest/layout/windows/windows8.jpg";
import windows7 from "@/components/assest/layout/windows/windows7.webp";

//================== Microsoft Office ==================//

import office2021 from "@/components/assest/layout/office/office-2021.jpg";

//================== Icons ==================//

import { SiBuymeacoffee } from "react-icons/si";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

//================== Microsoft Office ==================//

import downloadImg from "@/components/assest/layout/download/download.png"

//================== Navbar ==================//

export const navLink = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },

  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

export const logo = [
  {
    id: 1,
    name: "Blog Mods",
  },
];

export const navActions = [
  {
    id: 1,
    name: "Give Me ",
    icons: <SiBuymeacoffee />,
    path: "/",
  },
];

//================== Home ==================//

export const homeImg = [
  {
    id: 1,
    img: ImgHome,
  },
];

export const dataHome = [
  {
    id: 1,
    title: "Welcome to Blog Mods",
    text: "We don’t just transcribe words, we write ‘em too.",
  },
];

export const socialLink = [
  {
    id: 1,
    icons: <FaInstagram />,
    path: "https://www.instagram.com/rzkir.20/",
  },

  {
    id: 2,
    icons: <FaFacebookF />,
    path: "https://www.facebook.com/profile.php?id=100007663247764&locale=id_ID",
  },

  {
    id: 3,
    icons: <FaTiktok />,
    path: "https://www.tiktok.com/@rzkir.20?is_from_webapp=1&sender_device=pc",
  },
];

//================== Page ==================//

export const dataPage = [
  //================= Data Aplikasi =================//

  {
    id: 1,
    img: tt,
    title: "Tiktok Mods",
    desc: "TikTok Mods mengacu pada versi modifikasi dari aplikasi TikTok yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya memiliki beberapa fitur tambahan yang tidak tersedia dalam aplikasi resmi TikTok",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    slug: "tiktok-mods",
    slugDetails: [
      {
        id: 1,
        img: tt,
        category: "aplikasi",
        title: "Tiktok Pro Mods",
        desc: "TikTok Pro Mods mengacu pada versi modifikasi dari aplikasi TikTok yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya memiliki beberapa fitur tambahan yang tidak tersedia dalam aplikasi resmi TikTok. Beberapa fitur yang sering dimodifikasi termasuk:",
        name: "Update",
        date: "Juni, 25 2024",
        slug: "tiktok-pro-mods",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Tidak Ada Iklan",
            desc: "Memungkinkan pengguna untuk menikmati pengalaman TikTok tanpa iklan yang mengganggu."
          },

          {
            id: 2,
            title: "Unduhan Video",
            desc: "Memungkinkan pengguna untuk mengunduh video TikTok ke perangkat mereka tanpa batasan."
          },

          {
            id: 3,
            title: "Tidak Ada Watermark",
            desc: "Menghapus watermark atau logo TikTok dari video yang diunduh atau dibuat."
          },

          {
            id: 4,
            title: "Kualitas Video yang Ditingkatkan",
            desc: "Menawarkan opsi untuk mengunduh atau menonton video dalam kualitas yang lebih tinggi daripada yang tersedia di aplikasi resmi."
          },

          {
            id: 5,
            title: "Fitur-fitur Tambahan",
            desc: "Seperti zoom pada video, pengaturan privasi yang lebih canggih, atau alat editing tambahan."
          }
        ],

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: "Download file APK kemudian extract"
          },

          {
            id: 2,
            desc: "Izinkan instalasi sumber tidak dikenal"
          },

          {
            id: 3,
            desc: "Jika sudah silahkan install aplikasi"
          },

          {
            id: 4,
            desc: "Jika sudah silahkan buka aplikasi"
          },

          {
            id: 5,
            desc: "Selanjutnya silahkan login disarankan menggunakan nomber hp"
          },

          {
            id: 6,
            desc: "Jika berhasil login silahkan scroll tiktok sampai bosen"
          }
        ],

        size: "Size: 374,5 MB",
        version: "Tik Tok Pro Mods 34.5.5",
      }
    ],

    category: "aplikasi",
    categoryDetails: [
      {
        id: 1,
        title: "Tiktok mods",
        name: "Update",
        date: "Juni, 25 2024",
        desc: "TikTok Pro Mods mengacu pada versi modifikasi dari aplikasi TikTok yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya memiliki beberapa fitur tambahan yang tidak tersedia dalam aplikasi resmi TikTok. Beberapa fitur yang sering dimodifikasi termasuk",
        slug: "tiktok-mods"
      },

      {
        id: 2,
        title: "Spotify Premium",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Spotify Pro Mods adalah modifikasi dari aplikasi Spotify resmi yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya menawarkan fitur tambahan yang tidak tersedia dalam aplikasi resmi Spotify",
        slug: "spotify-premium",
      },

      {
        id: 3,
        title: "Instagram Pro Mods",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Instagram Pro Mods merujuk pada modifikasi atau versi modifikasi dari aplikasi Instagram resmi. Modifikasi ini sering dibuat oleh pengembang pihak ketiga yang menambahkan fitur-fitur tambahan yang tidak tersedia dalam aplikasi Instagram resmi. Beberapa fitur umum yang sering dimodifikasi",
        slug: "instagram-pro-mods",
      }
    ],

    download: [
      {
        id: 1,
        title: "via Google Drive",
        name: "Download",
        path: `/layout/aplikasi/tiktok-mods/download`,
      },

      {
        id: 2,
        title: "via Play Store",
        name: "Original Aplikasi",
        path: "https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&pcampaignid=web_share"
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,
        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1bZJFBQwMkYHHEcz5YJSYMQR1ctOMkGha/view?usp=sharing"
          }
        ]
      }
    ]
  },

  //================= Data Game Mobile =================//

  {
    id: 2,
    img: minicreft,
    title: "Minecraft: Pocket Edition",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Minecraft: Pocket Edition (sekarang dikenal sebagai Minecraft) adalah versi mobile dari permainan sandbox yang sangat populer, Minecraft. Dikembangkan oleh Mojang, permainan ini dirilis untuk platform mobile seperti iOS, Android, dan Windows Phone.",
    category: "game-mobile",
    slug: "minecraft-pocket-edition",
    slugDetails: [
      {
        id: 1,
        img: minicreft,
        category: "Game Mobile",
        title: "Minecraft: Pocket Edition",
        desc: "Minecraft: Pocket Edition (sekarang dikenal sebagai Minecraft) adalah versi mobile dari permainan sandbox yang sangat populer, Minecraft. Dikembangkan oleh Mojang, permainan ini dirilis untuk platform mobile seperti iOS, Android, dan Windows Phone.",
        name: "Update",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Gameplay Sandbox",
            desc: "Minecraft: Pocket Edition menawarkan pengalaman sandbox di mana pemain dapat menjelajahi dunia terbuka yang besar dan membuat berbagai struktur, bangunan, serta artefak menggunakan berbagai blok yang tersedia."
          },

          {
            id: 2,
            title: "Mode Permainan",
            desc: "Permainan ini memiliki beberapa mode permainan termasuk Survival Mode, di mana pemain harus mencari sumber daya untuk bertahan hidup dan melawan musuh, dan Creative Mode, di mana pemain memiliki akses tak terbatas ke semua blok dan dapat membangun tanpa batasan."
          },

          {
            id: 3,
            title: "Multiplayer",
            desc: "Minecraft: Pocket Edition mendukung bermain bersama dengan teman-teman dalam jaringan lokal melalui Wi-Fi, serta bermain online dengan pemain lain melalui Minecraft Realms atau server yang di-host oleh pemain sendiri"
          },

          {
            id: 4,
            title: "Pembaruan Konten",
            desc: "Mojang secara teratur merilis pembaruan untuk Minecraft: Pocket Edition, menambahkan fitur-fitur baru seperti blok, item, mob, dan mode permainan tambahan, serta memperbaiki bug dan meningkatkan kinerja game."
          },

          {
            id: 5,
            title: "Komunitas dan Popularitas",
            desc: "Minecraft: Pocket Edition telah menjadi sangat populer di kalangan pemain mobile, dengan jutaan unduhan di berbagai platform. Game ini memiliki komunitas yang besar dan aktif yang terlibat dalam berbagi karya, modifikasi game, serta berbagai proyek kreatif di dalam dunia Minecraft."
          }
        ],

        slug: "minecraft-pocket-edition",

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: "Download kemudian extract"
          },

          {
            id: 2,
            desc: "selanjutnya install sampai selesai"
          },

          {
            id: 3,
            desc: "Jika selesai install langsung buka Minecraft"
          },

          {
            id: 4,
            desc: "Jika semuanya selesai selamat bermain"
          },
        ],

        size: "Size: 842,5 MB",
        version: "Minecraft: Pocket Edition 1.21.0.03",
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "Minecraft: Pocket Edition",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Minecraft: Pocket Edition (sekarang dikenal sebagai Minecraft) adalah versi mobile dari permainan sandbox yang sangat populer, Minecraft. Dikembangkan oleh Mojang, permainan ini dirilis untuk platform mobile seperti iOS, Android, dan Windows Phone.",
        slug: "minecraft-pocket-edition",
      },
    ],

    download: [
      {
        id: 1,
        title: "via Google Drive",
        name: "Download",
        path: `/layout/game-mobile/minecraft-pocket-edition/download`,
      },

      {
        id: 2,
        title: "via Play Store",
        name: "Original Aplikasi",
        path: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&pcampaignid=web_share"
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1qlVI_b0k9rtPzcPDKOt2bTPqPPckzHx6/view?usp=sharing"
          }
        ]
      }
    ]
  },

  //================= Data Game PC =================//

  {
    id: 3,
    img: gtaV,
    title: "Grand Theft Auto V ( GTA 5 ) Full Repack v1.0.3179",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Grand Theft Auto V (GTA V) adalah game aksi-petualangan yang dikembangkan oleh Rockstar North dan diterbitkan oleh Rockstar Games. Game ini dirilis pada tahun 2013 untuk platform PlayStation 3, Xbox 360, dan kemudian diadaptasi untuk PlayStation 4, Xbox One, dan PC",
    category: "game-pc",
    slug: "gta-v",
    slugDetails: [
      {
        id: 1,
        img: gtaV,
        category: "Game PC",
        title: "Grand Theft Auto V ( GTA 5 ) Full Repack v1.0.3179",
        desc: "Grand Theft Auto V (GTA V) adalah game aksi-petualangan yang dikembangkan oleh Rockstar North dan diterbitkan oleh Rockstar Games. Game ini dirilis pada tahun 2013 untuk platform PlayStation 3, Xbox 360, dan kemudian diadaptasi untuk PlayStation 4, Xbox One, dan PC. Berikut adalah beberapa poin penting tentang GTA V",
        name: "Update",
        date: "Juni, 25 2024",
        slug: "gta-v",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Lokasi dan Setting",
            desc: "GTA V berlatar belakang di negara bagian fiksi bernama San Andreas, yang terinspirasi dari California Selatan. Dunia game ini luas dan terbuka, mencakup kota Los Santos (versi fiksi Los Angeles) dan daerah pedesaan serta pegunungan di sekitarnya."
          },

          {
            id: 2,
            title: "Cerita",
            desc: "Game ini mengikuti cerita tiga karakter utama, yaitu Michael De Santa, Franklin Clinton, dan Trevor Philips, yang terlibat dalam kejahatan, pencurian, dan konspirasi di dunia kriminal Los Santos. Pemain dapat beralih antara karakter-karakter ini selama misi dan kegiatan bebas."
          },

          {
            id: 3,
            title: "Mode Permainan",
            desc: "Selain dari mode cerita utama, GTA V juga menawarkan mode permainan daring (online) yang dikenal sebagai Grand Theft Auto Online. Di sini, pemain dapat membuat karakter mereka sendiri, berkolaborasi atau bersaing dengan pemain lain, melakukan misi, dan menjelajahi dunia game bersama."
          },

          {
            id: 4,
            title: "Fitur Gameplay",
            desc: "GTA V menawarkan berbagai jenis misi, termasuk pencurian besar-besaran, pengejaran mobil, dan penembakan. Pemain dapat mengendarai berbagai jenis kendaraan seperti mobil, sepeda motor, dan pesawat, serta dapat melakukan berbagai aktivitas seperti bermain golf, tenis, atau bahkan menyelam."
          },

          {
            id: 5,
            title: "Penghargaan dan Popularitas",
            desc: "GTA V telah menjadi salah satu game terlaris sepanjang masa, dengan menerima pujian luas dari kritikus dan penggemar untuk narasi yang kuat, dunia game yang hidup, dan kebebasan dalam menjelajahi serta melakukan kegiatan di dalamnya."
          }
        ],

        instalasi: "System requirements",
        instalasilist: [
          {
            id: 1,
            desc: "Operating System: Windows 7 / 8 / 8.1 (64 Bits Only)"
          },

          {
            id: 2,
            desc: "Processor: Intel Core 2 Q6600 2.40 GHz or AMD Phenom 9850 2.5GHz"
          },

          {
            id: 3,
            desc: "RAM: 4 GB"
          },

          {
            id: 4,
            desc: "Video Card: 1 GB with support for DX10 (NVIDIA 9800 GT or AMD HD 4870)"
          },

          {
            id: 5,
            desc: "Free Space on the Hard Disk: 105 Gb"
          },

          {
            id: 6,
            desc: "it’s important : Before installing disable Anti-Virus and Firewall"
          }
        ],

        size: "Size: 59 Gb",
        version: "Grand Theft Auto V ( GTA 5 ) Full Repack v1.0.3179",
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "GTA V",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Grand Theft Auto V (GTA V) adalah game aksi-petualangan yang dikembangkan oleh Rockstar North dan diterbitkan oleh Rockstar Games. Game ini dirilis pada tahun 2013 untuk platform PlayStation 3, Xbox 360, dan kemudian diadaptasi untuk PlayStation 4, Xbox One, dan PC",
        slug: "gta-v",
      },
    ],

    download: [
      {
        id: 1,
        title: "via Mediafire",
        name: "Donwload",
        path: ""
      },

      {
        id: 2,
        title: "via Official",
        name: "Original Aplikasi",
        path: "https://www.rockstargames.com/gta-v"
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1qlVI_b0k9rtPzcPDKOt2bTPqPPckzHx6/view?usp=sharing"
          }
        ]
      }
    ]
  },

  //================= Data Software =================//

  {
    id: 4,
    img: iobitUninstaller,
    title: "Iobit Uninstaller Pro",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "IObit Uninstaller Pro adalah versi premium dari aplikasi IObit Uninstaller, yang dirancang untuk membantu pengguna menghapus program dan aplikasi dengan bersih dari komputer mereka. ",
    category: "software",
    slug: "iobit-uninstaller-pro",
    slugDetails: [
      {
        id: 1,
        img: iobitUninstaller,
        category: "Software",
        title: "Iobit Uninstaller Pro",
        desc: "IObit Uninstaller Pro adalah versi premium dari aplikasi IObit Uninstaller, yang dirancang untuk membantu pengguna menghapus program dan aplikasi dengan bersih dari komputer mereka.Berikut adalah beberapa fitur utama dari IObit Uninstaller Pro: ",
        name: "Update",
        slug: "iobit-uninstaller-pro",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Uninstall yang Dalam dan Bersih",
            desc: "Memungkinkan pengguna untuk menghapus program secara menyeluruh, termasuk file-file sisa dan entri registri yang mungkin ditinggalkan setelah uninstallasi standar."
          },

          {
            id: 2,
            title: "Pembersihan Otomatis",
            desc: "Mendeteksi dan membersihkan sisa-sisa program yang sudah dihapus sebelumnya untuk mengoptimalkan ruang penyimpanan dan kinerja sistem."
          },

          {
            id: 3,
            title: "Uninstall Batch",
            desc: "Memungkinkan pengguna untuk menghapus beberapa program sekaligus dengan mudah dan cepat."
          },

          {
            id: 4,
            title: "Toolbar & Plugin Cleaner",
            desc: "Membersihkan toolbar browser dan plugin yang tidak diinginkan untuk meningkatkan keamanan dan kecepatan browsing."
          },

          {
            id: 5,
            title: "Software Updater",
            desc: "Memantau pembaruan terbaru untuk program yang terinstal dan membantu pengguna mengupdate mereka dengan mudah untuk menjaga keamanan dan stabilitas.",
          },

          {
            id: 6,
            title: "Instalasi Sistem",
            desc: "Mencatat perubahan yang terjadi selama instalasi program untuk memudahkan pemulihan sistem jika diperlukan.",
          },
        ],

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: "Putuskan koneksi internet"
          },

          {
            id: 2,
            desc: "kemudian Extract, Wajib !!"
          },

          {
            id: 3,
            desc: "lalu langkah install nya"
          },

          {
            id: 4,
            desc: "Double Click ” Silent Install”, akan muncul command promt"
          },

          {
            id: 5,
            desc: "tunggu sampai menutup sendiri"
          },

          {
            id: 6,
            desc: "enjoy, jalankan dari start menu atau shortcut desktop"
          },

          {
            id: 7,
            desc: "done full version"
          },
        ],

        size: "Size: 21 MB",
        version: "IObit Uninstaller Pro 13.4.0.2 Terbaru Gratis",
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "Iobit Uninstaller Pro",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "IObit Uninstaller Pro adalah versi premium dari aplikasi IObit Uninstaller, yang dirancang untuk membantu pengguna menghapus program dan aplikasi dengan bersih dari komputer mereka. ",
        slug: "iobit-uninstaller-pro",
      },
    ],

    download: [
      {
        id: 1,
        title: "via Google Drive",
        name: "Download",
        path: `/layout/software/iobit-uninstaller-pro/download`,
      },

      {
        id: 2,
        title: "via Official",
        name: "Original Official",
        path: "https://www.iobit.com/en/advanceduninstaller.php"
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://www.mediafire.com/file/f12mjmyus7g38cm/IObit+Uninstaller+Pro+13.4.0.2.kuyhAa.7z/file"
          }
        ]
      }
    ]
  },

  //================= Data Windows =================//

  {
    id: 5,
    img: windows11,
    title: "Windows 11",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Windows 11 adalah sistem operasi terbaru dari Microsoft yang diumumkan pada bulan Juni 2021 dan dirilis secara resmi pada bulan Oktober 2021. Berikut adalah beberapa fitur utama dari Windows 11",
    category: "windows",
    slug: "windows-11",
    slugDetails: [
      {
        id: 1,
        img: windows11,
        category: "Windows",
        title: "Windows 11",
        desc: "Windows 11 adalah sistem operasi terbaru dari Microsoft yang diumumkan pada bulan Juni 2021 dan dirilis secara resmi pada bulan Oktober 2021. Berikut adalah beberapa fitur utama dari Windows 11",
        slug: "windows-11",
        name: "Update",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Antarmuka Pengguna yang Didesain Ulang:",
            desc: "Windows 11 menampilkan antarmuka pengguna yang baru dan lebih modern dengan tata letak yang disesuaikan untuk meningkatkan produktivitas dan pengalaman pengguna.",
          },

          {
            id: 2,
            title: "Start Menu yang Sentris",
            desc: "Start Menu di Windows 11 diposisikan di tengah taskbar, memberikan akses mudah terhadap aplikasi, dokumen, dan situs web yang sering digunakan.",
          },

          {
            id: 3,
            title: "Snap Layouts dan Snap Groups",
            desc: "Fitur Snap Layouts memungkinkan pengguna untuk dengan mudah mengatur dan menyusun jendela aplikasi menjadi tata letak yang lebih terstruktur, sedangkan Snap Groups memungkinkan pengguna untuk dengan cepat mengakses dan mengelola kelompok aplikasi yang terbuka.",
          },

          {
            id: 4,
            title: "Peningkatan dalam Kinerja dan Keamanan",
            desc: "Windows 11 menjanjikan peningkatan kinerja dengan waktu boot yang lebih cepat, waktu tidur yang lebih baik, dan peningkatan keamanan dengan fitur seperti Windows Hello untuk autentikasi.",
          },

          {
            id: 5,
            title: "Dukungan untuk Aplikasi Android",
            desc: "Windows 11 memperkenalkan integrasi dengan aplikasi Android melalui Amazon Appstore, memungkinkan pengguna untuk mengunduh dan menjalankan aplikasi Android langsung dari desktop Windows.",
          },

          {
            id: 6,
            title: "Microsoft Store yang Diperbarui",
            desc: "Microsoft Store di Windows 11 mengalami pembaruan signifikan dengan antarmuka yang lebih ramah pengguna, peningkatan dalam katalog aplikasi, dan opsi untuk menginstal aplikasi seperti Adobe Creative Cloud secara langsung.",
          }
        ],

        instalasi: "System requirements",
        instalasilist: [
          {
            id: 1,
            desc: "Processor: At least two cores with a minimum clock speed of 1 gigahertz (GHz) on a compatible 64-bit processor or System on a chip (SoC)."
          },

          {
            id: 2,
            desc: "RAM: 4 GB or more"
          },

          {
            id: 3,
            desc: "Storage: 64 GB or larger storage device"
          },

          {
            id: 4,
            desc: "System firmware: UEFI, with secure boot support"
          },

          {
            id: 5,
            desc: "TPM: Trusted Platform Module (TPM) version 2.0"
          },

          {
            id: 6,
            desc: "Graphics adapter: Graphics adapter compatible with DirectX 12 / WDDM 2.x."
          },

          {
            id: 7,
            desc: "Display: > 9 inches HD (720p)"
          },

          {
            id: 8,
            desc: "Internet connection: Installing Windows 11 Home requires a Microsoft account and an Internet connection."
          },
        ],

        size: "Size: 6,34 GB",
        version: "Windows 11",
      },
    ],

    categoryDetails: [
      {
        id: 1,
        title: "Windows 11",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 11 adalah sistem operasi terbaru dari Microsoft yang diumumkan pada bulan Juni 2021 dan dirilis secara resmi pada bulan Oktober 2021. Berikut adalah beberapa fitur utama dari Windows 11",
        slug: "windows-11",
      },

      {
        id: 2,
        title: "Windows 10",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 10 adalah sistem operasi buatan Microsoft yang dirilis pada tahun 2015 sebagai penerus dari Windows 8.1. Berikut adalah beberapa fitur utama Windows 10",
        slug: "windows-10",
      },

      {
        id: 3,
        title: "Windows 8",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 8 adalah sistem operasi Microsoft yang diluncurkan tahun 2012 dengan antarmuka Metro untuk layar sentuh, Start Screen menggantikan menu Start, Windows Store untuk aplikasi, integrasi dengan akun Microsoft, dan keamanan ditingkatkan dengan Windows Defender.",
        slug: "windows-8",
      },

      {
        id: 3,
        title: "Windows 7",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "sistem operasi yang dikembangkan oleh Microsoft sebagai penerus dari Windows Vista. Diluncurkan pada tahun 2009, Windows 7 menjadi salah satu sistem operasi yang sangat populer dan stabil untuk penggunaan desktop dan laptop. Berikut adalah beberapa fitur utama dari Windows 7",
        slug: "windows-7",
      }
    ],

    download: [
      {
        id: 1,
        title: "via GF",
        name: "Download",
        path: `/layout/windows/windows-11/download`
      },

      {
        id: 2,
        title: "via Microsoft",
        name: "Original Aplikasi",
        path: "https://www.microsoft.com/software-download/windows11"
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://gofile.io/d/uT3n8h"
          }
        ]
      }
    ]
  },

  //================= Aplikasi =================//

  {
    id: 6,
    img: sp,
    title: "Spotify Premium",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Spotify Premium adalah modifikasi dari aplikasi Spotify resmi yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya menawarkan fitur tambahan yang tidak tersedia dalam aplikasi resmi Spotify",
    category: "aplikasi",
    slug: "spotify-premium",
    slugDetails: [
      {
        id: 1,
        img: sp,
        category: "Aplikasi",
        title: "Spotify Premium",
        slug: "spotify-premium",
        desc: "Spotify Premium adalah modifikasi dari aplikasi Spotify resmi yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya menawarkan fitur tambahan yang tidak tersedia dalam aplikasi resmi Spotify, seperti:",
        name: "Update",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Pengunduhan Musik",
            desc: "Memungkinkan pengguna untuk mengunduh lagu secara gratis tanpa berlangganan Premium."
          },

          {
            id: 2,
            title: "Pemutaran Tanpa Iklan",
            desc: "Memungkinkan pengguna untuk mendengarkan musik tanpa iklan meskipun tidak memiliki langganan Premium."
          },

          {
            id: 3,
            title: "Kualitas Audio yang Ditingkatkan",
            desc: "Menawarkan pengaturan untuk memutar musik dengan kualitas audio yang lebih tinggi."
          },

          {
            id: 4,
            title: "Pemutaran Lagu Tertentu",
            desc: "Memungkinkan pemutaran lagu tertentu tanpa memerlukan mode acak."
          }
        ],

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: "Download file APK kemudian extract"
          },

          {
            id: 2,
            desc: "Izinkan instalasi sumber tidak dikenal"
          },

          {
            id: 3,
            desc: "Jika sudah silahkan install aplikasi"
          },

          {
            id: 4,
            desc: "Jika sudah silahkan buka aplikasi"
          },

          {
            id: 5,
            desc: "Selanjutnya silahkan login disarankan menggunakan nomber hp"
          },

          {
            id: 6,
            desc: "Jika berhasil login silahkan scroll tiktok sampai bosen"
          }
        ],

        size: "Size: 72.5 MB",
        version: "Spotify Premium Version 8.9.18.512",
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "tiktok-pro-mods",
        name: "Update",
        date: "Juni, 25 2024",
        desc: "TikTok Pro Mods mengacu pada versi modifikasi dari aplikasi TikTok yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya memiliki beberapa fitur tambahan yang tidak tersedia dalam aplikasi resmi TikTok. Beberapa fitur yang sering dimodifikasi termasuk",
        slug: "tiktok-pro-mods"
      },

      {
        id: 2,
        title: "Iobit Uninstaller Pro",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "IObit Uninstaller Pro adalah versi premium dari aplikasi IObit Uninstaller, yang dirancang untuk membantu pengguna menghapus program dan aplikasi dengan bersih dari komputer mereka. ",
        slug: "iobit-uninstaller-pro",
      },

      {
        id: 3,
        title: "Spotify Pro Mods",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Spotify Pro Mods adalah modifikasi dari aplikasi Spotify resmi yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya menawarkan fitur tambahan yang tidak tersedia dalam aplikasi resmi Spotify",
        slug: "spotify-pro-mods",
      },

      {
        id: 4,
        title: "Instagram Pro Mods",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Instagram Pro Mods merujuk pada modifikasi atau versi modifikasi dari aplikasi Instagram resmi. Modifikasi ini sering dibuat oleh pengembang pihak ketiga yang menambahkan fitur-fitur tambahan yang tidak tersedia dalam aplikasi Instagram resmi. Beberapa fitur umum yang sering dimodifikasi",
        slug: "instagram-pro-mods",
      }
    ],

    download: [
      {
        id: 1,
        title: "via Google Drive",
        name: "Download",
        path: "/layout/aplikasi/spotify-premium/download"
      },

      {
        id: 2,
        title: "via Official",
        name: "Original Aplikasi",
        path: "https://www.spotify.com/id-id/download/android/"
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1ne_zGEHeobWN-dNdwtw6J4UOniTYZqR9/view?usp=sharing"
          }
        ]
      }
    ]
  },

  //================= Windows =================//

  {
    id: 7,
    img: windows10,
    title: "Windows 10",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Windows 10 adalah sistem operasi buatan Microsoft yang dirilis pada tahun 2015 sebagai penerus dari Windows 8.1. Berikut adalah beberapa fitur utama Windows 10",
    category: "windows",
    slug: "windows-10",
    slugDetails: [
      {
        id: 1,
        img: windows10,
        category: "windows",
        title: "Windows 10",
        desc: "Windows 10 adalah sistem operasi buatan Microsoft yang dirilis pada tahun 2015 sebagai penerus dari Windows 8.1. Berikut adalah beberapa fitur utama Windows 10",
        slug: "windows-10",
        name: "Update",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Menu Start yang Diperbarui",
            desc: "Windows 10 mengembalikan menu Start tradisional dengan tambahan fitur live tiles untuk aplikasi modern.",
          },

          {
            id: 2,
            title: "Desktop Virtual Desktops",
            desc: "Pengguna dapat membuat desktop virtual untuk mengorganisasi aplikasi dan tugas dengan lebih efisien.",
          },

          {
            id: 3,
            title: "Cortana",
            desc: "Asisten digital yang terintegrasi untuk membantu pengguna dalam pencarian, pengaturan jadwal, dan tugas lainnya.",
          },

          {
            id: 4,
            title: "Microsoft Edge",
            desc: "Browser bawaan yang menggantikan Internet Explorer, dengan fokus pada kecepatan, keamanan, dan integrasi dengan layanan Microsoft.",
          },

          {
            id: 5,
            title: "Continuum",
            desc: "Fitur yang mengubah tampilan antarmuka pengguna tergantung pada mode penggunaan perangkat, seperti mode tablet atau mode desktop."
          },

          {
            id: 6,
            title: "Windows Hello",
            desc: "Sistem autentikasi berbasis biometrik untuk membuka kunci perangkat dengan menggunakan sidik jari, pengenalan wajah, atau PIN."
          },

          {
            id: 7,
            title: "Universal Windows Platform (UWP)",
            desc: "Platform pengembangan aplikasi yang menyatukan aplikasi untuk berjalan di semua perangkat Windows 10, termasuk PC, tablet, telepon, Xbox, dan HoloLens."
          }
        ],

        instalasi: "Required System requirements",
        instalasilist: [
          {
            id: 1,
            desc: "Processor : At least 1 GHz or SoC."
          },

          {
            id: 2,
            desc: "RAM : 2 GB (for 64-bit systems)."
          },

          {
            id: 3,
            desc: "Hard disk space : 20 GB (for 64-bit systems)."
          },

          {
            id: 4,
            desc: "Video adapter : DirectX version 9 or later with the WDDM 1.0 driver."
          },

          {
            id: 5,
            desc: "Display : 800 x 600."
          },
        ],

        size: "Size: 5,71 GB",
        version: "Windows 10",
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "Windows 11",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 11 adalah sistem operasi terbaru dari Microsoft yang diumumkan pada bulan Juni 2021 dan dirilis secara resmi pada bulan Oktober 2021. Berikut adalah beberapa fitur utama dari Windows 11",
        slug: "windows-11",
      },

      {
        id: 2,
        title: "Windows 10",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 10 adalah sistem operasi buatan Microsoft yang dirilis pada tahun 2015 sebagai penerus dari Windows 8.1. Berikut adalah beberapa fitur utama Windows 10",
        slug: "windows-10",
      },

      {
        id: 3,
        title: "Windows 8",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 8 adalah sistem operasi Microsoft yang diluncurkan tahun 2012 dengan antarmuka Metro untuk layar sentuh, Start Screen menggantikan menu Start, Windows Store untuk aplikasi, integrasi dengan akun Microsoft, dan keamanan ditingkatkan dengan Windows Defender.",
        slug: "windows-8",
      },

      {
        id: 3,
        title: "Windows 7",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "sistem operasi yang dikembangkan oleh Microsoft sebagai penerus dari Windows Vista. Diluncurkan pada tahun 2009, Windows 7 menjadi salah satu sistem operasi yang sangat populer dan stabil untuk penggunaan desktop dan laptop. Berikut adalah beberapa fitur utama dari Windows 7",
        slug: "windows-7",
      }
    ],

    download: [
      {
        id: 1,
        title: "via Google Drive",
        name: "Download",
        path: `/layout/windows/windows-10/download`
      },

      {
        id: 2,
        title: "via Official",
        name: "Original ISO",
        path: "https://www.microsoft.com/en-us/software-download/windows10"
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://software.download.prss.microsoft.com/dbazure/Win10_22H2_EnglishInternational_x64v1.iso?t=56c03173-157b-41d9-bd98-68328cf922f9&P1=1719680924&P2=601&P3=2&P4=Fct09%2bcEwJY0OaJbiFmUcFNNK508ngc0b%2fhiZ%2bdSDZNTIeqDXbmKGkE4JkqACAtYAyxWb3nuqSkBUjV9XpdU%2bLYd4euk92Y8%2blTcQn7TT%2f%2bXApz2fUpsXBrmoMnpcBDDL8sq6gyTDzSdm6Wa5k9VKJMHwKE6qANFmVlRhF%2fPAaHH%2fDhrLVMHUgbpqGY1LQ7nWPPMMwzSADKXB1uB%2bfXjzJ05O%2f5riiAjxvw9TgA6tNA6KzqoxjYTr26Lg7qFoAicgAs6DVkFwUUSGUVB87gf3S%2bqRFLWRlHo7njLU%2bjwmwiGxPUSEbWPvavRLX9tjGuWTqCrMmXvANS39Rv6WvEb5w%3d%3d"
          }
        ]
      }
    ]
  },

  //================= Aplikasi =================//

  {
    id: 8,
    img: ig,
    title: "Instagram Pro Mods",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Instagram Pro Mods merujuk pada modifikasi atau versi modifikasi dari aplikasi Instagram resmi. Modifikasi ini sering dibuat oleh pengembang pihak ketiga yang menambahkan fitur-fitur tambahan yang tidak tersedia dalam aplikasi Instagram resmi. Beberapa fitur umum yang sering dimodifikasi",
    category: "aplikasi",
    slug: "instagram-pro-mods",
    slugDetails: [
      {
        id: 1,
        img: ig,
        category: "Aplikasi",
        title: "Instagram Pro Mods",
        desc: "Instagram Pro Mods merujuk pada modifikasi atau versi modifikasi dari aplikasi Instagram resmi. Modifikasi ini sering dibuat oleh pengembang pihak ketiga yang menambahkan fitur-fitur tambahan yang tidak tersedia dalam aplikasi Instagram resmi. Beberapa fitur umum yang sering dimodifikasi termasuk:",
        name: "Update",
        slug: "instagram-pro-mods",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Pengunduhan Konten",
            desc: "Memungkinkan pengguna untuk mengunduh foto, video, atau cerita dari Instagram ke perangkat mereka."
          },

          {
            id: 2,
            title: "Pengaturan Privasi",
            desc: "Menawarkan pengaturan privasi yang lebih canggih daripada yang tersedia dalam aplikasi resmi."
          },

          {
            id: 3,
            title: "Customization",
            desc: "Memungkinkan pengguna untuk menyesuaikan tampilan dan pengalaman pengguna aplikasi."
          },

          {
            id: 4,
            title: "Fitur Tambahan",
            desc: "Seperti fitur zoom gambar, penyembunyian status `dilihat`, atau pengeditan gambar tambahan."
          }
        ],

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: ""
          },

          {
            id: 2,
            desc: ""
          },

          {
            id: 3,
            desc: ""
          },

          {
            id: 4,
            desc: ""
          },
        ],

        size: "Size: 374,5 MB",
        version: "Tik Tok Pro Mods 34.5.5",
        download: [
          {
            id: 1,
            title: "via Google Drive",
            name: "Download",
            path: ""
          },

          {
            id: 2,
            title: "via Mediafire",
            name: "Donwload",
            path: ""
          },

          {
            id: 3,
            title: "via Play Store",
            name: "Original Aplikasi",
            path: ""
          }
        ],

        downloadDetails: [
          {
            id: 1,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            img: downloadImg
          }
        ]
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "tiktok-pro-mods",
        name: "Update",
        date: "Juni, 25 2024",
        desc: "TikTok Pro Mods mengacu pada versi modifikasi dari aplikasi TikTok yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya memiliki beberapa fitur tambahan yang tidak tersedia dalam aplikasi resmi TikTok. Beberapa fitur yang sering dimodifikasi termasuk",
        slug: "tiktok-pro-mods"
      },

      {
        id: 2,
        title: "Spotify Pro Mods",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Spotify Pro Mods adalah modifikasi dari aplikasi Spotify resmi yang dikembangkan oleh pihak ketiga. Modifikasi ini biasanya menawarkan fitur tambahan yang tidak tersedia dalam aplikasi resmi Spotify",
        slug: "spotify-pro-mods",
      },

      {
        id: 3,
        title: "Instagram Pro Mods",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Instagram Pro Mods merujuk pada modifikasi atau versi modifikasi dari aplikasi Instagram resmi. Modifikasi ini sering dibuat oleh pengembang pihak ketiga yang menambahkan fitur-fitur tambahan yang tidak tersedia dalam aplikasi Instagram resmi. Beberapa fitur umum yang sering dimodifikasi",
        slug: "instagram-pro-mods",
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1qlVI_b0k9rtPzcPDKOt2bTPqPPckzHx6/view?usp=sharing"
          }
        ]
      }
    ]
  },

  //================= Windows =================//

  {
    id: 9,
    img: windows8,
    title: "Windows 8",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Windows 8 adalah sistem operasi Microsoft yang diluncurkan tahun 2012 dengan antarmuka Metro untuk layar sentuh, Start Screen menggantikan menu Start, Windows Store untuk aplikasi, integrasi dengan akun Microsoft, dan keamanan ditingkatkan dengan Windows Defender.",
    category: "windows",
    slug: "windows-8",
    slugDetails: [
      {
        id: 1,
        img: windows8,
        category: "windows",
        title: "Windows 8",
        desc: "Windows 8 adalah sistem operasi Microsoft yang diluncurkan tahun 2012 dengan antarmuka Metro untuk layar sentuh, Start Screen menggantikan menu Start, Windows Store untuk aplikasi, integrasi dengan akun Microsoft, dan keamanan ditingkatkan dengan Windows Defender.",
        name: "Update",
        slug: "windows-8",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Antarmuka Metro (Modern UI)",
            desc: "Windows 8 memperkenalkan antarmuka pengguna yang disebut Metro, yang sekarang dikenal sebagai Modern UI. Ini menampilkan tampilan layar penuh dengan tile (kotak) besar untuk aplikasi dan informasi yang penting.",
          },

          {
            id: 2,
            title: "Start Screen",
            desc: "Start Screen menggantikan menu Start tradisional dengan tata letak yang didasarkan pada tile, memberikan akses cepat ke aplikasi dan informasi penting. Ini dirancang untuk mendukung penggunaan perangkat sentuh.",
          },

          {
            id: 3,
            title: "Integrasi dengan Akun Microsoft",
            desc: "Windows 8 mendorong pengguna untuk mengintegrasikan akun Microsoft mereka, memungkinkan sinkronisasi pengaturan, aplikasi, dan data di berbagai perangkat.",
          },

          {
            id: 4,
            title: "Windows Store:",
            desc: "Windows 8 memperkenalkan Windows Store, toko aplikasi resmi Microsoft, di mana pengguna dapat mengunduh aplikasi Metro-style yang dioptimalkan untuk sistem operasi ini.",
          },

          {
            id: 5,
            title: "Performa dan Keamanan",
            desc: "Windows 8 menawarkan peningkatan performa dan keamanan, serta optimasi untuk perangkat berbasis sentuh seperti tablet.",
          },

          {
            id: 6,
            title: "Windows Defender",
            desc: "Keamanan ditingkatkan dengan integrasi Windows Defender sebagai solusi anti-malware bawaan, melindungi perangkat dari virus dan ancaman keamanan lainnya.",
          }
        ],

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: ""
          },

          {
            id: 2,
            desc: ""
          },

          {
            id: 3,
            desc: ""
          },

          {
            id: 4,
            desc: ""
          },
        ],

        size: "Size: 374,5 MB",
        version: "Tik Tok Pro Mods 34.5.5",
        download: [
          {
            id: 1,
            title: "via Google Drive",
            name: "Download",
            path: ""
          },

          {
            id: 2,
            title: "via Mediafire",
            name: "Donwload",
            path: ""
          },

          {
            id: 3,
            title: "via Play Store",
            name: "Original Aplikasi",
            path: ""
          }
        ],

        downloadDetails: [
          {
            id: 1,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            img: downloadImg
          }
        ]
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "Windows 11",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 11 adalah sistem operasi terbaru dari Microsoft yang diumumkan pada bulan Juni 2021 dan dirilis secara resmi pada bulan Oktober 2021. Berikut adalah beberapa fitur utama dari Windows 11",
        slug: "windows-11",
      },

      {
        id: 2,
        title: "Windows 10",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 10 adalah sistem operasi buatan Microsoft yang dirilis pada tahun 2015 sebagai penerus dari Windows 8.1. Berikut adalah beberapa fitur utama Windows 10",
        slug: "windows-10",
      },

      {
        id: 3,
        title: "Windows 8",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 8 adalah sistem operasi Microsoft yang diluncurkan tahun 2012 dengan antarmuka Metro untuk layar sentuh, Start Screen menggantikan menu Start, Windows Store untuk aplikasi, integrasi dengan akun Microsoft, dan keamanan ditingkatkan dengan Windows Defender.",
        slug: "windows-8",
      },

      {
        id: 3,
        title: "Windows 7",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "sistem operasi yang dikembangkan oleh Microsoft sebagai penerus dari Windows Vista. Diluncurkan pada tahun 2009, Windows 7 menjadi salah satu sistem operasi yang sangat populer dan stabil untuk penggunaan desktop dan laptop. Berikut adalah beberapa fitur utama dari Windows 7",
        slug: "windows-7",
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1qlVI_b0k9rtPzcPDKOt2bTPqPPckzHx6/view?usp=sharing"
          }
        ]
      }
    ]
  },

  //================= Office =================//

  {
    id: 10,
    img: office2021,
    title: "Microsoft Office 2021",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "Microsoft Office 2021 adalah paket perangkat lunak produktivitas yang terdiri dari berbagai aplikasi kantor yang populer, dikembangkan oleh Microsoft. Ini adalah versi terbaru setelah Office 2019, dan menawarkan sejumlah fitur dan perbaikan dibandingkan dengan versi sebelumnya.",
    category: "microsoft-office",
    slug: "microsoft-office-2021",
    slugDetails: [
      {
        id: 1,
        img: office2021,
        category: "Microsoft Office",
        title: "Microsoft Office 2021",
        desc: "Microsoft Office 2021 adalah paket perangkat lunak produktivitas yang terdiri dari berbagai aplikasi kantor yang populer, dikembangkan oleh Microsoft. Ini adalah versi terbaru setelah Office 2019, dan menawarkan sejumlah fitur dan perbaikan dibandingkan dengan versi sebelumnya.",
        name: "Update",
        slug: "microsoft-office-2021",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Microsoft Word",
            desc: "Aplikasi pengolah kata yang digunakan untuk membuat, mengedit, dan memformat dokumen teks."
          },

          {
            id: 2,
            title: "Microsoft Excel",
            desc: "Aplikasi spreadsheet untuk analisis data, penghitungan, dan pembuatan grafik."
          },

          {
            id: 3,
            title: "Microsoft PowerPoint",
            desc: "Aplikasi untuk membuat presentasi multimedia yang menarik dengan slide, animasi, dan efek visual."
          },

          {
            id: 4,
            title: "Microsoft Outlook",
            desc: "Aplikasi manajemen email dan kalender untuk organisasi komunikasi dan jadwal."
          },

          {
            id: 5,
            title: "Microsoft OneNote",
            desc: "Aplikasi untuk mencatat dan mengatur informasi dalam bentuk catatan digital."
          },

          {
            id: 6,
            title: "Microsoft Access (opsional)",
            desc: "Aplikasi basis data untuk mengelola dan mengelola data dalam format database."
          }
        ],

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: ""
          },

          {
            id: 2,
            desc: ""
          },

          {
            id: 3,
            desc: ""
          },

          {
            id: 4,
            desc: ""
          },
        ],

        size: "Size: 374,5 MB",
        version: "Tik Tok Pro Mods 34.5.5",
        download: [
          {
            id: 1,
            title: "via Google Drive",
            name: "Download",
            path: ""
          },

          {
            id: 2,
            title: "via Mediafire",
            name: "Donwload",
            path: ""
          },

          {
            id: 3,
            title: "via Play Store",
            name: "Original Aplikasi",
            path: ""
          }
        ],

        downloadDetails: [
          {
            id: 1,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            img: downloadImg
          }
        ]
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "Microsoft Office 2021",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Microsoft Office 2021 adalah paket perangkat lunak produktivitas yang terdiri dari berbagai aplikasi kantor yang populer, dikembangkan oleh Microsoft. Ini adalah versi terbaru setelah Office 2019, dan menawarkan sejumlah fitur dan perbaikan dibandingkan dengan versi sebelumnya.",
        slug: "microsoft-office-2021",
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1qlVI_b0k9rtPzcPDKOt2bTPqPPckzHx6/view?usp=sharing"
          }
        ]
      }
    ]
  },

  //================= Windows =================//

  {
    id: 11,
    img: windows7,
    title: "Windows 7",
    date: "Juni, 25 2024",
    name: "By Rizki Ramadhan",
    desc: "sistem operasi yang dikembangkan oleh Microsoft sebagai penerus dari Windows Vista. Diluncurkan pada tahun 2009, Windows 7 menjadi salah satu sistem operasi yang sangat populer dan stabil untuk penggunaan desktop dan laptop. Berikut adalah beberapa fitur utama dari Windows 7",
    category: "windows",
    slug: "windows-7",
    slugDetails: [
      {
        id: 1,
        img: windows7,
        category: "windows",
        title: "Windows 7",
        desc: "sistem operasi yang dikembangkan oleh Microsoft sebagai penerus dari Windows Vista. Diluncurkan pada tahun 2009, Windows 7 menjadi salah satu sistem operasi yang sangat populer dan stabil untuk penggunaan desktop dan laptop. Berikut adalah beberapa fitur utama dari Windows 7",
        name: "Update",
        slug: "windows-7",
        date: "Juni, 25 2024",
        fiturname: "Fitur",
        fiturlist: [
          {
            id: 1,
            title: "Antarmuka Pengguna Aero",
            desc: "Windows 7 memperkenalkan antarmuka pengguna Aero yang modern dengan efek transparansi dan visual yang lebih menarik dibandingkan dengan pendahulunya."
          },

          {
            id: 2,
            title: "Start Menu yang Ditingkatkan",
            desc: "Start Menu di Windows 7 menyediakan akses cepat ke aplikasi, dokumen, dan pengaturan sistem dengan tata letak yang lebih intuitif dan terorganisir."
          },

          {
            id: 3,
            title: "Taskbar yang Dioptimalkan",
            desc: "Taskbar di Windows 7 mendukung aero peek, thumbnail preview, dan jump lists untuk memudahkan pengguna dalam mengelola dan beralih antara aplikasi yang terbuka."
          },

          {
            id: 4,
            title: "Windows Search",
            desc: "Pencarian di Windows 7 ditingkatkan untuk memungkinkan pengguna menemukan file, program, dan pengaturan dengan lebih cepat."
          },

          {
            id: 5,
            title: "Performa yang Lebih Baik",
            desc: "Windows 7 menawarkan performa yang lebih baik dibandingkan dengan Windows Vista, dengan waktu boot yang lebih cepat, penggunaan memori yang lebih efisien, dan respons yang lebih responsif."
          },

          {
            id: 6,
            title: "Keamanan dan Stabilitas",
            desc: "Windows 7 menyediakan fitur keamanan yang ditingkatkan seperti Windows Defender untuk perlindungan dari malware dan serangan keamanan lainnya."
          },

          {
            id: 7,
            title: "Libraries",
            desc: "Libraries memungkinkan pengguna untuk menggabungkan berbagai lokasi penyimpanan file ke dalam satu tampilan logis, memudahkan akses dan pengelolaan file."
          }
        ],

        instalasi: "Langkah Install",
        instalasilist: [
          {
            id: 1,
            desc: ""
          },

          {
            id: 2,
            desc: ""
          },

          {
            id: 3,
            desc: ""
          },

          {
            id: 4,
            desc: ""
          },
        ],

        size: "Size: 374,5 MB",
        version: "Tik Tok Pro Mods 34.5.5",
        download: [
          {
            id: 1,
            title: "via Google Drive",
            name: "Download",
            path: ""
          },

          {
            id: 2,
            title: "via Mediafire",
            name: "Donwload",
            path: ""
          },

          {
            id: 3,
            title: "via Play Store",
            name: "Original Aplikasi",
            path: ""
          }
        ],

        downloadDetails: [
          {
            id: 1,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            img: downloadImg
          }
        ]
      }
    ],

    categoryDetails: [
      {
        id: 1,
        title: "Windows 11",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 11 adalah sistem operasi terbaru dari Microsoft yang diumumkan pada bulan Juni 2021 dan dirilis secara resmi pada bulan Oktober 2021. Berikut adalah beberapa fitur utama dari Windows 11",
        slug: "windows-11",
      },

      {
        id: 2,
        title: "Windows 10",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 10 adalah sistem operasi buatan Microsoft yang dirilis pada tahun 2015 sebagai penerus dari Windows 8.1. Berikut adalah beberapa fitur utama Windows 10",
        slug: "windows-10",
      },

      {
        id: 3,
        title: "Windows 8",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "Windows 8 adalah sistem operasi Microsoft yang diluncurkan tahun 2012 dengan antarmuka Metro untuk layar sentuh, Start Screen menggantikan menu Start, Windows Store untuk aplikasi, integrasi dengan akun Microsoft, dan keamanan ditingkatkan dengan Windows Defender.",
        slug: "windows-8",
      },

      {
        id: 3,
        title: "Windows 7",
        date: "Juni, 25 2024",
        name: "By Rizki Ramadhan",
        desc: "sistem operasi yang dikembangkan oleh Microsoft sebagai penerus dari Windows Vista. Diluncurkan pada tahun 2009, Windows 7 menjadi salah satu sistem operasi yang sangat populer dan stabil untuk penggunaan desktop dan laptop. Berikut adalah beberapa fitur utama dari Windows 7",
        slug: "windows-7",
      }
    ],

    downloadDetails: [
      {
        id: 1,
        text: [
          {
            id: 1,
            desc: "What is Lorem Ipsum ? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },

          {
            id: 2,
            desc: "Why do we use it ? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ],

        img: downloadImg,

        button: [
          {
            id: 1,
            name: "Download",
            path: "https://drive.google.com/file/d/1qlVI_b0k9rtPzcPDKOt2bTPqPPckzHx6/view?usp=sharing"
          }
        ]
      }
    ]
  },
];

//================== Aside ==================//

export const headAside = [
  {
    id: 1,
    title: "Categories",
  }
]

export const tutorial = [
  {
    id: 1,
    name: "Tutorial",
    path: ""
  }
]