<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { i18n, setLocale, t } from './i18n'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const initReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

const languages = [
  { code: 'fr', name: 'FR' },
  { code: 'en', name: 'EN' },
  { code: 'it', name: 'IT' },
  { code: 'es', name: 'ES' },
  { code: 'pt', name: 'PT' }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(initReveal, 500)
})

watch(() => route.path, () => {
  setTimeout(initReveal, 300)
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="site-wrapper">
    <header :class="{ 'scrolled': isScrolled, 'site-header': true }">
      <nav class="main-nav">
        <!-- Logo Branding COMPLET -->
        <div class="logo-container">
          <router-link to="/" @click="isMenuOpen = false">MAÎTRE AMANDJI</router-link>
        </div>

        <div class="nav-links" :class="{ 'active': isMenuOpen }">
          <router-link to="/services" @click="isMenuOpen = false">{{ t('nav.services') }}</router-link>
          <router-link to="/galerie" @click="isMenuOpen = false">{{ t('nav.gallery') }}</router-link>
          <router-link to="/blog" @click="isMenuOpen = false">{{ t('nav.blog') }}</router-link>
        </div>

        <!-- Right Side: Lang Switcher & CTA -->
        <div class="header-right">
          <div class="lang-dropdown">
            <span class="lang-current">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              {{ i18n.locale.toUpperCase() }}
            </span>
            <div class="lang-list">
              <button v-for="lang in languages" :key="lang.code" @click="setLocale(lang.code)" :class="{ active: i18n.locale === lang.code }">
                {{ lang.name }}
              </button>
            </div>
          </div>
          <router-link to="/contact" class="btn-luxury btn-consult-nav">{{ t('nav.consultation') }}</router-link>
          <button class="mobile-toggle" @click="toggleMenu">
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </nav>
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer Massive & Rich -->
    <footer>
      <div class="container footer-grid">
        <div class="footer-about">
          <div class="footer-logo">MAÎTRE AMANDJI</div>
          <p>{{ t('footer.about') }}</p>
          <div class="social-icons" style="margin-top: 2rem; display: flex; gap: 1.5rem;">
            <a href="#" class="icon-link">◈ SUCCESS</a>
            <a href="#" class="icon-link">◈ TRUST</a>
            <a href="#" class="icon-link">◈ POWER</a>
          </div>
        </div>

        <div class="footer-nav">
          <h3>{{ t('footer.nav') }}</h3>
          <ul>
            <li><router-link to="/services">{{ t('nav.services') }}</router-link></li>
            <li><router-link to="/galerie">{{ t('nav.gallery') }}</router-link></li>
            <li><router-link to="/blog">{{ t('nav.blog') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-magic">
          <h3>{{ t('footer.magic') }}</h3>
          <ul>
             <li>{{ t('home.card_love_title') }}</li>
             <li>{{ t('home.card_wealth_title') }}</li>
             <li>{{ t('home.card_protect_title') }}</li>
             <li>{{ t('services.luck_title') }}</li>
          </ul>
        </div>

        <div class="footer-contact">
           <h3>{{ t('nav.consultation') }}</h3>
           <p>WhatsApp: +123 456 7890</p>
           <p>Email: temple@maitre-amandji.com</p>
           <a href="https://wa.me/1234567890" class="btn-luxury btn-solid" style="margin-top: 2rem;">{{ t('common.wa_footer_btn') }}</a>
        </div>
      </div>
      <div class="footer-bottom container" style="margin-top: 8rem; padding-top: 4rem; border-top: 1px solid var(--border-thin); text-align: center; font-size: 0.8rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.1em;">
        Maitre amandji @2026
      </div>
    </footer>
  </div>
</template>

<style scoped>
.header-right { display: flex; align-items: center; gap: 1.5rem; }
.btn-consult-nav { padding: 0.75rem 2rem; font-size: 0.7rem; }

.footer-logo { font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 0.3em; margin-bottom: 2rem; color: var(--text-main); }
.footer-about p { font-size: 0.95rem; color: var(--text-soft); line-height: 2; max-width: 350px; }

.footer-grid h3 { font-size: 0.8rem; margin-bottom: 2rem; letter-spacing: 0.3em; font-weight: 700; color: var(--secondary); }
.footer-nav ul, .footer-magic ul { list-style: none; }
.footer-nav li, .footer-magic li { margin-bottom: 1.25rem; font-size: 0.9rem; font-weight: 700; }
.footer-nav a { text-decoration: none; color: var(--text-main); opacity: 0.6; transition: 0.3s; text-transform: uppercase; letter-spacing: 0.1em; }
.footer-nav a:hover { opacity: 1; color: var(--secondary); }
.footer-magic li { opacity: 0.6; text-transform: uppercase; letter-spacing: 0.1em; }

.icon-link { text-decoration: none; font-size: 0.7rem; font-weight: 900; color: var(--secondary); letter-spacing: 0.1em; }

.mobile-toggle { display: none; z-index: 10000; position: relative; }

@media (max-width: 1024px) {
  .btn-consult-nav { display: none; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
  .mobile-toggle { display: block; border: none; background: transparent; cursor: pointer; padding: 10px; }
  .bar { display: block; width: 25px; height: 2px; background: var(--text-main); margin: 6px 0; transition: 0.3s; }
  
  /* Anim effect for close state */
  .active + .header-right .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .active + .header-right .bar:nth-child(2) { transform: rotate(-45deg) translate(5px, -5px); }
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; text-align: center; }
  .footer-about p { max-width: 100%; }
  .header-right { gap: 1rem; }
  .logo-container a { font-size: 0.85rem; letter-spacing: 0.1em; }
}
</style>
