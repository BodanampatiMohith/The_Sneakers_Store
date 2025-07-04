const products = [    {
        id: 1,
        name: "Nike Air Force 1 '07",
        price: 129.99,
        category: "nike",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoes-WrLlWX.png"
    },
    {
        id: 3,
        name: "Nike Air Max 270",
        price: 159.99,
        category: "nike",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-2V5C4p.png"
    },
    {
        id: 7,
        name: "Adidas Superstar",
        price: 89.99,
        category: "adidas",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg"
    },
    {
        id: 8,
        name: "Adidas NMD_R1",
        price: 149.99,
        category: "adidas",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/NMD_R1_Shoes_Black_GZ9256_01_standard.jpg"
    },
    {
        id: 10,
        name: "New Balance 550",
        price: 119.99,
        category: "newbalance",
        image: "https://nb.scene7.com/is/image/NB/bb550ncb_nb_02_i?$pdpflexf2$&wid=440&hei=440"
    },
    {
        id: 12,
        name: "New Balance Fresh Foam X 1080v12",
        price: 159.99,
        category: "newbalance",
        image: "https://nb.scene7.com/is/image/NB/m1080k12_nb_02_i?$pdpflexf2$&wid=440&hei=440"
    }
];
document.addEventListener('DOMContentLoaded', () => {
    function displayProducts(category = 'all') {
        const container = document.getElementById('products-container');
        const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
        
        container.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button onclick="addToCart(${product.id})" class="add-to-cart-btn">BUY NOW</button>
                </div>
            </div>
        `).join('');
    }
    console.log("Setting up category pill event listeners");
    console.log("Setting up category pill event listeners");
    document.querySelectorAll('.category-pill').forEach(pill => {
        console.log("Found category pill:", pill);
        pill.addEventListener('click', () => {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            displayProducts(pill.dataset.category);
        });
    });

    console.log("Displaying products");
    console.log("Displaying products");

    displayProducts();
}); cart
function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'cart-message';
    message.textContent = `${productName} added to cart!`;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 2000);
    }, 100);
}
function initializeFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    function filterProducts() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';
        let filteredProducts = [...products];
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.category === category);
        }
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(num => 
                num === '+' ? Infinity : Number(num));
            filteredProducts = filteredProducts.filter(product =>
                product.price >= min && product.price <= max);
        }
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            
            productContainer.appendChild(productCard);
        });
    }
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
}
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    let hours = 24;
    let minutes = 0;
    let seconds = 0;
    
    const countdown = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(countdown);
                    countdownElement.textContent = "SALE ENDED";
                    return;
                }
                hours--;
                minutes = 59;
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        countdownElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    const flashContainer = document.querySelector('.flash-sale-container');
    const flashContent = document.querySelector('.flash-sale-content');
    
    if (flashContainer && flashContent) {
        flashContainer.addEventListener('mouseenter', () => {
            flashContent.style.animationPlayState = 'paused';
        });
        
        flashContainer.addEventListener('mouseleave', () => {
            flashContent.style.animationPlayState = 'running';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('category-filter')) {
        initializeFilters();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', () => {
        sortProducts(sortSelect.value);
    });
    const priceRange = document.getElementById('price-range');
    priceRange.addEventListener('change', () => {
        filterByPrice(priceRange.value);
    });
    const sizeSelect = document.getElementById('size-select');
    sizeSelect.addEventListener('change', () => {
        filterBySize(sizeSelect.value);
    });
});

function sortProducts(sortBy) {
    const productsContainer = document.querySelector('.products-grid');
    const products = Array.from(productsContainer.getElementsByClassName('product-card'));
    products.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        
        if (sortBy === 'price-low') {
            return priceA - priceB;
        } else if (sortBy === 'price-high') {
            return priceB - priceA;
        }
    });
    products.forEach(product => {
        productsContainer.appendChild(product);
    });
}
