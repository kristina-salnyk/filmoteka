var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("53vTJ"),l=n("3ILHO"),s=(l=n("3ILHO"),n("4dtAK")),o=n("8LAK9"),d=n("ag3f1"),u=n("2nhTy");const i=e=>{l.default.watchedTab.classList.add("tabs__btn--current"),l.default.queueTab.classList.remove("tabs__btn--current"),l.default.libraryGallery.innerHTML="";const t=s.default.load(o.default.WATCHED_MOVIES);console.log(t),c(t).then((e=>{f({results:e})}))},c=async e=>{const t=e.map((e=>(0,d.fetchMovieById)(e)));return await Promise.all(t)},f=e=>{const{results:t,total_pages:a,total_results:n}=e;(0,u.default)(a,L.page);const r=t.map((e=>{const t={...e};t.genres=e.genres.map((e=>e.name)).join(", ");const a=new Date(e.release_date);return t.year=a.getFullYear(),t.vote=e.vote_average.toFixed(1),t}));v.appendGalleryMarkup(r)};l=n("3ILHO"),s=n("4dtAK"),o=n("8LAK9"),d=n("ag3f1"),u=n("2nhTy");const p=e=>{l.default.queueTab.classList.add("tabs__btn--current"),l.default.watchedTab.classList.remove("tabs__btn--current"),l.default.libraryGallery.innerHTML="";const t=s.default.load(o.default.QUEUE_MOVIES);console.log(t),g(t).then((e=>{const t={results:e,total_pages:(e.length/20).toFixed(0),total_results:e.length};b(t)}))},g=e=>{const t=e.map((e=>(0,d.fetchMovieById)(e)));return Promise.all(t)},b=e=>{const{results:t,total_pages:a,total_results:n}=e;(0,u.default)(a,L.page);const r=t.map((e=>{const t={...e};t.genres=e.genres.map((e=>e.name)).join(", ");const a=new Date(e.release_date);return t.year=a.getFullYear(),t.vote=e.vote_average.toFixed(1),t}));v.appendGalleryMarkup(r)};var y=n("2gAtb");var v={setLibraryEventListeners:()=>{l.default.watchedTab.addEventListener("click",i),l.default.queueTab.addEventListener("click",p)},appendGalleryMarkup:e=>{l.default.libraryGallery.innerHTML=(0,y.default)(e)}},_=n("2Dfe2");n("iKL41");const L=new(0,r.default);(async function(){v.setLibraryEventListeners()})().catch((e=>{_.default.failedRequest()}));
//# sourceMappingURL=library.8749fc27.js.map
