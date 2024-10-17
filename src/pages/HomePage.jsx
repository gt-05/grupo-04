import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "../components/Card";

export default function HomePage() {
    return (
        <Layout>
            <Gallery />
            <Section title="Produtos em alta" link={{text:"Ver todos", href:"#"}}>
                <ProductListing />
            </Section>
            <Card />
        </Layout>
    );
}