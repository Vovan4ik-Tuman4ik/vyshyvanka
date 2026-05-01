async function getData() {
    const response = await fetch("https://discord.com/api/guilds/1461969112757702814/widget.json")
    const response_json = await response.json()
    const member_online = document.querySelector("#discord_online")
    member_online.innerHTML=response_json.presence_count
    // console.log(response_json)
}
getData()
// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Smooth active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
            ? 'var(--gold-light)' : '';
    });
});

// Animated counters
const nums = document.querySelectorAll('.stat-num');
const numObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const el = e.target;
            const target = el.textContent;
            const num = parseFloat(target.replace(/[^0-9.]/g, ''));
            const suffix = target.replace(/[0-9.]/g, '');
            let start = 0;
            const dur = 1200;
            const step = timestamp => {
                if (!start) start = timestamp;
                const prog = Math.min((timestamp - start) / dur, 1);
                const eased = 1 - Math.pow(1 - prog, 3);
                el.textContent = (num < 10 ? (eased * num).toFixed(0) : Math.round(eased * num)) + suffix;
                if (prog < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            numObs.unobserve(el);
        }
    });
}, { threshold: .5 });
nums.forEach(n => numObs.observe(n));