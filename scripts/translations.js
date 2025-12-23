const translations = {
    en: {
        brand: "PERIUS",
        brand_sub: "TECHNOLOGY",
        nav_story: "Our Story",
        nav_services: "Services",
        nav_approach: "Our Approach",
        nav_contact: "Contact Us",
        // Tagline
        tagline_h1: "Technology executive partner for future-ready organizations.",
        tagline_h2: "Helping leaders adopt technology and AI with clear decisions and measurable results.",
        tagline_h3_1: "CIO / CTO Advisory",
        tagline_h3_2: "IT Operations & Delivery Excellence",
        tagline_h3_3: "Decision & Governance Frameworks",
        // Story
        story_title: "Our Story",
        story_sub: "Perius takes its name from the butterfly — a symbol of transformation and renewal.",
        story_p1: "With 25+ years of leadership in large, regulated financial institutions, I now partner with executives to deliver enterprise-scale technology and digital transformations end-to-end—from strategy and governance through execution to measurable business outcomes.",
        story_p2: "Through Perius, I serve as a trusted executive partner helping organizations adopt technology and AI with fit-for-purpose operating models, accountable decision-making, and performance frameworks—making progress measurable and sustainable.",
        story_founder: "Yeşim Çalıdağ<br>Founder, Perius Technology",
        // Services
        services_title: "Services",
        services_subtitle: "Executive advisory that makes technology measurable and governable.",
        // ...add more as needed for services, approach, etc...
        approach_title: "Our Approach",
        approach_text: "We work as an executive partner to help organizations adopt technology and AI with governance, control, and measurable results.<br><br>We start by clarifying ownership, decision rights, and success metrics—then design an operating model and governance cadence that makes progress visible and manageable. We translate priorities into a practical roadmap and stay involved through execution: reviewing KPIs, closing gaps, building a continuous improvement backlog, and ensuring adoption is controlled—not ad-hoc.",
        approach_cta_text: "For executive conversations on technology strategy, governance, operating models, and AI adoption:",
        approach_cta_btn: "Let's Talk",
        // Footer
        footer: "&copy; Perius Technology. All rights reserved."
    },
    tr: {
        brand: "PERIUS",
        brand_sub: "TEKNOLOJİ",
        nav_story: "Hikayemiz",
        nav_services: "Hizmetler",
        nav_approach: "Yaklaşımımız",
        nav_contact: "İletişim",
        // Tagline
        tagline_h1: "Geleceğe hazır organizasyonlar için teknoloji yönetimi ortağınız.",
        tagline_h2: "Liderlerin teknoloji ve yapay zekâyı net kararlarla ve ölçülebilir sonuçlarla benimsemesine yardımcı oluyoruz.",
        tagline_h3_1: "CIO / CTO Danışmanlığı",
        tagline_h3_2: "BT Operasyonları & Teslimat Mükemmelliği",
        tagline_h3_3: "Karar & Yönetişim Çerçeveleri",
        // Story
        story_title: "Hikayemiz",
        story_sub: "Perius adını dönüşüm ve yenilenmenin simgesi olan kelebekten alır.",
        story_p1: "25+ yıllık büyük ve regüle finansal kurumlarda liderlik deneyimimle, artık yöneticilerle uçtan uca teknoloji ve dijital dönüşümler için iş birliği yapıyorum—stratejiden yönetişime, uygulamadan ölçülebilir iş sonuçlarına kadar.",
        story_p2: "Perius aracılığıyla, teknoloji ve yapay zekâyı amaca uygun işletim modelleri, hesap verebilir karar alma ve performans çerçeveleriyle benimsemelerine yardımcı olan güvenilir bir yönetici ortağı olarak hizmet veriyorum—ilerlemeyi ölçülebilir ve sürdürülebilir kılıyorum.",
        story_founder: "Yeşim Çalıdağ<br>Kurucu, Perius Teknoloji",
        // Services
        services_title: "Hizmetler",
        services_subtitle: "Teknolojiyi ölçülebilir ve yönetilebilir kılan yönetici danışmanlığı.",
        // ...add more as needed for services, approach, etc...
        approach_title: "Yaklaşımımız",
        approach_text: "Kuruluşların teknoloji ve yapay zekâyı yönetişim, kontrol ve ölçülebilir sonuçlarla benimsemelerine yardımcı olmak için yönetici ortağı olarak çalışıyoruz.<br><br>Öncelikle sahiplik, karar hakları ve başarı ölçütlerini netleştiriyoruz—ardından ilerlemeyi görünür ve yönetilebilir kılan bir işletim modeli ve yönetişim ritmi tasarlıyoruz. Öncelikleri pratik bir yol haritasına çeviriyor ve uygulama boyunca dahil oluyoruz: KPI'ları gözden geçiriyor, boşlukları kapatıyor, sürekli iyileştirme listesi oluşturuyor ve benimsemenin rastgele değil kontrollü olmasını sağlıyoruz.",
        approach_cta_text: "Teknoloji stratejisi, yönetişim, işletim modelleri ve yapay zekâ benimsemesi üzerine yönetici görüşmeleri için:",
        approach_cta_btn: "İletişime Geçin",
        // Footer
        footer: "&copy; Perius Teknoloji. Tüm hakları saklıdır."
    }
};

