// Data for the different projects
const projectData = {
    1: {
        title: "Digital Brand Identity",
        image: "assets/graphics.jpg",
        tags: ["Branding", "Graphics"]
    },
    2: {
        title: "Smart App Solutions",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200",
        tags: ["Mobile App", "Development"]
    },
    3: {
        title: "Designing the Future",
        image: "assets/webdesign.jpg",
        tags: ["Web Design", "UI/UX Design"]
    }
};

function switchProject(id) {
    const data = projectData[id];
    const imgElement = document.getElementById('project-image');
    
    // 1. Fade out effect
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
        // 2. Change content
        imgElement.src = data.image;
        document.getElementById('project-title').innerText = data.title;
        
        // Update Tags
        const tagContainer = document.getElementById('project-tags');
        tagContainer.innerHTML = data.tags.map(tag => 
            `<span class="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">${tag}</span>`
        ).join('');

        // 3. Fade back in
        imgElement.style.opacity = '1';
        
        // 4. Update Navigation Styles
        updateNavStyles(id);
    }, 300);
}

function updateNavStyles(activeId) {
    // Reset all nav items to default (small, grey)
    document.querySelectorAll('.nav-item').forEach(item => {
        const num = item.querySelector('.nav-num');
        const line = item.querySelector('.nav-line');
        
        num.className = "nav-num text-4xl font-light text-slate-300 transition-all duration-300";
        line.className = "nav-line h-[1px] w-full bg-slate-200 transition-all duration-300";
    });

    // Make the clicked one active (big, blue)
    const activeItem = document.getElementById(`nav-${activeId}`);
    const activeNum = activeItem.querySelector('.nav-num');
    const activeLine = activeItem.querySelector('.nav-line');

    activeNum.className = "nav-num text-6xl font-bold text-blue-600 transition-all duration-300";
    activeLine.className = "nav-line h-[1px] w-full bg-blue-600 transition-all duration-300";
}
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pricing-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. Reset all cards to the "Inactive/Light" state
            cards.forEach(c => {
                c.classList.remove('bg-[#0b0e14]', 'text-white', 'md:scale-105', 'z-10', 'border-slate-800');
                c.classList.add('bg-white', 'text-slate-900', 'border-slate-100', 'z-0');
                
                // Reset buttons inside inactive cards
                const btn = c.querySelector('button');
                btn.classList.remove('bg-blue-600', 'text-white', 'border-none');
                btn.classList.add('border-slate-200', 'text-slate-800');

                // Reset checkmark colors
                const checks = c.querySelectorAll('.check-icon');
                checks.forEach(check => {
                    check.classList.remove('text-blue-500');
                    check.classList.add('text-slate-700');
                });
            });

            // 2. Apply "Active/Dark" state to the clicked card
            card.classList.remove('bg-white', 'text-slate-900', 'border-slate-100', 'z-0');
            card.classList.add('bg-[#0b0e14]', 'text-white', 'md:scale-105', 'z-10', 'border-slate-800');

            // Style the button of the active card
            const activeBtn = card.querySelector('button');
            activeBtn.classList.add('bg-blue-600', 'text-white', 'border-none');
            activeBtn.classList.remove('border-slate-200', 'text-slate-800');

            // Style the checkmarks of the active card
            const activeChecks = card.querySelectorAll('.check-icon');
            activeChecks.forEach(check => {
                check.classList.add('text-blue-500');
                check.classList.remove('text-slate-700');
            });
        });
    });
});
const container = document.getElementById('hover-image-container');
    const photo = document.getElementById('member-photo');
    const items = document.querySelectorAll('.member-item');

    items.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const imgSrc = item.getAttribute('data-image');
            photo.src = imgSrc;
            container.classList.remove('hidden');
            setTimeout(() => container.classList.add('opacity-100'), 10);
        });

        item.addEventListener('mousemove', (e) => {
            // Offset the image so it follows the cursor
            const x = e.clientX + 20; 
            const y = e.clientY - 100;
            container.style.left = `${x}px`;
            container.style.top = `${y}px`;
        });

        item.addEventListener('mouseleave', () => {
            container.classList.remove('opacity-100');
            setTimeout(() => container.classList.add('hidden'), 300);
        });
    });
