var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("53vTJ"),l=n("3ILHO"),d=(l=n("3ILHO"),n("4dtAK")),i=n("8LAK9"),s=n("ag3f1"),o=n("2nhTy");const c=e=>{l.default.watchedTab.classList.add("tabs__btn--current"),l.default.queueTab.classList.remove("tabs__btn--current"),l.default.libraryGallery.innerHTML="";const t=d.default.load(i.default.WATCHED_MOVIES);if(!t||0===t.length)return l.default.libraryGallery.insertAdjacentHTML("afterbegin",'<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>');u(t).then((e=>{f(e)}))},u=async e=>{const t=e.map((e=>(0,s.fetchMovieById)(e)));return await Promise.all(t)},f=e=>{(0,o.default)((e.length/20).toFixed(),w.page);const t=e.map((e=>{const t={...e};t.genres=e.genres.map((e=>e.name)).join(", ");const a=new Date(e.release_date);return t.year=a.getFullYear(),t.vote=e.vote_average.toFixed(1),t}));E.appendGalleryMarkup(t)};l=n("3ILHO"),d=n("4dtAK"),i=n("8LAK9"),s=n("ag3f1"),o=n("2nhTy");const p=e=>{l.default.queueTab.classList.add("tabs__btn--current"),l.default.watchedTab.classList.remove("tabs__btn--current"),l.default.libraryGallery.innerHTML="";const t=d.default.load(i.default.QUEUE_MOVIES);if(!t||0===t.length)return l.default.libraryGallery.insertAdjacentHTML("afterbegin",'<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>');y(t).then((e=>{v(e)}))},y=e=>{const t=e.map((e=>(0,s.fetchMovieById)(e)));return Promise.all(t)},v=e=>{(0,o.default)((e.length/20).toFixed(),w.page);const t=e.map((e=>{const t={...e};t.genres=e.genres.map((e=>e.name)).join(", ");const a=new Date(e.release_date);return t.year=a.getFullYear(),t.vote=e.vote_average.toFixed(1),t}));E.appendGalleryMarkup(t)};s=n("ag3f1");var b=n("cJ4l5"),g=n("2Dfe2");const h=async e=>{e.preventDefault();const t=e.target.closest("a").dataset.id;try{const e=await(0,s.fetchMovieById)(t);(0,b.renderOneMovieData)(e,E.appendMovieMarkup)}catch(e){g.default.failedRequest()}};var L=n("2gAtb"),m=n("hBEsZ"),T=n("b986f"),M=n("9TOT1"),_=n("bZJOo");var E={setLibraryEventListeners:()=>{l.default.watchedTab.addEventListener("click",c),l.default.queueTab.addEventListener("click",p),l.default.libraryGallery.addEventListener("click",h)},appendGalleryMarkup:e=>{l.default.libraryGallery.innerHTML=(0,L.default)(e)},appendMovieMarkup:e=>{(0,m.dynamicRefs)().movieData.innerHTML=(0,T.default)(e),(0,m.dynamicRefs)().watchedBtn.addEventListener("click",M.modalWatchedBtnClickHandler),(0,m.dynamicRefs)().queueBtn.addEventListener("click",M.modalQueueBtnClickHandler),(0,M.onOpenModal)(e.id),(0,m.dynamicRefs)().playTrailer.addEventListener("click",_.httpsYouTubeVideo)}};g=n("2Dfe2");n("hEnct");const w=new(0,r.default);(async function(){E.setLibraryEventListeners();try{c()}catch(e){g.default.failedRequest()}})().catch((e=>{g.default.failedRequest()}));
//# sourceMappingURL=library.8795acdd.js.map
