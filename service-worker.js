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
    "revision": "1a1357a78afcfea8296581b0044274c3"
  },
  {
    "url": "assets/css/0.styles.b4ed3f71.css",
    "revision": "c68bb28ddc7ae0bf503800ea3c131156"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5160b011.js",
    "revision": "825c9bb4fafc48633c6ebf4ba9e00aca"
  },
  {
    "url": "assets/js/11.1e316c1b.js",
    "revision": "4f85d4372323438f9bdc90960508766c"
  },
  {
    "url": "assets/js/12.fac1aefd.js",
    "revision": "ecba815e106dc811888674f618a244b9"
  },
  {
    "url": "assets/js/13.1936308b.js",
    "revision": "51c2abb0aebf08bc6423ba8d57f6dc50"
  },
  {
    "url": "assets/js/14.d4ea4dd9.js",
    "revision": "79913a9217ca17b88b51190cc829849d"
  },
  {
    "url": "assets/js/15.6a575e38.js",
    "revision": "93171331aab8ae5497d53603704d2aaa"
  },
  {
    "url": "assets/js/16.9bf57afe.js",
    "revision": "512525b08e4db64ca63212bd7145e0b7"
  },
  {
    "url": "assets/js/17.2dea6c27.js",
    "revision": "07a5a798f9766c11254746e6a64834d9"
  },
  {
    "url": "assets/js/18.17987dbf.js",
    "revision": "5fd571eb997abd5fe285b747d538dbe4"
  },
  {
    "url": "assets/js/19.9fa1ba69.js",
    "revision": "594583e5042a8348278567cf261c6e1a"
  },
  {
    "url": "assets/js/2.19ba6075.js",
    "revision": "8bb603d1af089bc861f765898042976c"
  },
  {
    "url": "assets/js/20.ac194911.js",
    "revision": "29905bf2bcbfe901cf53bcf32575b79d"
  },
  {
    "url": "assets/js/21.efee92e7.js",
    "revision": "7715e2bc8e3f94168aafd2338962815c"
  },
  {
    "url": "assets/js/22.63a7bb4a.js",
    "revision": "a3d07b5a04e788050a19629347f35d19"
  },
  {
    "url": "assets/js/23.4ab86a29.js",
    "revision": "b1a23166f7edafa13487eb08f7b0c7ad"
  },
  {
    "url": "assets/js/24.131c499c.js",
    "revision": "219b5c45518a43583445d1f73eabb21f"
  },
  {
    "url": "assets/js/26.fcd618b6.js",
    "revision": "1ce14798a4691e1a67587eb760d677d9"
  },
  {
    "url": "assets/js/3.f6d13cb0.js",
    "revision": "516a7125c198e399f148227e0d3c07ef"
  },
  {
    "url": "assets/js/4.599d6513.js",
    "revision": "e6246c7d786e438adb1aae8a42c051a2"
  },
  {
    "url": "assets/js/5.3f851cae.js",
    "revision": "d8ff767e2d5c9c5546251c4b21af7d2c"
  },
  {
    "url": "assets/js/6.e4d20776.js",
    "revision": "2ef27f8520ffa5c782d6a3926bf3a114"
  },
  {
    "url": "assets/js/7.0212e280.js",
    "revision": "71b90730759d5109e5822c294d850e5c"
  },
  {
    "url": "assets/js/8.cec94a30.js",
    "revision": "3cbae27137905399d3f27d781fd2ee20"
  },
  {
    "url": "assets/js/9.9950a0a6.js",
    "revision": "06161781e3597ef2301986c1b194b518"
  },
  {
    "url": "assets/js/app.38c023fe.js",
    "revision": "41003ee8ee39ad831587ebf70f6d2267"
  },
  {
    "url": "conclusion/index.html",
    "revision": "99d633f45a41c14d5289517e823be4e4"
  },
  {
    "url": "design/index.html",
    "revision": "ccaf740799d379184a6c7a8f1cdb9095"
  },
  {
    "url": "index.html",
    "revision": "f77d0e9cc8dae477ad9bc8ea53f0eee2"
  },
  {
    "url": "intro/index.html",
    "revision": "1c2ecc7f96e4f5fa84af00b70721ced8"
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
    "revision": "a7d18299964d23b152a87c1d517d7185"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "989a82e3ab0820ecb1b506785ecf4f8d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "cd2cd3fc5d10b6b29823cf944f55c2fc"
  },
  {
    "url": "software/index.html",
    "revision": "2da5fa2ce8a537872707d812ad75a710"
  },
  {
    "url": "test/index.html",
    "revision": "25c4710d43b4990e13975607a6c9f3cb"
  },
  {
    "url": "use cases/index.html",
    "revision": "77f409e3240b894734ab66cd9478af91"
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
