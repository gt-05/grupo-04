export default function Footer() {
    return (
        <>
            <footer className="bg-[#1a1a1a] py-4 text-white px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-4">
            <div id="footer_contacts" className="footer-section">
                <h1 className="text-xl mb-2 font-semibold">Digital Store</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div id="footer_social_media" className="flex gap-8 mt-2">
                    <a href="#" className="footer-link" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="footer-link" aria-label="Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="footer-link" aria-label="Twitter">
                        <i className="bi bi-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="footer-section">
                <h3 className="text-lg font-semibold mb-2">Informação</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="footer-link">Sobre Drip Store</a></li>
                    <li><a href="#" className="footer-link">Segurança</a></li>
                    <li><a href="#" className="footer-link">Wishlist</a></li>
                    <li><a href="#" className="footer-link">Blog</a></li>
                    <li><a href="#" className="footer-link">Trabalhe conosco</a></li>
                    <li><a href="#" className="footer-link">Meus Pedidos</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="text-lg font-semibold mb-2">Categorias</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="footer-link">Camisetas</a></li>
                    <li><a href="#" className="footer-link">Calças</a></li>
                    <li><a href="#" className="footer-link">Bonés</a></li>
                    <li><a href="#" className="footer-link">Headphones</a></li>
                    <li><a href="#" className="footer-link">Tênis</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="text-lg font-semibold mb-2">Contato</h3>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="footer-link">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza-CE, 60150-161</a>
                    </li>
                    <li><a href="tel:+558530513411" className="footer-link">(85) 3051-3411</a></li>
                </ul>
            </div>
        </div>
        <div id="footer-copyright" className="background-color: #1a1a1a; text-center py-2 text-white"> 
          <div className="border-t border-white w-4/8 mx-auto py-2"></div> 
          &#169; 2022 Digital College
      </div>
    </footer>
        </>
    )
}

//ABRAHÃO, COPIAR SEU CÓDIGO AQUI