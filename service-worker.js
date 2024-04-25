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
    "revision": "47c5caee0669ccdb73833ed9e0f29f9a"
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
    "url": "assets/js/21.6db08aa0.js",
    "revision": "60fd12841cd9759927c659e53a1b2174"
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
    "url": "assets/js/24.8de06bf4.js",
    "revision": "6fa8252d4aae8fcfe9e0ce6b7904d46f"
  },
  {
    "url": "assets/js/26.8eb59b8d.js",
    "revision": "49e7d77dbb89e19db513fc70d9d0cf95"
  },
  {
    "url": "assets/js/3.0e1e0c06.js",
    "revision": "097cf7c0603752250ebcbf2c7c8257ff"
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
    "url": "assets/js/app.a032c9b5.js",
    "revision": "06a8b4a10d11d8f05bcc83292364e05f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0beb2fc69311d81d81103b9993d2ee48"
  },
  {
    "url": "design/index.html",
    "revision": "65d3af17fdf461b05db0470dc2281c68"
  },
  {
    "url": "index.html",
    "revision": "bf46339e1509d729dc7312867fe45b8d"
  },
  {
    "url": "intro/index.html",
    "revision": "4bb129a7475ca5a7eeca6b0895fe1b22"
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
    "revision": "9cf1f15a010cf2ac95daf0e983abe7c3"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8d4f63acb3163d287dfa9cde1637db6b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7491699727d35e7780d819b6567b7554"
  },
  {
    "url": "software/index.html",
    "revision": "20067db2c75595a54fcecc09fddd5d39"
  },
  {
    "url": "test/index.html",
    "revision": "2382fc2abb2116591e7456043e163b19"
  },
  {
    "url": "use cases/index.html",
    "revision": "7f9243cfc65b90ab6f1e3656e855680b"
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