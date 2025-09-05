const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

const copy2 = document.querySelector(".logos-slide2").cloneNode(true);
document.querySelector(".logos2").appendChild(copy2);

const cards = [
  {
    title: "Blokadu",
    description:
      "Permainan edukasi interaktif untuk anak yang mengajarkan kesehatan seksual dan batasan lewat mekanik balok dan kartu, dirancang agar aman dan menyenangkan.",
    tag: "3D Model | Illustrasi",
    link: "https://blokadu.vercel.app/",
  },
  {
    title: "Veriface",
    description:
      "Sistem presensi otomatis berbasis pengenalan wajah untuk mempermudah pencatatan kehadiran di lingkungan kampus atau organisasi, dengan validasi identitas.",
    tag: "UI/UX | Team management",
    link: "/",
  },
  {
    title: "Maxy CV scoring",
    description:
      "Aplikasi yang menilai dan memberi skor kualitas CV secara otomatis menggunakan aturan dan model sederhana untuk membantu seleksi kandidat.",
    tag: "Team management | Frontend",
    link: "/",
  },
  {
    title: "Nurohim Web Profile",
    description:
      "Website profil pribadi Nurohim yang menampilkan portofolio, pengalaman, dan kontak dengan desain responsif dan fokus pada penyajian visual.",
    tag: "UI/UX | Frontend",
    link: "https://nurohim.netlify.app/",
  },
  {
    title: "Story App",
    description:
      "Aplikasi berbagi cerita dengan fitur PWA (offline dan instalasi), mendukung pembuatan, penyimpanan, dan pembacaan cerita secara responsif.",
    tag: "UI/UX | Frontend",
    link: "https://storyappzk.netlify.app/",
  },
  {
    title: "Cek Viral App",
    description:
      "Aplikasi pemeriksa fakta yang membantu memverifikasi kebenaran berita dan konten viral dengan referensi sumber dan skor kredibilitas.",
    tag: "Fullstack",
    link: "https://cek-viral-try.vercel.app/",
  },
  {
    title: "ASCEE",
    description:
      "Website jurnal untuk ASCEE yang menampilkan publikasi, artikel, dan informasi acara dengan tata letak yang mudah dibaca.",
    tag: "UI/UX | Frontend",
    link: "https://ascee.org/",
  },
];

const cardContainer = document.getElementById("container-cards");

cards.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  cardDiv.innerHTML = `
    <article class="text-card">
      <h1 class="text-2">${card.title}</h1>
      <p class="text-3">${card.description}</p>
    </article>
    
    <div class="button-card">
      <h4 class="text-tag">${card.tag}</h4>
      <a href="${card.link}" target="_blank" rel="noopener noreferrer" class="btn-card">Lihat Project</a>
    </div>
  `;

  cardContainer.appendChild(cardDiv);
});