// Team member portfolio data
const teamMemberPortfolio = {
    "Charles Bernard": {
        title: "UI/UX Designer",
        bio: "Award-winning designer with 8+ years of experience in creating beautiful user interfaces and exceptional digital experiences. Specialized in user research and design systems.",
        projects: 24,
        specialties: ["UI Design", "Prototyping", "User Research", "Design Systems"],
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400"
    },
    "Nicolas Girard": {
        title: "Web Designer",
        bio: "Creative web designer specializing in responsive design and engaging web experiences. Passionate about creating designs that not only look great but also convert.",
        projects: 31,
        specialties: ["Web Design", "Responsive Design", "Animation", "UX"],
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    "Antoine Moreau": {
        title: "Logo Designer", 
        bio: "Brand identity expert creating memorable logos and visual identities that stand the test of time. Dedicated to building brands that resonate with audiences.",
        projects: 18,
        specialties: ["Logo Design", "Branding", "Brand Guidelines", "Illustration"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    "Sarah Johnson": {
        title: "Full Stack Developer",
        bio: "Full-stack developer passionate about building scalable web applications with modern technologies. Expert in creating robust backend systems and interactive frontends.",
        projects: 42,
        specialties: ["React", "Node.js", "Laravel", "Database Design"],
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    "Michael Chen": {
        title: "Project Manager",
        bio: "Experienced project manager ensuring smooth delivery of complex projects and exceptional client satisfaction. Expert in agile methodologies and team leadership.",
        projects: 50,
        specialties: ["Project Management", "Team Leadership", "Agile", "Client Relations"],
        image: "https://images.unsplash.com/photo-1522227620643-ccbb62f81ee1?auto=format&fit=crop&q=80&w=400"
    }
};

// Show member portfolio modal when arrow is clicked
function showMemberPortfolio(name, data) {
    const html = `
        <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" id="portfolio-modal" onclick="if(event.target.id === 'portfolio-modal') closePortfolio()">
            <div class="bg-gradient-to-br from-slate-900 to-[#050a18] border border-white/10 rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm">
                <!-- Header -->
                <div class="relative bg-gradient-to-r from-blue-600/20 to-blue-800/20 border-b border-white/10 p-8">
                    <button onclick="closePortfolio()" class="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white text-xl transition-all">✕</button>
                    
                    <!-- Circular Profile Picture -->
                    <div class="flex justify-center mb-6">
                        <div class="relative w-40 h-40">
                            <img src="${data.image}" alt="${name}" class="w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-2xl">
                            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                        </div>
                    </div>
                    
                    <!-- Name and Title -->
                    <div class="text-center">
                        <h2 class="text-4xl md:text-5xl font-black text-white mb-2">${name}</h2>
                        <p class="text-blue-400 text-lg font-bold">${data.title}</p>
                    </div>
                </div>
                
                <div class="p-8 md:p-10">
                    <!-- Bio -->
                    <p class="text-gray-300 text-lg leading-relaxed mb-8 pb-8 border-b border-white/10">
                        ${data.bio}
                    </p>

                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/10">
                        <div>
                            <div class="text-3xl font-black text-blue-400">${data.projects}</div>
                            <div class="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Projects</div>
                        </div>
                        <div>
                            <div class="text-lg font-bold text-white">8+</div>
                            <div class="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Years Exp</div>
                        </div>
                        <div>
                            <div class="text-white font-bold">Global</div>
                            <div class="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Reach</div>
                        </div>
                    </div>

                    <!-- Specialties -->
                    <div class="mb-8">
                        <h3 class="text-white font-bold uppercase text-xs tracking-wider mb-4">Specialties</h3>
                        <div class="flex flex-wrap gap-3">
                            ${data.specialties.map(s => `<span class="px-4 py-2 bg-blue-600/20 border border-blue-400/50 text-blue-300 rounded-full text-sm font-bold hover:bg-blue-600/40 transition-all">${s}</span>`).join('')}
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex gap-4">
                        <a href="contact.html" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-bold text-center transition-all transform hover:scale-105">
                            Contact Now
                        </a>
                        <button onclick="closePortfolio()" class="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-6 rounded-full font-bold transition-all">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
}

function closePortfolio() {
    const modal = document.getElementById('portfolio-modal');
    if (modal) modal.remove();
}

// Initialize arrow click handlers for team members
document.addEventListener('DOMContentLoaded', () => {
    const memberArrows = document.querySelectorAll('.member-item span, .member-item-explore span');
    memberArrows.forEach(arrow => {
        const memberItem = arrow.closest('.member-item, .member-item-explore');
        if (memberItem) {
            const nameElement = memberItem.querySelector('h3');
            const name = nameElement ? nameElement.textContent : 'Team Member';
            
            arrow.parentElement.style.cursor = 'pointer';
            arrow.parentElement.addEventListener('click', (e) => {
                e.stopPropagation();
                if (teamMemberPortfolio[name]) {
                    showMemberPortfolio(name, teamMemberPortfolio[name]);
                }
            });
        }
    });
});
 // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const name = document.getElementById('name').value;
            
            // Show success message
            formMessage.classList.remove('hidden', 'bg-red-500/20', 'text-red-300');
            formMessage.classList.add('bg-blue-500/20', 'text-blue-300');
            formMessage.textContent = `Thank you ${name}! We've received your message and will get back to you soon.`;
            
            // Reset form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });