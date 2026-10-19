const gallery=document.querySelector('#gallery');
const viewer=document.querySelector('#viewer');
const viewerImage=document.querySelector('#viewer-image');
let current=0, opener=null;
function renderPreview(){
 const item=galleryData[current];viewerImage.src=item.src;viewerImage.alt=item.description;
 document.querySelector('#viewer-caption').textContent=`${item.g} · ${item.label} — ${item.description}。历史课程工程图 / 非当前版本。源 SHA256: ${item.hash}`;
 document.querySelector('#viewer-position').textContent=`${current+1} / ${galleryData.length}`;
}
function openPreview(src,trigger){current=galleryData.findIndex(x=>x.src===src);if(current<0)return;opener=trigger;renderPreview();viewer.showModal();document.querySelector('#close-viewer').focus();}
function step(n){current=(current+n+galleryData.length)%galleryData.length;renderPreview();}
function filterGallery(group){
 gallery.replaceChildren();
 galleryData.filter(x=>group==='all'||x.g===group).forEach(x=>{
  const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`查看 ${x.label}：${x.description}`);
  const figure=document.createElement('figure'),im=document.createElement('img'),caption=document.createElement('figcaption');
  im.src=x.src;im.alt=x.description;im.loading='lazy';caption.textContent=x.label;figure.append(im,caption);button.append(figure);
  button.addEventListener('click',()=>openPreview(x.src,button));gallery.append(button);
 });
}
filterGallery('all');
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});filterGallery(b.dataset.filter);
}));
document.querySelectorAll('.image-trigger').forEach(b=>b.addEventListener('click',()=>openPreview(b.dataset.image,b)));
document.querySelector('#close-viewer').addEventListener('click',()=>viewer.close());
document.querySelector('#prev-image').addEventListener('click',()=>step(-1));document.querySelector('#next-image').addEventListener('click',()=>step(1));
viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowLeft'){ev.preventDefault();step(-1);}if(ev.key==='ArrowRight'){ev.preventDefault();step(1);}});
viewer.addEventListener('click',ev=>{if(ev.target===viewer)viewer.close();});viewer.addEventListener('close',()=>opener?.focus());
