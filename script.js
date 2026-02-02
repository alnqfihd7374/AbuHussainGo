// تشغيل مكتبة الحركة عند التمرير
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// قائمة الموبايل
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// منطق حجز الواتساب الذكي
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // جمع البيانات من النموذج
    const serviceType = document.getElementById('serviceType').value;
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phoneNumber').value;
    const from = document.getElementById('fromLocation').value;
    const to = document.getElementById('toLocation').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const notes = document.getElementById('notes').value;

    let message = "";

    // تحديد قالب الرسالة بناءً على نوع الخدمة
    switch(serviceType) {
        case 'ride':
            message = `*السلام عليكم، حجز مشوار خاص*%0a
            👤 الاسم: ${fullName}%0a
            📱 الجوال: ${phone}%0a
            📍 من: ${from}%0a
            🏁 إلى: ${to}%0a
            📅 التاريخ: ${date}%0a
            👥 الركاب: ${passengers}%0a
            📝 ملاحظات: ${notes}`;
            break;
            
        case 'travel':
            message = `*السلام عليكم، حجز سفر محافظات*%0a
            👤 الاسم: ${fullName}%0a
            📱 الجوال: ${phone}%0a
            🏙 من: ${from}%0a
            🏙 إلى: ${to}%0a
            📅 التاريخ: ${date}%0a
            👥 الركاب: ${passengers}%0a
            📝 ملاحظات: ${notes}`;
            break;

        case 'international':
            message = `*السلام عليكم، حجز رحلة دولية*%0a
            👤 الاسم: ${fullName}%0a
            📱 الجوال: ${phone}%0a
            🌍 من: ${from}%0a
            🌍 إلى الدولة: ${to}%0a
            📅 التاريخ: ${date}%0a
            👥 المسافرين: ${passengers}%0a
            📝 ملاحظات: ${notes}`;
            break;

        case 'errand':
            message = `*السلام عليكم، طلب إنجاز معاملة*%0a
            👤 الاسم: ${fullName}%0a
            📱 الجوال: ${phone}%0a
            📄 المعاملة: ${notes}%0a
            🏢 الجهة: ${to}%0a
            📅 الموعد: ${date}`;
            break;

        case 'family':
            message = `*السلام عليكم، حجز عائلي خاص*%0a
            👤 الاسم: ${fullName}%0a
            📱 الجوال: ${phone}%0a
            📍 من: ${from}%0a
            🏁 إلى: ${to}%0a
            📅 التاريخ: ${date}%0a
            👨‍👩‍👧 عدد الأفراد: ${passengers}%0a
            📝 ملاحظات خاصة: ${notes}`;
            break;
    }

    // رقم الواتساب (مع الكود الدولي لليمن)
    const whatsappNumber = "967775196324";
    
    // إنشاء الرابط وفتحه
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
});
