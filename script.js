const translations = {
    ar: {
        hero_title: "خصومات استثنائية VIP",
        hero_subtitle: "اكتشف عروضاً فاخرة وخصومات حصرية من أرقى العلامات التجارية العالمية",
        vip_badge_text: "عضوية VIP الحصرية",
        search_placeholder: "ابحث عن علامة تجارية فاخرة...",
        footer_text: "© 2026 برنامج VIP الحصري. جميع الحقوق محفوظة.",
        all_categories: "الكل",
        category_tech: "تكنولوجيا",
        category_luxury: "رفاهية",
        category_fashion: "أزياء",
        category_automotive: "سيارات",
        category_travel: "سفر",
        category_dining: "مطاعم راقية",
        no_results_title: "لا توجد نتائج",
        no_results_text: "جرب البحث بكلمات أخرى أو اختر تصنيف مختلف",
        valid_until: "صالح حتى",
        offer_details: "تفاصيل العرض",
        how_to_use: "كيفية الاستفادة",
        how_to_use_text: "امسح QR Code عند نقطة البيع أو أدخل كود الخصم الحصري عند الشراء",
        close: "إغلاق",
        visit_website: "زيارة الموقع الرسمي 🌟",
        discount_label: "الخصم الحصري",
        scan_barcode: "امسح الباركود للحصول على الخصم الفوري",
        or_use_code: "أو استخدم الكود الحصري",
        click_to_copy: "اضغط للنسخ",
        copied_success: "✨ تم نسخ الكود بنجاح!"
    },
    en: {
        hero_title: "Exceptional Discounts for the Elite",
        hero_subtitle: "Discover luxury offers and exclusive discounts from the world's finest brands",
        vip_badge_text: "Exclusive VIP Membership",
        search_placeholder: "Search for luxury brands...",
        footer_text: "© 2026 Exclusive VIP Program. All rights reserved.",
        all_categories: "All",
        category_tech: "Technology",
        category_luxury: "Luxury",
        category_fashion: "Fashion",
        category_automotive: "Automotive",
        category_travel: "Travel",
        category_dining: "Fine Dining",
        no_results_title: "No Results Found",
        no_results_text: "Try searching with different keywords or select a different category",
        valid_until: "Valid Until",
        offer_details: "Offer Details",
        how_to_use: "How to Use",
        how_to_use_text: "Scan the QR Code at the point of sale or enter the exclusive code when purchasing",
        close: "Close",
        visit_website: "Visit Official Website 🌟",
        discount_label: "Exclusive Discount",
        scan_barcode: "Scan the barcode for instant discount",
        or_use_code: "Or use the exclusive code",
        click_to_copy: "Click to copy",
        copied_success: "✨ Code copied successfully!"
    }
};

const defaultConfig = {
    hero_title: "خصومات استثنائية VIP",
    hero_subtitle: "اكتشف عروضاً فاخرة وخصومات حصرية من أرقى العلامات التجارية العالمية",
    vip_badge_text: "عضوية VIP الحصرية",
    search_placeholder: "ابحث عن علامة تجارية فاخرة...",
    footer_text: "© 2026 برنامج VIP الحصري. جميع الحقوق محفوظة."
};

const companies = [
    { 
        name: "بابا  جونز", 
        nameEn: "papa jons",
        logo: "./images/papa jons.svg", 
        discount: "20%", 
        category: "مطاعم راقية",
        categoryEn: "Fine Dining",
        url: "https://www.papajohnsegypt.com/?lang=ar", 
        validUntil: "31 ديسمبر 2025",
        validUntilEn: "December 31, 2026",
        description: "خصم على جميع انواع البيتزا والمشروبات والحلويات",
        descriptionEn: "Exclusive discount on All kinds of pizza, drinks, and desserts - Full VIP service",
        discountCode: "PAPAJONS-VIP20" 
    },
    { 
        name: "وافليشوس", 
        nameEn: "wafflicious",
        logo: "./images/wafflicious.svg", 
        discount: "20%", 
        category: "مطاعم راقية",
        categoryEn: "Fine Dining",
        url: "https://wafflicious.com/", 
        validUntil: "30 يونيو 2025",
        validUntilEn: "December 31, 2026",
        description: "خصم على جميع المأكولات حلو وحادق",
        descriptionEn: "Discount on All foods are sweet and savory.",
        discountCode: "wafflicious-VIP15" 
    },
    { 
        name: "المحلة للغزل والنسيج", 
        nameEn: "Misr Mehalla",
        logo: "./images/Misr Mehalla.svg", 
        discount: "30%", 
        category: "ملابس",
        categoryEn: "clothes",
        url: "", 
        validUntil: "30 يونيو 2025",
        validUntilEn: "December 31, 2026",
        description: "خصم على المفروشات والمنسوجات",
        descriptionEn: "Exclusive discount on all textiles or furnishings.",
        discountCode: "MEHALLA30" 
    },
    
];

