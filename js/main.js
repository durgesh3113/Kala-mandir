document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Artist Data
    const artists = [
        {
            id: 1,
            name: "DJ Sunburn",
            category: "musician",
            bio: "Goa's premier electronic music DJ, specializing in trance and house. Regular performer at Sunburn Festival and other major EDM events.",
            image: "https://mcdn.wallpapersafari.com/medium/56/30/anpT7I.jpg",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: true
        },
        {
            id: 2,
            name: "Nayana ",
            category: "dancer",
            bio: "Traditional Goan folk dancer with a modern twist. Performs Dekhnni, Fugdi, and other Goan dance forms with contemporary interpretations.",
            image: "https://hinterscapes.com/blog/wp-content/uploads/2019/12/dekhni-dance-goa-1024x576.jpg",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: true
        },
        {
            id: 3,
            name: "Mohan Naik",
            category: "painter",
            bio: "Contemporary artist blending Goan landscapes with abstract expressionism. His work has been exhibited across India and internationally.",
            image: "https://tse2.mm.bing.net/th/id/OIP.uYMlk74F6C_HRMbXpzD7kwAAAA?r=0&w=300&h=200&rs=1&pid=ImgDetMain&o=7&rm=3",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: true
        },
        {
            id: 4,
            name: "Meera Desai",
            category: "poet",
            bio: "Spoken word artist and poet exploring themes of Goan identity, migration, and cultural fusion in Konkani and English.",
            image: "https://rsjonline.com/uploads/article_images/T710_1713_Meera_Individual.jpg",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: true
        },
        {
            id: 5,
            name: "Beach Bummers",
            category: "influencer",
            bio: "Goa's most popular travel influencers with 500k+ followers. Specializing in hidden beaches, local cuisine, and sustainable tourism.",
            image: "https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: true
        },
        {
            id: 6,
            name: "Sitaram & The Waves",
            category: "musician",
            bio: "Fusion band blending traditional Goan music with reggae and jazz. Perfect for beach parties and cultural events.",
            image: "https://i0.wp.com/www.incrediblegoa.org/wp-content/uploads/2023/06/Music-of-Goa.jpeg?resize=1024%2C683&ssl=1",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: false
        },
        {
            id: 7,
            name: "Lila's Fire Dancers",
            category: "dancer",
            bio: "Breathtaking fire dance performances inspired by Goan full moon parties. Trained in traditional Polynesian and contemporary fire arts.",
            image: "https://img.freepik.com/premium-photo/fire-show-beach-goa-fire-show-beach-goa-fire-show-beach-goa_1111209-4280.jpg?w=900",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: false
        },
        {
            id: 8,
            name: "Goa Foodie",
            category: "influencer",
            bio: "Food blogger showcasing authentic Goan cuisine from hidden local spots to high-end restaurants. 300k+ engaged followers.",
            image: "https://images.slurrp.com/prod/articles/anlag5kcds8.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75",
            instagram: "#",
            youtube: "#",
            facebook: "#",
            twitter: "#",
            featured: false
        }
    ];

    // Generate Artist Cards
    const artistGrid = document.getElementById('artistGrid');
    const featuredArtists = document.getElementById('featuredArtists');

    function generateArtistCards(artistsArray, targetElement, showBooking = true) {
        targetElement.innerHTML = '';
        
        artistsArray.forEach(artist => {
            const card = document.createElement('div');
            card.className = `artist-card ${artist.category}`;
            card.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}" class="artist-image">
                <div class="artist-info">
                    <h3 class="artist-name">${artist.name}</h3>
                    <span class="artist-category">${artist.category.charAt(0).toUpperCase() + artist.category.slice(1)}</span>
                    <p class="artist-bio">${artist.bio}</p>
                    <div class="artist-social">
                        <a href="${artist.instagram}" class="social-icon" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="${artist.youtube}" class="social-icon" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="${artist.facebook}" class="social-icon" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="${artist.twitter}" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                    <div class="artist-actions">
                        ${showBooking ? `<button class="book-btn" data-artist-id="${artist.id}" data-artist-name="${artist.name}">Book Now</button>` : ''}
                        <button class="view-btn">View Profile</button>
                    </div>
                </div>
            `;
            targetElement.appendChild(card);
        });
    }

    // Initial load
    generateArtistCards(artists, artistGrid);
    generateArtistCards(artists.filter(artist => artist.featured), featuredArtists);

    // Filter Artists
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            if (filter === 'all') {
                generateArtistCards(artists, artistGrid);
            } else {
                const filteredArtists = artists.filter(artist => artist.category === filter);
                generateArtistCards(filteredArtists, artistGrid);
            }
        });
    });

    // Booking Modal
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    const artistNameModal = document.getElementById('artistNameModal');
    let currentArtistId = null;

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('book-btn')) {
            currentArtistId = e.target.dataset.artistId;
            const artistName = e.target.dataset.artistName;
            artistNameModal.textContent = artistName;
            bookingModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });

    closeModal.addEventListener('click', () => {
        bookingModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Testimonial Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Form Submissions
    const artistForm = document.getElementById('artistForm');
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');
    const closeSuccessModal = document.getElementById('closeSuccessModal');

    artistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMessage.textContent = "Thank you for your application! We will review your information and get back to you soon.";
        successModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        artistForm.reset();
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMessage.textContent = `Booking request sent successfully for Artist ID: ${currentArtistId}! We'll contact you shortly to discuss details.`;
        successModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        bookingForm.reset();
        bookingModal.classList.remove('show');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMessage.textContent = "Your message has been sent successfully! We'll get back to you as soon as possible.";
        successModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        contactForm.reset();
    });

    closeSuccessModal.addEventListener('click', () => {
        successModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Animate stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(counter);
                    stat.textContent = target;
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 16);
        });
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-grid')) {
                    animateStats();
                }
                entry.target.classList.add('slide-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section-title, .section-subtitle, .artist-card, .step-card, .event-card, .testimonial-card, .form-group, .contact-card').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect
    const parallaxImage = document.querySelector('.parallax-image');
    
    window.addEventListener('scroll', () => {
        if (parallaxImage) {
            const scrollPosition = window.pageYOffset;
            parallaxImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });

    // Floating Elements Animation
    const floatingElements = document.getElementById('floatingElements');
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#292F36'];

    function createFloatingElement() {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // Random properties
        const size = Math.random() * 20 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 30 + 10;
        const delay = Math.random() * 5;
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.background = color;
        element.style.left = `${left}%`;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
        
        floatingElements.appendChild(element);
        
        // Remove element after animation completes
        setTimeout(() => {
            element.remove();
        }, duration * 1000);
    }

    // Create initial floating elements
    for (let i = 0; i < 20; i++) {
        createFloatingElement();
    }

    // Continue creating new elements periodically
    setInterval(createFloatingElement, 2000);
});