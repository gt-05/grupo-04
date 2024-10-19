import Logo from "./Logo";
import search from "../assets/img/Search.svg";
import cart from "../assets/img/Cart.svg";
export default function Header() {
  return (
    <>
      <header className="w-full py-[40px] px-[90px] pl-[100px]">
        <div className="flex items-center gap-[60px]">
          <div className="logo">
            <Logo />
          </div>

          <div className="flex relative items-center">
            <input
              type="text"
              className="barra-pesquisa w-[559px] p-[15px] bg-[#F5F5F5] border-none rounded-[8px] placeholder-[#666666]/60"
              placeholder="Pesquisar produto..."
            />
            <img
              className="absolute left-[520px] w-[20px] text-[#666666] opacity-50"
              src={search}
              alt=""
            />
          </div>

          <div className="register">
            <a
              className="text-[16px] leading-[28px] text-[#474747] whitespace-nowrap underline underline-offset-4"
              href="#"
            >
              Cadastre-se
            </a>
          </div>

          <div className="botao">
            <button className="w-[114px] h-[40px] rounded-[8px] bg-[#c92071] hover:bg-[#991956] ease-in duration-150">
              <a className="py-[9px] px-[29px] text-white font-bold" href="#">
                Entrar
              </a>
            </button>
          </div>

          <div>
            <img src={cart} alt="" />
          </div>
        </div>

        <div>
          <nav>
            <ul className="flex gap-[25px] my-[40px] ml-[2px]">
              <li>
                <a
                  className="text-[16px] text-[#c92071] border-b-2 border-[#c92071] font-[700] whitespace-nowrap"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[16px] text-[#474747] font-[400px] whitespace-nowrap"
                  href="/products"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  className="text-[16px] text-[#474747] font-[400px] whitespace-nowrap"
                  href="/category"
                >
                  Categorias
                </a>
              </li>
              <li>
                <a
                  className="text-[16px] text-[#474747] font-[400px] whitespace-nowrap"
                  href="/orderings"
                >
                  Meus pedidos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}