let currentLanguage = 'ar';
let activeCategory = "الكل";
let searchQuery = "";

const categoryTranslations = {
    ar: ["الكل",  "مطاعم راقية","ملابس"],
    en: ["All", "Fine Dining",'clothes']
};

// Barcode generation
function generateBarcode(text, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 140;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const patterns = [
        [2,1,2,3,1], [3,1,1,2,2], [1,2,2,2,2], [4,1,1,1,2],
        [1,3,3,1,1], [3,3,1,1,1], [1,1,4,2,1], [2,2,2,2,1],
        [2,1,1,3,2], [1,2,3,2,1], [3,1,2,1,2], [1,3,2,1,2]
    ];
    
    const barWidth = 2.2;
    let x = 12;
    
    ctx.fillStyle = 'black';
    
    [1,1,1].forEach((w, i) => {
        if (i % 2 === 0) {
            ctx.fillRect(x, 12, barWidth * w, 80);
        }
        x += barWidth * w;
    });
    
    x += 3;
    
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const pattern = patterns[charCode % patterns.length];
        
        let isBlack = true;
        pattern.forEach(w => {
            if (isBlack) {
                ctx.fillRect(x, 12, barWidth * w, 80);
            }
            x += barWidth * w;
            isBlack = !isBlack;
        });
    }
    
    x += 3;
    
    [1,1,1].forEach((w, i) => {
        if (i % 2 === 0) {
            ctx.fillRect(x, 12, barWidth * w, 80);
        }
        x += barWidth * w;
    });
    
    let barcodeNumber = '';
    for (let i = 0; i < text.length; i++) {
        barcodeNumber += text.charCodeAt(i) % 10;
    }
    barcodeNumber = (barcodeNumber + '000000000000').substring(0, 12);
    
    ctx.fillStyle = 'black';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    const numberSpacing = (canvas.width - 24) / 12;
    for (let i = 0; i < 12; i++) {
        ctx.fillText(barcodeNumber[i], 12 + (i * numberSpacing), 105);
    }
    
    ctx.font = 'bold 10px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(text, canvas.width / 2, 125);
    
    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    img.alt = 'Barcode';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    
    container.appendChild(img);
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showCopyNotification();
    } catch (err) {
        console.error('Failed to copy:', err);
    }
    
    document.body.removeChild(textarea);
}

function showCopyNotification() {
    const notification = document.getElementById('copy-notification');
    const t = translations[currentLanguage];
    notification.innerHTML = `<div class="copy-notification">${t.copied_success}</div>`;
    
    setTimeout(() => {
        notification.innerHTML = '';
    }, 2500);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    const html = document.documentElement;
    const body = document.body;
    const icon = document.getElementById('language-icon');
    
    // تحديث الاتجاه واللغة فقط
    if (currentLanguage === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.setAttribute('lang', 'en');
        body.setAttribute('dir', 'ltr');
        document.title = 'VIP Exclusive Discounts';
        
        icon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">EN</text>
            </svg>
        `;
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.setAttribute('lang', 'ar');
        body.setAttribute('dir', 'rtl');
        document.title = 'خصومات VIP الحصرية';
        
        icon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">ع</text>
            </svg>
        `;
    }
    
    // حفظ التفضيلات وتحديث المحتوى
    localStorage.setItem('language', currentLanguage);
    updateLanguageContent();
    activeCategory = categoryTranslations[currentLanguage][0];
    renderCategories();
    filterCompanies();
}

function updateLanguageContent() {
    const t = translations[currentLanguage];
    
    document.getElementById('hero-title').textContent = t.hero_title;
    document.getElementById('hero-subtitle').textContent = t.hero_subtitle;
    document.getElementById('vip-badge-text').textContent = t.vip_badge_text;
    document.getElementById('search-input').placeholder = t.search_placeholder;
    document.getElementById('footer-text').textContent = t.footer_text;
    document.getElementById('no-results-title').textContent = t.no_results_title;
    document.getElementById('no-results-text').textContent = t.no_results_text;
}

