/* ==========================================================================
   DULCE TENTACIÓN 1102 - LÓGICA INTERACTIVA, GESTIÓN DE PRODUCTOS Y ADMIN
   ========================================================================== */

// Clave maestra para acceder al panel de administración
const ADMIN_PASSWORD = 'dulcetentacion';

// Catálogo Base Predeterminado de Productos (Incluye nuevas tortas, panes y mantecadas)
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Torta Personalizada Stitch',
    category: 'reposteria',
    price: 55000,
    image: 'imagenes/torta_stitch.jpg',
    badge: 'Popular',
    rating: 5.0,
    description: 'Hermosa torta temática personalizada de Stitch elaborada con masa suave de vainilla o chocolate y decorado artesanal detallado.',
    ingredients: 'Harina de trigo, azúcar, mantequilla, huevos, relleno cremoso, cubierta artesanal decorada.'
  },
  {
    id: 2,
    name: 'Torta Rosita Fresita',
    category: 'reposteria',
    price: 55000,
    image: 'imagenes/torta_fresita.jpg',
    badge: 'Destacado',
    rating: 4.9,
    description: 'Espectacular torta temática de Rosita Fresita, bizcocho esponjoso con crema suave y detalles en fondant/crema rosa artesanal.',
    ingredients: 'Bizcocho de vainilla, crema chantilly, esencia de fresa, azúcar, huevos, decoración temática.'
  },
  {
    id: 3,
    name: 'Torta Oso Personalizada',
    category: 'reposteria',
    price: 55000,
    image: 'imagenes/torta_oso.jpg',
    badge: 'Nuevo',
    rating: 5.0,
    description: 'Encantadora torta personalizada con tierno diseño de oso, ideal para cumpleaños, baby showers y celebraciones especiales.',
    ingredients: 'Bizcocho suave, crema de leche, cobertura suave de vainilla, figuras modeladas artesanalmente.'
  },
  {
    id: 4,
    name: 'Torta Cancha de Fútbol',
    category: 'reposteria',
    price: 60000,
    image: 'imagenes/torta_cancha.jpg',
    badge: 'Favorito',
    rating: 4.9,
    description: 'Torta temática personalizada con diseño de cancha de fútbol, perfecta para fanáticos del deporte y cumpleaños infantiles.',
    ingredients: 'Harina, huevos, azúcar, mantequilla, crema de mantequilla verde, detalles futboleros.'
  },
  {
    id: 5,
    name: 'Torta Corazón Romántica',
    category: 'reposteria',
    price: 52000,
    image: 'imagenes/torta_corazon.jpg',
    badge: 'Especial',
    rating: 4.8,
    description: 'Elegante torta artesanal en forma de corazón con acabado vintage, perlas comestibles y rosas en crema suave.',
    ingredients: 'Bizcocho de vainilla/red velvet, crema suave de queso, perlas dulces comestibles, mantequilla pura.'
  },
  {
    id: 6,
    name: 'Torta Decorada Girasoles Clásica',
    category: 'reposteria',
    price: 55000,
    image: 'imagenes/torta_girasol.jpg',
    badge: 'Primaveral',
    rating: 5.0,
    description: 'Alegre torta artesanal con hermosos girasoles modelados en crema y bizcocho húmedo con suave relleno.',
    ingredients: 'Harina seleccionada, mantequilla, huevo, crema pastelera, esencia natural, decorado floral.'
  },
  {
    id: 15,
    name: 'Torta Moca Caramelo & Fresa Chocolatada',
    category: 'reposteria',
    price: 55000,
    image: 'imagenes/torta_moca_caramelo.jpg',
    badge: 'Nuevo',
    rating: 5.0,
    description: 'Exquisita torta con bizcocho suave aromatizado al café moca, drip de caramelo toffee, corona de crema y fresa premium bañada en chocolate.',
    ingredients: 'Bizcocho de moca, crema chantilly de café, salsa de caramelo toffee, crumble de galleta, fresa natural y chocolate blanco/negro.'
  },
  {
    id: 16,
    name: 'Torta Moca Drip con Fresas Glaseadas',
    category: 'reposteria',
    price: 58000,
    image: 'imagenes/torta_moca_fresa.jpg',
    badge: 'Especial',
    rating: 4.9,
    description: 'Torta artesanal con suave crema moca texturizada, lluvia de galleta crujiente y fresas frescas bañadas en glaseado brillante de frutos rojos.',
    ingredients: 'Harina de trigo, cacao, esencia de moca, crema batida, fresas seleccionadas, jarabe de fresa y crumble dulce.'
  },
  {
    id: 17,
    name: 'Torta Real Corona Azul & Dorado',
    category: 'reposteria',
    price: 65000,
    image: 'imagenes/torta_corona_azul.jpg',
    badge: 'Destacado',
    rating: 5.0,
    description: 'Elegante torta de celebración con degradé en tonos azules marinos, rosetones artesanales, perlas doradas comestibles y tiara festiva.',
    ingredients: 'Bizcocho esponjoso de vainilla, relleno cremoso de arequipe, cubierta suave azulada y perlas de dulce doradas.'
  },
  {
    id: 18,
    name: 'Torta Cookies & Cream con Ositos y Fresas',
    category: 'reposteria',
    price: 58000,
    image: 'imagenes/torta_oreo_ositos.jpg',
    badge: 'Favorito',
    rating: 5.0,
    description: 'Torta decorada con tiernos ositos modelados en merengue suave, fresas naturales glaseadas y cobertura crujiente de galleta Oreo.',
    ingredients: 'Bizcocho húmedo, crema de leche batida, galletas Oreo trituradas, fresas naturales y figuras artesanales.'
  },
  {
    id: 19,
    name: 'Torta Drip de Chocolate Supremo & Oreo',
    category: 'reposteria',
    price: 60000,
    image: 'imagenes/torta_drip_chocolate.jpg',
    badge: 'Popular',
    rating: 4.9,
    description: 'Irresistible combinación con goteo (drip) de ganache de chocolate semiamargo, coronada con galletas Oreo enteras y fresas jugosas.',
    ingredients: 'Bizcocho de chocolate puro, ganache de chocolate belga, crema chantilly blanca, galletas Oreo y fresas frescas.'
  },
  {
    id: 20,
    name: 'Torta Temática Spiderman 2 Pisos',
    category: 'reposteria',
    price: 75000,
    image: 'imagenes/torta_spiderman.jpg',
    badge: 'Infantil',
    rating: 5.0,
    description: 'Gran torta de 2 pisos temáticos en tonos rojo y azul eléctrico del Hombre Araña, con telarañas artesanales y decoración personalizada.',
    ingredients: 'Bizcocho de vainilla y chocolate de doble altura, doble relleno cremoso, cubierta suave texturizada y figuras temáticas.'
  },
  {
    id: 21,
    name: 'Torta Girasoles con Glaseado Amarillo',
    category: 'reposteria',
    price: 55000,
    image: 'imagenes/torta_girasol_amarillo.jpg',
    badge: 'Primaveral',
    rating: 4.9,
    description: 'Diseño alegre y luminoso con drip amarillo vibrante, girasoles modelados en crema y detalles con perlas de azúcar plateadas.',
    ingredients: 'Harina suave, mantequilla, huevos, relleno de maracuyá o arequipe, cubierta blanca y girasoles en crema pastelera amarilla.'
  },
  {
    id: 7,
    name: 'Mantecada Artesanal con Chispas de Colores',
    category: 'panes',
    price: 4500,
    image: 'imagenes/mantecada_artesanal.jpg',
    badge: 'Popular',
    rating: 4.9,
    description: 'Deliciosa mantecada tradicional horneada en bandeja, con suave cubierta glaseada blanca y festivas chispas de colores.',
    ingredients: 'Harina de trigo seleccionada, mantequilla pura, azúcar, huevos frescos, esencia de vainilla y chispas dulces.'
  },
  {
    id: 8,
    name: 'Torta Tres Leches Clásica',
    category: 'reposteria',
    price: 50000,
    image: 'imagenes/producto_2.jpg',
    badge: 'Tradicional',
    rating: 4.8,
    description: 'Torta tres leches artesanal con bizcocho suave bañado en crema de leche, leche condensada y leche evaporada.',
    ingredients: 'Leche condensada, leche evaporada, crema de leche, huevo, harina, azúcar, vainilla.'
  },
  {
    id: 10,
    name: 'Calado Artesanal',
    category: 'panes',
    price: 2000,
    image: 'imagenes/pan_2.jpg',
    badge: 'Crujiente',
    rating: 4.8,
    description: 'Delicioso calado artesanal crujiente con textura suave y aroma inconfundible.',
    ingredients: 'Harina de trigo, queso, mantequilla, azúcar, levadura fresca.'
  },
  {
    id: 11,
    name: 'Pan Lengua Dulce',
    category: 'panes',
    price: 2000,
    image: 'imagenes/pan_3.jpg',
    badge: 'Popular',
    rating: 4.7,
    description: 'Tradicional pan lengua dulce y crujiente de masa hojaldrada espolvoreada con azúcar.',
    ingredients: 'Harina de trigo, mantequilla, azúcar, levadura natural.'
  },
  {
    id: 12,
    name: 'Pan Rollo Tradicional',
    category: 'panes',
    price: 2000,
    image: 'imagenes/pan_4.jpg',
    badge: 'Destacado',
    rating: 4.9,
    description: 'Pan rollo tradicional recién horneado con miga esponjosa y suave.',
    ingredients: 'Harina de trigo, mantequilla, suero de leche, pizca de sal.'
  },
  {
    id: 13,
    name: 'Roscón con Arequipe o Bocadillo',
    category: 'panes',
    price: 2000,
    image: 'imagenes/pan_5.jpg',
    badge: 'Dulce',
    rating: 5.0,
    description: 'Delicioso roscón horneado a la perfección relleno con generoso bocadillo o arequipe.',
    ingredients: 'Harina de trigo seleccionada, mantequilla pura, leche, bocadillo o arequipe.'
  },
  {
    id: 14,
    name: 'Mogolla Integral',
    category: 'panes',
    price: 2000,
    image: 'imagenes/pan_6.jpg',
    badge: 'Saludable',
    rating: 4.8,
    description: 'Mogolla artesanal recién horneada con fibra natural y textura suave.',
    ingredients: 'Harina integral de trigo, mantequilla, azúcar, levadura.'
  }
];

