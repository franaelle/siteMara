<script setup>
import { useHead } from '@unhead/vue'
import { t } from '../i18n'

useHead({
  title: 'Rituels Sacrés & Occultes - Travaux Réels',
  meta: [
    { name: 'description', content: 'Explorez les travaux de haute magie du Maître Amandji. Retour amoureux, rituels de richesse, protection et désenvoûtement.' }
  ]
})

const works = {
  love: ["1720452707762.jpg", "1720453031408.jpg", "1720453226205.jpg", "1720453309585.jpg"],
  wealth: ["1756458926134.jpg", "1756458929273.jpg", "1756458937131.jpg", "1756459004821.jpg", "1756459040963.jpg"],
  protect: ["1720453323104.jpg", "1720453330182.jpg", "1720453546359.jpg", "1734272705675.jpg"],
  luck: ["1720453359561.jpg", "1720453369703.jpg", "1730541220094.jpg", "1733605091523.jpg"],
  curse: ["1720453126408.jpg", "1731849805075.jpg", "1739843357061.jpg", "1739972107972.jpg"]
}
</script>

<template>
  <div class="services-page fade-in">
    <!-- Section Header Luxury -->
    <div class="page-header container reveal" style="text-align: center; padding: 2rem 0;">
      <h1 style="font-size: 2.8rem; margin-bottom: 1rem; line-height: 1.2;">{{ t('services.title') }}</h1>
      <p style="font-size: 1.15rem; color: var(--text-soft); max-width: 800px; margin: 0 auto; line-height: 1.6;">{{ t('services.desc') }}</p>
    </div>

    <div class="services-list container section-padding">
      <!-- Service 1: Amour -->
      <section class="service-block reveal">
        <div class="luxury-row">
          <div class="luxury-col-img">
            <img src="/assets/retour_affection/1720453031408.jpg" alt="Amour">
          </div>
          <div class="luxury-col-text">
            <h2>{{ t('services.love_title') }}</h2>
            <p>{{ t('services.love_desc') }}</p>
            <div class="mini-gallery">
               <img v-for="img in works.love" :key="img" :src="`/assets/retour_affection/${img}`" class="mini-pic">
            </div>
            <router-link to="/contact" class="btn-luxury">{{ t('common.wa_footer_btn') }}</router-link>
          </div>
        </div>
      </section>

      <!-- Service 2: Richesse -->
      <section class="service-block reveal">
        <div class="luxury-row reverse">
          <div class="luxury-col-img">
            <img src="/assets/rituel_argent/1756458929273.jpg" alt="Fortune">
          </div>
          <div class="luxury-col-text">
            <h2>{{ t('services.wealth_title') }}</h2>
            <p>{{ t('services.wealth_desc') }}</p>
            <div class="mini-gallery">
               <img v-for="img in works.wealth" :key="img" :src="`/assets/rituel_argent/${img}`" class="mini-pic">
            </div>
            <router-link to="/contact" class="btn-luxury">{{ t('common.wa_footer_btn') }}</router-link>
          </div>
        </div>
      </section>

      <!-- Service 3: Protection -->
      <section class="service-block reveal">
        <div class="luxury-row">
          <div class="luxury-col-img">
            <img src="/assets/purifier_ora/1720453330182.jpg" alt="Protection">
          </div>
          <div class="luxury-col-text">
            <h2>{{ t('services.protect_title') }}</h2>
            <p>{{ t('services.protect_desc') }}</p>
            <div class="mini-gallery">
               <img v-for="img in works.protect" :key="img" :src="`/assets/purifier_ora/${img}`" class="mini-pic">
            </div>
            <router-link to="/contact" class="btn-luxury">{{ t('common.wa_footer_btn') }}</router-link>
          </div>
        </div>
      </section>

      <!-- Service 4: Chance -->
      <section class="service-block reveal">
        <div class="luxury-row reverse">
          <div class="luxury-col-img">
            <img src="/assets/chances/1720453359561.jpg" alt="Chance">
          </div>
          <div class="luxury-col-text">
            <h2>{{ t('services.luck_title') }}</h2>
            <p>{{ t('services.luck_desc') }}</p>
            <div class="mini-gallery">
               <img v-for="img in works.luck" :key="img" :src="`/assets/chances/${img}`" class="mini-pic">
            </div>
            <router-link to="/contact" class="btn-luxury">{{ t('common.wa_footer_btn') }}</router-link>
          </div>
        </div>
      </section>

      <!-- Service 5: Désenvoûtement -->
      <section class="service-block reveal">
        <div class="luxury-row">
          <div class="luxury-col-img">
            <img src="/assets/deseenvoutements/1720453126408.jpg" alt="Désenvoûtement">
          </div>
          <div class="luxury-col-text">
            <h2>{{ t('services.curse_title') }}</h2>
            <p>{{ t('services.curse_desc') }}</p>
            <div class="mini-gallery">
               <img v-for="img in works.curse" :key="img" :src="`/assets/deseenvoutements/${img}`" class="mini-pic">
            </div>
            <router-link to="/contact" class="btn-luxury">{{ t('common.wa_footer_btn') }}</router-link>
          </div>
        </div>
      </section>
    </div>

    <!-- Guarantee Section -->
    <section class="guarantee-section section-padding reveal" style="background: var(--bg-soft); text-align: center;">
      <div class="container">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">{{ t('services.guarantee_title') }}</h2>
        <p style="font-size: 1.1rem; color: var(--text-soft); max-width: 800px; margin: 0 auto; line-height: 1.8;">{{ t('services.guarantee_desc') }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-page { padding-top: 2rem; }
.service-block { margin-bottom: 15rem; }

.luxury-row { 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: flex-start;
}

.luxury-row.reverse .luxury-col-img { order: 2; }

.luxury-col-img { 
  height: 600px; 
  overflow: hidden; 
  border: 1px solid var(--border-thin);
  position: sticky;
  top: 10rem;
}
.luxury-col-img img { width: 100%; height: 100%; object-fit: cover; }

.luxury-col-text { text-align: left; }
.luxury-col-text h2 { font-size: 2.5rem; margin-bottom: 2rem; line-height: 1.2; }
.luxury-col-text p { font-size: 1.15rem; margin-bottom: 3rem; color: var(--text-soft); line-height: 1.9; }

/* Mini Gallery within service */
.mini-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 4rem;
}

.mini-pic {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 1px solid var(--border-thin);
  filter: grayscale(100%);
  transition: 0.5s;
}

.mini-pic:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .luxury-row, .luxury-row.reverse { 
    grid-template-columns: 1fr; 
    gap: 3rem; 
    text-align: center; 
  }
  .luxury-row.reverse .luxury-col-img { order: 0; }
  .luxury-col-img { height: 350px; position: static; }
  .luxury-col-text { text-align: center; }
  .luxury-col-text h2 { font-size: 1.8rem; }
  .mini-gallery { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
}

@media (max-width: 480px) {
  .luxury-col-img { height: 250px; }
  .mini-gallery { grid-template-columns: repeat(2, 1fr); }
}
</style>
