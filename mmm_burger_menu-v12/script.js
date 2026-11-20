const WHATSAPP_NUMBER = "77788237005";

const menuItems = [
    // ================= БУРГЕР (5 та) =================
    {
        id: 1,
        category: "burger",
        title: "Чизбургер",
        description: "Булочка, говяжья котлета, сыр, соус",
        price: 1200,
        shape: "round",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 2,
        category: "burger",
        title: "Чикен Бургер",
        description: "Хрустящая куриная котлета, салат, соус",
        price: 1150,
        shape: "round",
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 3,
        category: "burger",
        title: "Дабл Бургер",
        description: "Две сочные котлеты, двойной сыр, огурчики",
        price: 1750,
        shape: "round",
        image: "https://images.unsplash.com/photo-1550547660-d9350fc64849?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 4,
        category: "burger",
        title: "Барбекю Бургер",
        description: "Говяжья котлета, соус BBQ, хрустящий лук, сыр",
        price: 1550,
        shape: "round",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 5,
        category: "burger",
        title: "Классик Бургер",
        description: "Мягкая булочка, котлета, томаты, фирменный соус",
        price: 1100,
        shape: "round",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85"
    },

    // ================= ЧИКЕН (5 та) =================
    {
        id: 6,
        category: "chicken",
        title: "Чикен Крылышки",
        description: "Хрустящие куриные крылышки (8 шт)",
        price: 1800,
        shape: "square",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 7,
        category: "chicken",
        title: "Чикен Стрипсы",
        description: "Сочное куриное филе в панировке",
        price: 1700,
        shape: "square",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 8,
        category: "chicken",
        title: "Чикен Баскет",
        description: "Большой сет ножек и крылышек",
        price: 3200,
        shape: "square",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 9,
        category: "chicken",
        title: "Чикен Наггетсы",
        description: "Золотистые куриные наггетсы (9 шт)",
        price: 1450,
        shape: "square",
        image: "https://images.unsplash.com/photo-1585325701956-60dd9c853156?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 10,
        category: "chicken",
        title: "Острый Чикен Сет",
        description: "Пикантные куриные кусочки со специями",
        price: 2100,
        shape: "square",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=85"
    },

    // ================= ЛАВАШ (5 та) =================
    {
        id: 11,
        category: "lavash",
        title: "Лаваш Классический",
        description: "Тонкий лаваш, курица, свежие овощи, соус",
        price: 1300,
        shape: "square",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 12,
        category: "lavash",
        title: "Лаваш Сырный",
        description: "Сырный лаваш, мясо, сыр чеддер, фирменный соус",
        price: 1500,
        shape: "square",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 13,
        category: "lavash",
        title: "Лаваш Острый",
        description: "Острый соус, курица, халапеньо и овощи",
        price: 1450,
        shape: "square",
        image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 14,
        category: "lavash",
        title: "Лаваш Говяжий",
        description: "Нежная говядина, томаты, маринованные огурцы",
        price: 1650,
        shape: "square",
        image: "https://images.unsplash.com/photo-1642783944285-c30b14d7c49a?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 15,
        category: "lavash",
        title: "Лаваш Грибной",
        description: "Шампиньоны, куриное филе, сливочный соус, сыр",
        price: 1550,
        shape: "square",
        image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=900&q=85"
    },

    // ================= ПИЦЦА (5 та) =================
    {
        id: 16,
        category: "pizza",
        title: "Маргарита Пицца",
        description: "Тонкое тесто, сыр, помидор",
        price: 1700,
        shape: "round",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 17,
        category: "pizza",
        title: "Сырный Пицца",
        description: "Тонкое тесто, сыр",
        price: 1900,
        shape: "round",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 18,
        category: "pizza",
        title: "Пеперони Пицца",
        description: "Тонкое тесто, сыр, колбаса",
        price: 2000,
        shape: "round",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 19,
        category: "pizza",
        title: "Грибной Пицца",
        description: "Тонкое тесто, сыр, грибы",
        price: 2100,
        shape: "round",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 20,
        category: "pizza",
        title: "Ассорти Пицца",
        description: "Тонкое тесто, сыр, колбаса, грибы, оливки",
        price: 2300,
        shape: "round",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=900&q=85"
    }
];