// Carga inteligente de productos: sincroniza los nuevos productos con localStorage
let products = [];
try {
  const saved = localStorage.getItem('dt_products');
  let parsed = saved ? JSON.parse(saved) : [];
  
  if (Array.isArray(parsed) && parsed.length > 0) {
    // Si ya existían productos guardados, fusionar los nuevos que falten por ID
    DEFAULT_PRODUCTS.forEach(dp => {
      const exists = parsed.some(p => p.id === dp.id);
      if (!exists) {
        parsed.push(dp);
      }
    });
    products = parsed;
  } else {
    products = [...DEFAULT_PRODUCTS];
  }
} catch (e) {
  products = [...DEFAULT_PRODUCTS];
}

// Persistir la lista actualizada
try {
  localStorage.setItem('dt_products', JSON.stringify(products));
} catch (e) {}

// Configuración general de la tienda
const DEFAULT_SETTINGS = {
  whatsapp: '573214620314',
  phone: '+57 321 462 0314',
  topbar: '🥐 ¡Pan fresco recién horneado todos los días! Pedidos al instante vía <strong>WhatsApp</strong> (domicilios solo para tiendas) 🥖',
  delivery: 'domicilios solo para tiendas',
  hours: 'Lunes a Domingo de 6:00am a 9:00pm',
  address: 'Urbanización San Jacinto, Diagonal 2B #5-45, Tocaima, Cundinamarca, Colombia'
};

