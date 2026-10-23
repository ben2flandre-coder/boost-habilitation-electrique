(function(){
var css=document.createElement('style');
css.textContent='header img{height:46px;width:auto;background:#fff;padding:4px 8px;border-radius:6px}.sitenav{display:flex;flex-wrap:wrap;gap:2px 6px;margin-left:auto}.sitenav a{color:inherit;text-decoration:none;padding:6px 10px;border-radius:6px;font-size:15px}.sitenav a:hover,.sitenav a.on{background:#f6b63d;color:#0b2545}';
document.head.appendChild(css);
function guard(){if(location.hash==='#trainer'){location.hash='#home';}}
window.addEventListener('hashchange',guard);guard();
})();
