/*---------------------Header-----------------------*/
let headerContent = `
<div class="sizing-container">
        <div class="header-content">
          <a href="index.html" class="brand">Stand Store</a>
          <nav class="nova">
            <ul id="pre-sign">
              <li><a href="login.html">Sign In</a></li>
              <li><a href="register.html">Sign Up</a></li>
            </ul>
            <ul id="post-sign">
              <li><a href=profile.html#" id="nav-username"></a></li>
              <li id="logout"><a href="#">Logout</a></li>
              <li id="logged-cart">
              <div class="your-cart">
                <a href="#" onclick="window.location = 'cart.html';">
                Your Cart <i class="fa-solid fa-cart-arrow-down"></i>
                </a>
              </div>
              <div class="mini-cart">No items selected</div>
              </li>
              <li><div id="badge"></div></li> 
          </nav>
        </div>
        <!-- ./header-content -->
      </div>
      <!-- ./sizing-container -->
`;
let header = document.querySelector(`#main-header`);
if (header) {
  header.innerHTML = headerContent;
}
/*---------------------Login Alert-----------------------*/
let alert1 = `
<div class="alert nova abs" id="wrong-alert">
Either email or password are incorrect
</div>
<div class="alert nova abs" id="fill-alert">
You must fill the whole form
</div>
`;
let logAlerts = document.querySelector(`#log-alerts`);
if (logAlerts) {
  logAlerts.innerHTML = alert1;
}
/*---------------------Register Alert-----------------------*/
let alert2 = `
<div class="alert nova abs" id="fill-alert">
You must fill the whole form
</div>
<div class="alert nova abs" id="pass-alert">
Your passwords do not match
</div>
<div class="alert nova abs" id="email-alert">
Please enter a valid email
</div>
<div class="alert nova abs" id="email2-alert">
This email is already registered
</div>
<div class="alert nova abs" id="uname-alert">
This username is already taken
</div>
`;
let regAlerts = document.querySelector(`#reg-alerts`);
if (regAlerts) {
  regAlerts.innerHTML = alert2;
}
