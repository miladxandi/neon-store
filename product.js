/* ╔══════════════════════════════════════════════════════════════╗
   ║         MyShop - Product Detail Page Scripts                 ║
   ║         Interactive Features & Functionality                 ║
   ╚══════════════════════════════════════════════════════════════╝ */


document.addEventListener('DOMContentLoaded', async () => {
    async function fetchProducts() {
        let response = await axios.get("https://api.escuelajs.co/api/v1/products");
        return response.data;
    }

    let products = await fetchProducts();

    var slug = new URLSearchParams(window.location.search).entries().find(entry => entry[0] === "slug");


    const currentProduct = products.find(p => p.slug === slug[1]);


    console.log(currentProduct);
    // ═══════════════ GALLERY FUNCTIONALITY ═══════════════
    const mainImage = document.getElementById('main-product-image');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    document.querySelectorAll('.product-title').forEach(title => {
        title.innerHTML = currentProduct.title;
    })

    thumbs.forEach((thumb , index) => {
        if (currentProduct.images !==null && currentProduct.images[index]){
            thumb.querySelector("img").setAttribute("src", currentProduct.images[index]);
            if (index===0){
                const newSrc = currentProduct.images[index];
                mainImage.style.opacity = '0';
                mainImage.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    mainImage.src = newSrc;
                    mainImage.style.opacity = '1';
                    mainImage.style.transform = 'scale(1)';
                }, 200);
            }
            thumb.addEventListener('click', () => {
                // Remove active from all
                thumbs.forEach(t => t.classList.remove('active'));
                // Add active to clicked
                thumb.classList.add('active');
                // Change main image with fade effect
                if (currentProduct.images !==null && currentProduct.images[index] ){
                    const newSrc = currentProduct.images[index];
                    mainImage.style.opacity = '0';
                    mainImage.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        mainImage.src = newSrc;
                        mainImage.style.opacity = '1';
                        mainImage.style.transform = 'scale(1)';
                    }, 200);
                }
            });
        }
        else{
            thumb.remove()
        }
    });

    // Smooth transition for main image
    mainImage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    // ═══════════════ ZOOM MODAL ═══════════════
    const zoomBtn = document.getElementById('zoom-btn');
    const zoomModal = document.getElementById('zoom-modal');
    const zoomImage = document.getElementById('zoom-image');
    const zoomClose = document.getElementById('zoom-close');
    const zoomBackdrop = zoomModal?.querySelector('.zoom-modal-backdrop');

    if (zoomBtn && zoomModal) {
        zoomBtn.addEventListener('click', () => {
            zoomImage.src = mainImage.src;
            zoomModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeZoom = () => {
            zoomModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        zoomClose?.addEventListener('click', closeZoom);
        zoomBackdrop?.addEventListener('click', closeZoom);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
                closeZoom();
            }
        });
    }

    // ═══════════════ WISHLIST TOGGLE ═══════════════
    const wishlistBtn = document.getElementById('wishlist-btn');

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            wishlistBtn.classList.toggle('active');
            const icon = wishlistBtn.querySelector('i');
            if (wishlistBtn.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showToast('به علاقه‌مندی‌ها اضافه شد', 'success', 'fas fa-heart');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showToast('از علاقه‌مندی‌ها حذف شد', 'info', 'far fa-heart');
            }
        });
    }

    // ═══════════════ COLOR SELECTION ═══════════════
    const colorOptions = document.querySelectorAll('.color-option');
    const selectedColorText = document.getElementById('selected-color');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            if (selectedColorText) {
                selectedColorText.textContent = option.getAttribute('data-color');
            }
        });
    });

    // ═══════════════ WARRANTY SELECTION ═══════════════
    const warrantyOptions = document.querySelectorAll('.warranty-option');

    warrantyOptions.forEach(option => {
        option.addEventListener('click', () => {
            warrantyOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // ═══════════════ QUANTITY SELECTOR ═══════════════
    const qtyInput = document.getElementById('qty-input');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');

    if (qtyInput && qtyMinus && qtyPlus) {
        qtyMinus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) {
                qtyInput.value = val - 1;
                animateQty();
            }
        });

        qtyPlus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value) || 1;
            let max = parseInt(qtyInput.max) || 10;
            if (val < max) {
                qtyInput.value = val + 1;
                animateQty();
            }
        });

        qtyInput.addEventListener('change', () => {
            let val = parseInt(qtyInput.value) || 1;
            let min = parseInt(qtyInput.min) || 1;
            let max = parseInt(qtyInput.max) || 10;
            if (val < min) qtyInput.value = min;
            if (val > max) qtyInput.value = max;
        });

        function animateQty() {
            qtyInput.style.transform = 'scale(1.2)';
            setTimeout(() => {
                qtyInput.style.transform = 'scale(1)';
            }, 150);
        }

        qtyInput.style.transition = 'transform 0.15s ease';
    }

    // ═══════════════ ADD TO CART ═══════════════
    const addToCartBtn = document.getElementById('add-to-cart');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const qty = qtyInput ? qtyInput.value : 1;
            const color = selectedColorText ? selectedColorText.textContent : '';

            // Button animation
            addToCartBtn.innerHTML = '<i class="fas fa-check"></i> <span>اضافه شد!</span>';
            addToCartBtn.style.background = 'linear-gradient(135deg, #2ed573, #1abc9c)';

            setTimeout(() => {
                addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> <span>افزودن به سبد خرید</span>';
                addToCartBtn.style.background = '';
            }, 2000);

            // Update cart badge
            const cartCount = document.getElementById('cart-count');
            if (cartCount) {
                let count = parseInt(cartCount.textContent) || 0;
                cartCount.textContent = count + parseInt(qty);
                cartCount.style.transform = 'scale(1.4)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 300);
            }

            showToast(`${qty} عدد به سبد خرید اضافه شد (رنگ: ${color})`, 'success', 'fas fa-cart-plus');
        });
    }

    // ═══════════════ BUY NOW ═══════════════
    const buyNowBtn = document.getElementById('buy-now');

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            showToast('در حال انتقال به صفحه پرداخت...', 'info', 'fas fa-bolt');
            // In production: window.location.href = '/checkout';
        });
    }

    // ═══════════════ TABS FUNCTIONALITY ═══════════════
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update panels
            tabPanels.forEach(panel => panel.classList.remove('active'));
            const targetPanel = document.getElementById(`tab-${tabId}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Handle #reviews link from rating section
    const reviewsLink = document.querySelector('a[href="#reviews"]');
    if (reviewsLink) {
        reviewsLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Activate reviews tab
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            const reviewsTab = document.querySelector('[data-tab="reviews"]');
            const reviewsPanel = document.getElementById('tab-reviews');
            if (reviewsTab) reviewsTab.classList.add('active');
            if (reviewsPanel) reviewsPanel.classList.add('active');
            // Scroll to tabs
            document.querySelector('.product-tabs-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // ═══════════════ STAR RATING INPUT ═══════════════
    const starInputs = document.querySelectorAll('.star-rating-input input');

    starInputs.forEach(input => {
        input.addEventListener('change', () => {
            const value = input.value;
            showToast(`امتیاز ${value} ستاره ثبت شد`, 'success', 'fas fa-star');
        });
    });

    // ═══════════════ REVIEW FORM SUBMIT ═══════════════
    const reviewForm = document.querySelector('.review-form');

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('review-title-input')?.value;
            const text = document.getElementById('review-text-input')?.value;
            const rating = document.querySelector('.star-rating-input input:checked')?.value;

            if (!rating) {
                showToast('لطفاً امتیاز خود را انتخاب کنید', 'info', 'fas fa-exclamation-circle');
                return;
            }

            if (!title || !text) {
                showToast('لطفاً عنوان و متن دیدگاه را وارد کنید', 'info', 'fas fa-exclamation-circle');
                return;
            }

            showToast('دیدگاه شما با موفقیت ثبت شد! ✅', 'success', 'fas fa-check-circle');
            reviewForm.reset();
        });
    }

    // ═══════════════ COPY LINK ═══════════════
    const copyLinkBtn = document.getElementById('copy-link');

    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('لینک محصول کپی شد!', 'success', 'fas fa-link');
            }).catch(() => {
                showToast('خطا در کپی لینک', 'info', 'fas fa-exclamation-circle');
            });
        });
    }

    // ═══════════════ REVIEW HELPFUL BUTTONS ═══════════════
    document.querySelectorAll('.review-helpful-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.color = 'var(--primary, #667eea)';
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            }
            showToast('ممنون از بازخورد شما!', 'success', 'fas fa-thumbs-up');
        });
    });

    // ═══════════════ NAVBAR SCROLL EFFECT ═══════════════
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ═══════════════ TOAST NOTIFICATION SYSTEM ═══════════════
    function showToast(message, type = 'info', icon = 'fas fa-info-circle') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;

        container.appendChild(toast);

        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.classList.add('toast-out');
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 3000);
    }

    // Make showToast globally accessible
    window.showToast = showToast;

    // ═══════════════ SMOOTH SCROLL FOR ANCHOR LINKS ═══════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ═══════════════ INTERSECTION OBSERVER FOR ANIMATIONS ═══════════════
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in animation to sections
    const animatedElements = document.querySelectorAll(
        '.product-detail-container, .product-tabs-container, .related-products-container, .product-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

});
