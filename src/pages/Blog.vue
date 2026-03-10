<script setup>
import { useHead } from '@unhead/vue'
import { t } from '../i18n'

useHead({
  title: 'Le Grimoire : Secrets & Révélations - Maître Amandji',
  meta: [
    { name: 'description', content: "Plongez dans les archives secrètes du Temple. Découvrez les vérités interdites sur la sorcellerie africaine, les pactes de fortune et les mystères de l'amour." }
  ]
})

const categories = [
  { id: 'love', name: t('blog.cat_love'), icon: '◈' },
  { id: 'wealth', name: t('blog.cat_wealth'), icon: '◈' },
  { id: 'protection', name: t('blog.cat_protection'), icon: '◈' }
]

const recentSecrets = [
  { title: t('blog.art1_title'), desc: t('blog.art1_desc'), tag: 'Fortune', img: '/assets/rituel_argent/1756459281686.jpg' },
  { title: t('blog.art2_title'), desc: t('blog.art2_desc'), tag: 'Vision', img: '/assets/deseenvoutements/1739843357061.jpg' },
  { title: t('blog.art3_title'), desc: t('blog.art3_desc'), tag: 'Sang', img: '/assets/retour_affection/1740242501375.jpg' },
  { title: t('blog.art4_title'), desc: t('blog.art4_desc'), tag: 'Ombre', img: '/assets/purifier_ora/1747817518017.jpg' }
]
</script>

<template>
  <div class="blog-page fade-in">
    <!-- Featured Grimoire Section -->
    <section class="grimoire-hero">
      <div class="hero-overlay"></div>
      <div class="container hero-inner reveal">
        <span class="supreme-tag">{{ t('blog.featured_tag') }}</span>
        <h1 class="grimoire-main-title">{{ t('blog.featured_title') }}</h1>
        <p class="grimoire-intro-text">{{ t('blog.featured_desc') }}</p>
        <div class="hero-actions">
           <router-link to="/contact" class="btn-luxury btn-solid">{{ t('blog.read_rit') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Complex Layout Grid -->
    <div class="container section-padding">
      <div class="grimoire-grid">
        
        <!-- Navigation & Categories Sidebar -->
        <aside class="grimoire-sidebar reveal">
          <div class="sidebar-sticky">
            <h3 class="sidebar-title">Archives Secrètes</h3>
            <nav class="cat-nav">
              <a href="#" v-for="cat in categories" :key="cat.id" class="cat-link">
                <span class="cat-icon">{{ cat.icon }}</span>
                {{ cat.name }}
              </a>
            </nav>

            <div class="master-quote-block">
               <p class="quote-text">"{{ t('blog.quote_text') }}"</p>
               <span class="quote-author">- Le Maître Amandji</span>
            </div>

            <div class="sidebar-cta">
               <h4>{{ t('blog.side_consult_title') }}</h4>
               <p>{{ t('blog.side_consult_desc') }}</p>
               <router-link to="/contact" class="btn-luxury">{{ t('contact.wa_direct') }}</router-link>
            </div>
          </div>
        </aside>

        <!-- Main Content Feed -->
        <main class="grimoire-feed">
          <div class="feed-header reveal">
            <h2>Dernières Révélations</h2>
            <div class="filter-line"></div>
          </div>

          <div class="secrets-list">
            <article v-for="(secret, index) in recentSecrets" :key="index" class="secret-card reveal" :class="'stagger-' + (index + 1)">
              <div class="secret-img-box">
                <img :src="secret.img" alt="Secret">
                <span class="secret-category-tag">{{ secret.tag }}</span>
              </div>
              <div class="secret-info">
                <h3 class="secret-title">{{ secret.title }}</h3>
                <p class="secret-excerpt">{{ secret.desc }}</p>
                <router-link to="/contact" class="secret-link">
                  Accéder au Savoir 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </router-link>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>

    <!-- Forbidden Knowledge Banner -->
    <section class="forbidden-banner reveal">
       <div class="container">
          <div class="forbidden-inner">
             <div class="forbidden-text">
                <h3>Voulez-vous franchir le seuil ?</h3>
                <p>Certains secrets ne sont jamais écrits. Ils se transmettent de voix à oreille.</p>
             </div>
             <router-link to="/contact" class="btn-luxury btn-solid">Parler au Maître</router-link>
          </div>
       </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Grimoire */
.grimoire-hero {
  height: 80vh;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1576085898323-218337735371?auto=format&fit=crop&q=80&w=2000');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  margin-top: -6rem; /* Underlap header */
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.9));
}

