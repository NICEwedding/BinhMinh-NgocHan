/* config.template.js - FILE TEMPLATE
   App Electron sẽ replace 
*/
const WEDDING_CONFIG = {
  groomName: "Bình Minh",
  brideName: "Ngọc Hân",

  weddingDate: "2026-01-17 17:00",
  location: "Tại: NGỌN HẢI ĐĂNG Số 1 - Đường Kì Quan - Tuần Châu - Thành Phố Hạ Long - Quảng Ninh",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/x6gYVSk5SVQUrVYGA",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35017.85110253238!2d107.06292885769096!3d20.948714848244304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a5969facb799d%3A0xa04218bfce5b8d2e!2zTkfhu4xOIEjhuqJJIMSQxIJORw!5e1!3m2!1svi!2s!4v1767896686036!5m2!1svi!2s",

  heroImage: "assets/hero.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/3Wvk6-GAiy8",

  gallery: [
    { src: "assets/g1.jpg" },
    { src: "assets/g2.jpg" },
    { src: "assets/g3.jpg" },
    { src: "assets/g4.jpg" },
    { src: "assets/g5.jpg" },
    { src: "assets/g6.jpg" },
    { src: "assets/g7.jpg" },
    { src: "assets/g8.jpg" },
    { src: "assets/g9.jpg" },
    { src: "assets/g10.jpg" }
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Bình Minh",
      parents: "Bố: Trần Nam Bình<br>Mẹ: Đặng Kim Thoa",
      address: "P1808 CC Đông Đô - Phố Nghĩa Đô - Phường Nghĩa Đô - Cầu Giấy - Hà Nội"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Ngọc Hân",
      parents: "Bố: Ngô Xuân Tấn<br>Mẹ: Nguyễn Thị Hương",
      address: "Tổ 4 Khu 6, Phường Giếng Đáy, Thành Phố Hạ Long, Quảng Ninh"
    }
  },

  qr: [
    {
      src: "assets/QR01.jpg",
      title: "NGO NGOC HAN",
      info: "Xin trân thành cảm ơn",
    },
  ]
};
