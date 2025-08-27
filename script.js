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
            { title: "Lace Cocktail Dress", price: "24,500 Br", image: ["images/woman/1.jpg", "images/woman/1a.jpg", "images/woman/1b.jpg", "images/woman/1c.jpg", "images/woman/1d.jpg"] },
            { title: "Elegant Evening Gown", price: "32,800 Br", image: ["images/woman/2.jpg", "images/woman/2a.jpg", "images/woman/2b.jpg", "images/woman/2c.jpg", "images/woman/2d.jpg", "images/woman/2e.jpg", "images/woman/2f.jpg", "images/woman/2g.jpg"] },
            { title: "Silk Party Dress", price: "28,400 Br", image: ["images/woman/3.jpg", "images/woman/3a.jpg", "images/woman/3b.jpg"] },
            { title: "Formal Business Attire", price: "26,900 Br", image: ["images/woman/4.jpg", "images/woman/4a.jpg", "images/woman/4b.jpg", "images/woman/4c.jpg", "images/woman/4d.jpg", "images/woman/4e.jpg"] },
            { title: "Casual Summer Dress", price: "18,700 Br", image: ["images/woman/5.jpg", "images/woman/5a.jpg", "images/woman/5b.jpg", "images/woman/5c.jpg"] },
            { title: "Office Professional Wear", price: "22,300 Br", image: ["images/woman/6.jpg", "images/woman/6a.jpg", "images/woman/6b.jpg"] },
            { title: "Cocktail Party Dress", price: "27,600 Br", image: ["images/woman/7.jpg", "images/woman/7a.jpg", "images/woman/7b.jpg", "images/woman/7c.jpg"] },
            { title: "Elegant Ceremony Gown", price: "35,200 Br", image: ["images/woman/8.jpg", "images/woman/8a.jpg", "images/woman/8b.jpg", "images/woman/8c.jpg", "images/woman/8d.jpg"] },
            { title: "Formal Reception Dress", price: "29,800 Br", image: ["images/woman/9.jpg", "images/woman/9a.jpg", "images/woman/9b.jpg", "images/woman/9c.jpg", "images/woman/9d.jpg"] },
            { title: "Special Occasion Gown", price: "31,500 Br", image: ["images/woman/10.jpg", "images/woman/10a.jpg", "images/woman/10b.jpg", "images/woman/10c.jpg", "images/woman/10d.jpg", "images/woman/10e.jpg", "images/woman/10f.jpg", "images/woman/10g.jpg"] },
            { title: "Business Formal Dress", price: "23,900 Br", image: ["images/woman/11.jpg", "images/woman/11a.jpg", "images/woman/11b.jpg", "images/woman/11c.jpg"] },
            { title: "Evening Cocktail Dress", price: "26,100 Br", image: ["images/woman/12.jpg", "images/woman/12a.jpg", "images/woman/12c.jpg"] },
            { title: "Elegant Party Wear", price: "28,700 Br", image: ["images/woman/13.jpg", "images/woman/13a.jpg", "images/woman/13b.jpg", "images/woman/13c.jpg", "images/woman/13d.jpg"] },
            { title: "Formal Dinner Dress", price: "30,400 Br", image: ["images/woman/14.jpg", "images/woman/14a.jpg", "images/woman/14b.jpg", "images/woman/14c.jpg"] },
            { title: "Luxury Evening Gown", price: "37,200 Br", image: ["images/woman/15.jpg", "images/woman/15a.jpg", "images/woman/15b.jpg", "images/woman/15c.jpg", "images/woman/15d.jpg", "images/woman/15e.jpg"] },
            { title: "Professional Office Dress", price: "21,800 Br", image: ["images/woman/16.jpg", "images/woman/16a.jpg", "images/woman/16b.jpg", "images/woman/16c.jpg"] },
            { title: "Cocktail Evening Dress", price: "25,600 Br", image: ["images/woman/17.jpg", "images/woman/17a.jpg"] },
            { title: "Elegant Ceremony Dress", price: "33,900 Br", image: ["images/woman/18.jpg", "images/woman/18a.jpg"] },
            { title: "Formal Event Gown", price: "34,500 Br", image: ["images/woman/19.jpg", "images/woman/19a.jpg", "images/woman/19b.jpg", "images/woman/19c.jpg", "images/woman/19d.jpg"] },
            { title: "Special Event Dress", price: "27,300 Br", image: ["images/woman/20.jpg", "images/woman/20a.jpg", "images/woman/20b.jpg"] },
            { title: "Evening Party Gown", price: "29,100 Br", image: ["images/woman/21.jpg", "images/woman/21a.jpg"] },
            { title: "Formal Occasion Dress", price: "32,100 Br", image: ["images/woman/22.jpg", "images/woman/22a.jpg", "images/woman/22b.jpg", "images/woman/22c.jpg", "images/woman/22d.jpg", "images/woman/22e.jpg"] },
            { title: "Elegant Reception Gown", price: "36,800 Br", image: ["images/woman/23.jpg", "images/woman/23a.jpg", "images/woman/23b.jpg"] },
            { title: "Luxury Ceremony Dress", price: "38,400 Br", image: ["images/woman/24.jpg", "images/woman/24a.jpg", "images/woman/24b.jpg", "images/woman/24c.jpg", "images/woman/24d.jpg"] },
            { title: "Formal Dinner Gown", price: "31,200 Br", image: ["images/woman/25.jpg", "images/woman/25a.jpg"] },
            { title: "Evening Event Dress", price: "26,800 Br", image: ["images/woman/26.jpg", "images/woman/26a.jpg"] },
            { title: "Special Ceremony Gown", price: "35,900 Br", image: ["images/woman/27.jpg", "images/woman/27a.jpg", "images/woman/27b.jpg"] },
            { title: "Elegant Occasion Dress", price: "28,200 Br", image: ["images/woman/28.jpg", "images/woman/28a.jpg", "images/woman/28b.jpg"] },
            { title: "Formal Party Gown", price: "33,100 Br", image: ["images/woman/29.jpg", "images/woman/29a.jpg", "images/woman/29b.jpg"] }
        ]
    },
    men: {
        title: "Men Collection",
        description: "The Men collection redefines modern masculinity with tailored precision, innovative fabrics, and subtle details that command attention. Sophistication meets contemporary edge.",
        items: [
            { title: "Wool Suit", price: "32,500 Br", image: ["images/men/m1.jpg", "images/men/m1a.jpg", "images/men/m1b.jpg"] },
            { title: "Cashmere Overcoat", price: "28,900 Br", image: ["images/men/m2.jpg", "images/men/m2a.jpg"] },
            { title: "Silk Dinner Jacket", price: "25,300 Br", image: ["images/men/m3.jpg", "images/men/m3a.jpg", "images/men/m3b.jpg", "images/men/m3c.jpg"] },
            { title: "Linen Summer Suit", price: "22,700 Br", image: ["images/men/m4.jpg"] },
            { title: "Velvet Smoking Jacket", price: "29,500 Br", image: ["images/men/m5.jpg"] },
            { title: "Tweed Three-Piece", price: "35,800 Br", image: ["images/men/m6.jpg"] },
            { title: "Gondar Embroidered Set", price: "29,200 Br", image: ["images/men/m7.jpg", "images/men/m7a.jpg", "images/men/m7b.jpg"] },
            { title: "Harar Classic Wear", price: "27,600 Br", image: ["images/men/m8.jpg"] },
            { title: "Oromo Heritage Dress", price: "31,100 Br", image: ["images/men/m9.jpg", "images/men/m9a.jpg"] },
            { title: "Tana Royal Piece", price: "36,500 Br", image: ["images/men/m10.jpg", "images/men/m10a.jpg", "images/men/m10b.jpg", "images/men/m10c.jpg"] },
            { title: "Shewa Luxury Suit", price: "34,000 Br", image: ["images/men/m11.jpg", "images/men/m11a.jpg", "images/men/m11b.jpg", "images/men/m11c.jpg"] },
            { title: "Axum Ceremonial", price: "33,300 Br", image: ["images/men/m12.jpg", "images/men/m12a.jpg", "images/men/m12b.jpg", "images/men/m12c.jpg"] },
            { title: "Arba Minch Style", price: "28,700 Br", image: ["images/men/m13.jpg"] },
            { title: "Dire Dawa Urban", price: "30,100 Br", image: ["images/men/m14.jpg", "images/men/m14a.jpg", "images/men/m14b.jpg"] },
            { title: "Addis Elegance", price: "37,000 Br", image: ["images/men/m15.jpg"] }
        ]
    },
    couple: {
        title: "Couple & Family Collection",
        description: "Our Couple & Family collection offers coordinated elegance for special occasions. Harmonious designs that complement each other while celebrating individuality.",
        items: [
            { title: "His & Hers Silk Set", price: "45,500 Br", image: ["images/couple-and-family/f1.jpg", "images/couple-and-family/f1a.jpg", "images/couple-and-family/f1b.jpg"] },
            { title: "Family Formal Attire", price: "68,900 Br", image: ["images/couple-and-family/f2.jpg", "images/couple-and-family/f2a.jpg", "images/couple-and-family/f2b.jpg", "images/couple-and-family/f2c.jpg", "images/couple-and-family/f2d.jpg", "images/couple-and-family/f2e.jpg", "images/couple-and-family/f2f.jpg", "images/couple-and-family/f2g.jpg"] },
            { title: "Elegant Couple's Outfit", price: "52,000 Br", image: ["images/couple-and-family/f3.jpg", "images/couple-and-family/f3a.jpg"] },
            { title: "Traditional Family Ensemble", price: "74,800 Br", image: ["images/couple-and-family/f4.jpg", "images/couple-and-family/f4a.jpg", "images/couple-and-family/f4b.jpg", "images/couple-and-family/f4c.jpg"] },
            { title: "Modern Couple's Set", price: "48,300 Br", image: ["images/couple-and-family/f5.jpg", "images/couple-and-family/f5a.jpg", "images/couple-and-family/f5b.jpg", "images/couple-and-family/f5c.jpg", "images/couple-and-family/f5d.jpg", "images/couple-and-family/f5e.jpg", "images/couple-and-family/f5f.jpg"] },
            { title: "Classic Family Attire", price: "63,400 Br", image: ["images/couple-and-family/f6.jpg", "images/couple-and-family/f6a.jpg", "images/couple-and-family/f6b.jpg"] },
            { title: "Luxury Couple's Silk", price: "57,600 Br", image: ["images/couple-and-family/f7.jpg", "images/couple-and-family/f7a.jpg"] },
            { title: "Formal Family Gathering Set", price: "81,200 Br", image: ["images/couple-and-family/f8.jpg", "images/couple-and-family/f8a.jpg", "images/couple-and-family/f8b.jpg"] },
            { title: "His & Hers Evening Wear", price: "49,900 Br", image: ["images/couple-and-family/f9.jpg", "images/couple-and-family/f9a.jpg", "images/couple-and-family/f9b.jpg", "images/couple-and-family/f9c.jpg", "images/couple-and-family/f9d.jpg", "images/couple-and-family/f9e.jpg"] },
            { title: "Grand Family Occasion Outfit", price: "76,500 Br", image: ["images/couple-and-family/f10.jpg"] },
            { title: "Couple's Traditional Silk", price: "54,700 Br", image: ["images/couple-and-family/f11.jpg", "images/couple-and-family/f11a.jpg"] },
            { title: "Family Celebration Set", price: "69,800 Br", image: ["images/couple-and-family/f12.jpg", "images/couple-and-family/f12a.jpg", "images/couple-and-family/f12b.jpg"] },
            { title: "Elegant Pair Formal Wear", price: "51,200 Br", image: ["images/couple-and-family/f13.jpg", "images/couple-and-family/f13a.jpg"] },
            { title: "Complete Family Ensemble", price: "83,400 Br", image: ["images/couple-and-family/f14.jpg", "images/couple-and-family/f14a.jpg", "images/couple-and-family/f14b.jpg", "images/couple-and-family/f14c.jpg"] },
            { title: "Couple's Special Occasion Set", price: "58,100 Br", image: ["images/couple-and-family/f15.jpg", "images/couple-and-family/f15a.jpg", "images/couple-and-family/f15b.jpg", "images/couple-and-family/f15c.jpg", "images/couple-and-family/f15d.jpg"] },
            { title: "Family Luxury Attire", price: "72,300 Br", image: ["images/couple-and-family/f16.jpg", "images/couple-and-family/f16a.jpg"] },
            { title: "His & Hers Formal Set", price: "46,800 Br", image: ["images/couple-and-family/f17.jpg", "images/couple-and-family/f17a.jpg", "images/couple-and-family/f17b.jpg"] },
            { title: "Traditional Couple's Ensemble", price: "53,400 Br", image: ["images/couple-and-family/f18.jpg", "images/couple-and-family/f18a.jpg"] },
            { title: "Modern Family Attire", price: "67,900 Br", image: ["images/couple-and-family/f19.jpg"] },
            { title: "Elegant Couple's Formal Wear", price: "55,100 Br", image: ["images/couple-and-family/f20.jpg", "images/couple-and-family/f20a.jpg", "images/couple-and-family/f20b.jpg"] },
            { title: "Family Silk Collection", price: "79,600 Br", image: ["images/couple-and-family/f21.jpg", "images/couple-and-family/f21a.jpg"] },
            { title: "His & Hers Traditional Set", price: "50,200 Br", image: ["images/couple-and-family/f22.jpg", "images/couple-and-family/f22a.jpg"] },
            { title: "Grand Family Formal Wear", price: "85,700 Br", image: ["images/couple-and-family/f23.jpg", "images/couple-and-family/f23a.jpg"] }
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
            <img src="${item.image[0]}" alt="${item.title}">
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
            // const itemIndex = collection.items.indexOf(item);
 
            fullscreenOverlay.dataset.currentIndex = item.image[0];
            fullscreenOverlay.dataset.imagesLength = item.image.length;

            // console.log(collection.items.indexOf(item))
            fullscreenOverlay.dataset.itemIndex = collection.items.indexOf(item);

            fullscreenImage.src = item.image[0];
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
    // const currentItem  = fullscreenOverlay.dataset.currentItem;
    const imagesLength = parseInt(fullscreenOverlay.dataset.imagesLength);
    const itemIndex = fullscreenOverlay.dataset.itemIndex;
    
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % imagesLength;
    } else {
        currentIndex = (currentIndex - 1 + imagesLength) % imagesLength;
    }
    // console.log()
    const item = collections[collectionId].items[itemIndex].image;
    console.log(currentIndex)
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