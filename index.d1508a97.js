!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("bpxeT"),l=o("2TvXO"),s=o("ismrh"),c=o("4E4Pm"),i=o("aYvV9");o("hE6Pt");a=o("bpxeT"),l=o("2TvXO");var u,d=o("lu0v5"),f=o("4s6iC"),p=(i=o("aYvV9"),u=e(a)(e(l).mark((function t(){var n,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f.REQUEST_URL.GENRES),e.prev=1,e.next=4,d.default.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),i.default.failedRequest();case 11:case"end":return e.stop()}}),t,null,[[1,8]])}))),function(){return u.apply(this,arguments)}),v=o("8e3iG"),h=o("4TQEA");!function(){var e={openModalBtn:document.querySelector("[data-footer-modal-open]"),closeModalBtn:document.querySelector("[data-footer-modal-close]"),footerModal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.footerModal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),o("28ryW"),o("d7YoC");var m=o("j1lrD"),g=o("cqmI4");function x(){return(x=e(a)(e(l).mark((function t(){var n,r,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.default.setHomeEventListeners(),e.prev=1,m.spinner.spin(g.default.homeGallery),e.next=5,p();case 5:return n=e.sent,r=n.genres,s.siteConfigs.genres=r,e.next=10,(0,v.fetchTrendingMovies)();case 10:o=e.sent,m.spinner.stop(),(0,h.renderMoviesData)(o),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),i.default.failedRequest();case 18:case"end":return e.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}(function(){return x.apply(this,arguments)})().catch((function(e){i.default.failedRequest()}))}();
//# sourceMappingURL=index.d1508a97.js.map