function loadPreferences() {
    const savedLanguage = localStorage.getItem('language');
    const html = document.documentElement;
    const body = document.body;
    const langIcon = document.getElementById('language-icon');
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');
    
    if (savedLanguage === 'en') {
        currentLanguage = 'en';
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.setAttribute('lang', 'en');
        body.setAttribute('dir', 'ltr');
        langIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">EN</text>
            </svg>
        `;
        document.title = 'VIP Exclusive Discounts';
        searchInput.style.paddingLeft = '60px';
        searchInput.style.paddingRight = '28px';
        searchIcon.style.left = '28px';
        searchIcon.style.right = 'auto';
        updateLanguageContent();
    } else {
        langIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">ع</text>
            </svg>
        `;
        searchInput.style.paddingRight = '60px';
        searchInput.style.paddingLeft = '28px';
        searchIcon.style.right = '28px';
        searchIcon.style.left = 'auto';
    }
}

function showModal(company) {
    const t = translations[currentLanguage];
    const barcodeId = 'barcode-' + Date.now();
    
    const companyName = currentLanguage === 'ar' ? company.name : company.nameEn;
    const companyCategory = currentLanguage === 'ar' ? company.category : company.categoryEn;
    const validUntil = currentLanguage === 'ar' ? company.validUntil : company.validUntilEn;
    const description = currentLanguage === 'ar' ? company.description : company.descriptionEn;
    
    const modalHtml = `
        <div class="modal-overlay" onclick="closeModal(event)">
            <div class="modal-content scrollbar-custom" onclick="event.stopPropagation()">
                <div class="p-10 text-center border-b border-styled">
                    <div class="modal-logo">
                        <img src="${company.logo}" alt="${companyName}" loading="lazy" onerror="this.style.display='none';">
                    </div>
                    <h2 class="text-4xl font-bold text-styled mb-3">${companyName}</h2>
                    <span class="inline-block px-5 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-full text-sm font-bold">
                        ${companyCategory}
                    </span>
                </div>

                <div class="p-10 text-center bg-gradient-to-b from-transparent to-yellow-600 to-opacity-5">
                    <p class="text-secondary-styled mb-4 text-sm font-bold">${t.discount_label}</p>
                    <div class="modal-discount">
                        ${company.discount}
                    </div>
                </div>

                <div class="p-10 text-center">
                    <p class="text-secondary-styled mb-5 text-sm font-bold">${t.scan_barcode}</p>
                    <div class="barcode-container mx-auto">
                        <div id="${barcodeId}" class="barcode-wrapper"></div>
                    </div>
                </div>
                
                <div class="p-10 pt-0 text-center">
                    <p class="text-secondary-styled text-xs mb-3 font-bold">${t.or_use_code}</p>
                    <div class="discount-code-box inline-block" onclick="copyToClipboard('${company.discountCode}')" title="${t.click_to_copy}">
                        <span class="text-styled font-bold text-xl">${company.discountCode}</span>
                    </div>
                </div>

                <div class="p-10 space-y-5">
                    <div class="detail-row">
                        <div class="flex items-center gap-4 mb-3">
                            <span class="text-3xl">📅</span>
                            <span class="text-secondary-styled text-sm font-bold">${t.valid_until}</span>
                        </div>
                        <p class="text-styled font-bold text-lg ${currentLanguage === 'ar' ? 'mr-14' : 'ml-14'}">${validUntil}</p>
                    </div>

                    <div class="detail-row">
                        <div class="flex items-center gap-4 mb-3">
                            <span class="text-3xl">💎</span>
                            <span class="text-secondary-styled text-sm font-bold">${t.offer_details}</span>
                        </div>
                        <p class="text-styled leading-relaxed text-base ${currentLanguage === 'ar' ? 'mr-14' : 'ml-14'}">${description}</p>
                    </div>

                    <div class="detail-row">
                        <div class="flex items-center gap-4 mb-3">
                            <span class="text-3xl">👑</span>
                            <span class="text-secondary-styled text-sm font-bold">${t.how_to_use}</span>
                        </div>
                        <p class="text-styled leading-relaxed text-base ${currentLanguage === 'ar' ? 'mr-14' : 'ml-14'}">${t.how_to_use_text}</p>
                    </div>
                </div>

                <div class="p-10 pt-0 flex gap-5">
                    <button onclick="closeModal()" class="close-btn flex-1 px-8 py-5 rounded-2xl font-bold text-lg">
                        ${t.close}
                    </button>
                    <a href="${company.url}" target="_blank" rel="noopener noreferrer" class="visit-btn flex-1 px-8 py-5 rounded-2xl font-bold text-lg text-center">
                        ${t.visit_website}
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modal-container').innerHTML = modalHtml;
    
    setTimeout(() => {
        generateBarcode(company.discountCode, barcodeId);
    }, 100);
}

function closeModal(event) {
    if (!event || event.target.classList.contains('modal-overlay')) {
        document.getElementById('modal-container').innerHTML = '';
    }
}

function renderCategories() {
    const container = document.getElementById('categories-container');
    const categories = categoryTranslations[currentLanguage];
    
    container.innerHTML = categories.map(cat => `
        <button 
            class="category-badge px-8 py-3 rounded-full text-sm font-bold transition-all ${cat === activeCategory ? 'active' : ''}"
            onclick="filterByCategory('${cat}')"
        >
            ${cat}
        </button>
    `).join('');
}

function renderCards(filteredCompanies) {
    const grid = document.getElementById('cards-grid');
    const noResults = document.getElementById('no-results');
    
    if (filteredCompanies.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    grid.innerHTML = filteredCompanies.map((company, index) => {
        const companyName = currentLanguage === 'ar' ? company.name : company.nameEn;
        const companyCategory = currentLanguage === 'ar' ? company.category : company.categoryEn;
        
        return `
            <div class="glass-card p-10 cursor-pointer card-enter" style="animation-delay: ${index * 0.1}s" onclick='showModal(${JSON.stringify(company).replace(/'/g, "&apos;")})'>
                <div class="text-center">
                    <div class="logo-container">
                        <img src="${company.logo}" alt="${companyName}" loading="lazy" onerror="this.style.display='none'; this.alt='Logo';">
                    </div>
                    <div class="mb-5">
                        <span class="discount-badge">
                            ${company.discount}
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-styled mb-4">${companyName}</h3>
                    <span class="inline-block px-5 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-full text-sm font-bold">
                        ${companyCategory}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

