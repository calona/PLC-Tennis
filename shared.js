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

// Reveals the "Captain" nav link (desktop nav + mobile drawer) once the
// signed-in user's email is confirmed to be the team captain. Every page
// has this link in its markup pre-hidden via inline style="display:none",
// but nothing ever called a function to un-hide it for any of them.
function revealCaptainNav(email) {
  if (!email || email.toLowerCase() !== "gaylorde@outlook.com") return;
  const d = document.getElementById('captainNavDesktop');
  const m = document.getElementById('captainNavMobile');
  if (d) d.style.display = '';
  if (m) m.style.display = '';
}