// Cart state: { [itemId]: quantity }
let cart = {};
let currentCategory = "all";
let currentModalItemId = null;

// DOM elements
const menuGrid = document.getElementById("menu-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartBadge = document.getElementById("cart-badge");
const whatsappFloatBtn = document.getElementById("whatsapp-float-btn");
const whatsappFloatText = document.getElementById("whatsapp-float-text");
const toastEl = document.getElementById("toast");

// Lightbox Modal elements
const imageModal = document.getElementById("image-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const modalLikeBtn = document.getElementById("modal-like-btn");
const modalLikeIcon = document.getElementById("modal-like-icon");
const modalLikeText = document.getElementById("modal-like-text");

// Cart Drawer elements
const cartOpenBtn = document.getElementById("cart-open-btn");
const cartModal = document.getElementById("cart-modal");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartClose = document.getElementById("cart-close");
const cartBody = document.getElementById("cart-body");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartWhatsappBtn = document.getElementById("cart-whatsapp-btn");
const customerNameInput = document.getElementById("customer-name");
const customerNameError = document.getElementById("customer-name-error");

let toastTimeout;
function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 2300);
}

function getTotalCount() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function getTotalAmount() {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
        const item = menuItems.find(i => i.id === Number(id));
        return item ? sum + item.price * qty : sum;
    }, 0);
}

function toggleLikeItem(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    if (cart[itemId]) {
        delete cart[itemId];
        showToast(`${item.title} убрано из корзины`);
    } else {
        cart[itemId] = 1;
        showToast(`${item.title} добавлено в корзину`);
    }

    updateCartUI();
    renderMenu(currentCategory);
    if (currentModalItemId === itemId) {
        updateModalLikeButton(itemId);
    }
}

function changeQuantity(itemId, delta) {
    if (!cart[itemId]) return;
    cart[itemId] += delta;
    if (cart[itemId] <= 0) {
        delete cart[itemId];
    }
    updateCartUI();
    renderMenu(currentCategory);
}

function updateOrderButtonState() {
    const hasName = customerNameInput.value.trim().length > 0;
    const hasItems = getTotalCount() > 0;

    if (hasName && hasItems) {
        cartWhatsappBtn.classList.remove("disabled-state");
    } else {
        cartWhatsappBtn.classList.add("disabled-state");
    }

    if (hasName) {
        customerNameInput.classList.remove("input-error");
        customerNameError.classList.remove("visible");
    }
}

customerNameInput.addEventListener("input", updateOrderButtonState);

