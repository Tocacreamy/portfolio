const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

const copy2 = document.querySelector(".logos-slide2").cloneNode(true);
document.querySelector(".logos2").appendChild(copy2);

const cards = [
  {
    title: "Blokadu",
    description:
      "Project PKM Permainan edukasi seksual untuk anak berbasis balok dan kartu",
    tag: "3D Model | Illustrasi",
  },
  {
    title: "Veriface",
    description:
      "Project Gemastik pembuatan presensi otomatis dengan face recognition",
    tag: "UI/UX | Team management",
  },
  {
    title: "Maxy CV scoring",
    description: "Project MSIB Pembuatan skor cv otomatis",
    tag: "Team management | Frontend",
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
      <button>Lihat</button>
    </div>
  `;

  cardContainer.appendChild(cardDiv);
});
