!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var s,i=a("bpxeT"),o=a("2TvXO"),u=a("ismrh"),l=a("cqmI4"),c=(i=a("bpxeT"),o=a("2TvXO"),u=a("ismrh"),l=a("cqmI4"),i=a("bpxeT"),o=a("2TvXO"),a("lu0v5")),d=a("4s6iC"),f=(u=a("ismrh"),a("aYvV9")),p=a("daTbb"),v=a("2hVIf"),m=(s=e(i)(e(o).mark((function t(){var n,r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{query:u.siteConfigs.searchQuery,page:u.siteConfigs.page,include_adult:u.siteConfigs.includeAdult}},r=d.REQUEST_URL.SEARCH,e.prev=2,e.next=5,c.default.get(r,n);case 5:return a=e.sent,p.default.save(v.default.LAST_FETCH,"SEARCH"),e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(2),f.default.failedRequest();case 13:case"end":return e.stop()}}),t,null,[[2,10]])}))),function(){return s.apply(this,arguments)}),h=a("dDDEV"),y=(u=a("ismrh"),l=a("cqmI4"),a("jcFG7")),g=function(t){var n=t.results,r=t.total_pages;if(0!==t.total_results){(0,y.default)(r,u.siteConfigs.page);var a=n.map((function(t){var n=e(h)({},t);n.genres=t.genre_ids.map((function(e){return u.siteConfigs.getGenreById(e)})).join(", ");var r=new Date(t.release_date);return n.year=r.getFullYear(),n.vote=t.vote_average.toFixed(1),n}));D.appendGalleryMarkup(a)}else l.default.searchError.style.display="block"},T=a("j1lrD"),b=function(){var t=e(i)(e(o).mark((function t(n){var r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),l.default.searchError.style.display="none",r=n.currentTarget.elements.searchQuery.value.trim()){e.next=6;break}return l.default.searchError.style.display="block",e.abrupt("return");case 6:return u.siteConfigs.setSearchQuery(r),e.prev=7,T.spinner.spin(l.default.homeGallery),e.next=11,m();case 11:a=e.sent,T.spinner.stop(),g(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),l.default.searchError.style.display="block";case 19:case"end":return e.stop()}}),t,null,[[7,16]])})));return function(e){return t.apply(this,arguments)}}(),E=(i=a("bpxeT"),o=a("2TvXO"),a("bDPyF")),x=a("frmlX"),w=(f=a("aYvV9"),T=a("j1lrD"),l=a("cqmI4"),function(){var t=e(i)(e(o).mark((function t(n){var r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.closest("a").dataset.id,e.prev=2,T.spinner.spin(l.default.homeGallery),e.next=6,(0,E.fetchMovieById)(r);case 6:a=e.sent,T.spinner.stop(),(0,x.renderOneMovieData)(a,D.appendMovieMarkup),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),f.default.failedRequest();case 14:case"end":return e.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()),k=a("d5Phe"),L=(l=a("cqmI4"),function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&l.default.goTopBtn.classList.add("back-to-top_show"),e<t&&l.default.goTopBtn.classList.remove("back-to-top_show")}),R=function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})},C=a("8pYMx"),M=a("1MwiW"),q=a("8gEWs"),_=a("hV87x"),D={setHomeEventListeners:function(){l.default.searchForm.addEventListener("submit",b),l.default.homeGallery.addEventListener("click",w),l.default.goTopBtn.addEventListener("click",R),window.addEventListener("scroll",L)},appendGalleryMarkup:function(e){l.default.homeGallery.innerHTML=(0,C.default)(e)},appendMovieMarkup:function(e){(0,k.dynamicRefs)().movieData.innerHTML=(0,M.default)(e),(0,k.dynamicRefs)().watchedBtn.addEventListener("click",q.modalWatchedBtnClickHandler),(0,k.dynamicRefs)().queueBtn.addEventListener("click",q.modalQueueBtnClickHandler),(0,q.onOpenModal)(e.id),(0,k.dynamicRefs)().playTrailer.addEventListener("click",_.httpsYouTubeVideo)},scrollToUp:function(){window.scrollBy(0,0)}},G=(f=a("aYvV9"),i=a("bpxeT"),o=a("2TvXO"),c=a("lu0v5"),d=a("4s6iC"),f=a("aYvV9"),function(){var t=e(i)(e(o).mark((function t(){var n,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(d.REQUEST_URL.GENRES),e.prev=1,e.next=4,c.default.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),f.default.failedRequest();case 11:case"end":return e.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()),H=(i=a("bpxeT"),o=a("2TvXO"),c=a("lu0v5"),d=a("4s6iC"),u=a("ismrh"),f=a("aYvV9"),p=a("daTbb"),v=a("2hVIf"),function(){var t=e(i)(e(o).mark((function t(){var n,r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{page:u.siteConfigs.page}},r="".concat(d.REQUEST_URL.TRENDING,"/").concat(u.siteConfigs.mediaType,"/").concat(u.siteConfigs.timeWindow),e.prev=2,e.next=5,c.default.get(r,n);case 5:return a=e.sent,p.default.save(v.default.LAST_FETCH,"TRENDING"),e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(2),f.default.failedRequest();case 13:case"end":return e.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}());!function(){var e={openModalBtn:document.querySelector("[data-footer-modal-open]"),closeModalBtn:document.querySelector("[data-footer-modal-close]"),footerModal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.footerModal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),a("28ryW");i=a("bpxeT"),o=a("2TvXO"),l=a("cqmI4"),u=a("ismrh"),k=a("d5Phe"),f=a("aYvV9"),p=a("daTbb"),v=a("2hVIf"),T=a("j1lrD");function B(){return I.apply(this,arguments)}function I(){return(I=e(i)(e(o).mark((function t(){var n,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("TRENDING"!==p.default.load(v.default.LAST_FETCH)){e.next=13;break}return e.prev=1,T.spinner.spin(l.default.homeGallery),e.next=5,H();case 5:n=e.sent,T.spinner.stop(),g(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),f.default.failedRequest();case 13:if("SEARCH"!==p.default.load(v.default.LAST_FETCH)){e.next=26;break}return e.prev=14,T.spinner.spin(l.default.homeGallery),e.next=18,m();case 18:r=e.sent,T.spinner.stop(),g(r),e.next=26;break;case 23:e.prev=23,e.t1=e.catch(14),f.default.failedRequest();case 26:case"end":return e.stop()}}),t,null,[[1,10],[14,23]])})))).apply(this,arguments)}(0,k.dynamicRefs)().paginList.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;if("0"!==e.target.dataset.number){var t=Number(e.target.dataset.number);u.siteConfigs.page=t,l.default.homeGallery.innerHTML="",B()}})),(0,k.dynamicRefs)().rightArrow.addEventListener("click",(function(){u.siteConfigs.incrementPage(),l.default.homeGallery.innerHTML="",B()})),(0,k.dynamicRefs)().leftArrow.addEventListener("click",(function(){u.siteConfigs.decrementPage(),l.default.homeGallery.innerHTML="",B()}));T=a("j1lrD"),l=a("cqmI4");function O(){return(O=e(i)(e(o).mark((function t(){var n,r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D.setHomeEventListeners(),e.prev=1,T.spinner.spin(l.default.homeGallery),e.next=5,G();case 5:return n=e.sent,r=n.genres,u.siteConfigs.genres=r,e.next=10,H();case 10:a=e.sent,T.spinner.stop(),g(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),f.default.failedRequest();case 18:case"end":return e.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}(function(){return O.apply(this,arguments)})().catch((function(e){f.default.failedRequest()}))}();
//# sourceMappingURL=index.27faee98.js.map
