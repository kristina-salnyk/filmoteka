!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var u,i=r("bpxeT"),l=r("2TvXO"),d=r("l1krc"),c=r("cqmI4"),o=(i=r("bpxeT"),r("dDDEV")),f=(l=r("2TvXO"),c=r("cqmI4"),r("daTbb")),s=r("2hVIf"),p=r("bDPyF"),v=r("jcFG7"),b=function(e){c.default.watchedTab.classList.add("tabs__btn--current"),c.default.queueTab.classList.remove("tabs__btn--current"),c.default.libraryGallery.innerHTML="";var t=f.default.load(s.default.WATCHED_MOVIES);y(t).then((function(e){h(e)}))},y=(u=e(i)(e(l).mark((function t(n){var a,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.map((function(e){return(0,p.fetchMovieById)(e)})),e.next=3,Promise.all(a);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),t)}))),function(e){return u.apply(this,arguments)}),h=function(t){(0,v.default)((t.length/20).toFixed(),q.page);var n=t.map((function(t){var n=e(o)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var a=new Date(t.release_date);return n.year=a.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));F.appendGalleryMarkup(n)},m=(o=r("dDDEV"),c=r("cqmI4"),f=r("daTbb"),s=r("2hVIf"),p=r("bDPyF"),v=r("jcFG7"),function(e){c.default.queueTab.classList.add("tabs__btn--current"),c.default.watchedTab.classList.remove("tabs__btn--current"),c.default.libraryGallery.innerHTML="";var t=f.default.load(s.default.QUEUE_MOVIES);T(t).then((function(e){M(e)}))}),T=function(e){var t=e.map((function(e){return(0,p.fetchMovieById)(e)}));return Promise.all(t)},M=function(t){(0,v.default)((t.length/20).toFixed(),q.page);var n=t.map((function(t){var n=e(o)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var a=new Date(t.release_date);return n.year=a.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));F.appendGalleryMarkup(n)},w=(i=r("bpxeT"),l=r("2TvXO"),p=r("bDPyF"),r("frmlX")),x=r("aYvV9"),g=function(){var t=e(i)(e(l).mark((function t(n){var a,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=n.target.closest("a").dataset.id,e.prev=2,e.next=5,(0,p.fetchMovieById)(a);case 5:r=e.sent,(0,w.renderOneMovieData)(r,F.appendMovieMarkup),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x.default.failedRequest();case 12:case"end":return e.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),L=r("8pYMx"),k=r("d5Phe"),E=r("1MwiW"),_=r("8gEWs"),D=r("hV87x"),F={setLibraryEventListeners:function(){c.default.watchedTab.addEventListener("click",b),c.default.queueTab.addEventListener("click",m),c.default.libraryGallery.addEventListener("click",g)},appendGalleryMarkup:function(e){c.default.libraryGallery.innerHTML=(0,L.default)(e)},appendMovieMarkup:function(e){(0,k.dynamicRefs)().movieData.innerHTML=(0,E.default)(e),(0,k.dynamicRefs)().watchedBtn.addEventListener("click",_.modalWatchedBtnClickHandler),(0,k.dynamicRefs)().queueBtn.addEventListener("click",_.modalQueueBtnClickHandler),(0,_.onOpenModal)(e.id),(0,k.dynamicRefs)().playTrailer.addEventListener("click",D.httpsYouTubeVideo)}};x=r("aYvV9");r("28ryW");var q=new(0,d.default);function I(){return(I=e(i)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F.setLibraryEventListeners(),b();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return I.apply(this,arguments)})().catch((function(e){x.default.failedRequest()}))}();
//# sourceMappingURL=library.7eddeb65.js.map
