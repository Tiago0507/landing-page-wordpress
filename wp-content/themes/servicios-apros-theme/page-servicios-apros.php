<?php
/**
 * Template Name: Servicios APROS
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> data-theme="dark">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        (function(){
            var t = localStorage.getItem('apros-theme');
            if (t) document.documentElement.setAttribute('data-theme', t);
        })();
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'page-servicios-apros' ); ?>>
<?php wp_body_open(); ?>

    <nav class="landing-nav">
        <div class="landing-container landing-nav__inner">
            <a href="#" class="landing-nav__logo">
                <span class="landing-nav__logo-mark">AP</span>
                <span class="landing-nav__logo-text">Servicios APROS</span>
            </a>
            <div class="landing-nav__actions">
                <button id="toggle-theme" class="landing-toggle" type="button" aria-label="Cambiar tema">
                    <svg class="landing-toggle__icon landing-toggle__icon--sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                    <svg class="landing-toggle__icon landing-toggle__icon--moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                </button>
                <button id="toggle-lang" class="landing-toggle landing-toggle--lang" type="button" aria-label="Cambiar idioma">
                    <span id="lang-label">ES</span>
                </button>
                <a href="#servicios" class="landing-nav__link" data-i18n="nav.services">Servicios</a>
            </div>
        </div>
    </nav>

    <header class="landing-hero">
        <div class="landing-hero__decoration">
            <div class="landing-hero__ring landing-hero__ring--1"></div>
            <div class="landing-hero__ring landing-hero__ring--2"></div>
        </div>
        <div class="landing-container landing-hero__content">
            <p class="landing-hero__eyebrow" data-i18n="hero.eyebrow">Desarrollo &middot; Dise&ntilde;o &middot; Soporte</p>
            <h1 class="landing-hero__title" data-i18n-html="hero.title">
                Creamos experiencias<br>
                <em>digitales</em> que<br>
                transforman negocios
            </h1>
            <p class="landing-hero__description" data-i18n="hero.description">
                Servicios integrales de desarrollo web, dise&ntilde;o y mantenimiento
                adaptados a las necesidades reales de tu empresa.
            </p>
            <a href="#servicios" class="landing-btn landing-btn--primary">
                <span data-i18n="hero.cta">Ver servicios</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
            </a>
        </div>
    </header>

    <main>
        <section id="servicios" class="landing-services">
            <div class="landing-container">
                <div class="landing-services__header">
                    <h2 class="landing-services__title" data-i18n-html="services.title">
                        Soluciones a la medida<br>
                        <em>de tu proyecto</em>
                    </h2>
                    <p class="landing-services__subtitle" data-i18n="services.subtitle">
                        Cada servicio est&aacute; dise&ntilde;ado para entregar resultados medibles
                        y una experiencia digital excepcional.
                    </p>
                </div>

                <div class="landing-controls">
                    <button id="btn-todos" class="landing-controls__btn landing-controls__btn--active" type="button">
                        <span data-i18n="btn.all">Todos</span>
                    </button>
                    <button id="btn-activos" class="landing-controls__btn" type="button">
                        <span data-i18n="btn.active">Solo activos</span>
                    </button>
                    <button id="btn-ordenar" class="landing-controls__btn" type="button">
                        <span data-i18n="btn.sort">Menor a mayor precio</span>
                    </button>
                </div>

                <div id="servicios-grid" class="landing-services__grid"></div>

                <p id="servicios-counter" class="landing-counter"></p>
            </div>
        </section>
    </main>

    <footer class="landing-footer">
        <div class="landing-container landing-footer__inner">
            <span class="landing-footer__copy">&copy; <?php echo date( 'Y' ); ?> Servicios APROS</span>
            <p class="landing-footer__tagline" data-i18n="footer.tagline">Transformando ideas en experiencias digitales.</p>
        </div>
    </footer>

<?php wp_footer(); ?>
</body>
</html>
