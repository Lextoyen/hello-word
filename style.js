 // Sample product data
        const products = {
           clothes: [
                { id: 1, name: 'ເສື້ອຍືດຄໍມົນ', price: 79000 , image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop' },
                { id: 2, name: 'ເສື້ອແຂນຍາວ', price: 79000 , image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop' },
                { id: 3, name: 'ເສື້ອແຈັກເກັດ', price: 79000 , image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop' },
                { id: 4, name: 'ເສື້ອກ້າມ', price: 79000 , image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop' }
            ],
            pants: [
                { id: 5, name: 'ໂສ້ງຢີນ', price: 79000 , image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop' },
                { id: 6, name: 'ໂສ້ງຂາສັ້ນ', price: 79000 , image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=300&fit=crop' },
                { id: 7, name: 'ໂສ້ງຜ້າ', price: 79000 , image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' },
                { id: 8, name: 'ໂສ້ງວອມ', price: 79000 , image: 'https://images.unsplash.com/photo-1506629905477-66a00ded2cd2?w=300&h=300&fit=crop' }
            ],
            skirts: [
                { id: 9, name: 'ກະໂປງຍາວ', price: 7900 , image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' },
                { id: 11, name: 'ເດຣສ', price: 79000 , image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop' },
                { id: 12, name: 'ກະໂປງຜ້າ', price: 79000 , image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop' }
            ],
            shoes: [
                { id: 13, name: 'ເກີບຜ້າໃບ', price: 79000 , image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop' },
                { id: 14, name: 'ເກີບແຟຊັ່ນ', price: 79000 , image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop' },
                { id: 15, name: 'ເກີບໜັງ', price: 79000 , image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=300&h=300&fit=crop' },
                { id: 16, name: 'ເກີຍແຕະ', price: 79000 , image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&h=300&fit=crop' }
            ],
            socks: [
                { id: 17, name: 'ຖົງຕີນຂາວ', price: 79000 , image: 'https://images.unsplash.com/photo-1586350901163-90d1e30dd8d5?w=300&h=300&fit=crop' },
                { id: 18, name: 'ຖົງຕີນສີ', price: 79000 , image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop' },
                { id: 19, name: 'ຖົງຕີນສະປອດ', price: 79000 , image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=300&h=300&fit=crop' },
                { id: 20, name: 'ຖົງຕີນຍາວ', price: 79000 , image: 'https://images.unsplash.com/photo-1578766071225-9b4f6a86a72f?w=300&h=300&fit=crop' }
            ],
            belts: [
                { id: 21, name: 'ສາຍແອວໜັງ', price: 79000 , image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop' },
                { id: 22, name: 'ສາຍແອວແຟຊັ່ນ', price: 79000 , image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop' },
                { id: 23, name: 'ສາຍແອວຜ້າ', price: 79000 , image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=300&h=300&fit=crop' },
                { id: 24, name: 'ສາວແອວສາຍ', price: 79000 , image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop' }
            ]
        };

            // Function to format price with commas
        function formatPrice(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        let cart = [];

        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Load products for specific pages
            if (pageId === 'shop') {
                loadAllProducts();
            } else if (products[pageId]) {
                loadProducts(pageId, products[pageId]);
            }
            
            // Hide dropdown if open
            document.getElementById('dropdown').classList.remove('show');
        }

        function loadAllProducts() {
            const container = document.getElementById('allProducts');
            container.innerHTML = '';
            
            Object.values(products).flat().forEach(product => {
                container.appendChild(createProductCard(product));
            });
        }

        function loadProducts(containerId, productList) {
            const container = document.getElementById(containerId + 'Products');
            if (container) {
                container.innerHTML = '';
                productList.forEach(product => {
                    container.appendChild(createProductCard(product));
                });
            }
        }

        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size: 4rem; color: #999;\\'>📷</div>'">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${formatPrice(product.price)}KIP</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                    Add to Cart
                    </button>
                </div>
            `;
            return card;
        }

        function addToCart(id, name, price) {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            updateCartDisplay();
        }

        function updateCartDisplay() {
            const cartCount = document.getElementById('cartCount');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            cartItems.innerHTML = '';
            let total = 0;
            
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <div>
                        <div>${item.name}</div>
                        <div>${formatPrice(item.price)}KIP x ${item.quantity}</div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="background: #ff4757; color: white; border: none; padding: 0.5rem; border-radius: 5px; cursor: pointer;">Delete</button>
                `;
                cartItems.appendChild(itemElement);
                total += item.price * item.quantity;
            });
            
            cartTotal.textContent = `ລວມ: ${formatPrice(total)}KIP`;
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCartDisplay();
        }

        function toggleCart() {
            const cartModal = document.getElementById('cartModal');
            cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
        }

        function toggleDropdown() {
            const dropdown = document.getElementById('dropdown');
            dropdown.classList.toggle('show');
        }

        function checkout() {
            if (cart.length === 0) {
                alert('ກະຕ່າສິນຄ້າວ່າງ');
                return;
            }
            
            let message = 'ສະບາຍດີ ສົນໃຈຊື້ສິນຄ້າໂຕນີ້:\n\n';
            let total = 0;
            
            cart.forEach(item => {
                 const itemTotal = item.price * item.quantity;
                message += `${item.name} - ${formatPrice(item.price)}KIP x ${item.quantity} = ${item.price * item.quantity}KIP\n`;
                total += item.price * item.quantity;
            });
            
            message += `\nລວມທັງໝົດ: ${formatPrice(total)}KIP\n\nຂໍຂອບໃຈ`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `wa.me/2097272081text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }

        // Close cart when clicking outside
        window.onclick = function(event) {
            const cartModal = document.getElementById('cartModal');
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            showPage('home');

        });
