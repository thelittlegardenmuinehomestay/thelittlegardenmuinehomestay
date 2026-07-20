// --- TỪ ĐIỂN ĐA NGÔN NGỮ TỔNG HỢP TOÀN WEBSITE ---
const languages = {
    en: {
        // Thanh Menu chung & Footer
        "nav-home": "Home", "nav-rooms": "Rooms", "nav-reviews": "Reviews", "nav-contact": "Contact",
        "foot-links-title": "Quick Links",

        // [Trang Chủ - index.html]
        "hero-title": "Escape to Nature in Mui Ne", "hero-subtitle": "Garden • Peaceful Atmosphere",
        "btn-zalo": "Book via Zalo", "btn-fb": "Book via Facebook",
        "search-title": "Check Availability", "label-checkin": "Check-in Date", "label-checkout": "Check-out Date",
        "label-roomtype": "Room Type", "opt-all": "All Categories", "label-guests": "Guests",
        "guest-1": "1 Guest", "guest-2": "2 Guests", "guest-3": "3 Guests", "guest-4": "4 Guests", "guest-more": "More than 4 Guests",
        "btn-search": "Check Now", 
        "about-title": "About Us", "about-desc": "The Little Garden Mui Ne Homestay is a peaceful, lush garden oasis located right in the heart of Mui Ne’s vibrant dining and entertainment district. Here, you are just a 5-minute walk (200m) from the nearest beach and within easy reach of delicious local restaurants and ocean-view cafes. Featuring independent bungalow designs for ultimate privacy, our property is wrapped in vibrant greenery to ensure a completely comfortable, relaxing, and serene stay.",
        "fac-title": "Facilities", "fac-1": "Welcome drink", "fac-2": "Free WiFi", "fac-3": "Free parking", "fac-4": "Private kitchen for each bungalow", "fac-5": "Garden View with a beautiful lotus pond", "fac-6":"Complimentary coffee and tea", "fac-7":"Air conditioning in each bungalow", "fac-8":"Private bathroom with hot water","fac-9":"Shared washing machine",
        "srv-title": "Extra Services",
        "srv1-name": "Motorbike Rental", "srv1-price": "150,000 VND / day", "srv1-desc": "Scooters available: Honda Vision, Air Blade, or 50cc bikes. Perfect for exploring Mui Ne at your own pace.",
        "srv2-name": "Mui Ne Jeep Tour", "srv2-price": "200,000 - 600,000 VND", "srv2-desc": "Visit White Sand Dunes, Red Sand Dunes, and Fairy Stream. Available in both shared and private tours.",
        "srv3-name": "Karaoke Speaker Rental", "srv3-price": "300,000 VND / evening", "srv3-desc": "Perfect for a fun BBQ evening with friends and family in our garden atmosphere.",
        "srv4-name": "Bus Ticket Booking", "srv4-price": "Free Support", "srv4-desc": "We assist you in booking reliable bus tickets to and from Saigon, Da Lat, Nha Trang, and other destinations.",

        // [Trang Phòng - rooms.html]
        "rooms-title": "Our Bungalows", "rooms-subtitle": "Choose the perfect space for your stay in Mui Ne",
        "room-price-label": "Price from:",
        "room1-name": "Standard Bungalow", "room1-desc-1": "Room size: 15 m²", "room1-desc-2": "Max capacity: 02 Guests", "room1-desc-3": "Bed type: 01 Double Bed",
        "room2-name": "Garden View Bungalow", "room2-desc-1": "Room size: 20 m²", "room2-desc-2": "Max capacity: 02 Guests", "room2-desc-3": "Bed type: 01 Double Bed",
        "room3-name": "Garden View Bungalow 2 Beds", "room3-desc-1": "Room size: 22 m²", "room3-desc-2": "Max capacity: 04 Guests", "room3-desc-3": "Bed type: 02 Double Beds",
        "room4-name": "Family Bungalow", "room4-desc-1": "Room size: 25 m²", "room4-desc-2": "Max capacity: 04 Guests", "room4-desc-3": "Bed type: 02 Double Beds",

        // [Trang Liên Hệ - contact.html]
        "where-to-find":"You can find us at:","call-us": "Call us",

        //language switcher
        "lang-label": "Language:",

    },
    vi: {
        // Thanh Menu chung & Footer
        "nav-home": "Trang Chủ", "nav-rooms": "Phòng Nghỉ", "nav-reviews": "Đánh Giá", "nav-contact": "Liên Hệ",
        "foot-links-title": "Liên Kết Nhanh",

        // [Trang Chủ - index.html]
        "hero-title": "Hòa Mình Vào Thiên Nhiên Mũi Né", "hero-subtitle": "Sân Vườn • Không Gian Yên Bình",
        "btn-zalo": "Đặt qua Zalo", "btn-fb": "Đặt qua Facebook",
        "search-title": "Kiểm Tra Phòng Trống", "label-checkin": "Ngày nhận phòng", "label-checkout": "Ngày trả phòng",
        "label-roomtype": "Loại phòng", "opt-all": "Tất cả các loại", "label-guests": "Số lượng khách",
        "guest-1": "1 Khách", "guest-2": "2 Khách", "guest-3": "3 Khách", "guest-4": "4 Khách", "guest-more": "Hơn 4 khách",
        "btn-search": "Kiểm Tra Ngay",
        "about-title": "Về Chúng Tôi", "about-desc": "The Little Garden Mui Ne Homestay sở hữu view vườn xanh mát, nằm ngay tại vị trí trung tâm ăn uống và vui chơi của Mũi Né nhưng lại vô cùng yên tĩnh. Nơi bạn chỉ mất 5 phút để đi bộ ra biển (cách bãi tắm gần nhất 200m) và dễ dàng tìm thấy các quán ăn ngon cùng các quán cafe view biển tuyệt đẹp. Với thiết kế từng căn bungalow riêng biệt mang lại cảm giác riêng tư tối đa, homestay được phủ đầy cây cối mang đến trải nghiệm thoải mái, thư giãn và bình yên tuyệt đối khi lưu trú.",
        "fac-title": "Tiện Nghi", "fac-1": "Nước uống chào mừng", "fac-2": "WiFi miễn phí", "fac-3": "Bãi đỗ xe miễn phí", "fac-4": "Bếp riêng cho từng căn bungalow", "fac-5": "View sân vườn với hồ sen tuyệt đẹp","fac-6":"Trà và cafe miễn phí", "fac-7":"Tất cả các phòng đều có máy lạnh", "fac-8":"Phòng tắm riêng mỗi phòng với nước nóng","fac-9":"Máy giặt chung",
        "srv-title": "Dịch Vụ Đi Kèm",
        "srv1-name": "Cho Thuê Xe Máy", "srv1-price": "150.000 VND / ngày", "srv1-desc": "Các dòng xe có sẵn: Honda Vision, Air Blade hoặc xe 50cc. Hoàn hảo để tự mình khám phá Mũi Né.",
        "srv2-name": "Tour Xe Jeep Mũi Né", "srv2-price": "200.000 - 600.000 VND", "srv2-desc": "Tham quan Đồi Cát Trắng, Đồi Cát Đỏ và Suối Tiên. Có sẵn hình thức đi ghép hoặc đi tour riêng.",
        "srv3-name": "Thuê Loa Kẹo Kéo", "srv3-price": "300.000 VND / buổi tối", "srv3-desc": "Rất thích hợp cho một buổi tối tiệc nướng BBQ vui vẻ cùng bạn bè và gia đình giữa không gian sân vườn.",
        "srv4-name": "Hỗ Trợ Đặt Vé Xe Khách", "srv4-price": "Hỗ Trợ Miễn Phí", "srv4-desc": "Chúng tôi hỗ trợ bạn đặt vé xe uy tín đi và về giữa Sài Gòn, Đà Lạt, Nha Trang và các điểm đến khác.",

        // [Trang Phòng - rooms.html]
        "rooms-title": "Phòng Nghỉ Của Chúng Tôi", "rooms-subtitle": "Chọn không gian hoàn hảo cho kỳ nghỉ của bạn tại Mũi Né",
        "room-price-label": "Giá phòng chỉ từ:",
        "room1-name": "Standard Bungalow", "room1-desc-1": "Diện tích phòng: 15 m²", "room1-desc-2": "Sức chứa tối đa: 02 người lớn", "room1-desc-3": "Loại giường: 01 giường đôi 1m6x2m",
        "room2-name": "Garden View Bungalow", "room2-desc-1": "Diện tích phòng: 20 m²", "room2-desc-2": "Sức chứa tối đa: 02 người lớn", "room2-desc-3": "Loại giường: 01 giường đôi 1m6x2m",
        "room3-name": "Garden View Bungalow 2 Beds", "room3-desc-1": "Diện tích phòng: 22 m²", "room3-desc-2": "Sức chứa tối đa: 04 người lớn", "room3-desc-3": "Loại giường: 02 giường đôi 1m6x2m",
        "room4-name": "Family Bungalow", "room4-desc-1": "Diện tích phòng: 25 m²", "room4-desc-2": "Sức chứa tối đa: 04 người lớn", "room4-desc-3": "Loại giường: 02 giường đôi 1m6x2m",

        // [Trang Liên Hệ - contact.html]
        "where-to-find":"Bạn có thể tìm chúng tôi tại:", "call-us": "Gọi cho chúng tôi",

        //language switcher
        "lang-label": "Ngôn ngữ:",  
    }
};

