<script setup>
import { useHead } from '@unhead/vue'
import { t } from '../i18n'

useHead({
  title: "Maître Amandji - Haute Magie Africaine & Rituels Sacrés",
  meta: [
    { name: 'description', content: "Bienvenue au temple du Maître Amandji. Plus de 25 ans d'expertise en travaux occultes, retour affectif et protection. Résultats en 48h." }
  ]
})
</script>

<template>
  <div class="home-page fade-in">
    <!-- Hero Section: One&Only Style Zoom -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1518005020250-675f0f0fd13b?auto=format&fit=crop&q=80&w=2000');"></div>
      <div class="hero-content">
        <span class="badge fade-in stagger-1">{{ t('hero.badge') }}</span>
        <h1 class="fade-in stagger-2">{{ t('hero.title') }}</h1>
        <p class="fade-in stagger-3">{{ t('hero.desc') }}</p>
        <div class="hero-btns fade-in stagger-4">
          <router-link to="/contact" class="btn-luxury btn-solid">{{ t('hero.btn_solicit') }}</router-link>
          <router-link to="/services" class="btn-luxury" style="color: white; border-color: white; margin-left: 1rem;">{{ t('hero.btn_works') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Expertise Section: Luxury Grid Reveal -->
    <section class="section-padding container">
      <div class="section-header reveal" style="text-align: center; margin-bottom: 4rem;">
        <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; line-height: 1.2;">{{ t('home.expertise_title') }}</h2>
        <p style="font-size: 1.2rem; color: var(--text-soft); max-width: 800px; margin: 0 auto; line-height: 1.6;">{{ t('home.expertise_desc') }}</p>
      </div>

      <div class="luxury-grid cols-2">
        <div class="luxury-card reveal stagger-1">
          <div class="card-img-wrapper">
            <img src="/assets/retour_affection/1720452707762.jpg" alt="Amour">
          </div>
          <h3>{{ t('home.card_love_title') }}</h3>
          <p style="margin-bottom: 2rem;">{{ t('home.card_love_desc') }}</p>
          <router-link to="/services" class="btn-luxury">{{ t('home.btn_oracle') }}</router-link>
        </div>

        <div class="luxury-card reveal stagger-2">
          <div class="card-img-wrapper">
            <img src="/assets/rituel_argent/1756458926134.jpg" alt="Fortune">
          </div>
          <h3>{{ t('home.card_wealth_title') }}</h3>
          <p style="margin-bottom: 2rem;">{{ t('home.card_wealth_desc') }}</p>
          <router-link to="/services" class="btn-luxury">{{ t('home.btn_wealth') }}</router-link>
        </div>

        <div class="luxury-card reveal stagger-3">
          <div class="card-img-wrapper">
            <img src="/assets/purifier_ora/1720453323104.jpg" alt="Protection">
          </div>
          <h3>{{ t('home.card_protect_title') }}</h3>
          <p style="margin-bottom: 2rem;">{{ t('home.card_protect_desc') }}</p>
          <router-link to="/services" class="btn-luxury">{{ t('home.btn_shield') }}</router-link>
        </div>

        <div class="luxury-card reveal stagger-4">
          <div class="card-img-wrapper">
            <img src="/assets/purifier_ora/1739971689730.jpg" alt="Voyance">
          </div>
          <h3>{{ t('home.card_voyance_title') }}</h3>
          <p style="margin-bottom: 2rem;">{{ t('home.card_voyance_desc') }}</p>
          <router-link to="/contact" class="btn-luxury">{{ t('home.btn_destiny') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Stats Section Banner LUXÉ -->
    <section class="stats-luxury reveal" style="background: var(--primary); color: white; padding: 6rem 0;">
      <div class="container luxury-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="stat-item" style="text-align: center;">
          <div style="font-family: var(--font-serif); font-size: 3.5rem; margin-bottom: 1rem; color: var(--secondary);">25+</div>
          <div style="text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.8rem; opacity: 0.8;">Années de règne</div>
        </div>
        <div class="stat-item" style="text-align: center;">
          <div style="font-family: var(--font-serif); font-size: 3.5rem; margin-bottom: 1rem; color: var(--secondary);">100%</div>
          <div style="text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.8rem; opacity: 0.8;">Réussite Garantie</div>
        </div>
        <div class="stat-item" style="text-align: center;">
          <div style="font-family: var(--font-serif); font-size: 3.5rem; margin-bottom: 1rem; color: var(--secondary);">24/7</div>
          <div style="text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.8rem; opacity: 0.8;">Écoute du Maître</div>
        </div>
      </div>
    </section>

    <!-- Recent Works Highlight -->
    <section class="section-padding reveal" style="background: white;">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 5rem;">
          <h2 style="font-size: 2.2rem; margin-bottom: 1.5rem;">Évidences de Haute Magie</h2>
          <p style="color: var(--text-soft);">Aperçu des derniers rituels scellés au temple.</p>
        </div>
        
        <div class="luxury-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
          <!-- Photo 1: Argent -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/rituel_argent/1756458926134.jpg" alt="Rituel de richesse Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <!-- Photo 2: Amour -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/retour_affection/1720453309585.jpg" alt="Retour affectif Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <!-- Photo 3: Chance -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/chances/1758491806194.jpg" alt="Chance aux jeux Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <!-- Photo 4: Protection -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/purifier_ora/1720453323104.jpg" alt="Purification d'aura Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <!-- Photo 5: Argent 2 -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/rituel_argent/1756459281686.jpg" alt="Secrets de fortune Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <!-- Photo 6: Desenvoûtement -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/deseenvoutements/1731849805075.jpg" alt="Désenvoûtement mystique Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <!-- Photo 7: Argent 3 -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/rituel_argent/1758491914364.jpg" alt="Travail de richesse Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <!-- Photo 8: Retour Affection -->
          <div class="relique-item" style="aspect-ratio: 1; overflow: hidden; border: 1px solid var(--border-thin);">
            <img src="/assets/retour_affection/1740242501375.jpg" alt="Union sacrée Maître Amandji" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 5rem;">
          <router-link to="/galerie" class="btn-luxury">Voir tout le Trésor</router-link>
        </div>
      </div>
    </section>

    <!-- Appointment Banner -->
    <section class="appointment-banner reveal" style="background: var(--bg-soft); padding: 8rem 0; text-align: center;">
      <div class="container">
        <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">L'Éveil de votre Destin</h2>
        <p style="margin-bottom: 3rem; opacity: 0.7; max-width: 600px; margin: 0 auto 3rem;">Chaque rituel est une porte ouverte vers une réalité supérieure.</p>
        <router-link to="/contact" class="btn-luxury btn-solid">Prendre Rendez-vous</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.badge { display: block; text-transform: uppercase; letter-spacing: 0.3em; font-size: 0.75rem; margin-bottom: 1.5rem; opacity: 0.8; }
.hero-btns { margin-top: 4rem; display: flex; justify-content: center; }

@media (max-width: 1024px) {
  .hero h1 { font-size: 2.2rem; }
  .luxury-grid.cols-2 { grid-template-columns: 1fr !important; }
  .stats-luxury .luxury-grid { grid-template-columns: 1fr !important; gap: 3rem; }
  .luxury-grid[style*="repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
}

@media (max-width: 768px) {
  .hero h1 { font-size: 1.8rem; }
  .hero-btns { flex-direction: column; gap: 1rem; }
  .hero-btns .btn-luxury { margin-left: 0 !important; width: 100%; text-align: center; }
}

@media (max-width: 480px) {
  .luxury-grid[style*="repeat(4"] { grid-template-columns: 1fr !important; }
}
</style>
