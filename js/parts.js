let headerContent = `
<div class="sizing-container">
        <div class="header-content">
          <a href="index.html" class="brand">Stand Store</a>
          <nav>
            <ul id="pre-sign">
              <li><a href="login.html">Sign In</a></li>
              <li><a href="register.html">Sign Up</a></li>
            </ul>
            <ul id="post-sign">
              <li><a href="#" id="nav-username"></a></li>
              <li><a href="#" id="logout"></a></li>
            </ul>
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
