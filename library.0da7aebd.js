var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("dTJX3"),l=n("2Dfe2"),i=n("cZbQA");n("hEnct"),n("6k5BS"),n("6HA5D"),n("gNPWU"),n("4S0r6");var d=n("amyG6"),o=n("3ILHO"),u=n("ay12W"),f=(i=n("cZbQA"),n("bcxib")),c=n("8G1wF"),s=n("kak2t");n("oxp97");var p=n("04jNI");(0,d.onAuthStateChanged)(i.auth,(e=>{i.auth.currentUser?o.default.openRegistrationBtn.textContent="Log out":o.default.openRegistrationBtn.textContent="Log in","QUEUE"===f.default.load(c.STORAGE_KEYS.LAST_FETCH)&&(0,s.queueTabClickHandler)().catch((e=>{l.default.failedRequest()})),(0,u.watchedTabClickHandler)().catch((e=>{l.default.failedRequest()}))})),async function(){f.default.save(c.STORAGE_KEYS.LAST_FETCH,"WATCHED"),r.default.setLibraryEventListeners(),p.spinner.spin(o.default.libraryGallery),setTimeout((()=>{i.auth.currentUser||(0,u.watchedTabClickHandler)().catch((e=>{l.default.failedRequest()})),p.spinner.stop()}),2e3)}().catch((e=>{l.default.failedRequest()}));
//# sourceMappingURL=library.0da7aebd.js.map