// Hàm chuyển đổi ngôn ngữ hoạt động trên toàn trang
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const translationKey = element.getAttribute('data-lang');
        if (languages[lang] && languages[lang][translationKey]) {
            element.textContent = languages[lang][translationKey];
        }
    });

    // Cập nhật giao diện nút bấm active nếu nút đó tồn tại trên trang hiện tại
    const btnEn = document.getElementById('btn-en');
    const btnVi = document.getElementById('btn-vi');
    if (btnEn && btnVi) {
        btnEn.classList.remove('active');
        btnVi.classList.remove('active');
        document.getElementById('btn-' + lang).classList.add('active');
    }
    
    // Lưu lại lựa chọn để khi khách chuyển trang web không bị quay về ngôn ngữ cũ
    localStorage.setItem('preferredLanguage', lang);
}

// Chạy kiểm tra ngôn ngữ ưu tiên ngay khi tải trang xong
document.addEventListener("DOMContentLoaded", function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
});

// --- HÀM XỬ LÝ ĐẶT PHÒNG SANG ZALO (GIỮ LẠI TỪ BƯỚC TRƯỚC) ---
function handleCheckRoom(event) {
    event.preventDefault();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const roomType = document.getElementById("roomType").value;
    const guests = document.getElementById("guests").value;
    
    const fCheckin = checkin.split('-').reverse().join('/');
    const fCheckout = checkout.split('-').reverse().join('/');

    const message = `Xin chào The Little Garden Mui Ne! Tôi muốn kiểm tra tình trạng phòng trống:\n- Loại phòng: ${roomType}\n- Số lượng khách: ${guests}\n- Ngày Check-in: ${fCheckin}\n- Ngày Check-out: ${fCheckout}\nNhờ homestay phản hồi tình trạng phòng nhé.`;
    window.open(`https://zalo.me/0346602846?text=${encodeURIComponent(message)}`, '_blank');
}

