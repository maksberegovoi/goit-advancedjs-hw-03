import{S as u,i as p}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(i){const t=new URLSearchParams({key:"50733939-cc357c6b4bbe4fcbb86f08b26",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${t.toString()}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function f(i,t){const o=i.hits.map(e=>`
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
      `).join("");t.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionPosition:"bottom",captionSelector:"img",captionDelay:250,captionsData:"alt"}).refresh()}const a=document.querySelector("#search-images"),m=document.querySelector(".search-images-btn"),c=document.querySelector(".gallery"),l=document.querySelector(".loader-container"),h=()=>{const i=a.value;a.value="",l.style.display="flex",c.innerHTML="",d(i).then(t=>{if(t.hits.length===0)throw new Error;f(t,c),l.style.display="none"}).catch(t=>{p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,theme:"dark"}),l.style.display="none"})};m.addEventListener("click",h);
//# sourceMappingURL=index.js.map
