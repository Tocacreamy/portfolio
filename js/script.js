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
    link:`/`,
  },
  {
    title: "Veriface",
    description:
      "Project Gemastik pembuatan presensi otomatis dengan face recognition",
    tag: "UI/UX | Team management",
    link:`/`,
  },
  {
    title: "Maxy CV scoring",
    description: "Project MSIB Pembuatan skor cv otomatis",
    tag: "Team management | Frontend",
    link:`/`,
  },
  {
    title: "Nurohim Web Profile",
    description: "Web Profile ",
    tag: "UI/UX | Frontend",
    link:`nurohim.netlify.app`,
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
      <a href="${card.link}" class="btn-card">Lihat Project</a>
    </div>
  `;

  cardContainer.appendChild(cardDiv);
});
