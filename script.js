
/* ========================
   1. البيانات والترجمات
   ======================== */
const translations = {
    ar: {
        hero_title: "خصومات حصرية لموظفينا",
        hero_subtitle: "استمتع بعروض وخصومات حصرية من أفضل الشركات والعلامات التجارية",
        search_placeholder: "ابحث عن شركة أو تصنيف...",
        footer_text: "© 2026 بوابة مزايا الموظفين. جميع الحقوق محفوظة.",
        all_categories: "الكل",
        category_tech: "تكنولوجيا",
        category_pharma: "أدوية",
        category_food: "أغذية",
        category_clothing: "ملابس",
        category_restaurants: "مطاعم",
        category_services: "خدمات",
        no_results_title: "لا توجد نتائج",
        no_results_text: "جرب البحث بكلمات أخرى أو اختر تصنيف مختلف",
        valid_until: "صالح حتى",
        offer_details: "تفاصيل العرض",
        how_to_use: "كيفية الاستفادة",
        how_to_use_text: "امسح QR Code عند الكاشير أو أدخل كود الخصم عند الشراء أونلاين",
        close: "إغلاق",
        visit_website: "زيارة الموقع 🚀",
        discount_label: "نسبة الخصم",
        scan_barcode: "امسح الباركود للحصول على الخصم",
        or_use_code: "أو استخدم الكود",
        click_to_copy: "اضغط للنسخ",
        copied_success: "✅ تم نسخ الكود بنجاح!",
        theme_default: "أزرق بنفسجي",
        theme_sunset: "غروب",
        theme_forest: "غابة",
        theme_ocean: "محيط",
        theme_crimson: "قرمزي",
        theme_lavender: "لافندر",
        theme_mint: "نعناع",
        theme_amber: "كهرمان",
        theme_pink: "وردي",
        theme_teal: "تركواز"
    },
    en: {
        hero_title: "Exclusive Employee Discounts",
        hero_subtitle: "Enjoy exclusive offers and discounts from the best companies and brands",
        search_placeholder: "Search for a company or category...",
        footer_text: "© 2026 Employee Benefits Portal. All rights reserved.",
        all_categories: "All",
        category_tech: "Technology",
        category_pharma: "Pharmacy",
        category_food: "Food",
        category_clothing: "Clothing",
        category_restaurants: "Restaurants",
        category_services: "Services",
        no_results_title: "No Results Found",
        no_results_text: "Try searching with different keywords or select a different category",
        valid_until: "Valid Until",
        offer_details: "Offer Details",
        how_to_use: "How to Use",
        how_to_use_text: "Scan the QR Code at checkout or enter the discount code when shopping online",
        close: "Close",
        visit_website: "Visit Website 🚀",
        discount_label: "Discount",
        scan_barcode: "Scan the barcode to get the discount",
        or_use_code: "Or use the code",
        click_to_copy: "Click to copy",
        copied_success: "✅ Code copied successfully!",
        theme_default: "Blue Purple",
        theme_sunset: "Sunset",
        theme_forest: "Forest",
        theme_ocean: "Ocean",
        theme_crimson: "Crimson",
        theme_lavender: "Lavender",
        theme_mint: "Mint",
        theme_amber: "Amber",
        theme_pink: "Pink",
        theme_teal: "Teal"
    }
};

const icons = {
    moon: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    langEn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">EN</text></svg>`,
    langAr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">ع</text></svg>`
};

const defaultConfig = {
    hero_title: "خصومات حصرية لموظفينا",
    hero_subtitle: "استمتع بعروض وخصومات حصرية من أفضل الشركات والعلامات التجارية",
    search_placeholder: "ابحث عن شركة أو تصنيف...",
    footer_text: "© 2026 بوابة مزايا الموظفين. جميع الحقوق محفوظة."
};