function updateCartUI() {
    const totalCount = getTotalCount();
    const totalAmount = getTotalAmount();

    cartBadge.textContent = totalCount;
    if (whatsappFloatText) { whatsappFloatText.textContent = ""; }

    cartTotalPrice.textContent = `${totalAmount} ₸`;
    updateOrderButtonState();

    const cartIds = Object.keys(cart).map(Number);
    if (cartIds.length === 0) {
        cartBody.innerHTML = `<div class="cart-empty">Корзина пуста.<br>Нажмите «Заказать» на блюде, чтобы добавить его сюда.</div>`;
        return;
    }

    cartBody.innerHTML = "";
    cartIds.forEach(id => {
        const item = menuItems.find(i => i.id === id);
        if (!item) return;
        const qty = cart[id];

        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${item.price * qty} ₸</div>
            </div>
            <div class="cart-qty-controls">
                <button type="button" class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
                <span class="cart-qty-num">${qty}</span>
                <button type="button" class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
            </div>
        `;
        cartBody.appendChild(row);
    });
}

cartBody.addEventListener("click", (e) => {
    const btn = e.target.closest(".qty-btn");
    if (!btn) return;
    const id = Number(btn.getAttribute("data-id"));
    const action = btn.getAttribute("data-action");
    changeQuantity(id, action === "inc" ? 1 : -1);
});

function sendCartToWhatsApp() {
    const cartIds = Object.keys(cart).map(Number);
    if (cartIds.length === 0) {
        showToast("Сначала добавьте блюда в корзину");
        openCartModal();
        return;
    }

    const customerName = customerNameInput.value.trim();
    if (!customerName) {
        openCartModal();
        customerNameInput.classList.add("input-error");
        customerNameError.classList.add("visible");
        customerNameInput.focus();
        showToast("Введите ваше имя в корзине!");
        return;
    }

    let lines = [
        `Новый заказ из MMM Burger:`,
        `Имя: ${customerName}`,
        `-------------------`
    ];
    cartIds.forEach((id, idx) => {
        const item = menuItems.find(i => i.id === id);
        if (!item) return;
        const qty = cart[id];
        lines.push(`${idx + 1}. ${item.title} × ${qty} = ${item.price * qty} ₸`);
    });
    lines.push(`-------------------`);
    lines.push(`Итого: ${getTotalAmount()} ₸`);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

whatsappFloatBtn.addEventListener("click", sendCartToWhatsApp);
cartWhatsappBtn.addEventListener("click", sendCartToWhatsApp);

function openCartModal() {
    cartModal.classList.add("open");
    cartModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    updateOrderButtonState();
}

function closeCartModal() {
    cartModal.classList.remove("open");
    cartModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

cartOpenBtn.addEventListener("click", openCartModal);
cartClose.addEventListener("click", closeCartModal);
cartBackdrop.addEventListener("click", closeCartModal);

function updateModalLikeButton(itemId) {
    const isLiked = Boolean(cart[itemId]);
    if (isLiked) {
        modalLikeBtn.classList.add("liked");
        modalLikeIcon.textContent = "♥";
        modalLikeText.textContent = "В корзине";
    } else {
        modalLikeBtn.classList.remove("liked");
        modalLikeIcon.textContent = "♡";
        modalLikeText.textContent = "В корзину";
    }
}

function openImageModal(item) {
    currentModalItemId = item.id;
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.description;
    modalPrice.textContent = `${item.price} ₸`;
    updateModalLikeButton(item.id);

    imageModal.classList.add("open");
    imageModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeImageModal() {
    currentModalItemId = null;
    imageModal.classList.remove("open");
    imageModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

modalLikeBtn.addEventListener("click", () => {
    if (currentModalItemId !== null) {
        toggleLikeItem(currentModalItemId);
    }
});

modalClose.addEventListener("click", closeImageModal);
modalBackdrop.addEventListener("click", closeImageModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (imageModal.classList.contains("open")) closeImageModal();
        if (cartModal.classList.contains("open")) closeCartModal();
    }
});

// Render Menu Cards
function renderMenu(category = "all") {
    menuGrid.innerHTML = "";

    const filteredItems = category === "all"
        ? menuItems
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const isLiked = Boolean(cart[item.id]);
        const card = document.createElement("div");
        card.className = "menu-card";

        const imgClass = item.shape === "square" ? "card-image-wrap square-img" : "card-image-wrap";

        card.innerHTML = `
            <button type="button" class="like-btn ${isLiked ? "liked" : ""}" aria-label="Добавить в корзину" title="Заказать">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="${isLiked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <div class="${imgClass}">
                <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85';">
            </div>
            <h2 class="card-title">${item.title}</h2>
            <p class="card-desc">${item.description}</p>
            <div class="card-bottom-row">
                <span class="card-price">${item.price} ₸</span>
                <button type="button" class="card-like-pill ${isLiked ? "liked" : ""}">
                    ${isLiked ? "✓ Заказать" : "Заказать"}
                </button>
            </div>
        `;

        const likeBtn = card.querySelector(".like-btn");
        const likePill = card.querySelector(".card-like-pill");

        likeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleLikeItem(item.id);
        });

        likePill.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleLikeItem(item.id);
        });

        card.addEventListener("click", () => openImageModal(item));

        menuGrid.appendChild(card);
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentCategory = button.getAttribute("data-category");
        renderMenu(currentCategory);
    });
});

// Initial render
updateCartUI();
renderMenu("all");
