import ProductListing from "../components/ProductListing";
import Layout from "../components/Layout";
import ProductView from "../components/ProductView";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

export default function ProductViewPage() {
  return (
    <>
      <Layout>
        <ProductView></ProductView>
        <Section
          title="Produtos relacionados"
          link={{ text: "Ver todos", href: "#" }}
        >
          <div className="flex gap-[24px] justify-center flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Section>
      </Layout>
    </>
  );
}
