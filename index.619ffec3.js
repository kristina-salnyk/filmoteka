var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var d=n("53vTJ"),r=n("3ILHO"),o=(r=n("3ILHO"),n("3v5re")),l=n("8G1wF"),s=n("2Dfe2"),c=n("4dtAK"),i=n("8LAK9");const u=async()=>{const e={params:{query:B.searchQuery,page:B.page,include_adult:B.includeAdult}},t=l.REQUEST_URL.SEARCH;try{const a=await o.default.get(t,e);return c.default.save(i.default.LAST_FETCH,"SEARCH"),a.data}catch(e){s.default.failedRequest()}};r=n("3ILHO");var f=n("2nhTy");const p=e=>{const{results:t,total_pages:a,total_results:n}=e;if(0===n)return void(r.default.searchError.style.display="block");(0,f.default)(a,B.page);const d=t.map((e=>{const t={...e};t.genres=e.genre_ids.map((e=>B.getGenreById(e))).join(", ");const a=new Date(e.release_date);return t.year=a.getFullYear(),t.vote=e.vote_average.toFixed(1),t}));k.appendGalleryMarkup(d)},y=async e=>{e.preventDefault(),r.default.searchError.style.display="none";const t=e.currentTarget.elements.searchQuery.value.trim();if(t){B.setSearchQuery(t);try{const e=await u();p(e)}catch(e){r.default.searchError.style.display="block"}}else r.default.searchError.style.display="block"};var m=n("ag3f1"),v=n("cJ4l5");s=n("2Dfe2");const g=async e=>{e.preventDefault();const t=e.target.closest("a").dataset.id;try{const e=await(0,m.fetchMovieById)(t);(0,v.renderOneMovieData)(e,k.appendMovieMarkup)}catch(e){s.default.failedRequest()}};var E=n("hBEsZ");r=n("3ILHO");const h=()=>{const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&r.default.goTopBtn.classList.add("back-to-top_show"),e<t&&r.default.goTopBtn.classList.remove("back-to-top_show")},L=()=>{window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})};var T=n("2gAtb"),w=n("b986f"),R=n("9TOT1"),H=n("bZJOo");var k={setHomeEventListeners:()=>{r.default.searchForm.addEventListener("submit",y),r.default.homeGallery.addEventListener("click",g),r.default.goTopBtn.addEventListener("click",L),window.addEventListener("scroll",h)},appendGalleryMarkup:e=>{r.default.homeGallery.innerHTML=(0,T.default)(e)},appendMovieMarkup:e=>{(0,E.dynamicRefs)().movieData.innerHTML=(0,w.default)(e),(0,E.dynamicRefs)().watchedBtn.addEventListener("click",R.modalWatchedBtnClickHandler),(0,E.dynamicRefs)().queueBtn.addEventListener("click",R.modalQueueBtnClickHandler),(0,R.onOpenModal)(e.id),(0,E.dynamicRefs)().playTrailer.addEventListener("click",H.httpsYouTubeVideo)},scrollToUp:()=>{window.scrollBy(0,0)}};s=n("2Dfe2"),o=n("3v5re"),l=n("8G1wF"),s=n("2Dfe2");const M=async()=>{const e=`${l.REQUEST_URL.GENRES}`;try{return(await o.default.get(e)).data}catch(e){s.default.failedRequest()}};o=n("3v5re"),l=n("8G1wF"),s=n("2Dfe2"),c=n("4dtAK"),i=n("8LAK9");const b=async()=>{const e={params:{page:B.page}},t=`${l.REQUEST_URL.TRENDING}/${B.mediaType}/${B.timeWindow}`;try{const a=await o.default.get(t,e);return c.default.save(i.default.LAST_FETCH,"TRENDING"),a.data}catch(e){s.default.failedRequest()}};(()=>{const e={openModalBtn:document.querySelector("[data-footer-modal-open]"),closeModalBtn:document.querySelector("[data-footer-modal-close]"),footerModal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.footerModal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),n("hEnct");r=n("3ILHO"),E=n("hBEsZ"),s=n("2Dfe2"),c=n("4dtAK"),i=n("8LAK9");async function A(){if("TRENDING"===c.default.load(i.default.LAST_FETCH))try{const e=await b();p(e)}catch(e){s.default.failedRequest()}if("SEARCH"===c.default.load(i.default.LAST_FETCH))try{const e=await u();p(e)}catch(e){s.default.failedRequest()}}(0,E.dynamicRefs)().paginList.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;if("0"!==e.target.dataset.number){const t=Number(e.target.dataset.number);B.page=t,r.default.homeGallery.innerHTML="",A()}})),(0,E.dynamicRefs)().rightArrow.addEventListener("click",(function(){B.incrementPage(),r.default.homeGallery.innerHTML="",A()})),(0,E.dynamicRefs)().leftArrow.addEventListener("click",(function(){B.decrementPage(),r.default.homeGallery.innerHTML="",A()}));const B=new(0,d.default);(async function(){k.setHomeEventListeners();try{const e=await M(),{genres:t}=e;B.genres=t;const a=await b();p(a)}catch(e){s.default.failedRequest()}})().catch((e=>{s.default.failedRequest()}));
//# sourceMappingURL=index.619ffec3.js.map