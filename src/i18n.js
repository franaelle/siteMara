import { reactive } from 'vue'

export const i18n = reactive({
    locale: (typeof window !== 'undefined' && localStorage.getItem('site_lang')) || 'fr',
    translations: {
        fr: {
            nav: { master: "Le Maître Amandji", services: "Secrets & Rituels", gallery: "Le Trésor", blog: "Le Grimoire", consultation: "Consultation" },
            hero: { badge: "Héritier Ancestral • Maître Amandji d'Afrique • Secret Millénaire", title: "Maître Amandji d'Afrique : Puissance Absolue", desc: "Plus de 25 ans de maîtrise ésotérique. Les forces invisibles sont à votre service pour transformer votre vie en 48 heures.", btn_solicit: "Solliciter le Maître", btn_works: "Reliques & Secrets" },
            home: {
                expertise_title: "Une Expertise de Très Haut Rang", expertise_desc: "Le Maître Amandji d'Afrique intervient avec une puissance foudroyante là où la science échoue. Résultats garantis par le pacte ancestral.",
                card_love_title: "Retour Affectif Éternel", card_love_desc: "Récupérez l'être aimé, même si la séparation date de plusieurs années. Cadenas d'amour pour une fidélité inébranlable.",
                card_wealth_title: "Richesse & Gloire Immédiates", card_wealth_desc: "Ouvrez les vannes de la fortune. Attirez la chance aux jeux, le succès dans les affaires et la prospérité infinie.",
                card_protect_title: "Blindage Mystique Total", card_protect_desc: "Protection contre les ennemis, les jaloux et tout sort maléfique. Blindez votre vie et celle de votre famille.",
                card_voyance_title: "Voyance & Oracle Sacré", card_voyance_desc: "Découvrez tout sur votre futur. Rien n'est caché aux yeux du Maître.",
                btn_oracle: "Consulter l'Oracle", btn_wealth: "Appeler la Fortune", btn_shield: "Commander le Blindage", btn_destiny: "Voir son Destin"
            },
            services: {
                title: "Secrets Ancestraux & Travaux Occultes", desc: "Chaque rituel est une œuvre de haute magie, exécutée dans le respect des traditions secrètes de nos ancêtres.",
                love_title: "Le Cadenas du Retour Affectif", love_desc: "Le partenaire revient à genoux, soumis et amoureux, avec un lien scellé pour l'éternité.",
                wealth_title: "La Calebasse de Fortune", wealth_desc: "Un rituel de haute attraction financière pour ne plus jamais manquer de rien. Succès foudroyant.",
                protect_title: "Le Grand Blindage d'Afrique", protect_desc: "Détruit toute magie noire, sortilège de mort ou de ruine. Protection totale 24h/24.",
                luck_title: "Chance & Succès aux Jeux", luck_desc: "Talisman sacré pour forcer la chance et gagner aux jeux de hasard et de loterie.",
                curse_title: "Désenvoûtement Total", curse_desc: "Libération immédiate des liens qui bloquent votre épanouissement. Purifiez votre âme.",
                guarantee_title: "L'Engagement Infaillible du Maître", guarantee_desc: "L'échec n'existe pas. Si Maître Amandji accepte votre dossier, votre solution est déjà là."
            },
            blog: {
                title: "Le Grimoire des Vérités Interdites", intro: "La connaissance est la clef de la domination. Accédez aux archives secrètes du temple pour maîtriser les forces qui régissent votre existence.",
                cat_love: "Mystères de l'Âme & Amour",
                cat_wealth: "Arcanes de la Fortune",
                cat_protection: "Boucliers de l'Ombre",
                featured_tag: "Révélation Suprême", featured_title: "Le Pacte de Sang et l'Obéissance du Cœur", featured_desc: "Plongée dans les rituels les plus profonds pour sceller une union que même la mort ne saurait défaire. Un savoir réservé aux initiés.",
                read_rit: "Ouvrir le Rituel", read_sec: "Découvrir le Secret",
                art1_title: "La Vibration de l'Or", art1_desc: "Comment aligner sa fréquence vibratoire sur celle de l'abondance pure via les métaux sacrés.",
                art2_title: "L'Œil du Destin", art2_desc: "Techniques ancestrales pour anticiper les trahisons avant qu'elles ne se manifestent dans le monde physique.",
                art3_title: "Le Sang des Ancêtres", art3_desc: "Invoquer la protection de sa lignée pour ériger un rempart infranchissable autour de son foyer.",
                art4_title: "Le Silence des Ennemis", art4_desc: "Comment neutraliser les langues de serpent sans laisser de trace mystique.",
                side_consult_title: "Entretien Privé", side_consult_desc: "Pour les cas dépassant la compréhension commune, le Maître vous accorde une audience exclusive.",
                quote_text: "Celui qui possède le secret possède le monde. Le reste n'est qu'illusion.",
                why_title: "Les Lois du Temple", why_reason1: "Secret Inviolable", why_reason2: "Manifestation Instantanée", why_reason3: "Lignée Solaire", why_reason4: "Souveraineté Occulte"
            },
            gallery: {
                title: "Le Trésor Sacré du Temple", intro: "Découvrez les reliques authentiques chargées de puissance spirituelle, prêtes à être expédiées dans le monde entier.",
                rtitle1: "Le Sceau Noir d'Autorité", rdesc1: "Assure le respect et la promotion sociale rapide.",
                rtitle2: "La Calebasse Attraction de Fortune", rdesc2: "Attire physiquement la richesse financière vers son porteur.",
                rtitle3: "Le Miroir de Voyance Directe", rdesc3: "Pour voir les complots de vos ennemis avant qu'ils n'agissent.",
                rtitle4: "Le Talisman de Protection Royale", rdesc4: "Rend invulnérable aux attaques mystiques et physiques.",
                rtitle5: "La Bague de Chance aux Jeux", rdesc5: "Spécialement conçue pour la loterie et le casino.",
                preview_title: "Fragments de Puissance", order_title: "Commander votre Secret", order_desc: "Chaque objet est préparé et consacré personnellement par le Maître Amandji."
            },
            contact: {
                title: "Consultation avec le Maître", desc: "Le Maître Amandji d'Afrique vous reçoit en toute discrétion. N'ayez plus honte de vos souffrances, car la solution existe.",
                form_title: "Demande de Secours Urgente",
                name_label: "Votre Nom / Prénom", problem_label: "Décrivez votre Problème", urgency_label: "Niveau d'Urgence",
                submit_btn: "Envoyer ma demande au Maître",
                wa_direct: "Contacter via WhatsApp Direct",
                online_indicator: "Le Maître est à l'écoute en ce moment",
                security: "Vos informations sont protégées par le secret sacré et ne seront jamais partagées."
            },
            footer: {
                about: "Maître Amandji d'Afrique, héritier des secrets spirituels les plus profonds. Plus de 25 ans d'expérience au service de l'humanité pour résoudre les cas les plus difficiles.",
                nav: "Exploration du Temple",
                magic: "Travaux de Haute Magie",
                rights: "Tous droits réservés au Temple du Maître Amandji d'Afrique."
            },
            common: { cta_wa_fixed: "Aide Immédiate", wa_footer_btn: "Commencer un Travail", temple_name: "Maître Amandji" }
        },
        en: {
            nav: { master: "Master Amandji", services: "Secrets & Rituals", gallery: "The Treasure", blog: "The Grimoire", consultation: "Consultation" },
            hero: { badge: "Ancestral Heir • Master Amandji of Africa • Millennial Secret", title: "Master Amandji of Africa: Absolute Power", desc: "Over 25 years of esoteric mastery. The invisible forces are at your service to transform your life in 48 hours.", btn_solicit: "Solicit the Master", btn_works: "Relics & Secrets" },
            home: {
                expertise_title: "High-Level Expertise", expertise_desc: "Master Amandji intervene where science fails. Results guaranteed by ancestral pact.",
                card_love_title: "Eternal Love Return", card_love_desc: "Recover your loved one, even after years. Love padlock for unwavering loyalty.",
                card_wealth_title: "Immediate Wealth & Glory", card_wealth_desc: "Unlock the gates of fortune. Attract luck, success, and prosperity.",
                card_protect_title: "Total Mystic Shield", card_protect_desc: "Protection against enemies, jealousy, and evil spells. Shield your family.",
                card_voyance_title: "Clairvoyance & Sacred Oracle", card_voyance_desc: "Discover everything about your future. Nothing is hidden from the Master.",
                btn_oracle: "Consult Oracle", btn_wealth: "Call Fortune", btn_shield: "Order Shielding", btn_destiny: "See Destiny"
            },
            services: {
                title: "Ancestral Secrets & Occult Works", desc: "Each ritual is a work of high magic, executed in respect of secret traditions.",
                love_title: "The Love Return Padlock", love_desc: "The partner returns on their knees, submissive and in love forever.",
                wealth_title: "The Fortune Gourd", wealth_desc: "A financial attraction ritual to never lack again. Rapid success.",
                protect_title: "The Great Shield of Africa", protect_desc: "Destroys black magic, death spells, or ruin. Total protection 24/7.",
                luck_title: "Luck & Gambling Success", luck_desc: "Sacred talisman to force luck and win at lotteries and games.",
                curse_title: "Total Unbewitching", curse_desc: "Immediate release from blocks. Purify your soul.",
                guarantee_title: "Unfailing Commitment", guarantee_desc: "Failure doesn't exist. If he accepts your case, the solution is there."
            },
            blog: {
                title: "The Grimoire of Forbidden Truths", intro: "Knowledge is the key to domination. Access the temple's secret archives to master the forces that govern your existence.",
                cat_love: "Soul & Love Mysteries",
                cat_wealth: "Arcana of Fortune",
                cat_protection: "Shadow Shields",
                featured_tag: "Supreme Revelation", featured_title: "The Blood Pact and Heart's Obedience", featured_desc: "A dive into the deepest rituals to seal a union that even death cannot undo. Knowledge reserved for initiates.",
                read_rit: "Open Ritual", read_sec: "Discover Secret",
                art1_title: "The Golden Vibration", art1_desc: "How to align your vibration with pure abundance through sacred metals.",
                art2_title: "The Eye of Destiny", art2_desc: "Ancestral techniques to anticipate betrayals before they manifest physically.",
                art3_title: "Blood of Ancestors", art3_desc: "Invoke lineage protection to build an impassable wall around your home.",
                art4_title: "Silence of Enemies", art4_desc: "How to neutralize snake tongues without leaving a mystical trace.",
                side_consult_title: "Private Consultation", side_consult_desc: "For cases beyond common understanding, the Master grants an exclusive audience.",
                quote_text: "He who holds the secret holds the world. The rest is but illusion.",
                why_title: "Temple Laws", why_reason1: "Inviolable Secret", why_reason2: "Instant Manifestation", why_reason3: "Solar Lineage", why_reason4: "Occult Sovereignty"
            },
            gallery: {
                title: "The Sacred Treasure", intro: "Discover authentic powerful relics, ready for worldwide shipping.",
                rtitle1: "Black Seal of Authority", rdesc1: "Ensures respect and rapid social promotion.",
                rtitle2: "Fortune Attraction Gourd", rdesc2: "Physically attracts wealth to the wearer.",
                rtitle3: "Direct Vision Mirror", rdesc3: "To see enemy plots before they act.",
                rtitle4: "Royal Protection Talisman", rdesc4: "Makes you invulnerable to mystic attacks.",
                rtitle5: "Gambling Luck Ring", rdesc5: "Specifically designed for lottery and casino.",
                preview_title: "Fragments of Power", order_title: "Order your Secret", order_desc: "Each item is prepared and consecrated by the Master."
            },
            contact: {
                title: "Consultation with the Master", desc: "Master Amandji receives you in discretion. Don't be ashamed of your suffering.",
                form_title: "Urgent Help Request",
                name_label: "Your Name", problem_label: "Describe your Problem", urgency_label: "Urgency Level",
                submit_btn: "Send my request",
                wa_direct: "Contact via Direct WhatsApp",
                online_indicator: "The Master is listening right now",
                security: "Your info is protected by sacred secret."
            },
            footer: {
                about: "Master Amandji of Africa, heir to deep spiritual secrets. Over 25 years of experience solving the most difficult cases.",
                nav: "Temple Exploration",
                magic: "High Magic Works",
                rights: "All rights reserved to the Temple of Master Amandji of Africa."
            },
            common: { cta_wa_fixed: "Immediate Help", wa_footer_btn: "Start a Ritual", temple_name: "Master Amandji" }
        },
        it: {
            nav: { master: "Maestro Amandji", services: "Segreti & Rituali", gallery: "Il Tesoro", blog: "Il Grimorio", consultation: "Contatto" },
            hero: { badge: "Erede Ancestrale • Maestro Amandji d'Africa", title: "Maestro Amandji d'Africa: Potere Assoluto", desc: "Oltre 25 anni di maestria. Trasforma la tua vita in 48 ore.", btn_solicit: "Sollecita il Maestro", btn_works: "Reliquie & Segreti" },
            home: {
                expertise_title: "Competenza di Alto Livello", expertise_desc: "Risultati garantiti dal patto ancestrale.",
                card_love_title: "Ritorno Amore Eterno", card_love_desc: "Recupera la persona amata in 48 ore.",
                card_wealth_title: "Ricchezza & Gloria", card_wealth_desc: "Sblocca la fortuna e il successo negli affari.",
                card_protect_title: "Protezione Totale", card_protect_desc: "Protezione contro nemici e malefici.",
                card_voyance_title: "Veggenza Sacra", card_voyance_desc: "Scopri tutto sul tuo futuro.",
                btn_oracle: "Consulta Oracolo", btn_wealth: "Chiama Fortuna", btn_shield: "Ordina Protezione", btn_destiny: "Vedi Destino"
            },
            common: { cta_wa_fixed: "Aiuto Rapido", wa_footer_btn: "Inizia Rituale", temple_name: "Maestro Amandji d'Africa" }
        },
        es: {
            nav: { master: "Maestro Amandji", services: "Secretos", gallery: "Tesoro", blog: "Grimorio", consultation: "Consulta" },
            hero: { badge: "Heredero Ancestral • Maestro Amandji de África", title: "Maestro Amandji de África: Poder Absoluto", desc: "Más de 25 años de maestría. Transforme su vida en 48 horas.", btn_solicit: "Consultar Maestro", btn_works: "Reliquias" },
            home: {
                expertise_title: "Experiencia Superior", expertise_desc: "Resultados garantizados por el pacto ancestral.",
                card_love_title: "Retorno Amoroso Eterno", card_love_desc: "Recupere a su pareja en 48 horas.",
                card_wealth_title: "Riqueza y Gloria", card_wealth_desc: "Atraiga suerte, éxito y prosperidad.",
                card_protect_title: "Protección Total", card_protect_desc: "Protección contra enemigos y hechizos.",
                card_voyance_title: "Videncia Sagrada", card_voyance_desc: "Descubra todo sobre su futuro.",
                btn_oracle: "Consultar Oráculo", btn_wealth: "Llamar Fortuna", btn_shield: "Pedir Protección", btn_destiny: "Ver Destino"
            },
            common: { cta_wa_fixed: "Ayuda Rápida", wa_footer_btn: "Ritual", temple_name: "Maestro Amandji de África" }
        },
        pt: {
            nav: { master: "Mestre Amandji", services: "Segredos", gallery: "Tesouro", blog: "Grimório", consultation: "Consulta" },
            hero: { badge: "Herdeiro Ancestral • Mestre Amandji de África", title: "Mestre Amandji de África: Poder Absoluto", desc: "Mais de 25 anos de maestria. Transforme sua vida em 48 horas.", btn_solicit: "Consultar Mestre", btn_works: "Relíquias" },
            home: {
                expertise_title: "Experiência Superior", expertise_desc: "Resultados garantidos pelo pacto ancestral.",
                card_love_title: "Retorno Amoroso Eterno", card_love_desc: "Recupere seu parceiro em 48 horas.",
                card_wealth_title: "Riqueza e Glória", card_wealth_desc: "Atraia sorte, sucesso e prosperidade.",
                card_protect_title: "Proteção Total", card_protect_desc: "Proteção contra inimigos e feitiços.",
                card_voyance_title: "Vidência Sagrada", card_voyance_desc: "Descubra tudo sobre seu futuro.",
                btn_oracle: "Consultar Oráculo", btn_wealth: "Chamar Fortuna", btn_shield: "Pedir Proteção", btn_destiny: "Ver Destino"
            },
            common: { cta_wa_fixed: "Ajuda Rápida", wa_footer_btn: "Iniciar Ritual", temple_name: "Mestre Amandji de África" }
        }
    }
})

export const setLocale = (lang) => {
    i18n.locale = lang
    if (typeof window !== 'undefined') {
        localStorage.setItem('site_lang', lang)
    }
}

export const t = (path) => {
    const keys = path.split('.')
    let result = i18n.translations[i18n.locale]
    for (const key of keys) {
        if (!result || result[key] === undefined) return path
        result = result[key]
    }
    return result
}
