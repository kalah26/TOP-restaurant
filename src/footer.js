import logo from "./img/1piece_logo.png"

export function renderFooter() {
    const body =document.querySelector("body")
    const footer = document.createElement("footer")
    footer.innerHTML = `<div class="footer-nav">
            <div class="footer-nav-area logo-area">
                <p>Where every dish tells a story from the all blue</p>
            </div>
            <div class="footer-nav-area">
                <h4>Quick links</h4>
                <ul>
                    <li><button>Home</button></li>
                    <li><button>Menu</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </div>
            <div class="footer-nav-area">
                <h4>Contact</h4>
                <ul>
                    <li>123 456 789</li>
                    <li>allblue@onepiece.com</li>
                    <li>123 Grand Line, New world</li>
                </ul>
            </div>
        </div>
        <p>&#169 2024, a one piece's fan. All rights reserved.</p>`
    body.appendChild(footer)

    const footerLogoArea = document.querySelector(".logo-area")
    const logoImg = document.createElement("img")
    logoImg.src = logo
    footerLogoArea.prepend(logoImg)
}