.hero-inner {
  position: relative;
  z-index: 10;
  max-width: 900px;
  text-align: left;
}

.supreme-tag {
  display: inline-block;
  color: var(--secondary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.8rem;
  margin-bottom: 2rem;
}

.grimoire-main-title {
  font-size: 4rem;
  color: white;
  margin-bottom: 2.5rem;
  line-height: 1.1;
}

.grimoire-intro-text {
  font-size: 1.3rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.8;
  margin-bottom: 4rem;
  max-width: 700px;
}

/* Grimoire Grid */
.grimoire-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 8rem;
  align-items: start;
}

/* Sidebar */
.sidebar-sticky {
  position: sticky;
  top: 10rem;
}

.sidebar-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--secondary);
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-thin);
}

.cat-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 5rem;
}

.cat-link {
  text-decoration: none;
  color: var(--text-main);
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.3s;
}

.cat-link:hover {
  color: var(--secondary);
  transform: translateX(10px);
}

.cat-icon {
  color: var(--secondary);
}

.master-quote-block {
  padding: 3rem;
  background: var(--bg-soft);
  border-left: 2px solid var(--secondary);
  margin-bottom: 4rem;
}

.quote-text {
  font-style: italic;
  font-family: var(--font-serif);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.quote-author {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  opacity: 0.6;
}

.sidebar-cta h4 {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.sidebar-cta p {
  font-size: 0.9rem;
  color: var(--text-soft);
  margin-bottom: 2rem;
}

/* Feed */
.feed-header {
  margin-bottom: 6rem;
}

.feed-header h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
}

.filter-line {
  height: 1px;
  background: var(--border-thin);
  width: 100px;
}

.secrets-list {
  display: grid;
  gap: 8rem;
}

.secret-card {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 4rem;
  align-items: center;
}

.secret-img-box {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.secret-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s;
}

.secret-card:hover img {
  transform: scale(1.1);
}

.secret-category-tag {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: var(--secondary);
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.secret-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.secret-excerpt {
  font-size: 1rem;
  color: var(--text-soft);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.secret-link {
  text-decoration: none;
  font-weight: 700;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.3s;
}

.secret-link:hover {
  color: var(--secondary);
}

/* Forbidden Banner */
.forbidden-banner {
  background: var(--primary);
  color: white;
  padding: 8rem 0;
  margin-top: 10rem;
}

.forbidden-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forbidden-text h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.forbidden-text p {
  font-size: 1.1rem;
  opacity: 0.7;
}

@media (max-width: 1200px) {
  .grimoire-grid { grid-template-columns: 1fr; gap: 4rem; }
  .grimoire-sidebar { order: 2; border-top: 1px solid var(--border-thin); padding-top: 4rem; }
  .grimoire-main-title { font-size: 2.5rem; }
  .sidebar-sticky { position: static; }
}

@media (max-width: 768px) {
  .grimoire-hero { height: 70vh; margin-top: -5rem; }
  .grimoire-main-title { font-size: 1.8rem; }
  .grimoire-intro-text { font-size: 1rem; }
  .secret-card { grid-template-columns: 1fr; gap: 2rem; }
  .secret-img-box { height: 250px; }
  .secret-title { font-size: 1.4rem; }
  .forbidden-inner { flex-direction: column; text-align: center; gap: 3rem; }
  .forbidden-text h3 { font-size: 1.5rem; }
}

@media (max-width: 480px) {
  .master-quote-block { padding: 1.5rem; }
  .grimoire-main-title { font-size: 1.5rem; }
}
</style>
