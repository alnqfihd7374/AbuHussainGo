document.addEventListener('DOMContentLoaded', () => {
    
    // 1. شاشة التحميل (Preloader) - مع حماية
    const preloader = document.getElementById('preloader');
    
    // وظيفة لإخفاء الشاشة
    const hidePreloader = () => {
        if(preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    };

    // إخفاء الشاشة عند اكتمال التحميل
    window.addEventListener('load', () => {
        hidePreloader();
        // تفعيل مكتبة AOS بعد التحميل
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 800, once: true, offset: 50 });
        }
    });

    // *أمان إضافي*: إخفاء الشاشة بعد 5 ثواني حتى لو لم يكتمل التحميل
    setTimeout(hidePreloader, 5000);

    // 2. قائمة الموبايل (Mobile Menu)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        // إغلاق القائمة عند اختيار رابط
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            });
        });
    }

    // 3. الوضع الليلي (Dark Mode)
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (themeBtn) {
        // استرجاع الوضع المحفوظ
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 4. نموذج حجز الواتساب (WhatsApp Booking)
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // تغيير نص الزر ليدل على التفاعل
            const btn = bookingForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحويل...';

            // جمع البيانات
            const service = document.getElementById('serviceType').options[document.getElementById('serviceType').selectedIndex].text;
            const name = document.getElementById('fullName').value;
            const phone = document.getElementById('phoneNumber').value;
            const from = document.getElementById('fromLocation').value;
            const to = document.getElementById('toLocation').value;
            const date = document.getElementById('date').value;
            const pax = document.getElementById('passengers').value;
            const notes = document.getElementById('notes').value;

            // تنسيق الرسالة
            let msg = `*حجز جديد - أبوحسين للمشاوير*%0a`;
            msg += `---------------------------%0a`;
            msg += `🚗 *الخدمة:* ${service}%0a`;
            msg += `👤 *الاسم:* ${name}%0a`;
            msg += `📱 *الجوال:* ${phone}%0a`;
            msg += `📍 *من:* ${from}%0a`;
            msg += `🏁 *إلى:* ${to}%0a`;
            msg += `📅 *التاريخ:* ${date}%0a`;
            msg += `👥 *العدد:* ${pax}%0a`;
            if(notes) msg += `📝 *ملاحظات:* ${notes}`;

            // فتح واتساب
            const whatsappNumber = "967775196324";
            setTimeout(() => {
                window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
                btn.innerHTML = originalText;
            }, 1000);
        });
    }
});