function setLanguage(lang) {
    window.currentLang = lang;
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Tagline h3s (multiple lines)
    if (lang === "tr") {
        const h3s = document.querySelectorAll('.main-tagline-text h3');
        if (h3s.length === 3) {
            h3s[0].innerHTML = translations.tr.tagline_h3_1;
            h3s[1].innerHTML = translations.tr.tagline_h3_2;
            h3s[2].innerHTML = translations.tr.tagline_h3_3;
        }
    } else {
        const h3s = document.querySelectorAll('.main-tagline-text h3');
        if (h3s.length === 3) {
            h3s[0].innerHTML = translations.en.tagline_h3_1;
            h3s[1].innerHTML = translations.en.tagline_h3_2;
            h3s[2].innerHTML = translations.en.tagline_h3_3;
        }
    }

    // Tagline h1/h2
    document.querySelector('.main-tagline-text h1').innerHTML = translations[lang].tagline_h1;
    document.querySelector('.main-tagline-text h2').innerHTML = translations[lang].tagline_h2;

    // Story section
    document.querySelector('.story-text h2').innerHTML = translations[lang].story_title;
    document.querySelector('.story-text h3').innerHTML = translations[lang].story_sub;
    document.querySelectorAll('.story-text p')[0].innerHTML = translations[lang].story_p1;
    document.querySelectorAll('.story-text p')[1].innerHTML = translations[lang].story_p2;
    document.querySelector('.founder').innerHTML = translations[lang].story_founder;

    // Services section
    document.querySelector('.section-title').innerHTML = translations[lang].services_title;
    document.querySelector('.section-subtitle').innerHTML = translations[lang].services_subtitle;

    // Approach section
    document.querySelector('.approach-title').innerHTML = translations[lang].approach_title;
    document.querySelector('.approach-text').innerHTML = translations[lang].approach_text;
    document.querySelector('.approach-cta-text').innerHTML = translations[lang].approach_cta_text;
    document.querySelector('.approach-cta .cta-button').innerHTML = translations[lang].approach_cta_btn;

    // Footer
    document.querySelector('footer .container').innerHTML = translations[lang].footer;

    // Update lang button text
    document.querySelectorAll('.lang-toggle, .lang-toggle.desktop').forEach(btn => {
        btn.innerText = lang === "tr" ? "TR" : "EN";
    });
}

function getDefaultLang() {
    const navLang = navigator.language || navigator.userLanguage;
    return navLang && navLang.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

document.addEventListener('DOMContentLoaded', function () {
    let lang = getDefaultLang();
    setLanguage(lang);

    // Button event listeners
    document.getElementById('lang-toggle').addEventListener('click', function () {
        lang = (lang === 'en') ? 'tr' : 'en';
        setLanguage(lang);
    });
    document.getElementById('lang-toggle-desktop').addEventListener('click', function () {
        lang = (lang === 'en') ? 'tr' : 'en';
        setLanguage(lang);
    });
});
