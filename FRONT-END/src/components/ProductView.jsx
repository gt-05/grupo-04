export default function ProductView() {
  return (
    <>
      <main className="max-w-max mx-auto">
        <div className="product-details flex gap-10 px-24 py-10">
          <div className="my-5 mx-24 text-sm text-gray-600">
            Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature
            Masculino
          </div>
          <div className="product-details">
            <div className="product-info">
              <h1 className="text-4xl font-bold text-gray-800 leading-9">
                Tênis Nike Revolution 6 Next Nature Masculino
              </h1>
              <p className="product-category text-xs text-gray-500 font-medium">
                Casual | Nike | REF: 38416711
              </p>
              <div className="rating flex items-center text-sm my-2 text-gray-500">
                <svg
                  width="94"
                  height="16"
                  viewBox="0 0 94 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.61294 1.2306L10.4622 5.65038L15.1966 6.06108C15.5249 6.08972 15.6585 6.50343 15.4092 6.72122L11.8182 9.86292L12.8943 14.5367C12.9689 14.8614 12.6204 15.1169 12.3383 14.9443L8.26965 12.4666L4.20097 14.9443C3.91814 15.1162 3.57037 14.8607 3.645 14.5367L4.72113 9.86292L1.12932 6.72047C0.88006 6.50268 1.0129 6.08896 1.342 6.06033L6.07636 5.64962L7.92562 1.2306C8.05398 0.923134 8.48458 0.923134 8.61294 1.2306Z"
                    fill="#F6AA1C"
                    stroke="#F6AA1C"
                  />
                  <path
                    d="M27.9962 1.2306L29.8455 5.65038L34.5799 6.06108C34.9082 6.08972 35.0418 6.50343 34.7925 6.72122L31.2015 9.86292L32.2776 14.5367C32.3522 14.8614 32.0037 15.1169 31.7216 14.9443L27.653 12.4666L23.5843 14.9443C23.3014 15.1162 22.9537 14.8607 23.0283 14.5367L24.1044 9.86292L20.5126 6.72047C20.2634 6.50268 20.3962 6.08896 20.7253 6.06033L25.4597 5.64962L27.3089 1.2306C27.4373 0.923134 27.8679 0.923134 27.9962 1.2306Z"
                    fill="#F6AA1C"
                    stroke="#F6AA1C"
                  />
                  <path
                    d="M47.381 1.2306L49.2303 5.65038L53.9646 6.06108C54.293 6.08972 54.4266 6.50343 54.1773 6.72122L50.5862 9.86292L51.6624 14.5367C51.737 14.8614 51.3885 15.1169 51.1064 14.9443L47.0377 12.4666L42.969 14.9443C42.6862 15.1162 42.3384 14.8607 42.4131 14.5367L43.4892 9.86292L39.8974 6.72047C39.6481 6.50268 39.781 6.08896 40.1101 6.06033L44.8444 5.64962L46.6937 1.2306C46.822 0.923134 47.2526 0.923134 47.381 1.2306Z"
                    fill="#F6AA1C"
                    stroke="#F6AA1C"
                  />
                  <path
                    d="M66.7667 1.2306L68.616 5.65038L73.3504 6.06108C73.6787 6.08972 73.8123 6.50343 73.5631 6.72122L69.972 9.86292L71.0481 14.5367C71.1227 14.8614 70.7742 15.1169 70.4921 14.9443L66.4235 12.4666L62.3548 14.9443C62.0719 15.1162 61.7242 14.8607 61.7988 14.5367L62.8749 9.86292L59.2831 6.72047C59.0339 6.50268 59.1667 6.08896 59.4958 6.06033L64.2302 5.64962L66.0794 1.2306C66.2078 0.923134 66.6384 0.923134 66.7667 1.2306Z"
                    fill="#F6AA1C"
                    stroke="#F6AA1C"
                  />
                  <path
                    d="M86.151 1.2306L88.0003 5.65038L92.7346 6.06108C93.063 6.08972 93.1966 6.50343 92.9473 6.72122L89.3563 9.86292L90.4324 14.5367C90.507 14.8614 90.1585 15.1169 89.8764 14.9443L85.8077 12.4666L81.7391 14.9443C81.4562 15.1162 81.1085 14.8607 81.1831 14.5367L82.2592 9.86292L78.6674 6.72047C78.4181 6.50268 78.551 6.08896 78.8801 6.06033L83.6144 5.64962L85.4637 1.2306C85.5921 0.923134 86.0227 0.923134 86.151 1.2306Z"
                    fill="#F6AA1C"
                    stroke="#F6AA1C"
                  />
                </svg>
                <p className="ml-2">
                  <span className="bg-yellow-500 text-white rounded px-2 py-1 font-bold">
                    4.7
                  </span>{" "}
                  (90 avaliações)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="price flex items-center text-4xl text-gray-800 my-2 font-bold">
          <p className="discount-price">
            <span className="text-base">R$</span> 219,00
          </p>
          <p className="original-price line-through text-gray-300 text-lg ml-2">
            219,00
          </p>
        </div>

        <div className="description my-2 text-gray-600 pr-24 leading-6">
          <p id="product-description" className="font-bold text-gray-500 mb-2">
            Descrição do produto
          </p>
          <p className="lorem font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            deleniti! Maiores placeat quae dolore voluptates? Esse, reiciendis
            voluptatum. Aspernatur rerum totam accusamus et, earum cum
            cupiditate inventore ducimus! Voluptatem, non?
          </p>
        </div>
        <div className="sizes-container">
          <p className="size text-gray-500 font-bold text-sm mb-2">Tamanho</p>
          <div className="sizes flex gap-2.5">
            <button className="border border-gray-300 bg-white px-3 py-2 cursor-pointer rounded-md">
              39
            </button>
            <button className="border border-gray-300 bg-white px-3 py-2 cursor-pointer rounded-md">
              40
            </button>
            <button className="selected border border-gray-300 bg-pink-700 text-white font-bold px-3 py-2 cursor-pointer rounded-md">
              41
            </button>
            <button className="border border-gray-300 bg-white px-3 py-2 cursor-pointer rounded-md">
              42
            </button>
            <button className="border border-gray-300 bg-white px-3 py-2 cursor-pointer rounded-md">
              43
            </button>
          </div>
        </div>
        <div class="colors-container">
          <p class="color text-gray-500 font-bold text-sm my-2">Cor</p>
          <div class="colors flex gap-2.5">
            <button class="color-option blue w-8 h-8 border border-gray-300 rounded-full cursor-pointer bg-[#6feeff]"></button>
            <button class="color-option black selected w-8 h-8 border border-pink-700 rounded-full cursor-pointer bg-[#ff6969]"></button>
            <button class="color-option grey w-8 h-8 border border-gray-300 rounded-full cursor-pointer bg-[#5e5e5e]"></button>
            <button class="color-option purple w-8 h-8 border border-gray-300 rounded-full cursor-pointer bg-[#6d70b7]"></button>
          </div>
        </div>
        <div class="butao">
          <button class="buy-button flex text-lg px-12 py-2 bg-yellow-500 text-gray-100 font-bold rounded-lg cursor-pointer mt-5">
            COMPRAR
          </button>
        </div>
      </main>
    </>
  );
}
