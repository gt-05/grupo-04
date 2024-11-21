import { NavLink } from "react-router-dom";

export default function ProductCard() {
    return (
        <>
            <NavLink
            to="/">
           
                <div className="w-[292px] h-[439px] mb-[32px]">
                    <div className="bg-[#626262] w-full h-[321px]">
                        <img src="../src/assets/img/product-thumb-5.jpeg" alt="Produto em Alta" />
                    </div>
                    <div>
                        <p className="text-[#8f8f8f] text-[16px] font-[700] leading-[38px]">Tênis</p>
                        <p className="text-[28px] font-[400] leading-[38px]">K-Swiss V8 - Masculino</p>
                        <p className="text-[24px] font-[700] leading-[38px]"><s class="text-[#8f8f8f] text-[24px] font-[400] leading-[38px]">R$200</s> R$100</p>
                    </div>
                </div>
            </NavLink>
        </>
    );
}