// --- LOGIC XỬ LÝ SLIDER ẢNH CHO TRANG ROOMS ---

const roomImages = {



    standard: [

        "images/standard bungalow/standard_bungalow.jpg",

        "images/standard bungalow/standard_bungalow_2.jpg",

        "images/standard bungalow/standard_bungalow_3.jpg"

    ],

    garden: [

        "images/garden view bungalow/garden_view_bungalow.jpg",
        "images/garden view bungalow/garden_view_bungalow_2.jpg",
        "images/garden view bungalow/garden_view_bungalow_3.jpg",
        "images/garden view bungalow/garden_view_bungalow_4.jpg",
        "images/garden view bungalow/garden_view_bungalow_5.jpg",
        "images/garden view bungalow/garden_view_bungalow_6.jpg",
        "images/garden view bungalow/garden_view_bungalow_7.jpg"

    ],

    garden2: [

        "images/garden view bungalow 2 beds/garden view bungalow 2 beds.JPG",
        "images/garden view bungalow 2 beds/garden view bungalow 2 beds_2.JPG",
        "images/garden view bungalow 2 beds/garden view bungalow 2 beds_3.JPG", 
        "images/garden view bungalow 2 beds/garden view bungalow 2 beds_4.JPG",
        "images/garden view bungalow 2 beds/garden view bungalow 2 beds_5.JPG",
        "images/garden view bungalow 2 beds/garden view bungalow 2 beds_6.JPG"

    ],

    family: [

        "images/family bungalow/family_bungalow.jpg",
        "images/family bungalow/family_bungalow_2.jpg",
        "images/family bungalow/family_bungalow_3.jpg",
        "images/family bungalow/family_bungalow_4.jpg", 
        "images/family bungalow/family_bungalow_5.jpg",
        "images/family bungalow/family_bungalow_6.jpg",
        "images/family bungalow/family_bungalow_7.jpg"

    ]

};

const currentIndex = {

    standard: 0,

    garden: 0,

    garden2: 0,

    family: 0

};


function changeSlide(room, direction) {



    currentIndex[room] += direction;



    if (currentIndex[room] < 0) {

        currentIndex[room] = roomImages[room].length - 1;

    }



    if (currentIndex[room] >= roomImages[room].length) {

        currentIndex[room] = 0;

    }



    document.getElementById(room + "-image").src =

        roomImages[room][currentIndex[room]];

}
