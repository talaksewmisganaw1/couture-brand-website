//remove loader
const loader = document.querySelector(".loader");
const webContent = document.getElementById("main");

window.addEventListener("load", (e) => {
    loader.classList.add("hidden");
    webContent.classList.remove("hidden");
})
    
    
// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


const mobileLinks = document.querySelectorAll("#mobile-menu a");
mobileLinks.forEach(link => link.addEventListener("click", (e) => {
    document.getElementById('mobile-menu').classList.add('hidden');
}))



// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Collection data
const collections = {
    woman: {
        title: "Woman Collection",
        description: "Our Woman collection celebrates Ethiopian culture with flowing silhouettes, intricate embroidery, and luxurious fabrics. Each piece is designed to empower and inspire confidence.",
        items: [
            { title: "Silk Evening Gown", price: "24,500 Br", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3" },
            { title: "Lace Cocktail Dress", price: "18,900 Br", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3" },
            { title: "Embroidered Jumpsuit", price: "22,300 Br", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3" },
            { title: "Velvet Wrap Dress", price: "20,700 Br", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3" },
            { title: "Chiffon Maxi Dress", price: "19,500 Br", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3" },
            { title: "Tulle Ball Gown", price: "27,800 Br", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3" }
        ]
    },
    men: {
        title: "Men Collection",
        description: "The Men collection redefines modern masculinity with tailored precision, innovative fabrics, and subtle details that command attention. Sophistication meets contemporary edge.",
        items: [
            { title: "Wool Suit", price: "32,500 Br", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3" },
            { title: "Cashmere Overcoat", price: "28,900 Br", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3" },
            { title: "Silk Dinner Jacket", price: "25,300 Br", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3" },
            { title: "Linen Summer Suit", price: "22,700 Br", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3" },
            { title: "Velvet Smoking Jacket", price: "29,500 Br", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3" },
            { title: "Tweed Three-Piece", price: "35,800 Br", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3" }
        ]
    },
    couple: {
        title: "Couple & Family Collection",
        description: "Our Couple & Family collection offers coordinated elegance for special occasions. Harmonious designs that complement each other while celebrating individuality.",
        items: [
            { title: "His & Hers Silk Set", price: "45,500 Br", image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3" },
            { title: "Family Formal Attire", price: "68,900 Br", image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3" },
            { title: "Wedding Party Set", price: "52,300 Br", image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3" },
            { title: "Anniversary Collection", price: "42,700 Br", image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3" },
            { title: "Parent & Child Formal", price: "39,500 Br", image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3" },
            { title: "Siblings Coordinated", price: "47,800 Br", image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3" }
        ]
    }
};

// Open collection function
function openCollection(collectionId) {
    const collection = collections[collectionId];
    const overlay = document.getElementById('collection-overlay');
    const title = document.getElementById('collection-title');
    const description = document.getElementById('collection-description');
    const grid = document.getElementById('collection-grid');
    
    // Set collection info
    title.textContent = collection.title;
    description.textContent = collection.description;
    
    // Clear previous items
    grid.innerHTML = '';
    
    // Add new items
    collection.items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'collection-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="item-overlay">
                <h3 class="font-display item-title">${item.title}</h3>
                <p class="item-price">${item.price}</p>
            </div>
        `;
        grid.appendChild(itemElement);
        
        // Add click handler for fullscreen
        itemElement.addEventListener('click', function() {
            const fullscreenOverlay = document.getElementById('fullscreen-overlay');
            const fullscreenImage = document.getElementById('fullscreen-image');
            
            // Store current collection and index
            fullscreenOverlay.dataset.collectionId = collectionId;
            fullscreenOverlay.dataset.currentIndex = collection.items.indexOf(item);
            
            fullscreenImage.src = item.image;
            fullscreenImage.alt = item.title;
            
            fullscreenOverlay.style.display = 'block';
            setTimeout(() => {
                fullscreenOverlay.style.opacity = '1';
            }, 10);
            
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Show overlay
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
    
    // Disable scrolling on body
    document.body.style.overflow = 'hidden';
}

// Navigation functions
function navigateImage(direction) {
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const collectionId = fullscreenOverlay.dataset.collectionId;
    let currentIndex = parseInt(fullscreenOverlay.dataset.currentIndex);
    const collection = collections[collectionId];
    
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % collection.items.length;
    } else {
        currentIndex = (currentIndex - 1 + collection.items.length) % collection.items.length;
    }
    
    const item = collection.items[currentIndex];
    document.getElementById('fullscreen-image').src = item.image;
    document.getElementById('fullscreen-image').alt = item.title;
    fullscreenOverlay.dataset.currentIndex = currentIndex;
}

// Close fullscreen function
document.getElementById('close-fullscreen').addEventListener('click', function() {
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    fullscreenOverlay.style.opacity = '0';
    setTimeout(() => {
        fullscreenOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
});

// Navigation button handlers
document.getElementById('next-image').addEventListener('click', function() {
    navigateImage('next');
});

document.getElementById('prev-image').addEventListener('click', function() {
    navigateImage('prev');
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    if (fullscreenOverlay.style.display === 'block') {
        if (e.key === 'ArrowRight') {
            navigateImage('next');
        } else if (e.key === 'ArrowLeft') {
            navigateImage('prev');
        } else if (e.key === 'Escape') {
            fullscreenOverlay.style.opacity = '0';
            setTimeout(() => {
                fullscreenOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
});

// Close collection function
document.getElementById('close-collection').addEventListener('click', function() {
    const overlay = document.getElementById('collection-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
});

    
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
    }
});
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
const nav = document.querySelector('nav');
if (window.scrollY > 100) {
    nav.classList.add('bg-black/90');
} else {
    nav.classList.remove('bg-black/90');
}
});

//changing the video souce of a mobile screen
function setVideoSrc() {
const videoSource = document.getElementById("video-source");
if (window.innerWidth <= 768) {
    videoSource.src = "./videos/mobile _video.mp4";
} else {
    videoSource.src = "./videos/fert1.mp4";
}
videoSource.parentElement.load();
}

setVideoSrc()
window.addEventListener("resize", setVideoSrc);