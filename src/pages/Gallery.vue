<script setup>
import { useHead } from '@unhead/vue'
import { t } from '../i18n'

useHead({
  title: 'Le Trésor : Preuves de Puissance - Maître Amandji',
  meta: [
    { name: 'description', content: "Galerie exclusive des travaux du Maître Amandji. Plus de 60 preuves visuelles de rituels réussis : argent, amour, chance et protection." }
  ]
})

// Manifeste manuel des images (basé sur l'exploration système)
const categories = [
  {
    name: "Rituels de Richesse & Multiplication",
    folder: "rituel_argent",
    count: 27,
    files: [
      "1756458926134.jpg", "1756458929273.jpg", "1756458937131.jpg", "1756459004821.jpg", "1756459040963.jpg",
      "1756459067642.jpg", "1756459162526.jpg", "1756459190793.jpg", "1756459255360.jpg", "1756459275288.jpg",
      "1756459277263.jpg", "1756459279288.jpg", "1756459281686.jpg", "1756459283967.jpg", "1756459286253.jpg",
      "1756459305819.jpg", "1756459307858.jpg", "1756459309732.jpg", "1758491697922.jpg", "1758491840051.jpg",
      "1758491848072.jpg", "1758491853394.jpg", "1758491859339.jpg", "1758491914364.jpg", "1758491989595.jpg",
      "1758491996509.jpg", "1758492003117.jpg"
    ]
  },
  {
    name: "Retours d'Affection & Unions",
    folder: "retour_affection",
    count: 9,
    files: [
      "1720452707762.jpg", "1720453031408.jpg", "1720453226205.jpg", "1720453309585.jpg", "1720453496312.jpg",
      "1731246833386.jpg", "1740242501375.jpg", "1758491790991.jpg", "IMG-20240803-WA0003.jpg"
    ]
  },
  {
    name: "Protection & Purification d'Aura",
    folder: "purifier_ora",
    count: 8,
    files: [
      "1720453323104.jpg", "1720453330182.jpg", "1720453546359.jpg", "1734272705675.jpg", "1739971689730.jpg",
      "1739972107972.jpg", "1744752561342.jpg", "1747817518017.jpg"
    ]
  },
  {
    name: "Désenvoûtements & Libérations",
    folder: "deseenvoutements",
    count: 13,
    files: [
      "1720453126408.jpg", "1731849805075.jpg", "1739843357061.jpg", "1739972107972.jpg", "1751231398047.jpg",
      "1752387119494.jpg", "IMG-20250413-WA0026.jpg", "IMG-20250413-WA0048.jpg", "IMG-20250626-WA0001.jpg",
      "IMG-20250626-WA0002.jpg", "IMG-20250720-WA0000.jpg", "IMG-20250805-WA0001.jpg", "IMG-20250928-WA0001.jpg"
    ]
  },
  {
    name: "Chances & Jeux de Hasard",
    folder: "chances",
    count: 9,
    files: [
      "1720453359561.jpg", "1720453369703.jpg", "1730541220094.jpg", "1733605091523.jpg", "1758491806194.jpg",
      "IMG-20250630-WA0000.jpg", "IMG-20250719-WA0002.jpg", "IMG-20250728-WA0000.jpg", "IMG-20250730-WA0000.jpg"
    ]
  }
]
</script>

<template>
  <div class="gallery-page fade-in">
    <!-- Header Luxury -->
    <header class="section-padding container" style="text-align: center;">
      <h1 style="font-size: 2.8rem; margin-bottom: 2rem;">{{ t('gallery.title') }}</h1>
      <p style="font-size: 1.15rem; color: var(--text-soft); max-width: 800px; margin: 0 auto; line-height: 1.8;">
        Découvrez l'intégralité de ma collection sacrée. Chaque image témoigne d'un travail accompli, d'un rituel scellé et d'une vie transformée.
      </p>
    </header>

    <div class="gallery-sections container">
      <div v-for="cat in categories" :key="cat.name" class="cat-block section-padding reveal">
        <h2 class="cat-title">{{ cat.name }}</h2>
        <div class="full-grid">
          <div v-for="file in cat.files" :key="file" class="relique-item">
            <div class="relique-img">
              <img :src="`/assets/${cat.folder}/${file}`" :alt="cat.name" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA Luxury -->
    <section class="appointment-banner reveal" style="background: var(--bg-soft); padding: 8rem 0; text-align: center;">
      <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Acquérir une Puissance Semblable</h2>
      <p style="margin-bottom: 3rem; opacity: 0.7; font-size: 1.1rem;">Ces objets ne sont pas de simples photos, ce sont des récepteurs d'énergies ancestrales.</p>
      <router-link to="/contact" class="btn-luxury btn-solid">Prendre Rendez-vous</router-link>
    </section>
  </div>
</template>

<style scoped>
.cat-title {
  font-size: 1.8rem;
  margin-bottom: 3rem;
  border-left: 4px solid var(--secondary);
  padding-left: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.full-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.relique-item {
  background: white;
  border: 1px solid var(--border-thin);
  transition: var(--transition-smooth);
}

.relique-img {
  aspect-ratio: 1;
  overflow: hidden;
}

.relique-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.relique-item:hover .relique-img img {
  transform: scale(1.1);
}

.relique-item:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .full-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .cat-title { font-size: 1.4rem; }
}
</style>
