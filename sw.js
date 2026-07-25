// Service Worker ขั้นต่ำ มีไว้เพื่อให้ Chrome/Edge นับหน้านี้เป็น PWA ที่ติดตั้งได้
// ไม่ได้ทำ caching หรือ offline ใด ๆ แค่ปล่อยให้ทุก request วิ่งผ่านเน็ตตามปกติ

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
