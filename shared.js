/* ===== PLC Tennis — Shared Behaviors ===== */

// Toggles the mobile nav drawer open/closed. Called by the hamburger
// button (id="navHamburger") that appears below the 700px breakpoint.
function toggleNav() {
  const drawer = document.getElementById('navDrawer');
  if (!drawer) return;
  drawer.classList.toggle('open');
}

// Close the drawer automatically if the viewport is resized/rotated
// past the breakpoint where the hamburger nav switches back to the
// full desktop nav links, so it doesn't get stuck open.
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    const drawer = document.getElementById('navDrawer');
    if (drawer) drawer.classList.remove('open');
  }
});
