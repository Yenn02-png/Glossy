/**
 * GLOSSY STRAND HAIR CARE PRODUCTS TRADING
 * Sole & Exclusive Philippine Country Distributor of Sarah K Professional Brazil
 * Master Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSpotlight();
  initMegaMenu();
  initProtocolTabs();
  initBoutiqueFilters();
  initFaqAccordion();
  initQuickViewModal();
  initPackageProtocolModal();
  initConciergeForm();
  initMobileNav();
});

/* =========================================================================
   1. EDITORIAL HERO SPOTLIGHT (REPLACES WEIRD HERO SLIDER)
   ========================================================================= */
function initHeroSpotlight() {
  const tabs = document.querySelectorAll('.gallery-tab-card');
  const frames = document.querySelectorAll('.gallery-frame');

  if (!tabs.length || !frames.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetFrameId = tab.getAttribute('data-frame');

      tabs.forEach((t) => t.classList.remove('active'));
      frames.forEach((f) => f.classList.remove('active'));

      tab.classList.add('active');
      const targetFrame = document.getElementById(targetFrameId);
      if (targetFrame) {
        targetFrame.classList.add('active');
      }
    });
  });
}

/* =========================================================================
   2. MEGA MENU DRAWER
   ========================================================================= */
function initMegaMenu() {
  const trigger = document.querySelector('[data-toggle="mega-menu"]');
  const drawer = document.getElementById('megaMenuDrawer');

  if (!trigger || !drawer) return;

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    drawer.classList.toggle('is-active');
  });

  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !drawer.contains(e.target)) {
      drawer.classList.remove('is-active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') drawer.classList.remove('is-active');
  });
}

/* =========================================================================
   3. SIGNATURE SALON PROTOCOLS TABS
   ========================================================================= */
function initProtocolTabs() {
  const navBtns = document.querySelectorAll('.protocol-nav-btn');
  const panels = document.querySelectorAll('.protocol-panel');

  if (!navBtns.length || !panels.length) return;

  navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-protocol');

      navBtns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* =========================================================================
   4. PRODUCT BOUTIQUE FILTERING
   ========================================================================= */
function initBoutiqueFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  const cards = document.querySelectorAll('.luxury-product-card');

  if (!filterBtns.length) return;

  function applyFilter(filter) {
    filterBtns.forEach((btn) => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    cards.forEach((card) => {
      const category = card.getAttribute('data-category');
      const tags = card.getAttribute('data-tags') || '';

      if (filter === 'all' || category === filter || tags.includes(filter)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      applyFilter(filter);
    });
  });

  // URL query parameter support e.g. products.html?filter=carnival
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    applyFilter(filterParam);
  }
}

/* =========================================================================
   5. INTERACTIVE FAQ ACCORDION
   ========================================================================= */
