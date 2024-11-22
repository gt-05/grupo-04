import React from 'react';
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const CartPage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-[#F9F8FE]">

      {/* Desktop View */}
      <div className='pt-14'>
      <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6 justify-center w-full">
  {/* Formulário Carrinho */}
  <form className="bg-white p-6 rounded-[4px] w-full sm:w-[750px] h-[352px] mb-6 sm:mb-0 hidden sm:block">
    <div className="text-sm flex justify-between w-full">
      <h2 className="font-bold text-[#474747] pr-10 mb-4 tracking-wider block whitespace-nowrap">MEU CARRINHO</h2>

      {/* Títulos */}
      <div className="flex space-x-6 sm:space-x-10">
        <h2 className="font-semibold text-[#474747] mb-2 tracking-wider block">QUANTIDADE</h2>
        <h2 className="font-semibold text-[#474747] mb-2 tracking-wider block">UNITÁRIO</h2>
        <h2 className="font-semibold text-[#474747] mb-2 tracking-wider block">TOTAL</h2>
      </div>
    </div>
    <hr className="mb-6" />

    {/* Produto */}
    <div className="flex justify-between">
      <div className="mb-8 text-sm flex">
        <div>
        <svg width="127.63" height="104" viewBox="30 26 127.629 104" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
  <g filter="url(#filter0_d_403_442)">
    <rect x="30" y="26" width="127.629" height="104" rx="4.78608" fill="#E2E3FF"/>
  </g>

  <defs>
    <filter id="filter0_d_403_442" x="0.0870228" y="0.873099" width="187.455" height="163.826" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4.78608"/>
      <feGaussianBlur stdDeviation="14.9565"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_403_442"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_403_442" result="shape"/>
    </filter>
  </defs>
</svg>


        </div>
        <div className='flex-col px-3'>
        <span className="font-bold text-[#1F1F1F] tracking-wider">Tênis Nike Revolution 6 Next 
        Nature Masculino</span>
        <div className="py-2">
          <span className="text-[#8F8F8F] font-semibold">Cor:</span>
          <span className="text-[#1F1F1F] px-2 font-semibold">Vermelho/Branco</span>
        </div>
        <div>
          <span className="text-[#8F8F8F] font-semibold">Tamanho:</span>
          <span className="text-[#1F1F1F] px-2 font-semibold">42</span>
        </div>
        </div>
      </div>

      <div className="flex space-x-6 sm:space-x-7">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <button className="text-center border-2 w-[35px] h-[35px] border-gray-300 font-bold rounded-md">-</button>
            <input type="number" className="text-center w-[35px] h-[35px]" />
            <button className="text-center border-2 w-[35px] h-[35px] border-gray-300 font-bold rounded-md">+</button>
          </div>

          <button onClick={() => alert('Remover item')} className="flex items-center space-x-2 text-gray-500 w-[140px] h-[28px] pl-5">
            <span className="underline">Remover item</span>
          </button>
        </div>

        <div className="flex space-x-7">
          <div className="flex flex-col">
            <span className="line-through text-gray-300">R$ 219,00</span>
            <span className="font-bold text-[#474747]">R$ 219,00</span>
          </div>
          <div className="flex flex-col">
            <span className="line-through text-gray-300">R$ 219,00</span>
            <span className="font-bold text-[#474747]">R$ 219,00</span>
          </div>
        </div>
      </div>
    </div>
    <hr className="mb-4"/>

    {/* Cupom de Desconto e Calcular Frete */}
    <div className="text-sm flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6">
      {/* Cupom de Desconto */}
      <div className="w-full sm:w-[48%] mb-0 hidden sm:block">
        <label htmlFor="coupon" className="font-bold text-[#474747] mb-2 tracking-wider block">Cupom de Desconto</label>
        <div className="flex space-x-2">
          <input type="text" id="coupon" name="coupon" className="w-full p-3 bg-gray-100 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Insira seu código" required />
          <button type="submit" className="text-[#C92071] font-bold rounded-[8px] w-[114px] bg-gray-100 hover:bg-gray-200">Ok</button>
        </div>
      </div>

      {/* Calcular Frete */}
      <div className="w-full sm:w-[48%] mb-0 hidden sm:block">
        <label htmlFor="cep" className="font-bold text-[#474747] mb-2 tracking-wider block">Calcular Frete</label>
        <div className="flex space-x-2">
          <input type="number" id="cep" name="cep" className="w-full p-3 bg-gray-100 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Insira seu CEP" required />
          <button type="submit" className="text-[#C92071] font-bold rounded-[8px] w-[114px] bg-gray-100 hover:bg-gray-200">Ok</button>
        </div>
      </div>
    </div>
  </form>

  {/* Resumo */}
  <form className="bg-white p-6 rounded-[4px] w-full sm:w-[334px] sm:ml-6 hidden sm:block">
    <h2 className="font-bold text-[#474747] mb-2 tracking-wider block mb-6 text-center sm:text-left">RESUMO</h2>
    <hr className="mb-6" />

    {/* Subtotal */}
    <div className="flex justify-between text-lg mb-4">
      <span className="text-[#8F8F8F]">Subtotal:</span>
      <span className="text-[#1F1F1F] text-base font-semibold">R$ 219,00</span>
    </div>

    {/* Frete */}
    <div className="flex justify-between text-lg mb-4">
      <span className="text-[#8F8F8F]">Frete:</span>
      <span className="text-[#1F1F1F] text-base font-semibold">R$ 0,00</span>
    </div>

    {/* Desconto */}
    <div className="flex justify-between text-lg mb-4">
      <span className="text-[#8F8F8F]">Desconto:</span>
      <span className="text-[#1F1F1F] text-base font-semibold">R$ 30,00</span>
    </div>

    <hr className="mb-6" />

    {/* Total */}
    <div className="flex flex-col text-right pb-5 text-xl font-semibold">
      <div className="flex justify-between mb-2">
        <span className="text-[#1F1F1F]">Total</span>
        <span className="text-[#EE4266]">R$ 219,00</span>
      </div>

      {/* Parcelas */}
      <div className="text-[#8F8F8F] text-sm flex justify-end space-x-1">
        <p>Ou 10x de</p>
        <p>R$ 21,00</p>
        <p>sem juros</p>
      </div>
    </div>

    <button className="bg-[#F6AA1C] rounded-[4px] text-white w-full h-[40px]">Continuar</button>
  </form>
</div>

  {/* Seção de Produtos Relacionados */}
<div className='pt-10 px-6 sm:w-full lg:px-10'>
  {/* Título e Link */}
  <div className="hidden sm:flex">
    <h2 className="text-lg font-bold text-[#474747]">
      PRODUTOS RELACIONADOS
    </h2>
    <Link to="/products" className="text-lg text-[#C92071] flex px-80">
      Ver todos
      <svg width="24" height="24" className="ml-2 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" stroke="#C92071" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  </div>

    {/* Cards visíveis em telas maiores */}
    <div className="mt-10 gap-6 sm:flex hidden flex-wrap justify-start">
    {/* Cards visíveis em telas maiores */}
    <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
      <ProductCard />
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
      <ProductCard />
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
      <ProductCard />
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
      <ProductCard />
    </div>
  </div>
</div>


  

</div>


      {/* Mobile View */}
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 justify-center w-full p-8">
        <form className="bg-white p-6 rounded-[4px] w-full block sm:hidden">
          <div className="text-sm w-full mb-6">
            <h2 className="font-bold text-[#474747] pr-10 mb-4 tracking-wider block whitespace-nowrap">MEU CARRINHO</h2>
          </div>
          <hr className="mb-6" />

          {/* Produto */}
          <div className='flex-col'>
          <div className="mb-8 text-sm">
        <div className='flex'>
        <svg width="127.63" height="104" viewBox="30 26 127.629 104" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
  <g filter="url(#filter0_d_403_442)">
    <rect x="30" y="26" width="127.629" height="104" rx="4.78608" fill="#E2E3FF"/>
  </g>
  <defs>
    <filter id="filter0_d_403_442" x="0.0870228" y="0.873099" width="187.455" height="163.826" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4.78608"/>
      <feGaussianBlur stdDeviation="14.9565"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_403_442"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_403_442" result="shape"/>
    </filter>
  </defs>
</svg>

        <div className='flex-col px-3'>
        <span className="font-bold text-[#1F1F1F] tracking-wider">Tênis Nike Revolution 6 Next 
        Nature Masculino</span>
        <div className="py-2">
          <span className="text-[#8F8F8F] font-semibold">Cor:</span>
          <span className="text-[#1F1F1F] px-2 font-semibold">Vermelho/Branco</span>
        </div>
        <div>
          <span className="text-[#8F8F8F] font-semibold">Tamanho:</span>
          <span className="text-[#1F1F1F] px-2 font-semibold">42</span>
        </div>
      </div>
      </div>

            {/* Quantidade e ações */}
            <div className="flex flex-col items-center space-y-4">
              <h2 className="pt-10 font-semibold text-[#474747] tracking-wider block pr-40">QUANTIDADE</h2>
              <div className="flex items-center space-x-2">
                <button className="text-center border-2 w-[80px] h-[35px] border-gray-300 font-bold rounded-md">-</button>
                <input type="number" className="text-center w-[80px] h-[35px]" />
                <button className="text-center border-2 w-[80px] h-[35px] border-gray-300 font-bold rounded-md">+</button>
              </div>

              <button onClick={() => alert('Remover item')} className="flex items-center space-x-2 text-gray-500 w-[140px] h-[28px] pl-5">
                <span className="underline">Remover item</span>
              </button>
            </div>
            </div>

            {/* Unitário e Total */}
            <div>
              <div className="flex justify-between">
                <h2 className="font-semibold text-[#474747]">UNITÁRIO</h2>
                <span className="line-through text-gray-300">R$ 219,00</span>
                <span className="font-bold text-[#474747]">R$ 219,00</span>
              </div>
              <div className="flex justify-between">
                <h2 className="font-semibold text-[#474747]">TOTAL</h2>
                <span className="line-through pl-7 text-gray-300">R$ 219,00</span>
                <span className="font-bold text-[#474747]">R$ 219,00</span>
              </div>
            </div>
          </div>
        </form>

        {/* Cupom de Desconto e Calcular Frete Mobile */}
        <div className="sm:hidden w-full flex flex-col space-y-6">
          <form className="bg-white p-6 rounded-[4px] w-full">
            <label htmlFor="coupon" className="font-bold text-[#474747] mb-2 tracking-wider block">Cupom de Desconto</label>
            <div className="flex space-x-2">
              <input type="text" id="coupon" name="coupon" className="w-full p-3 bg-gray-100 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Insira seu código" required />
              <button type="submit" className="text-[#C92071] font-bold rounded-[8px] w-[114px] bg-gray-100 hover:bg-gray-200">Ok</button>
            </div>
          </form>

          <form className="bg-white p-6 rounded-[4px] w-full">
            <label htmlFor="cep" className="font-bold text-[#474747] mb-2 tracking-wider block">Calcular Frete</label>
            <div className="flex space-x-2">
              <input type="number" id="cep" name="cep" className="w-full p-3 bg-gray-100 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Insira seu CEP" required />
              <button type="submit" className="text-[#C92071] font-bold rounded-[8px] w-[114px] bg-gray-100 hover:bg-gray-200">Ok</button>
            </div>
          </form>
        </div>
      </div>

      {/* Rodapé Fixo para Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 sm:hidden">
        <div className="flex flex-col text-right text-xl font-semibold">
          <div className="flex justify-between mb-2">
            <span className="text-[#1F1F1F]">Total</span>
            <span className="text-[#EE4266]">R$ 219,00</span>
          </div>
          <div className="text-[#8F8F8F] text-sm flex justify-end space-x-1 mb-4">
            <p>Ou 10x de</p>
            <p>R$ 21,00</p>
            <p>sem juros</p>
          </div>
          <button className="bg-[#F6AA1C] rounded-[4px] text-white w-full h-[40px] mb-4">
            Continuar
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CartPage;
