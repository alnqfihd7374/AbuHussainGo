/* --- إعدادات أساسية --- */
:root {
    --primary: #0B3C5D;
    --secondary: #1ABC9C;
    --accent: #F39C12;
    --dark: #2C3E50;
    --light: #F5F7FA;
    --white: #ffffff;
    --text: #2C3E50;
    --bg: #ffffff;
    --nav-bg: rgba(11, 60, 93, 0.95);
    --shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* الوضع الليلي */
body.dark-mode {
    --primary: #3498db;
    --secondary: #16a085;
    --accent: #e67e22;
    --text: #ecf0f1;
    --bg: #121212;
    --light: #1e1e1e;
    --white: #252525;
    --nav-bg: rgba(0, 0, 0, 0.95);
    --shadow: 0 5px 15px rgba(0,0,0,0.5);
}

* {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
}

html, body {
    overflow-x: hidden; /* يمنع القلتش الجانبي */
    scroll-behavior: smooth;
    width: 100%;
}

body {
    background-color: var(--bg);
    color: var(--text);
    transition: background 0.3s, color 0.3s;
}

/* --- شاشة التحميل --- */
#preloader {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: #0B3C5D;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
}
.loader-content { text-align: center; color: white; }
.loader-content i { font-size: 3rem; margin-bottom: 15px; color: var(--secondary); }
.loader-content h2 { margin-bottom: 20px; }
.loading-line {
    width: 150px; height: 3px; background: rgba(255,255,255,0.2);
    margin: 0 auto; position: relative; overflow: hidden;
}
.loading-line::after {
    content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%;
    background: var(--accent); animation: loadLine 1s infinite ease-in-out;
}
@keyframes loadLine { 0% {left: -50%;} 100% {left: 100%;} }

