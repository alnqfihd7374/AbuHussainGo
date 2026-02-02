// 1. شاشة التحميل (Preloader)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // تأخير بسيط لرؤية الانميشن
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        // تفعيل AOS بعد اختفاء شاشة التحميل لمنع القلتش
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50, // تقليل المسافة لظهور أسرع
            disable: 'mobile' // اختياري: إذا أردت تعطيله في الموبايل لتحسين الأداء
        });
    }, 1000);
});

// 2. الوضع الليلي (Dark Mode)
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// التحقق من التفضيل المحفوظ
if(localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}

themeBtn.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
}

// 3. قائمة الموبايل (انميشن)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // تحويل شكل أيقونة البرقر إلى X
    hamburger.classList.toggle('toggle');
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 4. منطق إرسال واتساب (نفس السابق مع تحسين بسيط)
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // زر التحميل
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحويل...';

    const serviceType = document.getElementById('serviceType').options[document.getElementById('serviceType').selectedIndex].text;
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phoneNumber').value;
    const from = document.getElementById('fromLocation').value;
    const to = document.getElementById('toLocation').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const notes = document.getElementById('notes').value;

    let message = `*حجز جديد - أبوحسين للمشاوير*%0a---------------------------%0a`;
    message += `🚗 *الخدمة:* ${serviceType}%0a`;
    message += `👤 *الاسم:* ${fullName}%0a`;
    message += `📱 *الجوال:* ${phone}%0a`;
    message += `📍 *من:* ${from}%0a`;
    message += `🏁 *إلى:* ${to}%0a`;
    message += `📅 *التاريخ:* ${date}%0a`;
    message += `👥 *الركاب:* ${passengers}%0a`;
    if(notes) message += `📝 *ملاحظات:* ${notes}`;

    const whatsappNumber = "967775196324";
    
    setTimeout(() => {
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        btn.innerHTML = originalText;
    }, 1000);
});
