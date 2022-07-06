'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "34c003ed865991cf4094004044b6b829",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d0093aced4c8883eeb042c6a988add79",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1cbbdc17917d69374b24c2878369c562",
".git/logs/refs/heads/main": "1cbbdc17917d69374b24c2878369c562",
".git/logs/refs/remotes/origin/main": "1b260606ddf5fa03f4ce8eec4eb06d92",
".git/objects/0c/57af2afd99c5f65000e1501595c82d25781348": "b2e11d8705f6cf5507a91c1ff88590e4",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/ddc49fa2a1baea50fc80bc32b2b90029b18207": "74ea4c1baed3fbbd723a46d5278bf726",
".git/objects/11/39edbe410b5bef2e763f681d60d1e7c1c731aa": "cd73449356dce88eaf98179d7492d189",
".git/objects/11/6c6c64d87e41e69b67370069035b25f99f0210": "80f4bbfcfa853492be657420cfa15d12",
".git/objects/16/50be0eb2e5f86677aa220fbb03f1ab3c04d937": "dc2272daa4830f2d06a7e5f0b25b1ce6",
".git/objects/1b/9b47bc634891b1a14f77b4fced6c02890a01ab": "1ab87a131440560aa22547227c0b0887",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/b0fbfe990be80d1b1c4735a40627317650f40e": "4fe5787de925d14ee3a942aa5514a973",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/e43c510184fc7ad6d4be8147c703a018a5418d": "39893b20100e7d2a70a794e05c2dc7fc",
".git/objects/38/5b3c6daa33cbb607b67758966074124fa58a1e": "16b06fe31e68835fc5bf8989b9c6cd4d",
".git/objects/46/b5da5cec8c2232bcb52415d3903da8b89f41c7": "1505171308e1b156e3dc2df94cc5aa72",
".git/objects/4b/783d58980dd0ab28abadbc0d83f06188b8eb0f": "76ff224784ade47a3186be197d39deff",
".git/objects/4b/eb4e5b6fc3be55a4e1d12061cf828724046517": "f6b87c4955d63cb4f91e7ba2f30debec",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/36a935664c3f63a9711cb0d3e9493f869e14d8": "9f2594b928415751604ff22a7b2be824",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/5b/ba3bac2269ede05cedfa044607e6a45187d6f2": "2a18e04522f9cb1b15b676572c576d4d",
".git/objects/64/a7ddfdaf2269ce4309debcbde88bbc7afc868c": "a5b164b64a534fc3582aca03f663f275",
".git/objects/6e/29ed2e5be0b28e1abdd8058b60db39f1d353c0": "7bebefc4213e95fc94c62c10a661ad72",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/601a11089f4d02584b5637318a51fb0bd3d2ce": "3d547268f22d37022a84b9480a07f3c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/3acbfac67d4340a059b1912f1b7d4efacf2723": "732a454dc6e1079228402bd80b00f8e0",
".git/objects/91/6643a391092f47c14126778c9be41c6ec83620": "38e8e09f4160e38ca2602793c6d34124",
".git/objects/98/6db1a7895a3916f6a224caeb3837047e66c186": "580858504b84a098ac46d264fa5a0596",
".git/objects/99/3b8902a08b74fef2839e3794e86b39af18badb": "b4e40c1960a7d24d05bce211278047f9",
".git/objects/9c/a3355cf8aebb9632b7d8d1ae5345987e508e26": "9e2b3df9921b8a315cfecd7dfddce4ad",
".git/objects/9d/de5afef35b411c1d4c68cf1359bf51319ee362": "6ad74765c10b9618c2f145ba58193b8e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/9c1ee2fb5c0282705dcf0c7d9a08e148985c45": "67b415accd8bb2b437024965222c453a",
".git/objects/b6/159f0076a8013984b1c54217cb2a0f03a81d66": "12f77fc19ba4d665cb2791245c4df2a5",
".git/objects/b7/14cfc32656d5d2c44b3dc43a357e5d78df19cc": "fb38852e16f6f18381e5add6592c8a98",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d0/3f43af2402cae10ea3d27c6937806d537b41ae": "3bcb67771a20ba6fb32afead646801a4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/ae44639a26f53934eaf1dffa989853194e4187": "e62a017561b1d91ace8fc1a8fa4c551d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/24e1fcb832d75f2dbf7fcd6b26abd5bc283034": "4bbf80df087abcee2d475cc70df32246",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/0e91432225975098450ae92d2ca53b9aa7e1ee": "6972d0699ce439b9dbbe5cd28b0f973a",
".git/objects/fa/9ba5d36f89cebbe5402f1567d5bef1bfff527a": "bfea13fcfc25a6c2bfc2ad96e6b34a10",
".git/refs/heads/main": "8124133f5de828f83078e7c9795417ef",
".git/refs/remotes/origin/main": "8124133f5de828f83078e7c9795417ef",
"assets/AssetManifest.json": "bae2512f4ad0705513c4573aaacdee8b",
"assets/FontManifest.json": "b1edce52c735f34131c6683a068186d7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Oxygen-Regular.ttf": "d5ea9b254845291bc569162d298ac3f6",
"assets/fonts/Staatliches-Regular.ttf": "0b1946eaefaeda766701618dba33e03c",
"assets/images/bosscha.jpg": "256600646651e638361646aa2b1b8388",
"assets/images/farm-house.jpg": "3190d0f8d8ad8a5bd96a2e206fb96d06",
"assets/images/floating-market.png": "3825da6a681989426fa55d7493abcf62",
"assets/images/jalan-asia-afrika.jpg": "bec6a2d8b740356d2dfbb1de0fdc3729",
"assets/images/kawah-putih.jpg": "a2371babfc2a47b7f07cd21c70c4d7c1",
"assets/images/museum-geologi.jpg": "feed43fb551fad21fd0b4f40e061c6d3",
"assets/images/ranca-upas.jpg": "18ec585026e0af3f21db6bb7aaccf2ce",
"assets/images/stone-garden.jpg": "baece3780756a2cb8b58e3531201f6e3",
"assets/images/taman-film.jpg": "3c440fc167e79c459af92e62c9b3b400",
"assets/NOTICES": "2d7236aca695ba4cd213a3478e55d740",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb72eab3e404c9c16a8622b042cb5ab4",
"/": "eb72eab3e404c9c16a8622b042cb5ab4",
"main.dart.js": "baf1f1871b27ff84d990bb09e5fcf3c9",
"manifest.json": "9b4c9a57b86734bb5d425289c28ddb19",
"version.json": "252b36c6f8df2b90d5af90696caaf298"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
