(function(){
  function init(){
    var burger = document.getElementById('rrNavBurger');
    var drawer = document.getElementById('rrNavDrawer');
    var overlay = document.getElementById('rrNavOverlay');
    var closeBtn = document.getElementById('rrNavClose');
    if (!burger || !drawer || !overlay) return;
    function openMenu(){ drawer.classList.add('open'); overlay.classList.add('open'); burger.classList.add('open'); burger.setAttribute('aria-expanded','true'); }
    function closeMenu(){ drawer.classList.remove('open'); overlay.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
    burger.addEventListener('click', function(){ drawer.classList.contains('open') ? closeMenu() : openMenu(); });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(); });
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();