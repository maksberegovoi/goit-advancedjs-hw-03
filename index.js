import{S as u,i as p}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(i){const o=new URLSearchParams({key:"50733939-cc357c6b4bbe4fcbb86f08b26",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o.toString()}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(i,o){const t=i.hits.map(e=>`
          <li class="gallery-item">
            <a  class="gallery-link" href=${e.largeImageURL}>
              <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
              width="360"
               />
            </a>
            <ul class="gallery-info">
              <li>
                <p>Likes</p>
                <p>${e.likes}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${e.views}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${e.comments}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${e.downloads}</p>
              </li>
            </ul>
          </li>
      `).join("");o.insertAdjacentHTML("beforeend",t),new u(".gallery a",{captionPosition:"bottom",captionSelector:"img",captionDelay:250,captionsData:"alt"}).refresh()}const d=document.querySelector("#search-images"),c=document.querySelector(".form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader-container"),y=i=>{i.preventDefault();const o=d.value;c.reset(),l.style.display="flex",a.innerHTML="",f(o).then(t=>{if(t.hits.length===0)throw new Error;m(t,a),l.style.display="none"}).catch(t=>{p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,theme:"dark"}),l.style.display="none"})};c.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
