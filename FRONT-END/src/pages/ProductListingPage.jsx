import FilterGroup from "../components/FilterGroup";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ProductListing from "../components/ProductListing";


export default function productListingPage() {
    return (
        <Layout>
            <section className="flex bg-gray-100 px-[6%] py-[8%] max-w-[1920px]">

                <aside className="bg-white w-[260px] h-[700px] rounded-md p-[2%]">
                    <h2 className="font-bold">Filtrar por</h2> <hr className="my-[6%]" />
                    <FilterGroup title="Marca" type="checkbox" options="Adidas" />
                    <FilterGroup type="checkbox" options="Nike" />
                    <FilterGroup type="checkbox" options="New Balance" />
                    <FilterGroup type="checkbox" options="Puma" />

                    <FilterGroup title="Categoria" type="checkbox" options="Esporte e Lazer" />
                    <FilterGroup type="checkbox" options="Casual" />
                    <FilterGroup type="checkbox" options="Utilitário" />
                    <FilterGroup type="checkbox" options="Corrida" />

                    <FilterGroup title="Gênero" type="checkbox" options="Masculino" />
                    <FilterGroup type="checkbox" options="Feminino" />
                    <FilterGroup type="checkbox" options="Unissex" />

                    <FilterGroup title="Estado" type="radio" options="Novo" />
                    <FilterGroup type="radio" options="Usado" />

                </aside>
                <section className=" gap-[24px] flex flex-wrap justify-center w-[84%]">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>

            </section>
        </Layout>
    )
}