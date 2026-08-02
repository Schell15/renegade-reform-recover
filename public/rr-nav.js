(function(){
  function init(){
    try {
      var burger = document.getElementById('rrNavBurger');
      var drawer = document.getElementById('rrNavDrawer');
      var overlay = document.getElementById('rrNavOverlay');
      var closeBtn = document.getElementById('rrNavClose');
      // Pages that do not ship the shared nav markup simply get no menu.
      if (!burger || !drawer || !overlay) return;
      function openMenu(){ drawer.classList.add('open'); overlay.classList.add('open'); burger.classList.add('open'); burger.setAttribute('aria-expanded','true'); }
      function closeMenu(){ drawer.classList.remove('open'); overlay.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
      burger.addEventListener('click', function(){ try { drawer.classList.contains('open') ? closeMenu() : openMenu(); } catch (e) {} });
      if (closeBtn) closeBtn.addEventListener('click', function(){ try { closeMenu(); } catch (e) {} });
      overlay.addEventListener('click', function(){ try { closeMenu(); } catch (e) {} });
      document.addEventListener('keydown', function(e){ try { if (e.key === 'Escape') closeMenu(); } catch (err) {} });
    } catch (e) {
      // Never let the nav script break the page.
    }
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
