!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var i,l=r("bpxeT"),u=r("2TvXO"),d=r("l1krc"),c=r("cqmI4"),s=(l=r("bpxeT"),r("dDDEV")),o=(u=r("2TvXO"),c=r("cqmI4"),r("daTbb")),f=r("2hVIf"),p=r("bDPyF"),v=r("jcFG7"),y=r("j1lrD"),b=function(e){c.default.watchedTab.classList.add("tabs__btn--current"),c.default.queueTab.classList.remove("tabs__btn--current"),c.default.libraryGallery.innerHTML="";var t=o.default.load(f.default.WATCHED_MOVIES);if(!t||0===t.length)return c.default.libraryGallery.insertAdjacentHTML("afterbegin",'<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>');h(t).then((function(e){m(e)}))},h=(i=e(l)(e(u).mark((function t(n){var a,r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.spinner.spin(c.default.libraryGallery),a=n.map((function(e){return(0,p.fetchMovieById)(e)})),e.next=4,Promise.all(a);case 4:return r=e.sent,y.spinner.stop(),e.abrupt("return",r);case 7:case"end":return e.stop()}}),t)}))),function(e){return i.apply(this,arguments)}),m=function(t){(0,v.default)((t.length/20).toFixed(),F.page);var n=t.map((function(t){var n=e(s)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var a=new Date(t.release_date);return n.year=a.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));q.appendGalleryMarkup(n)},g=(s=r("dDDEV"),c=r("cqmI4"),o=r("daTbb"),f=r("2hVIf"),p=r("bDPyF"),v=r("jcFG7"),y=r("j1lrD"),function(e){c.default.queueTab.classList.add("tabs__btn--current"),c.default.watchedTab.classList.remove("tabs__btn--current"),c.default.libraryGallery.innerHTML="";var t=o.default.load(f.default.QUEUE_MOVIES);if(!t||0===t.length)return c.default.libraryGallery.insertAdjacentHTML("afterbegin",'<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>');T(t).then((function(e){M(e)}))}),T=function(e){y.spinner.spin(c.default.libraryGallery);var t=e.map((function(e){return(0,p.fetchMovieById)(e)})),n=Promise.all(t);return y.spinner.stop(),n},M=function(t){(0,v.default)((t.length/20).toFixed(),F.page);var n=t.map((function(t){var n=e(s)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var a=new Date(t.release_date);return n.year=a.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));q.appendGalleryMarkup(n)},x=(l=r("bpxeT"),u=r("2TvXO"),p=r("bDPyF"),r("frmlX")),_=r("aYvV9"),L=(y=r("j1lrD"),c=r("cqmI4"),function(){var t=e(l)(e(u).mark((function t(n){var a,r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=n.target.closest("a").dataset.id,e.prev=2,y.spinner.spin(c.default.libraryGallery),e.next=6,(0,p.fetchMovieById)(a);case 6:r=e.sent,y.spinner.stop(),(0,x.renderOneMovieData)(r,q.appendMovieMarkup),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),_.default.failedRequest();case 14:case"end":return e.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()),w=r("8pYMx"),k=r("d5Phe"),D=r("1MwiW"),E=r("8gEWs"),G=r("hV87x"),q={setLibraryEventListeners:function(){c.default.watchedTab.addEventListener("click",b),c.default.queueTab.addEventListener("click",g),c.default.libraryGallery.addEventListener("click",L)},appendGalleryMarkup:function(e){c.default.libraryGallery.innerHTML=(0,w.default)(e)},appendMovieMarkup:function(e){(0,k.dynamicRefs)().movieData.innerHTML=(0,D.default)(e),(0,k.dynamicRefs)().watchedBtn.addEventListener("click",E.modalWatchedBtnClickHandler),(0,k.dynamicRefs)().queueBtn.addEventListener("click",E.modalQueueBtnClickHandler),(0,E.onOpenModal)(e.id),(0,k.dynamicRefs)().playTrailer.addEventListener("click",G.httpsYouTubeVideo)}};_=r("aYvV9");r("28ryW");var F=new(0,d.default);function I(){return(I=e(l)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q.setLibraryEventListeners();try{b()}catch(e){_.default.failedRequest()}case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return I.apply(this,arguments)})().catch((function(e){_.default.failedRequest()}))}();
//# sourceMappingURL=library.10a64acb.js.map
