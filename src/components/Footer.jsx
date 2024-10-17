export default function Footer() {
    return (
        <>
            <footer style="background-color: #1a1a1a;" class="py-4 text-white px-20">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-9 py-4">
            <div id="footer_contacts" class="footer-section">
                <h1 class="text-xl mb-2 font-semibold">Digital Store</h1>
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div id="footer_social_media" class="flex gap-8 mt-2">
                    <a href="#" class="footer-link" aria-label="Facebook">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="footer-link" aria-label="Instagram">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="footer-link" aria-label="Twitter">
                        <i class="bi bi-twitter"></i>
                    </a>
                </div>
            </div>
            <div class="footer-section">
                <h3 class="text-lg font-semibold mb-2">Informação</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="footer-link">Sobre Drip Store</a></li>
                    <li><a href="#" class="footer-link">Segurança</a></li>
                    <li><a href="#" class="footer-link">Wishlist</a></li>
                    <li><a href="#" class="footer-link">Blog</a></li>
                    <li><a href="#" class="footer-link">Trabalhe conosco</a></li>
                    <li><a href="#" class="footer-link">Meus Pedidos</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 class="text-lg font-semibold mb-2">Categorias</h3>
                <ul class="space-y-1">
                    <li><a href="#" class="footer-link">Camisetas</a></li>
                    <li><a href="#" class="footer-link">Calças</a></li>
                    <li><a href="#" class="footer-link">Bonés</a></li>
                    <li><a href="#" class="footer-link">Headphones</a></li>
                    <li><a href="#" class="footer-link">Tênis</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 class="text-lg font-semibold mb-2">Contato</h3>
                <ul class="space-y-1">
                    <li>
                        <a href="#" class="footer-link">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza-CE, 60150-161</a>
                    </li>
                    <li><a href="tel:+558530513411" class="footer-link">(85) 3051-3411</a></li>
                </ul>
            </div>
        </div>
        <div id="footer-copyright" class="background-color: #1a1a1a; text-center py-2 text-white"> 
          <div class="border-t border-white w-4/8 mx-auto py-2"></div> 
          &#169; 2022 Digital College
      </div>
    </footer>
        </>
    )
}

//ABRAHÃO, COPIAR SEU CÓDIGO AQUI