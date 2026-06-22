document.addEventListener('DOMContentLoaded', () => {

    // Translations
    const translations = {
        es: {
            'nav.services': 'Servicios',
            'hero.eyebrow': 'Desarrollo · Diseño · Soporte',
            'hero.title': 'Creamos experiencias<br><em>digitales</em> que<br>transforman negocios',
            'hero.description': 'Servicios integrales de desarrollo web, diseño y mantenimiento adaptados a las necesidades reales de tu empresa.',
            'hero.cta': 'Ver servicios',
            'services.title': 'Soluciones a la medida<br><em>de tu proyecto</em>',
            'services.subtitle': 'Cada servicio está diseñado para entregar resultados medibles y una experiencia digital excepcional.',
            'btn.all': 'Todos',
            'btn.active': 'Solo activos',
            'btn.sort': 'Menor a mayor precio',
            'badge.active': 'Activo',
            'badge.inactive': 'Inactivo',
            'counter': 'Mostrando {showing} de {total} servicios',
            'footer.tagline': 'Transformando ideas en experiencias digitales.',
            'service.1': 'Landing Page Corporativa',
            'service.2': 'Sitio Web Institucional',
            'service.3': 'Mantenimiento Web Mensual',
            'service.4': 'Correos Corporativos',
            'service.5': 'Integración con CMS'
        },
        en: {
            'nav.services': 'Services',
            'hero.eyebrow': 'Development · Design · Support',
            'hero.title': 'We create <em>digital</em><br>experiences that<br>transform businesses',
            'hero.description': 'Comprehensive web development, design and maintenance services tailored to the real needs of your business.',
            'hero.cta': 'View services',
            'services.title': 'Solutions tailored<br><em>to your project</em>',
            'services.subtitle': 'Each service is designed to deliver measurable results and an exceptional digital experience.',
            'btn.all': 'All',
            'btn.active': 'Active only',
            'btn.sort': 'Price: low to high',
            'badge.active': 'Active',
            'badge.inactive': 'Inactive',
            'counter': 'Showing {showing} of {total} services',
            'footer.tagline': 'Transforming ideas into digital experiences.',
            'service.1': 'Corporate Landing Page',
            'service.2': 'Institutional Website',
            'service.3': 'Monthly Web Maintenance',
            'service.4': 'Corporate Email',
            'service.5': 'CMS Integration'
        }
    };

    // Services data
    const servicios = [
        { id: 1, nombre: 'Landing Page Corporativa', precio: 850, activo: true },
        { id: 2, nombre: 'Sitio Web Institucional', precio: 1800, activo: true },
        { id: 3, nombre: 'Mantenimiento Web Mensual', precio: 450, activo: true },
        { id: 4, nombre: 'Correos Corporativos', precio: 320, activo: true },
        { id: 5, nombre: 'Integración con CMS', precio: 950, activo: false }
    ];

    const grid = document.getElementById('servicios-grid');
    const counter = document.getElementById('servicios-counter');
    const btnTodos = document.getElementById('btn-todos');
    const btnActivos = document.getElementById('btn-activos');
    const btnOrdenar = document.getElementById('btn-ordenar');
    const btnTheme = document.getElementById('toggle-theme');
    const btnLang = document.getElementById('toggle-lang');
    const langLabel = document.getElementById('lang-label');
    const nav = document.querySelector('.landing-nav');

    let showOnlyActive = false;
    let sortByPrice = false;
    let currentLang = localStorage.getItem('apros-lang') || 'es';
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

    // Theme
    const setTheme = (theme) => {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('apros-theme', theme);
    };

    btnTheme.addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // i18n
    const applyTranslations = (lang) => {
        const t = translations[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key]) el.innerHTML = t[key];
        });

        langLabel.textContent = lang.toUpperCase();
    };

    const setLang = (lang) => {
        currentLang = lang;
        localStorage.setItem('apros-lang', lang);
        applyTranslations(lang);
        render();
    };

    btnLang.addEventListener('click', () => {
        setLang(currentLang === 'es' ? 'en' : 'es');
    });

    // Services
    const getFilteredServices = () => {
        let result = [...servicios];

        if (showOnlyActive) {
            result = result.filter(s => s.activo);
        }

        if (sortByPrice) {
            result.sort((a, b) => a.precio - b.precio);
        }

        return result;
    };

    const formatPrice = (precio) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(precio);
    };

    const createCard = (servicio, index) => {
        const t = translations[currentLang];
        const badgeClass = servicio.activo
            ? 'landing-card__badge--active'
            : 'landing-card__badge--inactive';
        const badgeText = servicio.activo ? t['badge.active'] : t['badge.inactive'];
        const serviceName = t[`service.${servicio.id}`];
        const number = String(servicio.id).padStart(2, '0');

        return `
            <article class="landing-card" style="animation-delay: ${index * 0.06}s">
                <span class="landing-card__number">${number}</span>
                <div class="landing-card__header">
                    <span class="landing-card__badge ${badgeClass}">
                        <span class="landing-card__badge-dot"></span>
                        ${badgeText}
                    </span>
                </div>
                <h3 class="landing-card__name">${serviceName}</h3>
                <div class="landing-card__divider"></div>
                <div class="landing-card__price-wrapper">
                    <span class="landing-card__price">${formatPrice(servicio.precio)}</span>
                    <span class="landing-card__currency">usd</span>
                </div>
            </article>
        `;
    };

    const updateButtonStates = () => {
        btnTodos.classList.toggle('landing-controls__btn--active', !showOnlyActive && !sortByPrice);
        btnActivos.classList.toggle('landing-controls__btn--active', showOnlyActive);
        btnOrdenar.classList.toggle('landing-controls__btn--active', sortByPrice);
    };

    const render = () => {
        const t = translations[currentLang];
        const filtered = getFilteredServices();
        grid.innerHTML = filtered.map((s, i) => createCard(s, i)).join('');

        counter.textContent = t['counter']
            .replace('{showing}', filtered.length)
            .replace('{total}', servicios.length);

        updateButtonStates();
        revealCards();
    };

    const revealCards = () => {
        const cards = grid.querySelectorAll('.landing-card');
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 80 + 50);
        });
    };

    btnTodos.addEventListener('click', () => {
        showOnlyActive = false;
        sortByPrice = false;
        render();
    });

    btnActivos.addEventListener('click', () => {
        showOnlyActive = !showOnlyActive;
        render();
    });

    btnOrdenar.addEventListener('click', () => {
        sortByPrice = !sortByPrice;
        render();
    });

    window.addEventListener('scroll', () => {
        const styles = getComputedStyle(document.documentElement);
        nav.style.background = window.scrollY > 50
            ? styles.getPropertyValue('--c-nav-bg-scroll')
            : styles.getPropertyValue('--c-nav-bg');
    }, { passive: true });

    applyTranslations(currentLang);
    render();
});
