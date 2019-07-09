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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f944d3cddaed77a758aa9d46a123796a"
  },
  {
    "url": "accumulate/index.html",
    "revision": "176d25df0ca98e1ffd3e240f5bb0dbc5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4b9ca2989d0a80c2740fa20a028449ae"
  },
  {
    "url": "assets/css/0.styles.960b1d60.css",
    "revision": "9bb6b9f88c684f84f2eb3ace755e382e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.291e04c8.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.acc9d667.js",
    "revision": "e8fa0b987be3fdcc368f3b74a288c10d"
  },
  {
    "url": "assets/js/4.657c7ffb.js",
    "revision": "7ee4038e6038c38a1359ba18e1ced010"
  },
  {
    "url": "assets/js/5.3e584e2a.js",
    "revision": "f6ef483e6e54b2c836e70f45c9f91cb1"
  },
  {
    "url": "assets/js/6.c5fd07fe.js",
    "revision": "ee85fd798cdb935fcf11a4f4d8658a76"
  },
  {
    "url": "assets/js/7.c9228a33.js",
    "revision": "da063ee854a6b2358cc80deb2b05af36"
  },
  {
    "url": "assets/js/8.fcad7e41.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.e2e6e18b.js",
    "revision": "e35d24fc472a070b3bc29ee8246c3b63"
  },
  {
    "url": "guide.html",
    "revision": "3021857c9f1c9f50f0058e21e5596d51"
  },
  {
    "url": "images/as.jpeg",
    "revision": "9a6bdd13a79bcad298d5741a550d96f6"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "a450d6d6610b2271c327ba4d8f20dcc4"
  },
  {
    "url": "others/index.html",
    "revision": "b76df1beef56a8bf1f74e82f847c807f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
