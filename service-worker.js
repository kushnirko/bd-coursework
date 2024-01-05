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
    "revision": "12502e5529f8dc66c54e3036b4169628"
  },
  {
    "url": "assets/css/0.styles.9d2ed4e2.css",
    "revision": "5dd18067cfa27337e3ee5537540b6113"
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
    "url": "assets/img/relational-schema.a1d70381.png",
    "revision": "a1d70381c4dad1d0e644bd6842d8da14"
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
    "url": "assets/js/10.e6927cec.js",
    "revision": "6ea572b9fa33a3825aa54539199c8bd5"
  },
  {
    "url": "assets/js/11.c60dcc78.js",
    "revision": "d8885390ba70879da6543d711738c6f9"
  },
  {
    "url": "assets/js/12.afc7af3a.js",
    "revision": "f65cd45f492b1b43ac175b2724338ec9"
  },
  {
    "url": "assets/js/13.0104dd72.js",
    "revision": "167162459985dc146e41082ee4786e3e"
  },
  {
    "url": "assets/js/14.c1ce51d9.js",
    "revision": "f3a84e1878a60b475601c313fddebb8c"
  },
  {
    "url": "assets/js/15.9c618c0e.js",
    "revision": "3a78cd7398e3ab67b39324ff90053581"
  },
  {
    "url": "assets/js/16.bb8990c9.js",
    "revision": "53e30f284e23d1b679e8b01d5097b7af"
  },
  {
    "url": "assets/js/17.ced78e1c.js",
    "revision": "1a976882ff4f24bb912c069f69afad93"
  },
  {
    "url": "assets/js/18.a416acd8.js",
    "revision": "f1a117d6477f6171082f4d2b3514f5f6"
  },
  {
    "url": "assets/js/19.f4d0631d.js",
    "revision": "b6e92f5fd7a7c32dd75128275b1270f5"
  },
  {
    "url": "assets/js/2.90ddacf7.js",
    "revision": "a7184541c99d155e2ae48fb928710b2e"
  },
  {
    "url": "assets/js/20.9ea0bba6.js",
    "revision": "73b508b8f4c92bafec99f80f708c7f6f"
  },
  {
    "url": "assets/js/21.b4850d85.js",
    "revision": "72787d03692d491fb60cc719a0605fcd"
  },
  {
    "url": "assets/js/22.3cd3fd4b.js",
    "revision": "be4823fc700521e55372185f10773ce2"
  },
  {
    "url": "assets/js/23.bbdae0ee.js",
    "revision": "804dc40c55fd820191107d6e80edf61b"
  },
  {
    "url": "assets/js/24.f275fc45.js",
    "revision": "3d597c93467b5d26d226373637ddc630"
  },
  {
    "url": "assets/js/26.8eb59b8d.js",
    "revision": "49e7d77dbb89e19db513fc70d9d0cf95"
  },
  {
    "url": "assets/js/3.1ba21f15.js",
    "revision": "95b612c49e302abe73eabe1be4a2c147"
  },
  {
    "url": "assets/js/4.a3828600.js",
    "revision": "4874365b9fd6b00187e5de571517d7f2"
  },
  {
    "url": "assets/js/5.86787e0d.js",
    "revision": "7ff7c171604f8ec6d13246ddbd840095"
  },
  {
    "url": "assets/js/6.79742f95.js",
    "revision": "e3b78637f346d55e3b2f31813db5f9d9"
  },
  {
    "url": "assets/js/7.ff624634.js",
    "revision": "a87f2f328b3fb226167616a51171575f"
  },
  {
    "url": "assets/js/8.bfac1a66.js",
    "revision": "92846be1499573263a6ea509d1f9f634"
  },
  {
    "url": "assets/js/9.f726a4d5.js",
    "revision": "7a2e5f078eb6ffe74c0a826ff838a65c"
  },
  {
    "url": "assets/js/app.f3ef4712.js",
    "revision": "d9e3df27f75546dcab12146706fd01fb"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3f44fd867e730b847c35d15cf91c374e"
  },
  {
    "url": "design/index.html",
    "revision": "fefa5aea5a2ef2be717a00ff653d224d"
  },
  {
    "url": "index.html",
    "revision": "fa3d6c57142e80990c45a0304d1da18d"
  },
  {
    "url": "intro/index.html",
    "revision": "ce52dd6412a5d0eef79bcd141090872d"
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
    "revision": "55688f1d307d97a3dbb09453964bfe9c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bf80b68f4088cf7c4b45a956d264d92b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d0ab221ff7b1ef5033878b1ec840d617"
  },
  {
    "url": "software/index.html",
    "revision": "07b1802b5eef7ec6c46cc11cb45037ec"
  },
  {
    "url": "test/index.html",
    "revision": "da85426d83cf12ee5d1b433247001117"
  },
  {
    "url": "use cases/index.html",
    "revision": "43f4216de8fa220a1e21a7e3521be2f2"
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
