import Gallery from "../components/Gallery";
import Card from "../components/Card";
import ProductListing from "../components/ProductListing";
import Layout from "../components/Layout";
import Section from "../components/Section";

export default function HomePage() {
    return (
        <Layout>
            <Gallery />
            <Card/>
            <Section title="Produtos em alta" link={{text:"Ver todos", href:"#"}}>
                <ProductListing />
            </Section>
        </Layout>
    );
}