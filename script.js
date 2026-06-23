

        // ===== Data =====
        const properties = [{
                id: "1",
                price: 2450000,
                address: "1234 Park Avenue",
                city: "New York",
                state: "NY",
                zipCode: "10028",
                beds: 4,
                baths: 3.5,
                sqft: 3200,
                yearBuilt: 2019,
                propertyType: "condo",
                listingType: "sale",
                status: "active",
                images: [
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
                    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                ],
                description: "Stunning modern residence in the heart of Manhattan's Upper East Side. This meticulously designed home features floor-to-ceiling windows, chef's kitchen with premium appliances, and breathtaking city views.",
                features: ["Central Air", "In-unit Laundry", "Doorman", "Gym", "Rooftop Access"],
                parking: 1,
                hoa: 1850,
                agent: {
                    id: "a1",
                    name: "Sarah Mitchell",
                    phone: "(212) 555-0123",
                    email: "sarah@havenrealty.com",
                    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
                    brokerage: "Haven Premier"
                }
            },
            {
                id: "2",
                price: 1875000,
                address: "456 Wilshire Blvd",
                city: "Los Angeles",
                state: "CA",
                zipCode: "90024",
                beds: 3,
                baths: 2.5,
                sqft: 2400,
                yearBuilt: 2021,
                propertyType: "house",
                listingType: "sale",
                status: "active",
                images: [
                    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
                    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
                    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"
                ],
                description: "Contemporary California living at its finest. Open-concept design with seamless indoor-outdoor flow, private pool, and stunning mountain views. Smart home technology throughout.",
                features: ["Pool", "Smart Home", "Solar Panels", "EV Charger", "Wine Cellar"],
                parking: 2,
                hoa: null,
                agent: {
                    id: "a2",
                    name: "Michael Chen",
                    phone: "(310) 555-0456",
                    email: "michael@havenrealty.com",
                    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
                    brokerage: "Haven Premier"
                }
            },
            {
                id: "3",
                price: 3200000,
                address: "789 Ocean Drive",
                city: "Miami",
                state: "FL",
                zipCode: "33139",
                beds: 5,
                baths: 4,
                sqft: 4100,
                yearBuilt: 2020,
                propertyType: "house",
                listingType: "sale",
                status: "active",
                images: [
                    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
                    "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
                    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"
                ],
                description: "Luxurious waterfront estate with direct ocean access. This architectural masterpiece features imported Italian marble, infinity pool, private dock, and panoramic views of Biscayne Bay.",
                features: ["Waterfront", "Private Dock", "Infinity Pool", "Guest House", "Theater Room"],
                parking: 4,
                hoa: null,
                agent: {
                    id: "a1",
                    name: "Sarah Mitchell",
                    phone: "(212) 555-0123",
                    email: "sarah@havenrealty.com",
                    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
                    brokerage: "Haven Premier"
                }
            },
            {
                id: "4",
                price: 8500,
                address: "321 Market Street",
                city: "San Francisco",
                state: "CA",
                zipCode: "94105",
                beds: 2,
                baths: 2,
                sqft: 1450,
                yearBuilt: 2022,
                propertyType: "apartment",
                listingType: "rent",
                status: "active",
                images: [
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
                    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
                    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",
                    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
                ],
                description: "Luxury high-rise living in SoMa. This brand-new apartment features designer finishes, floor-to-ceiling windows with Bay Bridge views, and world-class amenities.",
                features: ["Concierge", "Fitness Center", "Rooftop Lounge", "Pet Spa", "Coworking Space"],
                parking: 1,
                hoa: 0,
                agent: {
                    id: "a2",
                    name: "Michael Chen",
                    phone: "(310) 555-0456",
                    email: "michael@havenrealty.com",
                    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
                    brokerage: "Haven Premier"
                }
            },
            {
                id: "5",
                price: 975000,
                address: "567 Lincoln Park",
                city: "Chicago",
                state: "IL",
                zipCode: "60614",
                beds: 3,
                baths: 2,
                sqft: 1800,
                yearBuilt: 2018,
                propertyType: "townhouse",
                listingType: "sale",
                status: "pending",
                images: [
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
                    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                ],
                description: "Charming Lincoln Park townhouse with modern updates. Original hardwood floors, exposed brick, private garden, and steps from the lakefront.",
                features: ["Private Garden", "Hardwood Floors", "Exposed Brick", "Garage", "Deck"],
                parking: 2,
                hoa: 450,
                agent: {
                    id: "a1",
                    name: "Sarah Mitchell",
                    phone: "(212) 555-0123",
                    email: "sarah@havenrealty.com",
                    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
                    brokerage: "Haven Premier"
                }
            },
            {
                id: "6",
                price: 4500000,
                address: "890 Beacon Hill",
                city: "Boston",
                state: "MA",
                zipCode: "02108",
                beds: 6,
                baths: 5,
                sqft: 5200,
                yearBuilt: 1890,
                propertyType: "house",
                listingType: "sale",
                status: "active",
                images: [
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
                    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                ],
                description: "Historic Beacon Hill brownstone meticulously restored with modern luxury. Original details preserved including ornate moldings, marble fireplaces, and grand staircase.",
                features: ["Historic", "Fireplaces", "Wine Cellar", "Library", "Garden"],
                parking: 2,
                hoa: null,
                agent: {
                    id: "a1",
                    name: "Sarah Mitchell",
                    phone: "(212) 555-0123",
                    email: "sarah@havenrealty.com",
                    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
                    brokerage: "Haven Premier"
                }
            }
        ];

        const cities = [{
                name: "New York",
                state: "NY",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600",
                count: 2543
            },
            {
                name: "Los Angeles",
                state: "CA",
                image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600",
                count: 1876
            },
            {
                name: "Miami",
                state: "FL",
                image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=600",
                count: 1234
            },
            {
                name: "San Francisco",
                state: "CA",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600",
                count: 987
            },
            {
                name: "Chicago",
                state: "IL",
                image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600",
                count: 1456
            }
        ];

        const agent = {
            id: "a1",
            name: "Sarah Mitchell",
            phone: "(212) 555-0123",
            email: "sarah@havenrealty.com",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
            brokerage: "Haven Premier",
            isVerified: true,
            bio: "With over 15 years of experience in luxury real estate, Sarah has closed over $500 million in transactions. She specializes in high-end properties in Manhattan and the Hamptons.",
            homesSold: 287,
            yearsExperience: 15,
            activeListings: 12,
            specialties: ["Luxury Homes", "Waterfront", "Investment Properties"]
        };

        // ===== State =====
        let currentPage = 'home';
        let currentPropertyId = null;
        let currentDashboardTab = 'saved';
        let galleryModalIndex = 0;
        let galleryModalImages = [];
        let favorites = new Set();

        // ===== Utility Functions =====
        function formatPrice(price, isRent = false) {
            if (isRent) return `$${price.toLocaleString()}/mo`;
            return `$${price.toLocaleString()}`;
        }

        function capitalizeFirst(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // ===== Navigation =====
        function navigateTo(page, id = null) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(`page-${page}`).classList.add('active');
            currentPage = page;
            window.scrollTo(0, 0);

            if (page === 'property' && id) {
                currentPropertyId = id;
                renderPropertyDetail(id);
            } else if (page === 'agent') {
                renderAgentProfile();
            } else if (page === 'dashboard') {
                renderDashboard();
            } else if (page === 'listings') {
                renderListings();
            }

            lucide.createIcons();
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            menu.classList.toggle('active');
            icon.setAttribute('data-lucide', menu.classList.contains('active') ? 'x' : 'menu');
            lucide.createIcons();
        }

        // ===== Search =====
        function handleSearch(e) {
            e.preventDefault();
            navigateTo('listings');
        }

        // ===== Filters =====
        function toggleFilter(btn) {
            btn.classList.toggle('active');
        }

        // ===== Property Cards =====
        function createPropertyCard(property, isListing = false) {
            const isRent = property.listingType === 'rent';
            const isFav = favorites.has(property.id);

            return `
        <div class="property-card" onclick="navigateTo('property', '${property.id}')">
          <div class="property-image-wrapper">
            <img src="${property.images[0]}" alt="${property.address}">
            ${property.status !== 'active' ? `<span class="property-badge ${property.status}">${property.status}</span>` : ''}
            <button class="property-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, '${property.id}')">
              <i data-lucide="heart"></i>
            </button>
            <div class="property-dots">
              ${property.images.map((_, i) => `<span class="property-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
            </div>
          </div>
          <div class="property-content">
            <div class="property-price">${formatPrice(property.price, isRent)}</div>
            <div class="property-address">${property.address}</div>
            <div class="property-location">${property.city}, ${property.state} ${property.zipCode}</div>
            <div class="property-details">
              <span class="property-detail"><i data-lucide="bed"></i> ${property.beds} bd</span>
              <span class="property-detail"><i data-lucide="bath"></i> ${property.baths} ba</span>
              <span class="property-detail"><i data-lucide="square"></i> ${property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      `;
        }

        function toggleFavorite(e, id) {
            e.stopPropagation();
            if (favorites.has(id)) {
                favorites.delete(id);
            } else {
                favorites.add(id);
            }
            renderCurrentPage();
        }

        function renderCurrentPage() {
            if (currentPage === 'home') {
                renderCityCards();
                renderFeaturedProperties();
            } else if (currentPage === 'listings') {
                renderListings();
            } else if (currentPage === 'dashboard') {
                renderDashboard();
            }
            lucide.createIcons();
        }

        // ===== Home Page Renders =====
        function renderCityCards() {
            const grid = document.getElementById('city-grid');
            grid.innerHTML = cities.map((city, i) => `
        <div class="city-card animate-fade-in" style="animation-delay: ${i * 0.1}s" onclick="navigateTo('listings')">
          <img src="${city.image}" alt="${city.name}">
          <div class="city-card-overlay"></div>
          <div class="city-card-content">
            <div class="city-card-name">${city.name}</div>
            <div class="city-card-count">${city.count.toLocaleString()} properties</div>
          </div>
        </div>
      `).join('');
        }

        function renderFeaturedProperties() {
            const scroll = document.getElementById('properties-scroll');
            scroll.innerHTML = properties.filter(p => p.status === 'active').map((p, i) => `
        <div style="animation-delay: ${i * 0.1}s" class="animate-fade-in">
          ${createPropertyCard(p)}
        </div>
      `).join('');
        }

        function scrollProperties(dir) {
            const scroll = document.getElementById('properties-scroll');
            scroll.scrollBy({
                left: dir * 400,
                behavior: 'smooth'
            });
        }

        // ===== Listings Page =====
        function renderListings() {
            const grid = document.getElementById('listings-grid');
            document.getElementById('listings-count').textContent = properties.length;
            grid.innerHTML = properties.map((p, i) => `
        <div class="animate-fade-in" style="animation-delay: ${i * 0.05}s">
          ${createPropertyCard(p, true)}
        </div>
      `).join('');
            lucide.createIcons();
        }

        // ===== Property Detail =====
        function renderPropertyDetail(id) {
            const property = properties.find(p => p.id === id);
            if (!property) return;

            const isRent = property.listingType === 'rent';
            galleryModalImages = property.images;

            // Gallery
            document.getElementById('property-gallery').innerHTML = `
        <div class="gallery-main" onclick="openGalleryModal(0)">
          <img src="${property.images[0]}" alt="${property.address}">
          <button class="btn btn-secondary btn-sm gallery-btn">
            <i data-lucide="expand"></i> View All Photos
          </button>
        </div>
        ${property.images.slice(1, 5).map((img, i) => `
          <div class="gallery-item" onclick="openGalleryModal(${i + 1})">
            <img src="${img}" alt="${property.address}">
            ${i === 3 && property.images.length > 5 ? `<div class="gallery-overlay">+${property.images.length - 5} more</div>` : ''}
          </div>
        `).join('')}
      `;

            // Main Content
            document.getElementById('property-main').innerHTML = `
        <div class="detail-card">
          <div class="detail-header">
            <div>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <span class="detail-price">${formatPrice(property.price, isRent)}</span>
                ${property.status !== 'active' ? `<span class="property-badge ${property.status}">${property.status}</span>` : ''}
              </div>
              <div class="detail-address">${property.address}</div>
              <div class="detail-location">
                <i data-lucide="map-pin"></i>
                <span>${property.city}, ${property.state} ${property.zipCode}</span>
              </div>
            </div>
            <div class="detail-actions">
              <button class="btn btn-outline btn-icon" onclick="toggleFavorite(event, '${property.id}')">
                <i data-lucide="heart"></i>
              </button>
              <button class="btn btn-outline btn-icon">
                <i data-lucide="share-2"></i>
              </button>
            </div>
          </div>
          <div class="detail-quick-stats">
            <span class="quick-stat"><i data-lucide="bed"></i> ${property.beds} beds</span>
            <span class="quick-stat"><i data-lucide="bath"></i> ${property.baths} baths</span>
            <span class="quick-stat"><i data-lucide="square"></i> ${property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <div class="detail-card">
          <h2 class="detail-section-title">Property Details</h2>
          <div class="details-grid">
            <div class="detail-item">
              <div class="detail-item-icon"><i data-lucide="bed"></i></div>
              <div><div class="detail-item-label">Bedrooms</div><div class="detail-item-value">${property.beds}</div></div>
            </div>
            <div class="detail-item">
              <div class="detail-item-icon"><i data-lucide="bath"></i></div>
              <div><div class="detail-item-label">Bathrooms</div><div class="detail-item-value">${property.baths}</div></div>
            </div>
            <div class="detail-item">
              <div class="detail-item-icon"><i data-lucide="square"></i></div>
              <div><div class="detail-item-label">Square Feet</div><div class="detail-item-value">${property.sqft.toLocaleString()}</div></div>
            </div>
            <div class="detail-item">
              <div class="detail-item-icon"><i data-lucide="calendar"></i></div>
              <div><div class="detail-item-label">Year Built</div><div class="detail-item-value">${property.yearBuilt}</div></div>
            </div>
            <div class="detail-item">
              <div class="detail-item-icon"><i data-lucide="car"></i></div>
              <div><div class="detail-item-label">Parking</div><div class="detail-item-value">${property.parking} spaces</div></div>
            </div>
            <div class="detail-item">
              <div class="detail-item-icon"><i data-lucide="building"></i></div>
              <div><div class="detail-item-label">Property Type</div><div class="detail-item-value">${capitalizeFirst(property.propertyType)}</div></div>
            </div>
          </div>
          ${property.hoa ? `
            <div style="border-top: 1px solid var(--border); margin-top: 1.5rem; padding-top: 1.5rem; display: flex; justify-content: space-between;">
              <span style="color: var(--muted-foreground)">HOA Fees</span>
              <span style="font-weight: 500">$${property.hoa.toLocaleString()}/month</span>
            </div>
          ` : ''}
        </div>

        <div class="detail-card">
          <h2 class="detail-section-title">About This Home</h2>
          <p class="detail-description">${property.description}</p>
        </div>

        <div class="detail-card">
          <h2 class="detail-section-title">Features & Amenities</h2>
          <div class="features-grid">
            ${property.features.map(f => `
              <div class="feature-item">
                <i data-lucide="check"></i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;

            // Agent Card
            document.getElementById('agent-card').innerHTML = `
        <div class="agent-card-inner">
          <div class="agent-info">
            <img src="${property.agent.photo}" alt="${property.agent.name}" class="agent-photo" onclick="navigateTo('agent')">
            <div>
              <div class="agent-name" style="cursor: pointer" onclick="navigateTo('agent')">${property.agent.name}</div>
              <div class="agent-brokerage">${property.agent.brokerage}</div>
            </div>
          </div>
          <div class="agent-buttons">
            <a href="tel:${property.agent.phone}" class="btn btn-outline"><i data-lucide="phone"></i> Call</a>
            <a href="mailto:${property.agent.email}" class="btn btn-outline"><i data-lucide="mail"></i> Email</a>
          </div>
          <div class="divider">
            <div class="divider-line"></div>
            <span class="divider-text">or schedule a tour</span>
          </div>
          <form class="tour-form" id="tour-form" onsubmit="handleTourSubmit(event)">
            <input type="text" class="form-input" placeholder="Your Name" required oninput="validateInput(this)">
            <input type="email" class="form-input" placeholder="Email Address" required oninput="validateInput(this)">
            <input type="tel" class="form-input" placeholder="Phone Number" required oninput="validateInput(this)">
            <textarea class="form-input form-textarea" placeholder="Message" required oninput="validateInput(this)">I'm interested in ${property.address}, ${property.city}</textarea>
            <button type="submit" class="btn btn-hero" style="width: 100%">
              <i data-lucide="calendar"></i> Request a Tour
            </button>
          </form>
          <p class="form-disclaimer">By submitting, you agree to our Terms and Privacy Policy.</p>
        </div>
      `;

            lucide.createIcons();
        }

        function validateInput(input) {
            if (input.value.trim().length > 0) {
                if (input.type === 'email' && !input.value.includes('@')) return;
                input.classList.add('valid');
            } else {
                input.classList.remove('valid');
            }
        }

        function handleTourSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('tour-form');
            form.parentElement.innerHTML = `
        <div class="success-message animate-scale-in">
          <div class="success-icon"><i data-lucide="check-circle"></i></div>
          <div class="success-title">Request Sent!</div>
          <p class="success-text">The agent will contact you shortly.</p>
        </div>
      `;
            lucide.createIcons();
        }

        // ===== Gallery Modal =====
        function openGalleryModal(index) {
            galleryModalIndex = index;
            const modal = document.getElementById('gallery-modal');
            const img = document.getElementById('gallery-modal-img');
            const dots = document.getElementById('gallery-modal-dots');

            img.src = galleryModalImages[index];
            dots.innerHTML = galleryModalImages.map((_, i) =>
                `<span class="gallery-modal-dot ${i === index ? 'active' : ''}" onclick="goToModalImage(${i})"></span>`
            ).join('');

            modal.classList.add('active');
            lucide.createIcons();
        }

        function closeGalleryModal() {
            document.getElementById('gallery-modal').classList.remove('active');
        }

        function changeModalImage(dir) {
            galleryModalIndex = (galleryModalIndex + dir + galleryModalImages.length) % galleryModalImages.length;
            openGalleryModal(galleryModalIndex);
        }

        function goToModalImage(index) {
            openGalleryModal(index);
        }

        // ===== Agent Profile =====
        function renderAgentProfile() {
            const agentListings = properties.filter(p => p.agent.id === agent.id);

            document.getElementById('agent-profile-content').innerHTML = `
        <section class="agent-hero">
          <div class="container">
            <div class="agent-hero-content">
              <div class="agent-hero-photo">
                <img src="${agent.photo}" alt="${agent.name}">
                <div class="verified-badge"><i data-lucide="check-circle"></i></div>
              </div>
              <div class="agent-hero-name">
                <h1>${agent.name}</h1>
                <span class="verified-pill"><i data-lucide="check-circle"></i> Verified</span>
              </div>
              <p class="agent-hero-brokerage">${agent.brokerage}</p>
              <div class="agent-specialties">
                ${agent.specialties.map(s => `<span class="specialty-tag">${s}</span>`).join('')}
              </div>
              <div class="agent-hero-buttons">
                <a href="tel:${agent.phone}" class="btn btn-hero"><i data-lucide="phone"></i> ${agent.phone}</a>
                <a href="mailto:${agent.email}" class="btn btn-hero-outline"><i data-lucide="mail"></i> Email</a>
              </div>
            </div>
          </div>
        </section>

        <section class="agent-stats">
          <div class="container">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-icon"><i data-lucide="home"></i></div>
                <div class="stat-number">${agent.homesSold}</div>
                <div class="stat-label">Homes Sold</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon"><i data-lucide="clock"></i></div>
                <div class="stat-number">${agent.yearsExperience}</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon"><i data-lucide="award"></i></div>
                <div class="stat-number">${agent.activeListings}</div>
                <div class="stat-label">Active Listings</div>
              </div>
            </div>
          </div>
        </section>

        <section class="agent-about">
          <div class="container">
            <div class="about-card">
              <h2 class="about-title">About ${agent.name}</h2>
              <p class="about-text">${agent.bio}</p>
            </div>
          </div>
        </section>

        <section class="agent-listings">
          <div class="container">
            <h2 class="agent-listings-title">Active Listings by ${agent.name.split(' ')[0]}</h2>
            <div class="agent-listings-grid">
              ${agentListings.map((p, i) => `
                <div class="animate-fade-in" style="animation-delay: ${i * 0.1}s">
                  ${createPropertyCard(p)}
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <div class="footer-bottom" style="margin-top: 0; border-top: none; padding-top: 0">
              <span>© 2024 Haven Real Estate. All rights reserved.</span>
            </div>
          </div>
        </footer>
      `;

            lucide.createIcons();
        }

        // ===== Dashboard =====
        function switchDashboardTab(tab, btn) {
            currentDashboardTab = tab;
            document.querySelectorAll('.dashboard-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            renderDashboard();
        }

        function renderDashboard() {
            const content = document.getElementById('dashboard-content');

            if (currentDashboardTab === 'saved') {
                const savedProps = properties.slice(0, 4);
                content.innerHTML = savedProps.map((p, i) => `
          <div class="saved-property-card animate-fade-in" style="animation-delay: ${i * 0.05}s">
            <div class="saved-property-image" onclick="navigateTo('property', '${p.id}')">
              <img src="${p.images[0]}" alt="${p.address}">
            </div>
            <div class="saved-property-content">
              <div class="saved-property-info">
                <div class="saved-property-header">
                  <span class="saved-property-price" onclick="navigateTo('property', '${p.id}')">${formatPrice(p.price, p.listingType === 'rent')}</span>
                  <span class="status-badge ${p.status}">${p.status}</span>
                </div>
                <div class="saved-property-address">${p.address}</div>
                <div class="saved-property-location">${p.city}, ${p.state} ${p.zipCode}</div>
                <div class="saved-property-details">
                  <span>${p.beds} bd</span>
                  <span>${p.baths} ba</span>
                  <span>${p.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
              <div class="saved-property-actions">
                <button class="btn btn-outline btn-sm" onclick="navigateTo('property', '${p.id}')">
                  <i data-lucide="external-link"></i> View
                </button>
                <button class="btn btn-ghost btn-sm btn-danger">
                  <i data-lucide="trash-2"></i> Remove
                </button>
              </div>
            </div>
          </div>
        `).join('');
            } else if (currentDashboardTab === 'searches') {
                const searches = [{
                        id: "1",
                        query: "3+ bed homes in Manhattan under $3M",
                        count: 24,
                        updated: "2 hours ago"
                    },
                    {
                        id: "2",
                        query: "Condos in Los Angeles with pool",
                        count: 18,
                        updated: "5 hours ago"
                    },
                    {
                        id: "3",
                        query: "Waterfront properties in Miami",
                        count: 12,
                        updated: "1 day ago"
                    }
                ];
                content.innerHTML = searches.map((s, i) => `
          <div class="search-card-item animate-fade-in" style="animation-delay: ${i * 0.05}s">
            <div class="search-card-left">
              <div class="search-card-icon"><i data-lucide="search"></i></div>
              <div>
                <div class="search-card-title">${s.query}</div>
                <div class="search-card-meta">${s.count} properties • Updated ${s.updated}</div>
              </div>
            </div>
            <div class="search-card-actions">
              <button class="btn btn-outline btn-sm"><i data-lucide="bell"></i> Alerts On</button>
              <button class="btn btn-ghost btn-sm btn-danger"><i data-lucide="trash-2"></i></button>
            </div>
          </div>
        `).join('');
            } else if (currentDashboardTab === 'messages') {
                const messages = [{
                        id: "1",
                        agent: "Sarah Mitchell",
                        preview: "Thanks for your interest in 1234 Park Avenue...",
                        time: "2 hours ago",
                        unread: true,
                        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100"
                    },
                    {
                        id: "2",
                        agent: "Michael Chen",
                        preview: "The property at 456 Wilshire Blvd is still available...",
                        time: "1 day ago",
                        unread: false,
                        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                    }
                ];
                content.innerHTML = messages.map((m, i) => `
          <div class="message-card ${m.unread ? 'unread' : ''} animate-fade-in" style="animation-delay: ${i * 0.05}s">
            <img src="${m.photo}" alt="${m.agent}" class="message-photo">
            <div class="message-content">
              <div class="message-header">
                <span class="message-name">${m.agent}</span>
                <span class="message-time">${m.time}</span>
              </div>
              <p class="message-preview">${m.preview}</p>
            </div>
            ${m.unread ? '<span class="unread-dot"></span>' : ''}
          </div>
        `).join('');
            }

            lucide.createIcons();
        }

        // ===== Search Tabs =====
        document.querySelectorAll('.search-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // ===== Init =====
        document.addEventListener('DOMContentLoaded', function() {
            lucide.createIcons();
            renderCityCards();
            renderFeaturedProperties();
            lucide.createIcons();
        });

        // Close gallery modal on escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeGalleryModal();
            if (e.key === 'ArrowLeft') changeModalImage(-1);
            if (e.key === 'ArrowRight') changeModalImage(1);
        });