function initFaqAccordion() {
  const cards = document.querySelectorAll('.faq-card');

  cards.forEach((card) => {
    const btn = card.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      cards.forEach((c) => c.classList.remove('active'));
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
}

/* =========================================================================
   6. PRODUCT MASTER DATA & QUICK VIEW MODAL
   ========================================================================= */
const PRODUCT_DATA = {
  'carnival-shampoo': {
    name: 'Carnival Clarifying Shampoo (Água Micelar)',
    category: 'Carnival Line • Step 1 Cuticle Preparation',
    price: '₱3,600',
    image: 'assets/img/carnival-shampoo.jpg',
    fda: 'FDA Philippines Registered • NN-1000015804281',
    origin: 'Direct Import from Brazil (Salon Grade)',
    tagline: 'Deep cuticle preparation & impurity removal powered by Brazilian micellar water technology.',
    description: 'Specialized salon clarifying shampoo formulated with Água Micelar (Micellar Water) technology. Deeply purifies hair strands, eliminates silicone and styling buildup, and dilates cuticles without drying out the fiber, preparing the hair structure for maximum absorption of Carnival or Rio smoothing proteins.',
    actives: ['Água Micelar (Micellar Water) Technology', 'Gentle Cuticle-Dilating Surfactants', 'Amazon Botanical Conditioning Extracts', 'pH-Balanced Deep Cleansing Agents'],
    sizes: '1000ml (33.81 fl.oz) Backbar Salon Size',
    protocol: [
      '1. Wet hair thoroughly with warm water at the salon basin.',
      '2. Apply Carnival Clarifying Shampoo to the scalp and hair shaft, gently massaging into a rich lather.',
      '3. Rinse thoroughly. Apply a second time and let rest for 3 to 5 minutes to ensure uniform cuticle dilation.',
      '4. Rinse 100% with water. Towel-dry hair to 80%–90% before applying Carnival or Rio Brazilian Protein.'
    ]
  },
  'carnival-protein': {
    name: 'Carnival Brazilian Protein',
    category: 'Carnival Line • Step 2 Thermal Nanoplastia',
    price: '₱9,000',
    image: 'assets/img/carnival-protein.jpg',
    fda: 'FDA Philippines Registered • NN-1000015804236',
    origin: 'Direct Import from Brazil (Salon Grade)',
    tagline: '0% Formaldehyde organic thermal nanoplastia alignment with mirror-like glass reflection.',
    description: 'The flagship Sarah K Brazilian organic nanoplastia treatment. Powered by pure Amazonian Macadamia oil, essential amino acids, lactic acid, and hydrolyzed collagen. Delivers dramatic volume reduction, total frizz elimination, and a glass-like mirror shine with 0% formaldehyde and zero burning sensation or harsh fumes.',
    actives: ['Amazonian Macadamia Nut Oil', '18 Essential Amino Acids Pool', 'Lactic Acid', 'Hydrolyzed Marine Collagen', 'Plant Acid Volume Reducer Complex'],
    sizes: '1000ml (33.81 fl.oz) Backbar Salon Professional Bottle',
    protocol: [
      '1. Wash hair twice with Carnival Clarifying Shampoo. Dry hair 80% to 90% with hairdryer.',
      '2. Section hair into 4 quadrants. Apply Carnival Brazilian Protein lock by lock (0.5cm from scalp) using a tint brush and fine-tooth comb.',
      '3. Pause time: 40–60 minutes depending on hair texture and curl resistance.',
      '4. Rinse 50% to 80% with cold water to remove excess surface product.',
      '5. Blow-dry 100% straight using a paddle brush.',
      '6. Flat iron thin, transparent strands 10–15 times at 200°C–230°C (390°F–450°F) to seal the alignment.'
    ]
  },
  'rio-protein': {
    name: 'Rio Brazilian Protein (Tanino + Aminoacids)',
    category: 'Rio Line • Blonde Smoothing & Taninoplasty',
    price: '₱9,000',
    image: 'assets/img/rio-protein.jpg',
    fda: 'FDA Philippines Registered • NN-1000015804265',
    origin: 'Direct Import from Brazil (Salon Grade)',
    tagline: 'Formaldehyde-free progressive taninoplasty smoothing engineered for blondes & highlighted hair.',
    description: 'A revolutionary Brazilian tanino protein smoothing system formulated with Tannin acid, amino acids, and violet toning nano-pigments. Specially developed for blonde, bleached, and sensitized hair to eliminate frizz and reduce volume while neutralizing warm orange and brassy yellow tones without chemical distortion.',
    actives: ['Tannin Acid Complex (Tanino)', 'Bio-Compatible Aminoacids', 'Blonde Volume Reducer Complex', 'Brazilian Nut Oil (Castanha-do-Pará)', 'Violet & Blue Anti-Yellow Nano-Pigments'],
    sizes: '1000ml (33.81 fl.oz) Backbar Salon Professional Bottle',
    protocol: [
      '1. Wash hair thoroughly with clarifying micellar shampoo. Towel-dry hair 80% to 90%. Section into 4 quadrants.',
      '2. Apply Sarah K Rio Brazilian Protein strand by strand with a tint brush, combing through for uniform saturation.',
      '3. Pause time: 40–60 minutes (closely monitor toning intensity on sensitized light blondes).',
      '4. Rinse 50% to 80% with cold water to remove excess surface emulsion.',
      '5. Blow-dry 100% straight with tension.',
      '6. Flat iron in fine slices 10–15 passes at 190°C–210°C (for sensitized blondes) or up to 230°C (for resistant hair).'
    ]
  },
  'rio-blond': {
    name: 'Rio Blond Neutralizing (Whey Protein)',
    category: 'Rio Line • Acid & pH Balancer / Anti-Yellow',
    price: '₱3,600',
    image: 'assets/img/rio-blond.jpg',
    fda: 'FDA Philippines Registered • NN-1000015804252',
    origin: 'Direct Import from Brazil (Salon Grade)',
    tagline: 'Acid and pH balancer with Whey Protein to neutralize brassy tones & seal hair cuticles.',
    description: 'Specialized post-chemical acidifying stabilizer enriched with Whey Protein (pH 3.5/4.0). Closes cuticles, halts oxidative degradation, restores the fiber natural acidic mantle, and neutralizes unwanted warm brassy reflections, leaving blondes luminous, soft, and healthy.',
    actives: ['Hydrolyzed Whey Protein', 'Acid & pH Balancer Complex (pH 3.5/4.0)', 'Violet Toning Pigments', 'Essential Lipid Replenishers'],
    sizes: '500ml (16.91 fl.oz) Professional Bottle | pH 3.5 / 4.0',
    protocol: [
      '1. After bleaching, coloring, or Rio Brazilian Protein smoothing, rinse hair thoroughly.',
      '2. Apply Rio Blond Neutralizing generously from roots to ends on damp hair.',
      '3. Massage strands gently and comb through for uniform distribution.',
      '4. Leave on for 5 to 10 minutes to rebalance fiber pH and neutralize yellow tones.',
      '5. Rinse thoroughly with water and finish with blow-dry or desired styling.'
    ]
  },
  'lavie-ampoule': {
    name: 'La Vie En Rose Restorative Ampoule',
    category: 'La Vie En Rose Line • Instant Capillary Shock',
    price: '₱1,500',
    image: 'assets/img/lavie-ampoule.jpg',
    fda: 'FDA Philippines Registered • NN-1000015804223',
    origin: 'Direct Import from Brazil (Salon Grade)',
    tagline: 'Concentrated shock ampoule with Myrrha Oil & Hyaluronic Acid for instant capillary recovery.',
    description: 'Ultra-concentrated restorative treatment ampoule formulated with noble Myrrha Oil, amino acids, and Hyaluronic Acid at an acidic pH 3.0–3.5. Instantly restores dry, porous, and chemically sensitized strands, sealing cuticles and boosting velvety softness and intense brilliance in minutes.',
    actives: ['Hyaluronic Acid', 'Precious Myrrha Oil', 'Multi-Amino Acids Pool', 'Rosa Centifolia Essence', 'Acidic Fiber Sealer (pH 3.0/3.5)'],
    sizes: '15ml (0.51 fl.oz) Single-Dose Vial | pH 3.0 / 3.5',
    protocol: [
      '1. Cleanse hair with Sarah K gentle shampoo and blot excess water with a towel.',
      '2. Open the 15ml La Vie En Rose vial. Emulsify in damp hands or bowl until a rich, luxurious cream forms.',
      '3. Distribute evenly strand by strand, massaging thoroughly into sensitized zones.',
      '4. Allow to act for 5 to 10 minutes for deep cortex infusion.',
      '5. Rinse thoroughly with water and proceed to blow-dry or style.'
    ]
  },
  'lavie-serum': {
    name: 'La Vie En Rose Restorative Serum',
    category: 'La Vie En Rose Line • Daily Finishing & Protection',
    price: '₱2,100',
    image: 'assets/img/lavie-serum.jpg',
    fda: 'FDA Philippines Registered • NN-1000015804249',
    origin: 'Direct Import from Brazil (Salon Grade)',
    tagline: 'Restoration of dry hair and double ends with Hyaluronic Acid and delicate rose aromatics.',
    description: 'A luxurious daily leave-in serum formulated with active Hyaluronic Acid to intensely hydrate, seal double ends, and tame stubborn humidity frizz. Leaves no greasy buildup, offers thermal defense, and wraps hair in Sarah K signature French rose bouquet.',
    actives: ['Hyaluronic Acid', 'Rosehip Botanical Oil', 'Anti-Frizz Polymers', 'Thermal & UV Protectant Shield'],
    sizes: '60ml (2.02 fl.oz) Precision Glass Pump Bottle',
    protocol: [
      '1. Dispense 2 to 4 drops into palms.',
      '2. Spread evenly across damp or dry hair, focusing on mid-lengths and damaged split ends.',
      '3. Use prior to heat styling as a thermal shield, or after styling as an illuminating gloss finisher.',
      '4. Leave-in treatment — do not rinse.'
    ]
  },
  'sos-recovery': {
    name: 'SOS Recovery Treatment (Plantcol)',
    category: 'SOS Recovery Line • Molecular Hair Reconstruction',
    price: '₱6,000',
    image: 'assets/img/sos-recovery.jpg',
    fda: 'FDA Philippines Registered • NN-1000015804294',
    origin: 'Direct Import from Brazil (Salon Grade)',
    tagline: 'Emergency molecular cure with Plantcol to stop breakage and restore rubbery, damaged hair.',
    description: 'The essential emergency lifesaver for professional salons. Powered by Plantcol technology and an acidic pH 2.5–3.5, it immediately halts breakage, restores lost elasticity to gummy or rubbery bleached hair, reconstructs broken internal keratin bonds, and seals porous fibers in just 10 minutes.',
    actives: ['Plantcol Biopolymer Complex', 'Hydrolyzed Marine Collagen', 'Elastic Peptides', '18 Amino Acid Complex', 'Panthenol Provitamin B5 (pH 2.5/3.5)'],
    sizes: '1000ml (33.81 fl.oz) Professional Salon Size | pH 2.5 / 3.5',
    protocol: [
      '1. Cleanse hair gently with mild salon shampoo. Blot excess moisture with towel.',
      '2. Apply SOS Recovery Treatment directly onto sensitized, rubbery, or breaking hair strands.',
      '3. Comb through gently to ensure complete fiber saturation.',
      '4. Leave to act for 5 to 10 minutes (immediate structural fiber rebound).',
      '5. Rinse completely with cool water. Follow with finishing conditioner or La Vie En Rose Serum if desired.'
    ]
  }
};

// Aliases
PRODUCT_DATA['carnival'] = PRODUCT_DATA['carnival-protein'];
PRODUCT_DATA['rio'] = PRODUCT_DATA['rio-protein'];
PRODUCT_DATA['la-vie-en-rose'] = PRODUCT_DATA['lavie-ampoule'];
PRODUCT_DATA['sos'] = PRODUCT_DATA['sos-recovery'];

function initQuickViewModal() {
  const modalOverlay = document.getElementById('productModal');
  const modalBody = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const triggerBtns = document.querySelectorAll('.btn-quick-view, .btn-card-protocol, .btn-card-protocol-prominent');

  if (!modalOverlay || !modalBody) return;

  triggerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productKey = btn.getAttribute('data-product');
      const data = PRODUCT_DATA[productKey];

      if (!data) return;

      modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 36px; align-items: start;">
          <div style="background: var(--color-canvas); border-radius: var(--radius-md); padding: 28px; text-align: center; border: 1px solid var(--color-border-light);">
            <img src="${data.image}" alt="${data.name}" style="max-height: 280px; margin: 0 auto 16px auto; object-fit: contain;">
            <div style="background: rgba(16, 185, 129, 0.1); color: #059669; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-pill); display: inline-block;">
              ${data.fda}
            </div>
            <div style="margin-top: 10px; font-size: 11.5px; color: var(--color-slate-muted); font-weight: 600;">
              🇧🇷 ${data.origin} • ${data.sizes}
            </div>
          </div>

          <div>
            <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gold-dark);">${data.category}</span>
            <h2 style="font-family: var(--font-serif); font-size: 32px; font-weight: 600; color: var(--color-noir); margin: 6px 0 10px 0; line-height: 1.2;">${data.name}</h2>
            
            <div style="display: inline-flex; align-items: baseline; gap: 4px; margin-bottom: 14px; padding: 6px 14px; background: var(--gold-tint); border-radius: var(--radius-sm); border: 1px solid rgba(191,162,126,0.3);">
              <span style="font-size: 12px; font-weight: 800; color: var(--gold-dark); text-transform: uppercase;">Retail SRP:</span>
              <span style="font-size: 24px; font-weight: 800; color: var(--color-noir); margin-left: 4px;">${data.price}</span>
              <span style="font-size: 11px; color: var(--color-slate-muted); font-weight: 600;">(Philippine Pesos)</span>
            </div>

            <p style="font-size: 14.5px; font-weight: 600; color: var(--color-espresso); margin-bottom: 10px;">${data.tagline}</p>
            <p style="font-size: 13.5px; line-height: 1.65; color: var(--color-slate-muted); margin-bottom: 18px;">${data.description}</p>

            <div style="margin-bottom: 18px;">
              <h4 style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: var(--color-noir); margin-bottom: 8px;">Key Actives & Ingredients:</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${data.actives.map((act) => `<span style="background: var(--color-canvas); border: 1px solid var(--color-border-light); padding: 4px 10px; border-radius: 6px; font-size: 11.5px; font-weight: 600; color: var(--color-espresso);">${act}</span>`).join('')}
              </div>
            </div>

            <div style="margin-bottom: 22px;">
              <h4 style="font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: var(--color-noir); margin-bottom: 8px;">Salon Protocol Steps:</h4>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${data.protocol.map((step) => `<div style="font-size: 12.5px; line-height: 1.5; color: var(--color-slate-muted); background: var(--color-canvas); padding: 8px 12px; border-radius: 6px; border-left: 3px solid var(--gold-primary);">${step}</div>`).join('')}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 12px; padding-top: 14px; border-top: 1px solid var(--color-border-light);">
              <a href="https://wa.me/639508970459?text=Hello%20Glossy%20Strand!%20I%20am%20inquiring%20about%20${encodeURIComponent(data.name)}%20(SRP%20${encodeURIComponent(data.price)})%20for%20my%20salon." target="_blank" class="cta-gold" style="font-size: 12.5px; padding: 10px 20px;">
                Order via WhatsApp
              </a>
              <a href="tel:09508970459" class="cta-noir" style="font-size: 12.5px; padding: 10px 20px;">
                Call Hotline: 0950 897 0459
              </a>
            </div>
          </div>
        </div>
      `;

      modalOverlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });
}

/* =========================================================================
   6B. SALON PACKAGES INTERACTIVE STEP-BY-STEP POP-UP MODAL (WORD BY WORD)
   ========================================================================= */
const PACKAGE_PROTOCOLS = {
  'carnival-pkg': {
    title: 'Carnival Package — Step-by-Step Application',
    target: 'Normal to Resistant Hair • 11 Steps (Word by Word)',
    price: '₱18,300 Package SRP',
    demoNotice: 'Includes Free Hands-on Personal Demo & Salon Training',
    steps: [
      { num: '1', title: 'PERFORM AN ALLERGY TEST', text: "Check the client's hair condition and chemical history before starting the treatment.<br>Perform an allergy test to ensure there are no adverse reactions." },
      { num: '2', title: 'CLARIFYING SHAMPOO', text: 'Wash the hair once with Sarah K Clarifying Shampoo.<br>Rinse thoroughly.' },
      { num: '3', title: 'DRY', text: 'Blow-dry the hair until 100% dry.' },
      { num: '4', title: 'SECTION', text: 'Divide the hair into 4 sections.' },
      { num: '5', title: 'APPLY SARAH K CARNIVAL BRAZILIAN PROTEIN', text: 'Apply the product evenly 0.5 cm away from the scalp.<br>Comb through to distribute the product evenly.' },
      { num: '6', title: 'PROCESSING TIME', text: 'Normal Hair: 60 minutes<br>Kinky/Very Curly Hair: 90 minutes' },
      { num: '7', title: 'RINSE', text: 'Rinse the hair, remove 30% of the products leave 70%.' },
      { num: '8', title: 'BLOW-DRY', text: 'Blow-dry the hair until 100% dry.<br>Apply La Vie en Rose Serum as a heat protectant before ironing the hair.' },
      { num: '9', title: 'FLAT IRON', text: 'Use paper thin sections.<br>Normal Hair: 220°C (15–20 passes)<br>Virgin/Kinky Hair: 220–240°C (15–20 passes)<br>After iron cool down the hair.' },
      { num: '10', title: 'WASH AND APPLY SARAH K RIO NEUTRALIZER', text: 'Wash the hair thoroughly with clean water.<br>Apply Sarah K Rio Neutralizer evenly throughout the hair.<br>Massage gently for 5–10 minutes.<br>Rinse thoroughly with clean water.' },
      { num: '11', title: 'FINISH', text: 'Blow-dry and style the hair using a paddle brush for a smooth, polished finish.<br>Use La Vie en Rose Serum as the final touch to smooth and add shine to the hair.' }
    ]
  },
  'rio-pkg': {
    title: 'Rio Package — Step-by-Step Application',
    target: 'Slightly Damaged & Blonde Hair • 13 Steps (Word by Word)',
    price: '₱24,300 Package SRP',
    demoNotice: 'Includes Free Hands-on Personal Demo & Salon Training',
    steps: [
      { num: '1', title: 'HAIR ASSESSMENT', text: "Analyze the client's hair condition, texture, and chemical history.<br>Perform a strand test if necessary." },
      { num: '2', title: 'SHAMPOO', text: 'Wash the hair once using Sarah K Clarifying Shampoo.<br>Rinse thoroughly.' },
      { num: '3', title: 'SOS RECOVERY TREATMENT', text: 'Apply Sarah K SOS Recovery evenly from mid-length to ends.<br>Leave on for 20–25 minutes.<br>Rinse thoroughly.' },
      { num: '4', title: 'BLOW DRY', text: 'Blow-dry the hair 100% dry.' },
      { num: '5', title: 'SECTION THE HAIR', text: 'Divide the hair into 4–6 manageable sections.' },
      { num: '6', title: 'APPLY RIO BRAZILIAN PROTEIN', text: 'Apply Sarah K Rio Brazilian Protein evenly, leaving approximately 0.5 cm away from the scalp.<br>Comb through to ensure even distribution.' },
      { num: '7', title: 'PROCESSING TIME', text: 'Leave the product on for 60 minutes.' },
      { num: '8', title: 'RINSE', text: 'Rinse the hair, remove 30% of the products leave 70%.' },
      { num: '9', title: 'BLOW DRY', text: 'Blow-dry the hair 100% dry using a paddle brush.<br>Apply La Vie en Rose Serum as a heat protectant before ironing the hair.' },
      { num: '10', title: 'FLAT IRON', text: 'Flat iron at 180°C, using 10–15 passes per thin section.' },
      { num: '11', title: 'COOL DOWN', text: 'Allow the hair to cool completely.' },
      { num: '12', title: 'NEUTRALIZE', text: 'Rinse the hair thoroughly with clean water.<br>Apply Sarah K Rio Neutralizer evenly throughout the hair.<br>Leave on for 5–15 minutes.<br>Rinse thoroughly with 100% clean water.' },
      { num: '13', title: 'FINAL BLOW DRY', text: 'Blow-dry and style the hair using a paddle brush for a smooth, polished finish.<br>Use La Vie en Rose Serum as the final touch to smooth and add shine to the hair.' }
    ]
  },
  'rio-pkg-extreme': {
    title: 'Rio Package Extreme — Step-by-Step Application',
    target: 'Extremely Damaged & Bleached Hair • 14 Steps (Word by Word)',
    price: '₱25,800 Package SRP',
    demoNotice: 'Includes Free Hands-on Personal Demo & Salon Training',
    steps: [
      { num: '1', title: 'HAIR ASSESSMENT', text: "Analyze the client's hair condition, texture, and chemical history.<br>Perform a strand test if necessary." },
      { num: '2', title: 'SHAMPOO', text: 'Wash the hair once using Sarah K Clarifying Shampoo.<br>Rinse thoroughly.' },
      { num: '3', title: 'SOS RECOVERY TREATMENT', text: 'Apply Sarah K SOS Recovery evenly from mid-length to ends.<br>Leave on for 30 minutes.' },
      { num: '4', title: 'RINSE', text: 'Rinse the hair thoroughly with 100% clean water.' },
      { num: '5', title: 'BLOW DRY', text: 'Blow-dry the hair 100% dry.' },
      { num: '6', title: 'SECTION THE HAIR', text: 'Divide the hair into 4–6 manageable sections.' },
      { num: '7', title: 'APPLY RIO BRAZILIAN PROTEIN', text: 'Apply Sarah K Rio Brazilian Protein evenly, leaving approximately 0.5 cm away from the scalp.<br>Comb through to ensure even distribution.' },
      { num: '8', title: 'PROCESSING TIME', text: 'Leave the product on for 60 minutes.' },
      { num: '9', title: 'RINSE', text: 'Rinse the hair, remove 30% of the products leave 70%.' },
      { num: '10', title: 'BLOW DRY', text: 'Blow-dry the hair 100% dry using a paddle brush.<br>Apply La Vie en Rose Serum as a heat protectant before ironing the hair.' },
      { num: '11', title: 'FLAT IRON', text: 'Flat iron at 180°C, using 10–15 passes per thin section.' },
      { num: '12', title: 'COOL DOWN', text: 'Allow the hair to cool completely.' },
      { num: '13', title: 'AMPOULE AND RIO NEUTRALIZER', text: 'Rinse the hair thoroughly with clean water.<br>Apply Ampoule evenly throughout the hair for 15 minutes.<br>Apply Rio Neutralizer and leave it on for 15 minutes.<br>Rinse thoroughly with 100% clean water.' },
      { num: '14', title: 'FINAL BLOW DRY', text: 'Blow-dry and style the hair using a paddle brush for a smooth, polished finish.<br>Use La Vie en Rose Serum as the final touch to smooth and add shine to the hair.' }
    ]
  }
};

function initPackageProtocolModal() {
  const modalOverlay = document.getElementById('packageModal') || document.getElementById('productModal');
  const modalBody = document.getElementById('packageModalContent') || document.getElementById('modalContent');
  const closeBtn = document.getElementById('packageModalCloseBtn') || document.getElementById('modalCloseBtn');
  const triggerBtns = document.querySelectorAll('.btn-pkg-protocol');

  if (!modalOverlay || !modalBody) return;

  triggerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgKey = btn.getAttribute('data-package');
      const data = PACKAGE_PROTOCOLS[pkgKey];

      if (!data) return;

      modalBody.innerHTML = `
        <div style="max-width: 780px; margin: 0 auto;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 20px; padding-bottom: 18px; border-bottom: 1.5px solid var(--baby-pink-border); flex-wrap: wrap;">
            <div>
              <span style="display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: var(--baby-pink-deep); background: var(--baby-pink-soft); border: 1px solid var(--baby-pink-border); padding: 4px 12px; border-radius: var(--radius-pill); margin-bottom: 8px;">
                ${data.target}
              </span>
              <h2 style="font-family: var(--font-serif); font-size: 32px; font-weight: 600; color: var(--color-noir); line-height: 1.2;">
                ${data.title}
              </h2>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 22px; font-weight: 800; color: var(--color-noir);">${data.price}</span>
              <div style="font-size: 11px; font-weight: 700; color: #059669; margin-top: 4px;">🤝 Hands-on Personal Demo Included</div>
            </div>
          </div>

          <!-- Hands-on Demo & Salon Requirement Highlight -->
          <div style="background: linear-gradient(135deg, rgba(225, 237, 252, 0.7) 0%, rgba(254, 228, 238, 0.7) 50%, rgba(249, 238, 218, 0.5) 100%); border: 1px solid var(--baby-pink-border); border-radius: var(--radius-md); padding: 14px 18px; margin-bottom: 24px; display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 20px;">🎓</span>
            <div style="font-size: 13px; color: var(--color-espresso); line-height: 1.5;">
              <strong>Exclusive Salon Partner Privilege:</strong> Every purchase of this package includes an authentic <strong>hands-on personal demonstration</strong> and in-depth technician training conducted directly by our Glossy Strand team for your salon staff.
            </div>
          </div>

          <!-- Step by Step List -->
          <div style="display: flex; flex-direction: column; gap: 12px; max-height: 52vh; overflow-y: auto; padding-right: 8px;">
            ${data.steps.map(s => `
              <div style="display: flex; gap: 14px; background: #FFFFFF; border: 1px solid var(--color-border-light); border-radius: var(--radius-md); padding: 14px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.02); align-items: flex-start;">
                <span style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, var(--pastel-blue-soft) 0%, var(--baby-pink-soft) 100%); border: 1.5px solid var(--baby-pink-border); font-size: 12px; font-weight: 800; color: var(--color-noir); flex-shrink: 0;">
                  ${s.num}
                </span>
                <div style="font-size: 13.5px; line-height: 1.6; color: var(--color-espresso);">
                  <div style="font-weight: 800; color: var(--color-noir); margin-bottom: 4px; letter-spacing: 0.5px;">${s.title}</div>
                  <div style="color: var(--color-slate-muted); font-size: 13px;">${s.text}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--color-border-light);">
            <div style="font-size: 12px; color: var(--color-slate-muted);">
              ⚠️ Strictly for Salon Professionals &amp; DTI-Registered Salons with Permits only.
            </div>
            <a href="https://wa.me/639508970459?text=Hello%20Glossy%20Strand!%20I%20am%20inquiring%20about%20ordering%20the%20${encodeURIComponent(data.title)}%20(${encodeURIComponent(data.price)})%20with%20hands-on%20personal%20demo." target="_blank" class="cta-gold" style="font-size: 13px; padding: 11px 22px;">
              Order Package &amp; Schedule Demo &rarr;
            </a>
          </div>
        </div>
      `;

      modalOverlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
  }
}

/* =========================================================================
   7. CONCIERGE SALON ORDER & INQUIRY FORMS
   ========================================================================= */
function initConciergeForm() {
  // Home page inquiry form
  const homeForm = document.getElementById('salonInquiryForm');
  if (homeForm) {
    homeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const salonName = document.getElementById('inqSalonName')?.value || 'Salon Partner';
      const contactPerson = document.getElementById('inqContactPerson')?.value || 'Valued Client';
      const phone = document.getElementById('inqPhone')?.value || '';
      const email = document.getElementById('inqEmail')?.value || '';
      const city = document.getElementById('inqCity')?.value || 'Philippines';
      const interest = document.getElementById('inqLineInterest')?.value || 'Salon Starter Package';
      const notes = document.getElementById('inqNotes')?.value || 'Requesting introductory backbar wholesale pricing.';

      const message = `*GLOSSY STRAND SALON INQUIRY*%0A----------------------------------%0A*Salon/Business:* ${encodeURIComponent(salonName)}%0A*Contact Person:* ${encodeURIComponent(contactPerson)}%0A*Mobile Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*City/Location:* ${encodeURIComponent(city)}%0A*Package/Product Interest:* ${encodeURIComponent(interest)}%0A*Salon Notes:* ${encodeURIComponent(notes)}%0A----------------------------------%0A_Sent via Glossy Strand Sarah K Philippines Official Website_`;
      window.open(`https://wa.me/639508970459?text=${message}`, '_blank');
    });
  }

  // Distributor page partner application form
  const partnerForm = document.getElementById('partnerApplicationForm');
  if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const partnerName = document.getElementById('partnerName')?.value || 'Salon Partner';
      const salonName = document.getElementById('salonName')?.value || 'Salon Studio';
      const phone = document.getElementById('partnerPhone')?.value || '';
      const email = document.getElementById('partnerEmail')?.value || 'N/A';
      const city = document.getElementById('salonCity')?.value || 'Philippines';
      const pkg = document.getElementById('partnerPackageSelect')?.value || 'Salon Partner Package';
      const dti = document.getElementById('partnerDti')?.value || 'Pending Verification';
      const permit = document.getElementById('partnerPermit')?.value || 'Pending Verification';
      const message = `*SALON PARTNER APPLICATION*%0A----------------------------------%0A*Applicant Name:* ${encodeURIComponent(partnerName)}%0A*Salon/Studio:* ${encodeURIComponent(salonName)}%0A*DTI Reg. No.:* ${encodeURIComponent(dti)}%0A*Salon Permit No.:* ${encodeURIComponent(permit)}%0A*Mobile Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Address & City:* ${encodeURIComponent(city)}%0A*Selected Package:* ${encodeURIComponent(pkg)}%0A*Notes/Inquiries:* ${encodeURIComponent(notes)}%0A----------------------------------%0A_Sent to Christine Joy Juaniza (Glossy Strand Operations)_`;
      window.open(`https://wa.me/639508970459?text=${message}`, '_blank');
    });
  }

  // Contact page order desk form
  const contactForm = document.getElementById('conciergeOrderForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = document.getElementById('contactFullName')?.value || 'Salon Client';
      const salonName = document.getElementById('contactSalonName')?.value || 'Salon/Clinic';
      const phone = document.getElementById('contactMobile')?.value || '';
      const city = document.getElementById('contactCity')?.value || 'Philippines';
      const interest = document.getElementById('contactInterest')?.value || 'Wholesale Order';
      const messageText = document.getElementById('contactMessage')?.value || 'Inquiring about Sarah K salon products.';

      const message = `*GLOSSY STRAND ORDER DESK INQUIRY*%0A----------------------------------%0A*Name:* ${encodeURIComponent(fullName)}%0A*Salon:* ${encodeURIComponent(salonName)}%0A*Mobile:* ${encodeURIComponent(phone)}%0A*Location:* ${encodeURIComponent(city)}%0A*Order/Inquiry:* ${encodeURIComponent(interest)}%0A*Message Details:* ${encodeURIComponent(messageText)}%0A----------------------------------%0A_Sent to Christine Joy Juaniza (Glossy Strand Operations)_`;
      window.open(`https://wa.me/639508970459?text=${message}`, '_blank');
    });
  }
}

/* =========================================================================
   8. MOBILE NAVIGATION
   ========================================================================= */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = '#FFFFFF';
      navMenu.style.padding = '24px';
      navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      navMenu.style.borderTop = '1px solid var(--color-border-light)';
    }
  });
}
