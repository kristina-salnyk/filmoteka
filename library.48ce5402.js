!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var i,l=a("bpxeT"),u=a("2TvXO"),d=a("cqmI4"),c=(l=a("bpxeT"),a("dDDEV")),s=(u=a("2TvXO"),d=a("cqmI4"),a("daTbb")),o=a("2hVIf"),f=a("bDPyF"),p=a("jcFG7"),v=a("j1lrD"),y=a("ismrh"),b=function(e){d.default.watchedTab.classList.add("tabs__btn--current"),d.default.queueTab.classList.remove("tabs__btn--current"),d.default.libraryGallery.innerHTML="";var t=s.default.load(o.default.WATCHED_MOVIES);if(!t||0===t.length)return I.renderEmptyLibrary();h(t).then((function(e){m(e)}))},h=(i=e(l)(e(u).mark((function t(n){var r,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.spinner.spin(d.default.libraryGallery),r=n.map((function(e){return(0,f.fetchMovieById)(e)})),e.next=4,Promise.all(r);case 4:return a=e.sent,v.spinner.stop(),e.abrupt("return",a);case 7:case"end":return e.stop()}}),t)}))),function(e){return i.apply(this,arguments)}),m=function(t){(0,p.default)(Math.ceil(t.length/20),y.siteConfigs.page);var n=t.map((function(t){var n=e(c)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var r=new Date(t.release_date);return n.year=r.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));I.appendGalleryMarkup(n)},T=(c=a("dDDEV"),d=a("cqmI4"),s=a("daTbb"),o=a("2hVIf"),f=a("bDPyF"),y=a("ismrh"),p=a("jcFG7"),v=a("j1lrD"),function(e){d.default.queueTab.classList.add("tabs__btn--current"),d.default.watchedTab.classList.remove("tabs__btn--current"),d.default.libraryGallery.innerHTML="";var t=s.default.load(o.default.QUEUE_MOVIES);if(!t||0===t.length)return I.renderEmptyLibrary();g(t).then((function(e){L(e)}))}),g=function(e){v.spinner.spin(d.default.libraryGallery);var t=e.map((function(e){return(0,f.fetchMovieById)(e)})),n=Promise.all(t);return v.spinner.stop(),n},L=function(t){(0,p.default)(Math.ceil(t.length/20),y.siteConfigs.page);var n=t.map((function(t){var n=e(c)({},t);n.genres=t.genres.map((function(e){return e.name})).join(", ");var r=new Date(t.release_date);return n.year=r.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));I.appendGalleryMarkup(n)},M=(l=a("bpxeT"),u=a("2TvXO"),f=a("bDPyF"),a("frmlX")),w=a("aYvV9"),E=(v=a("j1lrD"),d=a("cqmI4"),function(){var t=e(l)(e(u).mark((function t(n){var r,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.closest("a").dataset.id,e.prev=2,v.spinner.spin(d.default.libraryGallery),e.next=6,(0,f.fetchMovieById)(r);case 6:a=e.sent,v.spinner.stop(),(0,M.renderOneMovieData)(a,I.appendMovieMarkup),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),w.default.failedRequest();case 14:case"end":return e.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()),k=a("8pYMx"),_=a("d5Phe"),x=a("iObGl"),D=a("1MwiW"),G=a("8gEWs"),q=a("hV87x");var I={setLibraryEventListeners:function(){d.default.watchedTab.addEventListener("click",b),d.default.queueTab.addEventListener("click",T),d.default.libraryGallery.addEventListener("click",E),d.default.goTopBtn.addEventListener("click",x.backToTop),window.addEventListener("scroll",x.trackScroll)},appendGalleryMarkup:function(e){d.default.libraryGallery.innerHTML=(0,k.default)(e)},appendMovieMarkup:function(e){(0,_.dynamicRefs)().movieData.innerHTML=(0,D.default)(e),(0,_.dynamicRefs)().watchedBtn.addEventListener("click",G.modalWatchedBtnClickHandler),(0,_.dynamicRefs)().queueBtn.addEventListener("click",G.modalQueueBtnClickHandler),(0,G.onOpenModal)(e.id),(0,_.dynamicRefs)().playTrailer.addEventListener("click",q.httpsYouTubeVideo)},renderEmptyLibrary:function(){d.default.libraryGallery.insertAdjacentHTML("afterbegin",'<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>')},scrollToTop:function(){window.scrollBy(0,0)}};w=a("aYvV9");function O(){return(O=e(l)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.setLibraryEventListeners();try{b()}catch(e){w.default.failedRequest()}case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}a("28ryW"),function(){return O.apply(this,arguments)}().catch((function(e){w.default.failedRequest()}))}();
//# sourceMappingURL=library.48ce5402.js.map