let storeSettings = { ...DEFAULT_SETTINGS };
try {
  const savedSet = localStorage.getItem('dt_settings');
  if (savedSet) storeSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(savedSet) };
} catch (e) {
  storeSettings = { ...DEFAULT_SETTINGS };
}

// Formateador de moneda colombiana
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount);
};

// Notificación Toast flotante
const showToast = (message) => {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
};

/* ═══════════════════════════════════════════════════════════════════════
   FUNCIONES GLOBALES DE ADMINISTRACIÓN
   ═══════════════════════════════════════════════════════════════════════ */

window.isAdminLogged = function() {
  return sessionStorage.getItem('dt_admin_logged') === 'true';
};

window.handleAdminAccess = function(e) {
  if (e) {
    e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  if (window.isAdminLogged()) {
    window.openAdminPanel();
  } else {
    window.openAdminLogin();
  }
};

window.openAdminLogin = function() {
  const modal = document.getElementById('admin-login-modal');
  const input = document.getElementById('admin-password-input');
  const err = document.getElementById('admin-login-error');
  
  if (input) input.value = '';
  if (err) err.classList.remove('show');
  
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
  
  if (input) {
    setTimeout(() => input.focus(), 150);
  }
};

window.closeAdminLogin = function() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
};

window.openAdminPanel = function() {
  window.closeAdminLogin();
  const panel = document.getElementById('admin-panel-modal');
  if (panel) {
    panel.classList.add('active');
    panel.style.display = 'flex';
  }
  if (typeof window.renderAdminProducts === 'function') window.renderAdminProducts();
  if (typeof window.updateAdminStats === 'function') window.updateAdminStats();
  if (typeof window.populateSettingsForm === 'function') window.populateSettingsForm();
};

