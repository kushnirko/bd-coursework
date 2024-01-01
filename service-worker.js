/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7b97952ccaa8dbee5751475d95a797b0"
  },
  {
    "url": "assets/css/0.styles.b4ed3f71.css",
    "revision": "c68bb28ddc7ae0bf503800ea3c131156"
  },
  {
    "url": "assets/img/delete-logout-bad.146e65b7.png",
    "revision": "146e65b7afd15aab5fa61131e54c73b5"
  },
  {
    "url": "assets/img/delete-logout-good.9ea68c99.png",
    "revision": "9ea68c99c9b5f7ad5b39c20cdb04feae"
  },
  {
    "url": "assets/img/delete-users-id-bad.46885e6c.png",
    "revision": "46885e6c7bc3f6413f0fbcadbb2a672b"
  },
  {
    "url": "assets/img/delete-users-id-good.5caa3580.png",
    "revision": "5caa3580e36a72c8b8e83a82687b076e"
  },
  {
    "url": "assets/img/get-permissions-id.06672f6c.png",
    "revision": "06672f6c72100f81e56efb11f3878f0b"
  },
  {
    "url": "assets/img/get-permissions.32e3ec71.png",
    "revision": "32e3ec7141f41103c8558be7d0dffe92"
  },
  {
    "url": "assets/img/get-rights-id.8b7e38f6.png",
    "revision": "8b7e38f608366847bd314e548d0ede0d"
  },
  {
    "url": "assets/img/get-rights.4ec3bda4.png",
    "revision": "4ec3bda4c3bcaf2b1d4ed01e9ce35122"
  },
  {
    "url": "assets/img/get-roles-id.f7608446.png",
    "revision": "f7608446d4b77fa5e97c77dc91fed200"
  },
  {
    "url": "assets/img/get-roles.9d7b981a.png",
    "revision": "9d7b981aa67547912616159d7c277aa1"
  },
  {
    "url": "assets/img/get-users-bad.969ced10.png",
    "revision": "969ced108ef5ccaedae774fd13786ae0"
  },
  {
    "url": "assets/img/get-users-good.8d795ace.png",
    "revision": "8d795ace0b92ddf4fb8a1c99761dfeaa"
  },
  {
    "url": "assets/img/get-users-id-bad.cd0fc92e.png",
    "revision": "cd0fc92e0cdd6c98419ce64c0d15df44"
  },
  {
    "url": "assets/img/get-users-id-full-bad.86b1958e.png",
    "revision": "86b1958e3ba97c41f43e79937debd87e"
  },
  {
    "url": "assets/img/get-users-id-full-good.d5702758.png",
    "revision": "d5702758b868e5269947e0a7ab04f817"
  },
  {
    "url": "assets/img/get-users-id-good.45bb124b.png",
    "revision": "45bb124b216ea205e4b20c0b0b063d69"
  },
  {
    "url": "assets/img/patch-profile-bad.e07b965e.png",
    "revision": "e07b965e2e2e8a8cf464427f81c88909"
  },
  {
    "url": "assets/img/patch-profile-good.9226588c.png",
    "revision": "9226588c75a60cc5e4f609734b434737"
  },
  {
    "url": "assets/img/patch-users-id-role-bad.93707b06.png",
    "revision": "93707b0697aa1b09994c5087a11cf789"
  },
  {
    "url": "assets/img/patch-users-id-role-good.960db890.png",
    "revision": "960db8902d6370301f5b0ae49079dc6c"
  },
  {
    "url": "assets/img/post-login-bad.8826539e.png",
    "revision": "8826539e2767564b2c099e20185790c8"
  },
  {
    "url": "assets/img/post-login-good.e560e50f.png",
    "revision": "e560e50ff584e5e44e848c3d723029e5"
  },
  {
    "url": "assets/img/post-signup.4ba4a5f5.png",
    "revision": "4ba4a5f51e2b3cf6daeaa89060b09c18"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start-permission-filling.5beacff0.png",
    "revision": "5beacff0e2514c13c08dbf1bcbed049f"
  },
  {
    "url": "assets/img/start-right-filling.32f033cc.png",
    "revision": "32f033ccc5ccd3493ffef354579c28ab"
  },
  {
    "url": "assets/img/start-role-filling.dd46c043.png",
    "revision": "dd46c043bdc997f74979c2ddb40213dd"
  },
  {
    "url": "assets/img/start-user-filling.b7a12aa7.png",
    "revision": "b7a12aa7133891da7fcdd338acc64bd2"
  },
  {
    "url": "assets/js/10.85269a58.js",
    "revision": "e0c0042c7225ae6cddc93e4bbd32034e"
  },
  {
    "url": "assets/js/11.ecd38bdb.js",
    "revision": "580363b97459b32eb1a11be377aa9af2"
  },
  {
    "url": "assets/js/12.873da029.js",
    "revision": "3368f4e3b3f260db903ab30d611ab7dc"
  },
  {
    "url": "assets/js/13.b4ff3e5b.js",
    "revision": "17ed01db611a44c3e9e99764b2a4d327"
  },
  {
    "url": "assets/js/14.6dd7a47b.js",
    "revision": "0ddf75559c7fb851d62bb8b9267248f4"
  },
  {
    "url": "assets/js/15.966ea513.js",
    "revision": "489948908d7e5eb77fc238906aed02ac"
  },
  {
    "url": "assets/js/16.8fe1b9da.js",
    "revision": "c30ad30802e8d2e652ebcb2bfe926a15"
  },
  {
    "url": "assets/js/17.4d1fb61b.js",
    "revision": "e3add1e29f18c120c5eddd50e8ce747a"
  },
  {
    "url": "assets/js/18.77dc4e41.js",
    "revision": "893812ee8c7fde962ea60c9963a6f1d9"
  },
  {
    "url": "assets/js/19.2f09dc26.js",
    "revision": "fc44fbd9f5a877c37fa5a85b021c495d"
  },
  {
    "url": "assets/js/2.ad6f59d4.js",
    "revision": "a23ba915cc45167879c6066cb22645ed"
  },
  {
    "url": "assets/js/20.26043e77.js",
    "revision": "f1bacb1b879fe7752972de7256e73b3b"
  },
  {
    "url": "assets/js/21.d5af9256.js",
    "revision": "f541b5fce726273189e70faf70008a6d"
  },
  {
    "url": "assets/js/22.efdc87c6.js",
    "revision": "9a81688257db9b547e92c8fcdd9e36ed"
  },
  {
    "url": "assets/js/23.c7f365f6.js",
    "revision": "8749f341a3db1b44add4dd66db342294"
  },
  {
    "url": "assets/js/24.f275fc45.js",
    "revision": "3d597c93467b5d26d226373637ddc630"
  },
  {
    "url": "assets/js/26.722e7507.js",
    "revision": "bf0329e893a84d3fc2c9ec8af082e066"
  },
  {
    "url": "assets/js/3.ce04b123.js",
    "revision": "fd56292d41af1beb5ee7bb9137c6bc0b"
  },
  {
    "url": "assets/js/4.2cda7a0b.js",
    "revision": "6aeecd9f3473084fb8f7e5d19f70ddce"
  },
  {
    "url": "assets/js/5.498830d1.js",
    "revision": "90d304447c550301722cdef030e4c1a4"
  },
  {
    "url": "assets/js/6.de5031aa.js",
    "revision": "f28e9b878fabd85e1d746824e6d102cd"
  },
  {
    "url": "assets/js/7.a4b8ce15.js",
    "revision": "348be986c955af46a70a2ee55104b22e"
  },
  {
    "url": "assets/js/8.e64743c2.js",
    "revision": "98a271e812996abb99cdaf4c46802ad4"
  },
  {
    "url": "assets/js/9.7c346afb.js",
    "revision": "9aee28aa1f9d9cbb4dfc805f4c1107e3"
  },
  {
    "url": "assets/js/app.6dcbc330.js",
    "revision": "1a757c5e3f40b57bcfcc3429c11733bc"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a9a08e32ceb565c121ea0e473e39215e"
  },
  {
    "url": "design/index.html",
    "revision": "f18b29da4a527a5f6977d3f70fd3b4f0"
  },
  {
    "url": "index.html",
    "revision": "d4b954c2b389b9d8b65f2a9a2c704d0a"
  },
  {
    "url": "intro/index.html",
    "revision": "830bddd8259dada79e17de156ca698dd"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a5a9b90721652cfc82101a47a5890497"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3f1281850fc72fac92cd263da91b4a16"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d96af972bb4b6c18deecf16262f35b88"
  },
  {
    "url": "software/index.html",
    "revision": "9e347d0f93060bf5aa9318fb8f57c779"
  },
  {
    "url": "test/index.html",
    "revision": "f7066f22d820e3965fc315c53f2105b5"
  },
  {
    "url": "use cases/index.html",
    "revision": "f5ba2798f12ba0da229712ac5fa104cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