const companies = [
    { name: "أنس الدمشقي", nameEn: "Anas Aldimashky", logo: "images/anas.svg", discount: "15%", category: "مطاعم", categoryEn: "Restaurants", url: "https://anasaldimashky.tryorder.net/menu", validUntil: "31 ديسمبر 2026", validUntilEn: "December 31, 2026", description: "خصم حصري على جميع المأكولات والشاورما", descriptionEn: "Exclusive discount on all food and shawarma", discountCode: "ANAS15" },
    { name: "المحلة للغزل والنسيج", nameEn: "Misr Mehalla", logo: "images/Misr Mehalla.svg", discount: "30%", category: "ملابس", categoryEn: "Clothing", url: "https://apple.com", validUntil: "30 يونيو 2026", validUntilEn: "June 30, 2025", description: "خصم على المفروشات والمنسوجات", descriptionEn: "Exclusive discount on all textiles or furnishings", discountCode: "MEHALLA30" },
    { name: "بابا جونز", nameEn: "PAPA JONS", logo: "images/papa jons.svg", discount: "20%", category: "مطاعم", categoryEn: "Restaurants", url: "", validUntil: "30 يونيو 2026", validUntilEn: "June 30, 2025", description: "خصم على المفروشات والمنسوجات", descriptionEn: "Exclusive discount on all textiles or furnishings", discountCode: "MEHALLA30" },
    { name: "وافليشوس", nameEn: "Wafflicious", logo: "images/wafflicious.svg", discount: "15%", category: "مطاعم", categoryEn: "Restaurants", url: "https://apple.com", validUntil: "30 يونيو 2026", validUntilEn: "June 30, 2025", description: "خصم على المفروشات والمنسوجات", descriptionEn: "Exclusive discount on all textiles or furnishings", discountCode: "MEHALLA30" },

];

/* ========================
   2. إدارة الحالة
   ======================== */
let currentLanguage = 'ar';
let activeCategory = "الكل";
let searchQuery = "";
let currentColorTheme = 'default';

const categoryTranslations = {
    ar: ["الكل","ملابس", "مطاعم"],
    en: ["All","Clothing", "Restaurants"]
};

/* ========================
   3. الدوال المساعدة
   ======================== */
function generateBarcode(text, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.width = 280; canvas.height = 120;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    const patterns = [[2,1,2,3,1],[3,1,1,2,2],[1,2,2,2,2],[4,1,1,1,2],[1,3,3,1,1],[3,3,1,1,1],[1,1,4,2,1],[2,2,2,2,1],[2,1,1,3,2],[1,2,3,2,1],[3,1,2,1,2],[1,3,2,1,2]];
    const barWidth = 2; let x = 10; ctx.fillStyle = 'black';
    [1,1,1].forEach((w,i) => { if(i%2===0) ctx.fillRect(x,10,barWidth*w,70); x+=barWidth*w; });
    x+=2;
    for(let i=0; i<text.length; i++) {
        const pat = patterns[text.charCodeAt(i)%patterns.length];
        let isBlack = true;
        pat.forEach(w => { if(isBlack) ctx.fillRect(x,10,barWidth*w,70); x+=barWidth*w; isBlack=!isBlack; });
    }
    x+=2;
    [1,1,1].forEach((w,i) => { if(i%2===0) ctx.fillRect(x,10,barWidth*w,70); x+=barWidth*w; });
    
    let bn = ''; for(let i=0;i<text.length;i++) bn+=text.charCodeAt(i)%10;
    bn=(bn+'000000000000').substring(0,12);
    ctx.font='bold 10px monospace'; ctx.textAlign='center';
    const sp=(canvas.width-20)/12;
    for(let i=0;i<12;i++) ctx.fillText(bn[i],10+(i*sp),95);
    ctx.font='bold 9px Arial'; ctx.fillStyle='#333'; ctx.fillText(text,canvas.width/2,110);
    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/png'); img.style.maxWidth='100%';
    container.appendChild(img);
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text; textarea.style.position = 'fixed'; textarea.style.opacity = '0';
    document.body.appendChild(textarea); textarea.select();
    try { document.execCommand('copy'); showCopyNotification(); } catch (err) { console.error(err); }
    document.body.removeChild(textarea);
}