/* --- الناف بار --- */
.navbar {
    background: var(--nav-bg);
    padding: 15px 0;
    position: sticky;
    top: 0; z-index: 1000;
    backdrop-filter: blur(5px);
}
.nav-container {
    display: flex; justify-content: space-between; align-items: center;
}
.logo h1 { font-size: 1.5rem; color: #fff; font-weight: 800; }
.logo span { color: var(--secondary); }
.logo a { text-decoration: none; }

.nav-links { display: flex; list-style: none; gap: 20px; }
.nav-links a { text-decoration: none; color: #fff; font-weight: 600; transition: 0.3s; }
.nav-links a:hover { color: var(--secondary); }
.mobile-only-link { display: none; }

.nav-controls { display: flex; align-items: center; gap: 15px; }

/* زر الوضع الليلي */
.theme-btn {
    background: transparent; border: 1px solid rgba(255,255,255,0.3);
    color: #fff; width: 35px; height: 35px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
}

/* زر القائمة (Hamburger) */
.hamburger { display: none; cursor: pointer; }
.bar { width: 25px; height: 3px; background: #fff; margin: 5px 0; transition: 0.3s; }

/* --- Hero Section --- */
.hero {
    height: 90vh;
    background: linear-gradient(rgba(11,60,93,0.8), rgba(11,60,93,0.6)), url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920');
    background-size: cover; background-position: center;
    display: flex; align-items: center; justify-content: center;
    text-align: center; color: #fff;
    position: relative;
}
.hero h1 { font-size: 3rem; margin-bottom: 20px; }
.hero-buttons { display: flex; gap: 15px; justify-content: center; margin-top: 30px; }

/* الأزرار */
.btn {
    padding: 12px 30px; border-radius: 50px; text-decoration: none;
    font-weight: 700; transition: 0.3s; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
}
.btn-primary { background: var(--secondary); color: #fff; }
.btn-accent { background: var(--accent); color: #fff; }
.btn-glass { background: rgba(255,255,255,0.2); border: 1px solid #fff; color: #fff; }
.btn:hover { transform: translateY(-3px); }

/* --- الخدمات (Cards) --- */
.bg-alt { background-color: var(--light); }
.services-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px; margin-top: 40px;
}
.service-card {
    background: var(--white); padding: 30px; border-radius: 15px;
    text-align: center; box-shadow: var(--shadow); transition: 0.3s;
}
.service-card:hover { transform: translateY(-10px); border-bottom: 4px solid var(--secondary); }
.card-icon { font-size: 2.5rem; color: var(--secondary); margin-bottom: 15px; }

/* --- نموذج الحجز --- */
.booking-card {
    background: var(--white); padding: 40px; border-radius: 20px;
    max-width: 800px; margin: 0 auto; box-shadow: var(--shadow);
    border-top: 5px solid var(--accent);
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-group { margin-bottom: 15px; text-align: right; }
.full { grid-column: 1 / -1; }
label { display: block; margin-bottom: 5px; font-weight: 600; font-size: 0.9rem; }
input, select, textarea {
    width: 100%; padding: 12px; border: 1px solid #ddd;
    border-radius: 8px; background: var(--bg); color: var(--text); outline: none;
}
input:focus, select:focus { border-color: var(--secondary); }
.full-btn { width: 100%; justify-content: center; font-size: 1.1rem; }

/* --- الخريطة التخيلية --- */
.coverage { background: var(--primary); color: #fff; padding: 60px 0; }
.text-white { color: #fff !important; }
.map-visual {
    height: 300px; border: 2px dashed rgba(255,255,255,0.2);
    border-radius: 20px; position: relative; margin: 40px 0;
}
.point {
    width: 15px; height: 15px; background: var(--accent);
    border-radius: 50%; position: absolute; cursor: pointer;
    box-shadow: 0 0 0 4px rgba(255,255,255,0.2); transition: 0.3s;
}
.point:hover { transform: scale(1.5); }
.point::after {
    content: attr(data-name); position: absolute; top: -30px; left: 50%;
    transform: translateX(-50%); background: #fff; color: #000;
    padding: 2px 8px; border-radius: 4px; font-size: 12px;
}
.point-1 { top: 40%; left: 30%; } /* صنعاء */
.point-2 { top: 60%; left: 40%; } /* عدن */
.point-3 { top: 50%; left: 70%; } /* حضرموت */
.point-4 { top: 45%; left: 85%; } /* المهرة */
.point-saudi { top: 20%; left: 20%; }

/* --- الفوتر --- */
.footer { background: #082d46; color: #fff; padding: 40px 0 10px; }
.footer-content { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
.contact-details a { display: block; color: #fff; text-decoration: none; margin-bottom: 10px; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 20px; padding-top: 15px; text-align: center; font-size: 0.8rem; }

/* --- واتساب العائم --- */
.float-wa {
    position: fixed; bottom: 25px; right: 25px;
    background: #25d366; color: #fff; width: 55px; height: 55px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 28px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 100;
}

/* --- الحركة (Animations) --- */
.pulse-effect { animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(243, 156, 18, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(0,0,0,0); } 100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); } }

/* --- الموبايل (Responsive) --- */
@media (max-width: 768px) {
    .container { width: 90%; margin: 0 auto; }
    .hero h1 { font-size: 2rem; }
    .desktop-btn { display: none; }
    .hamburger { display: block; z-index: 1001; }
    .mobile-only-link { display: block; background: var(--accent); padding: 10px; border-radius: 5px; text-align: center; margin-top: 10px; }
    
    .nav-links {
        position: fixed; top: 0; right: -100%; width: 70%; height: 100vh;
        background: var(--nav-bg); flex-direction: column;
        justify-content: center; padding: 40px; transition: 0.4s;
        box-shadow: -5px 0 15px rgba(0,0,0,0.3);
    }
    .nav-links.active { right: 0; }
    
    /* أنميشن زر القائمة */
    .hamburger.toggle .bar:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
    .hamburger.toggle .bar:nth-child(2) { opacity: 0; }
    .hamburger.toggle .bar:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }
    
    .form-row { grid-template-columns: 1fr; }
}