function filterCompanies() {
    const categories = categoryTranslations[currentLanguage];
    let filtered = companies;
    
    if (activeCategory !== categories[0]) {
        filtered = filtered.filter(c => {
            const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
            return cat === activeCategory;
        });
    }
    
    if (searchQuery) {
        filtered = filtered.filter(c => {
            const name = currentLanguage === 'ar' ? c.name : c.nameEn;
            const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
            return name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                   cat.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
    
    renderCards(filtered);
}

function filterByCategory(category) {
    activeCategory = category;
    renderCategories();
    filterCompanies();
}

function showSuggestions(query) {
    const suggestionsDiv = document.getElementById('suggestions');
    
    if (!query) {
        suggestionsDiv.classList.add('hidden');
        return;
    }
    
    const matches = companies.filter(c => {
        const name = currentLanguage === 'ar' ? c.name : c.nameEn;
        const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
        return name.toLowerCase().includes(query.toLowerCase()) ||
               cat.toLowerCase().includes(query.toLowerCase());
    });
    
    if (matches.length === 0) {
        suggestionsDiv.classList.add('hidden');
        return;
    }
    
    suggestionsDiv.innerHTML = matches.map(company => {
        const name = currentLanguage === 'ar' ? company.name : company.nameEn;
        const cat = currentLanguage === 'ar' ? company.category : company.categoryEn;
        
        return `
            <div class="suggestion-item p-5 cursor-pointer flex items-center gap-5" onclick="selectSuggestion('${name}')">
                <div class="suggestion-logo">
                    <img src="${company.logo}" alt="${name}" loading="lazy" onerror="this.style.display='none';">
                </div>
                <div class="flex-1">
                    <div class="text-styled font-bold text-base">${name}</div>
                    <div class="text-sm text-secondary-styled">${cat}</div>
                </div>
                <div class="text-yellow-500 font-bold text-lg">${company.discount}</div>
            </div>
        `;
    }).join('');
    
    suggestionsDiv.classList.remove('hidden');
}

function selectSuggestion(name) {
    const input = document.getElementById('search-input');
    input.value = name;
    searchQuery = name;
    filterCompanies();
    document.getElementById('suggestions').classList.add('hidden');
}

document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    showSuggestions(searchQuery);
    filterCompanies();
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        document.getElementById('suggestions').classList.add('hidden');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

async function onConfigChange(config) {
    if (currentLanguage === 'ar') {
        document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
        document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
        document.getElementById('vip-badge-text').textContent = config.vip_badge_text || defaultConfig.vip_badge_text;
        document.getElementById('search-input').placeholder = config.search_placeholder || defaultConfig.search_placeholder;
        document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;
    }
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
            recolorables: [],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
            ["hero_title", config.hero_title || defaultConfig.hero_title],
            ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
            ["vip_badge_text", config.vip_badge_text || defaultConfig.vip_badge_text],
            ["search_placeholder", config.search_placeholder || defaultConfig.search_placeholder],
            ["footer_text", config.footer_text || defaultConfig.footer_text]
        ])
    });
}

loadPreferences();
activeCategory = categoryTranslations[currentLanguage][0];
renderCategories();
renderCards(companies);