function showCopyNotification() {
    const n = document.getElementById('copy-notification');
    n.innerHTML = `<div class="copy-notification">${translations[currentLanguage].copied_success}</div>`;
    setTimeout(() => { n.innerHTML = ''; }, 2000);
}

/* ========================
   4. إدارة الثيم واللغة
   ======================== */
function updateIcons() {
    const isLight = document.body.classList.contains('light-mode');
    document.getElementById('theme-icon').innerHTML = isLight ? icons.moon : icons.sun;
    document.getElementById('language-icon').innerHTML = currentLanguage === 'en' ? icons.langEn : icons.langAr;
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    updateIcons();
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    const html = document.documentElement, body = document.body;
    if (currentLanguage === 'en') {
        html.setAttribute('lang', 'en'); html.setAttribute('dir', 'ltr');
        body.setAttribute('lang', 'en'); body.setAttribute('dir', 'ltr');
        document.title = 'Employee Benefits Portal';
    } else {
        html.setAttribute('lang', 'ar'); html.setAttribute('dir', 'rtl');
        body.setAttribute('lang', 'ar'); body.setAttribute('dir', 'rtl');
        document.title = 'بوابة مزايا الموظفين';
    }
    localStorage.setItem('language', currentLanguage);
    updateIcons(); updateLanguageContent();
    activeCategory = categoryTranslations[currentLanguage][0];
    renderCategories(); filterCompanies();
}

function toggleColorThemes() {
    const d = document.getElementById('color-themes-dropdown');
    d.classList.toggle('show');
    const close = (e) => { if (!e.target.closest('.color-theme-selector')) { d.classList.remove('show'); document.removeEventListener('click', close); } };
    document.addEventListener('click', close);
}

function setColorTheme(theme) {
    const b = document.body;
    b.className = b.className.replace(/theme-\w+/g, '');
    if (theme !== 'default') b.classList.add(`theme-${theme}`);
    if (localStorage.getItem('theme') === 'light') b.classList.add('light-mode');
    currentColorTheme = theme; localStorage.setItem('colorTheme', theme);
    document.querySelectorAll('.color-theme-option').forEach(o => o.classList.remove('active'));
    document.querySelector(`[data-theme="${theme}"]`)?.classList.add('active');
    document.getElementById('color-themes-dropdown').classList.remove('show');
}

function updateLanguageContent() {
    const t = translations[currentLanguage];
    document.getElementById('hero-title').textContent = t.hero_title;
    document.getElementById('hero-subtitle').textContent = t.hero_subtitle;
    document.getElementById('search-input').placeholder = t.search_placeholder;
    document.getElementById('footer-text').textContent = t.footer_text;
    document.getElementById('no-results-title').textContent = t.no_results_title;
    document.getElementById('no-results-text').textContent = t.no_results_text;
    const names = document.querySelectorAll('.theme-name');
    ['default', 'sunset', 'forest', 'ocean', 'crimson', 'lavender', 'mint', 'amber', 'pink', 'teal'].forEach((th, i) => { if(names[i]) names[i].textContent = t[`theme_${th}`]; });
}

function loadPreferences() {
    const theme = localStorage.getItem('theme'), lang = localStorage.getItem('language'), col = localStorage.getItem('colorTheme');
    if (theme === 'light') document.body.classList.add('light-mode');
    if (lang === 'en') {
        currentLanguage = 'en';
        document.documentElement.setAttribute('lang', 'en'); document.documentElement.setAttribute('dir', 'ltr');
        document.body.setAttribute('lang', 'en'); document.body.setAttribute('dir', 'ltr');
        updateLanguageContent();
    }
    if (col && col !== 'default') setColorTheme(col);
    updateIcons();
}

/* ========================
   5. العرض والمنطق
   ======================== */
