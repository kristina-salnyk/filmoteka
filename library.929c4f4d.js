!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var i,u=r("bpxeT"),l=r("2TvXO"),d=r("l1krc"),c=r("cqmI4"),o=(u=r("bpxeT"),r("dDDEV")),f=(l=r("2TvXO"),c=r("cqmI4"),r("daTbb")),s=r("2hVIf"),p=r("bDPyF"),v=r("jcFG7"),b=(new Spinner(spinnerConfigs),function(e){c.default.watchedTab.classList.add("tabs__btn--current"),c.default.queueTab.classList.remove("tabs__btn--current"),c.default.libraryGallery.innerHTML="";var t=f.default.load(s.default.WATCHED_MOVIES);if(!t||0===t.length)return m();y(t).then((function(e){h(e)}))}),y=(i=e(u)(e(l).mark((function t(n){var a,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.map((function(e){return(0,p.fetchMovieById)(e)})),e.next=3,Promise.all(a);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),t)}))),function(e){return i.apply(this,arguments)}),h=function(t){(0,v.default)((t.length/20).toFixed(),G.page);var n=t.map((function(t){var n=e(o)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var a=new Date(t.release_date);return n.year=a.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));F.appendGalleryMarkup(n)};function m(){c.default.libraryGallery.insertAdjacentHTML("afterbegin",'<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>')}o=r("dDDEV"),c=r("cqmI4"),f=r("daTbb"),s=r("2hVIf"),p=r("bDPyF"),v=r("jcFG7");var g=function(e){c.default.queueTab.classList.add("tabs__btn--current"),c.default.watchedTab.classList.remove("tabs__btn--current"),c.default.libraryGallery.innerHTML="";var t=f.default.load(s.default.QUEUE_MOVIES);if(!t||0===t.length)return m();T(t).then((function(e){M(e)}))},T=function(e){var t=e.map((function(e){return(0,p.fetchMovieById)(e)}));return Promise.all(t)},M=function(t){(0,v.default)((t.length/20).toFixed(),G.page);var n=t.map((function(t){var n=e(o)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var a=new Date(t.release_date);return n.year=a.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));F.appendGalleryMarkup(n)},w=(u=r("bpxeT"),l=r("2TvXO"),p=r("bDPyF"),r("frmlX")),x=r("aYvV9"),L=function(){var t=e(u)(e(l).mark((function t(n){var a,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=n.target.closest("a").dataset.id,e.prev=2,e.next=5,(0,p.fetchMovieById)(a);case 5:r=e.sent,(0,w.renderOneMovieData)(r,F.appendMovieMarkup),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x.default.failedRequest();case 12:case"end":return e.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),_=r("8pYMx"),k=r("d5Phe"),E=r("1MwiW"),D=r("8gEWs"),q=r("hV87x"),F={setLibraryEventListeners:function(){c.default.watchedTab.addEventListener("click",b),c.default.queueTab.addEventListener("click",g),c.default.libraryGallery.addEventListener("click",L)},appendGalleryMarkup:function(e){c.default.libraryGallery.innerHTML=(0,_.default)(e)},appendMovieMarkup:function(e){(0,k.dynamicRefs)().movieData.innerHTML=(0,E.default)(e),(0,k.dynamicRefs)().watchedBtn.addEventListener("click",D.modalWatchedBtnClickHandler),(0,k.dynamicRefs)().queueBtn.addEventListener("click",D.modalQueueBtnClickHandler),(0,D.onOpenModal)(e.id),(0,k.dynamicRefs)().playTrailer.addEventListener("click",q.httpsYouTubeVideo)}};x=r("aYvV9");r("28ryW");var G=new(0,d.default);function I(){return(I=e(u)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F.setLibraryEventListeners();try{b()}catch(e){x.default.failedRequest()}case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return I.apply(this,arguments)})().catch((function(e){x.default.failedRequest()}))}();
//# sourceMappingURL=library.929c4f4d.js.map