window.closeAdminPanel = function() {
  const panel = document.getElementById('admin-panel-modal');
  if (panel) {
    panel.classList.remove('active');
    panel.style.display = 'none';
  }
};

window.logoutAdmin = function() {
  sessionStorage.removeItem('dt_admin_logged');
  window.closeAdminPanel();
  showToast('Sesión de administrador cerrada correctamente.');
};

/* ═══════════════════════════════════════════════════════════════════════
   INICIALIZACIÓN PRINCIPAL DE LA APLICACIÓN
   ═══════════════════════════════════════════════════════════════════════ */

function initApp() {
  const applyStoreSettings = () => {
    const topBar = document.querySelector('.top-bar');
    if (topBar && storeSettings.topbar) {
      topBar.innerHTML = storeSettings.topbar;
    }

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      link.href = `https://wa.me/${storeSettings.whatsapp}`;
    });

    const deliverySpan = document.querySelector('#cart-drawer .cart-summary-line span[style*="font-weight: 700"]');
    if (deliverySpan) {
      deliverySpan.textContent = storeSettings.delivery;
    }
  };

  let cart = [];
  let activeCategory = 'all';
  let searchQuery = '';
  let currentSort = 'default';
  let activeModalProduct = null;
  let modalQuantity = 1;

  // Elementos DOM Públicos
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const categoryButtons = document.querySelectorAll('.pill-btn');
  const sortSelect = document.getElementById('sort-select');
  const cartTrigger = document.getElementById('cart-trigger');
  const cartBadge = document.getElementById('cart-badge');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartClose = document.getElementById('cart-close');
  const cartBody = document.getElementById('cart-body');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const btnWhatsapp = document.getElementById('btn-whatsapp');

  // Modal Detalle Producto
  const productModal = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalIngredients = document.getElementById('modal-ingredients');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyDisplay = document.getElementById('qty-display');
  const modalAddCartBtn = document.getElementById('modal-add-cart');

  // Renderizar Catálogo Público
  window.renderProducts = function() {
    if (!productsGrid) return;

    let filtered = products.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => (b.rating || 5) - (a.rating || 5));
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-bread-slice" style="font-size: 3rem; margin-bottom: 16px; color: var(--border-light);"></i>
          <h3>No encontramos productos que coincidan</h3>
          <p>Intenta buscando con otra palabra o seleccionando otra categoría.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(p => `
      <div class="product-card">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80'">
          ${p.badge ? `<span class="product-badge ${p.badge === 'Popular' ? 'popular' : ''}">${p.badge}</span>` : ''}
          <button type="button" class="quick-view-btn" data-id="${p.id}" title="Vista Rápida">
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>
        <div class="product-info">
          <span class="product-category-tag">${p.category === 'panes' ? 'Pan Fresco' : 'Repostería & Galletas'}</span>
          <h3 class="product-title">${p.name}</h3>
          <p class="product-description">${p.description}</p>
          <div class="product-footer">
            <div class="product-price">${p.price === 0 ? '<span style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Precio varía según el tamaño</span>' : formatCurrency(p.price)}</div>
            <button type="button" class="add-cart-btn" data-id="${p.id}">
              <i class="fa-solid fa-cart-plus"></i> Agregar
            </button>
          </div>
        </div>
      </div>
    `).join('');

    productsGrid.querySelectorAll('.add-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        addToCart(id, 1);
      });
    });

    productsGrid.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        openModal(id);
      });
    });
  };

  // Abrir Modal de Producto
  const openModal = (id) => {
    const p = products.find(prod => prod.id === id);
    if (!p) return;
    activeModalProduct = p;
    modalQuantity = 1;

    if (modalImg) {
      modalImg.src = p.image;
      modalImg.onerror = () => { modalImg.src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80'; };
    }
    if (modalTag) modalTag.textContent = `${p.category === 'panes' ? '🥖 Pan Fresco' : '🍰 Repostería'} • ⭐ ${p.rating || 5.0}`;
    if (modalTitle) modalTitle.textContent = p.name;
    if (modalPrice) modalPrice.textContent = p.price === 0 ? 'Precio varía según el tamaño' : formatCurrency(p.price);
    if (modalDesc) modalDesc.textContent = p.description;
    if (modalIngredients) modalIngredients.innerHTML = `<strong>Ingredientes & Preparación:</strong> ${p.ingredients || 'Ingredientes tradicionales seleccionados.'}`;
    if (qtyDisplay) qtyDisplay.textContent = modalQuantity;

    if (productModal) productModal.classList.add('active');
  };

  const closeModal = () => {
    if (productModal) productModal.classList.remove('active');
  };

  // Carrito de compras
  const addToCart = (productId, qty = 1) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }

    updateCartUI();
    showToast(`¡${product.name} añadido al pedido!`);
  };

  const updateCartQuantity = (productId, delta) => {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    updateCartUI();
  };

  const removeFromCart = (productId) => {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
  };

  const updateCartUI = () => {
    if (!cartBadge || !cartBody) return;
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartBadge.textContent = totalItems;

    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="empty-cart-state">
          <i class="fa-solid fa-basket-shopping"></i>
          <p style="font-weight: 700; margin-bottom: 4px;">Tu carrito está vacío</p>
          <span style="font-size: 0.85rem;">Descubre nuestros exquisitos panes y postres en el catálogo.</span>
        </div>
      `;
      if (cartSubtotal) cartSubtotal.textContent = formatCurrency(0);
      if (cartTotal) cartTotal.textContent = formatCurrency(0);
      return;
    }

    cartBody.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80'">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatCurrency(item.price)} c/u</div>
          <div class="quantity-control" style="margin-top: 6px; width: fit-content;">
            <button type="button" class="qty-btn cart-qty-minus" data-id="${item.id}">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button type="button" class="qty-btn cart-qty-plus" data-id="${item.id}">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" data-id="${item.id}" title="Eliminar">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (cartSubtotal) cartSubtotal.textContent = formatCurrency(subtotal);
    if (cartTotal) cartTotal.textContent = formatCurrency(subtotal);

    cartBody.querySelectorAll('.cart-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => updateCartQuantity(parseInt(btn.dataset.id), -1));
    });
    cartBody.querySelectorAll('.cart-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => updateCartQuantity(parseInt(btn.dataset.id), 1));
    });
    cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
  };

  // WhatsApp Checkout
  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert('Por favor agrega productos al carrito antes de solicitar el pedido.');
      return;
    }

    const phoneNumber = storeSettings.whatsapp || '573214620314';
    let message = `*¡Hola DULCE TENTACION!* 🥐🥖\nDesearía realizar el siguiente pedido desde la página web:\n\n`;

    let total = 0;
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      message += `${index + 1}. *${item.name}* x${item.quantity} -> ${formatCurrency(itemTotal)}\n`;
    });

    message += `\n*TOTAL A PAGAR:* ${formatCurrency(total)}\n\n`;
    message += `📍 *Método de entrega:* ${storeSettings.delivery}\n`;
    message += `Muchas gracias, quedo atento a su confirmación.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // Listeners Catálogo Público
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      window.renderProducts();
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      window.renderProducts();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      window.renderProducts();
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeModal();
    });
  }

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (modalQuantity > 1) {
        modalQuantity--;
        qtyDisplay.textContent = modalQuantity;
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      modalQuantity++;
      qtyDisplay.textContent = modalQuantity;
    });
  }

  if (modalAddCartBtn) {
    modalAddCartBtn.addEventListener('click', () => {
      if (activeModalProduct) {
        addToCart(activeModalProduct.id, modalQuantity);
        closeModal();
      }
    });
  }

  const toggleCart = () => {
    if (cartDrawer) cartDrawer.classList.toggle('active');
    if (cartOverlay) cartOverlay.classList.toggle('active');
  };

  if (cartTrigger) cartTrigger.addEventListener('click', toggleCart);
  if (cartClose) cartClose.addEventListener('click', toggleCart);
  if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
  if (btnWhatsapp) btnWhatsapp.addEventListener('click', sendWhatsAppOrder);

  // Menú Pan Dropdown
  const menuPanBtn = document.getElementById('menu-pan-btn');
  const dropdownPan = document.getElementById('dropdown-pan');

  if (menuPanBtn && dropdownPan) {
    menuPanBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownPan.classList.toggle('open');
    });

    dropdownPan.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        const filter = item.getAttribute('data-filter') || 'panes';
        activeCategory = filter;
        categoryButtons.forEach(b => b.classList.remove('active'));
        const targetBtn = document.querySelector(`.pill-btn[data-category="${filter}"]`);
        if (targetBtn) targetBtn.classList.add('active');
        window.renderProducts();
        dropdownPan.classList.remove('open');
        const catSection = document.getElementById('catalogo');
        if (catSection) catSection.scrollIntoView({ behavior: 'smooth' });
      });
    });

    document.addEventListener('click', () => {
      dropdownPan.classList.remove('open');
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════
     EVENTOS Y GESTIÓN INTERNA DEL PANEL DE ADMINISTRACIÓN
     ═══════════════════════════════════════════════════════════════════════ */

  const adminLoginForm = document.getElementById('admin-login-form');
  const adminPasswordInput = document.getElementById('admin-password-input');
  const toggleAdminPassword = document.getElementById('toggle-admin-password');
  const toggleAdminIcon = document.getElementById('toggle-admin-icon');
  const adminLoginError = document.getElementById('admin-login-error');
  const adminLoginModal = document.getElementById('admin-login-modal');
  const adminPanelModal = document.getElementById('admin-panel-modal');

  const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
  const adminTabPanes = document.querySelectorAll('.admin-tab-pane');
  const adminProductsCount = document.getElementById('admin-products-count');
  const adminProductsTbody = document.getElementById('admin-products-tbody');
  const adminSearchInput = document.getElementById('admin-search-input');
  const btnQuickNewProduct = document.getElementById('btn-quick-new-product');
  const btnResetProducts = document.getElementById('btn-reset-products');
  const adminNewProductTab = document.getElementById('admin-new-product-tab');

  // Formulario Producto
  const adminProductForm = document.getElementById('admin-product-form');
  const adminProductFormTitle = document.getElementById('admin-product-form-title');
  const productFormId = document.getElementById('product-form-id');
  const productFormName = document.getElementById('product-form-name');
  const productFormCategory = document.getElementById('product-form-category');
  const productFormPrice = document.getElementById('product-form-price');
  const productFormBadge = document.getElementById('product-form-badge');
  const productFormImage = document.getElementById('product-form-image');
  const productImagePresets = document.getElementById('product-image-presets');
  const previewImg = document.getElementById('preview-img');
  const productFormDesc = document.getElementById('product-form-desc');
  const productFormIngredients = document.getElementById('product-form-ingredients');
  const btnCancelProductEdit = document.getElementById('btn-cancel-product-edit');

  // Formulario Configuración
  const adminSettingsForm = document.getElementById('admin-settings-form');
  const settingWhatsapp = document.getElementById('setting-whatsapp');
  const settingPhone = document.getElementById('setting-phone');
  const settingTopbar = document.getElementById('setting-topbar');
  const settingHours = document.getElementById('setting-hours');
  const settingDelivery = document.getElementById('setting-delivery');
  const settingAddress = document.getElementById('setting-address');

  // Estadísticas
  const statTotalProducts = document.getElementById('stat-total-products');
  const statPanes = document.getElementById('stat-panes');
  const statReposteria = document.getElementById('stat-reposteria');
  const statAvgPrice = document.getElementById('stat-avg-price');

  // Mostrar / Ocultar contraseña
  if (toggleAdminPassword && adminPasswordInput) {
    toggleAdminPassword.addEventListener('click', () => {
      const type = adminPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      adminPasswordInput.setAttribute('type', type);
      if (toggleAdminIcon) {
        toggleAdminIcon.classList.toggle('fa-eye');
        toggleAdminIcon.classList.toggle('fa-eye-slash');
      }
    });
  }

  // Validación de Contraseña
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entered = adminPasswordInput ? adminPasswordInput.value.trim() : '';

      if (entered === ADMIN_PASSWORD) {
        sessionStorage.setItem('dt_admin_logged', 'true');
        if (adminLoginError) adminLoginError.classList.remove('show');
        showToast('¡Bienvenido Administrador! Acceso concedido.');
        window.openAdminPanel();
      } else {
        if (adminLoginError) adminLoginError.classList.add('show');
        if (adminPasswordInput) {
          adminPasswordInput.select();
        }
      }
    });
  }

  // Cerrar al hacer clic en el backdrop
  if (adminLoginModal) {
    adminLoginModal.addEventListener('click', (e) => {
      if (e.target === adminLoginModal) window.closeAdminLogin();
    });
  }
  if (adminPanelModal) {
    adminPanelModal.addEventListener('click', (e) => {
      if (e.target === adminPanelModal) window.closeAdminPanel();
    });
  }

  // Navegación de Pestañas
  const switchAdminTab = (tabId) => {
    adminTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    adminTabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });
  };

  adminTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchAdminTab(btn.dataset.tab);
    });
  });

  // Renderizar Tabla de Productos en el Panel
  window.renderAdminProducts = function(query = '') {
    if (!adminProductsTbody) return;
    const term = query.toLowerCase();
    const list = products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );

    if (adminProductsCount) adminProductsCount.textContent = products.length;

    if (list.length === 0) {
      adminProductsTbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-search" style="font-size: 1.8rem; margin-bottom: 8px; display:block;"></i>
            No se encontraron productos coincidentes.
          </td>
        </tr>
      `;
      return;
    }

    adminProductsTbody.innerHTML = list.map(p => `
      <tr>
        <td>
          <img src="${p.image}" alt="${p.name}" class="admin-product-thumb" onerror="this.src='https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&q=80'">
        </td>
        <td>
          <strong>${p.name}</strong>
          <div style="font-size:0.78rem; color:var(--text-muted); max-width:260px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.description}</div>
        </td>
        <td>
          <span class="admin-cat-tag ${p.category}">${p.category === 'panes' ? '🥖 Pan' : '🍰 Repostería'}</span>
        </td>
        <td style="font-weight:700; color:var(--espresso);">
          ${p.price === 0 ? 'Varía' : formatCurrency(p.price)}
        </td>
        <td>
          ${p.badge ? `<span class="admin-badge-pill">${p.badge}</span>` : '<span style="color:var(--text-light); font-size:0.8rem;">—</span>'}
        </td>
        <td>
          <div class="admin-actions-cell">
            <button type="button" class="admin-row-btn edit" data-id="${p.id}" title="Editar Producto">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="admin-row-btn delete" data-id="${p.id}" title="Eliminar Producto">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    adminProductsTbody.querySelectorAll('.admin-row-btn.edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        startEditProduct(id);
      });
    });

    adminProductsTbody.querySelectorAll('.admin-row-btn.delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        deleteProduct(id);
      });
    });
  };

  if (adminSearchInput) {
    adminSearchInput.addEventListener('input', (e) => {
      window.renderAdminProducts(e.target.value);
    });
  }

  const startNewProduct = () => {
    if (adminProductForm) adminProductForm.reset();
    if (productFormId) productFormId.value = '';
    if (adminProductFormTitle) adminProductFormTitle.innerHTML = '<i class="fa-solid fa-plus-circle"></i> Agregar Nuevo Producto';
    if (previewImg) previewImg.src = 'imagenes/torta_stitch.jpg';
    switchAdminTab('tab-new-product');
  };

  if (btnQuickNewProduct) btnQuickNewProduct.addEventListener('click', startNewProduct);
  if (adminNewProductTab) adminNewProductTab.addEventListener('click', startNewProduct);
  if (btnCancelProductEdit) {
    btnCancelProductEdit.addEventListener('click', () => {
      switchAdminTab('tab-products');
    });
  }

  const startEditProduct = (id) => {
    const p = products.find(item => item.id === id);
    if (!p) return;

    if (productFormId) productFormId.value = p.id;
    if (productFormName) productFormName.value = p.name;
    if (productFormCategory) productFormCategory.value = p.category;
    if (productFormPrice) productFormPrice.value = p.price;
    if (productFormBadge) productFormBadge.value = p.badge || '';
    if (productFormImage) productFormImage.value = p.image;
    if (previewImg) {
      previewImg.src = p.image;
      previewImg.onerror = () => { previewImg.src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&q=80'; };
    }
    if (productFormDesc) productFormDesc.value = p.description;
    if (productFormIngredients) productFormIngredients.value = p.ingredients || '';

    if (adminProductFormTitle) adminProductFormTitle.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Editar: ${p.name}`;
    switchAdminTab('tab-new-product');
  };

  if (productImagePresets) {
    productImagePresets.addEventListener('change', () => {
      if (productImagePresets.value && productFormImage && previewImg) {
        productFormImage.value = productImagePresets.value;
        previewImg.src = productImagePresets.value;
      }
    });
  }

  if (productFormImage) {
    productFormImage.addEventListener('input', () => {
      if (previewImg) previewImg.src = productFormImage.value || 'imagenes/torta_stitch.jpg';
    });
  }

  if (adminProductForm) {
    adminProductForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const idVal = productFormId ? productFormId.value : '';
      const name = productFormName ? productFormName.value.trim() : '';
      const category = productFormCategory ? productFormCategory.value : 'panes';
      const price = productFormPrice ? (parseInt(productFormPrice.value) || 0) : 0;
      const badge = productFormBadge ? productFormBadge.value.trim() : '';
      const image = productFormImage ? (productFormImage.value.trim() || 'imagenes/torta_stitch.jpg') : 'imagenes/torta_stitch.jpg';
      const description = productFormDesc ? productFormDesc.value.trim() : '';
      const ingredients = productFormIngredients ? (productFormIngredients.value.trim() || 'Ingredientes artesanales seleccionados.') : '';

      if (idVal) {
        const id = parseInt(idVal);
        const index = products.findIndex(p => p.id === id);
        if (index > -1) {
          products[index] = {
            ...products[index],
            name,
            category,
            price,
            badge,
            image,
            description,
            ingredients
          };
          showToast(`¡Producto "${name}" actualizado con éxito!`);
        }
      } else {
        const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        const newProduct = {
          id: nextId,
          name,
          category,
          price,
          badge,
          image,
          rating: 5.0,
          description,
          ingredients
        };
        products.unshift(newProduct);
        showToast(`¡Nuevo producto "${name}" publicado en el catálogo!`);
      }

      localStorage.setItem('dt_products', JSON.stringify(products));
      window.renderProducts();
      window.renderAdminProducts();
      window.updateAdminStats();
      adminProductForm.reset();
      switchAdminTab('tab-products');
    });
  }

  const deleteProduct = (id) => {
    const p = products.find(item => item.id === id);
    if (!p) return;

    const confirmed = confirm(`¿Estás seguro de eliminar "${p.name}" del catálogo?`);
    if (confirmed) {
      products = products.filter(item => item.id !== id);
      localStorage.setItem('dt_products', JSON.stringify(products));
      window.renderProducts();
      window.renderAdminProducts();
      window.updateAdminStats();
      showToast(`Producto "${p.name}" eliminado del catálogo.`);
    }
  };

  if (btnResetProducts) {
    btnResetProducts.addEventListener('click', () => {
      const confirmed = confirm('¿Deseas restablecer el catálogo al listado predeterminado de Dulce Tentación? Se perderán las modificaciones no guardadas.');
      if (confirmed) {
        products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
        localStorage.setItem('dt_products', JSON.stringify(products));
        window.renderProducts();
        window.renderAdminProducts();
        window.updateAdminStats();
        showToast('Catálogo restablecido al original exitosamente.');
      }
    });
  }

  window.populateSettingsForm = function() {
    if (settingWhatsapp) settingWhatsapp.value = storeSettings.whatsapp || '';
    if (settingPhone) settingPhone.value = storeSettings.phone || '';
    if (settingTopbar) settingTopbar.value = storeSettings.topbar || '';
    if (settingHours) settingHours.value = storeSettings.hours || '';
    if (settingDelivery) settingDelivery.value = storeSettings.delivery || '';
    if (settingAddress) settingAddress.value = storeSettings.address || '';
  };

  if (adminSettingsForm) {
    adminSettingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      storeSettings.whatsapp = settingWhatsapp ? (settingWhatsapp.value.trim() || '573214620314') : '573214620314';
      storeSettings.phone = settingPhone ? (settingPhone.value.trim() || '+57 321 462 0314') : '+57 321 462 0314';
      storeSettings.topbar = settingTopbar ? settingTopbar.value.trim() : '';
      storeSettings.hours = settingHours ? settingHours.value.trim() : '';
      storeSettings.delivery = settingDelivery ? settingDelivery.value.trim() : '';
      storeSettings.address = settingAddress ? settingAddress.value.trim() : '';

      localStorage.setItem('dt_settings', JSON.stringify(storeSettings));
      applyStoreSettings();
      showToast('¡Configuración de la tienda guardada con éxito!');
    });
  }

  window.updateAdminStats = function() {
    if (!statTotalProducts) return;
    const total = products.length;
    const panes = products.filter(p => p.category === 'panes').length;
    const reposteria = products.filter(p => p.category === 'reposteria').length;
    const avg = total > 0 ? Math.round(products.reduce((acc, p) => acc + p.price, 0) / total) : 0;

    statTotalProducts.textContent = total;
    if (statPanes) statPanes.textContent = panes;
    if (statReposteria) statReposteria.textContent = reposteria;
    if (statAvgPrice) statAvgPrice.textContent = formatCurrency(avg);
  };

  applyStoreSettings();
  window.renderProducts();
  updateCartUI();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