function showModal(company) {
    const t = translations[currentLanguage];
    const barcodeId = 'barcode-' + Date.now();
    const name = currentLanguage === 'ar' ? company.name : company.nameEn;
    const cat = currentLanguage === 'ar' ? company.category : company.categoryEn;
    const date = currentLanguage === 'ar' ? company.validUntil : company.validUntilEn;
    const desc = currentLanguage === 'ar' ? company.description : company.descriptionEn;
    
    const html = `
        <div class="modal-overlay" onclick="closeModal(event)">
            <div class="modal-content scrollbar-custom" onclick="event.stopPropagation()">
                <div class="p-8 pb-0 text-center">
                    <div class="modal-logo">
                        <img src="${company.logo}" alt="${name}" loading="lazy" onerror="this.style.display='none';">
                    </div>
                    <h2 class="text-3xl font-bold text-styled mb-2">${name}</h2>
                    <span class="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-500 rounded-full text-sm font-bold">${cat}</span>
                </div>
                <div class="p-6 text-center">
                    <div class="modal-discount mb-4">${company.discount}</div>
                    <p class="text-secondary-styled text-sm">${t.discount_label}</p>
                </div>
                <div class="modal-divider"></div>
                <div class="p-8 pt-0 text-center">
                    <p class="text-secondary-styled mb-4 font-bold">${t.scan_barcode}</p>
                    <div class="barcode-container"><div id="${barcodeId}" class="barcode-wrapper"></div></div>
                    <div class="mt-6">
                        <p class="text-secondary-styled text-sm mb-3">${t.or_use_code}</p>
                        <div class="discount-code-box inline-flex items-center gap-3" onclick="copyToClipboard('${company.discountCode}')" title="${t.click_to_copy}">
                            <span class="text-2xl">✂️</span><span class="text-styled font-bold text-2xl tracking-wider">${company.discountCode}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-divider"></div>
                <div class="p-8 pt-0 space-y-6 text-right" dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}">
                    <div class="detail-row"><div class="modal-label"><span>📅</span><span>${t.valid_until}</span></div><div class="modal-value">${date}</div></div>
                    <div class="detail-row"><div class="modal-label"><span>📝</span><span>${t.offer_details}</span></div><div class="modal-value">${desc}</div></div>
                    <div class="detail-row"><div class="modal-label"><span>💡</span><span>${t.how_to_use}</span></div><div class="modal-value text-sm">${t.how_to_use_text}</div></div>
                </div>
                <div class="p-8 pt-0 flex gap-4">
                    <button onclick="closeModal()" class="close-btn flex-1 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform active:scale-95 transition-all">${t.close}</button>
                    <a href="${company.url}" target="_blank" class="visit-btn flex-1 px-6 py-4 rounded-xl font-bold text-lg text-white text-center hover:shadow-lg transform active:scale-95 transition-all">${t.visit_website}</a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('modal-container').innerHTML = html;
    setTimeout(() => { generateBarcode(company.discountCode, barcodeId); }, 100);
}

function closeModal(event) {
    if (!event || event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-btn')) {
        document.getElementById('modal-container').innerHTML = '';
    }
}

function renderCategories() {
    const c = document.getElementById('categories-container');
    c.innerHTML = categoryTranslations[currentLanguage].map(cat => `
        <button class="category-badge px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === activeCategory ? 'active' : ''}" onclick="filterByCategory('${cat}')">${cat}</button>
    `).join('');
}

function renderCards(list) {
    const g = document.getElementById('cards-grid'), nr = document.getElementById('no-results');
    if (list.length === 0) { g.innerHTML = ''; nr.classList.remove('hidden'); return; }
    nr.classList.add('hidden');
    g.innerHTML = list.map((c, i) => {
        const name = currentLanguage === 'ar' ? c.name : c.nameEn;
        const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
        return `
            <div class="glass-card p-8 cursor-pointer card-enter" style="animation-delay: ${i * 0.1}s" onclick='showModal(${JSON.stringify(c).replace(/'/g, "&apos;")})'>
                <div class="text-center">
                    <div class="logo-container">
                        <img src="${c.logo}" alt="${name}" loading="lazy" onerror="this.style.display='none';">
                    </div>
                    <div class="mb-4"><span class="discount-badge">${c.discount}</span></div>
                    <h3 class="text-2xl font-bold text-styled mb-3">${name}</h3>
                    <span class="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-500 rounded-full text-sm font-bold">${cat}</span>
                </div>
            </div>
        `;
    }).join('');
}

function filterCompanies() {
    let f = companies;
    if (activeCategory !== categoryTranslations[currentLanguage][0]) {
        f = f.filter(c => (currentLanguage === 'ar' ? c.category : c.categoryEn) === activeCategory);
    }
    if (searchQuery) {
        f = f.filter(c => {
            const n = currentLanguage === 'ar' ? c.name : c.nameEn;
            const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
            return n.toLowerCase().includes(searchQuery.toLowerCase()) || cat.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
    renderCards(f);
}

function filterByCategory(cat) { activeCategory = cat; renderCategories(); filterCompanies(); }

function showSuggestions(q) {
    const s = document.getElementById('suggestions');
    if (!q) { s.classList.add('hidden'); return; }
    const m = companies.filter(c => {
        const n = currentLanguage === 'ar' ? c.name : c.nameEn;
        const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
        return n.toLowerCase().includes(q.toLowerCase()) || cat.toLowerCase().includes(q.toLowerCase());
    });
    if (m.length === 0) { s.classList.add('hidden'); return; }
    s.innerHTML = m.map(c => {
        const n = currentLanguage === 'ar' ? c.name : c.nameEn;
        const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
        return `
            <div class="suggestion-item p-4 cursor-pointer flex items-center gap-4" onclick="selectSuggestion('${n}')">
                <div class="suggestion-logo">
                    <img src="${c.logo}" alt="${n}" loading="lazy" onerror="this.style.display='none';">
                </div>
                <div class="flex-1"><div class="text-styled font-bold">${n}</div><div class="text-sm text-secondary-styled">${cat}</div></div>
                <div class="text-blue-400 font-bold">${c.discount}</div>
            </div>`;
    }).join('');
    s.classList.remove('hidden');
}

function selectSuggestion(n) {
    const i = document.getElementById('search-input');
    i.value = n; searchQuery = n; filterCompanies();
    document.getElementById('suggestions').classList.add('hidden');
}

/* ========================
   6. تهيئة النظام
   ======================== */
document.getElementById('search-input').addEventListener('input', (e) => { searchQuery = e.target.value; showSuggestions(searchQuery); filterCompanies(); });
document.addEventListener('click', (e) => { if (!e.target.closest('.search-container')) document.getElementById('suggestions').classList.add('hidden'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); document.getElementById('color-themes-dropdown').classList.remove('show'); } });

// SDK Handlers (if present)
async function onConfigChange(config) {
    if (currentLanguage === 'ar') {
        if(config.hero_title) document.getElementById('hero-title').textContent = config.hero_title;
        if(config.hero_subtitle) document.getElementById('hero-subtitle').textContent = config.hero_subtitle;
        if(config.search_placeholder) document.getElementById('search-input').placeholder = config.search_placeholder;
        if(config.footer_text) document.getElementById('footer-text').textContent = config.footer_text;
    }
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
            recolorables: [], borderables: [], fontEditable: undefined, fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
            ["hero_title", config.hero_title || defaultConfig.hero_title],
            ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
            ["search_placeholder", config.search_placeholder || defaultConfig.search_placeholder],
            ["footer_text", config.footer_text || defaultConfig.footer_text]
        ])
    });
}

// Start
loadPreferences(); activeCategory = categoryTranslations[currentLanguage][0]; renderCategories(); renderCards(companies);
