import { EmptyState, Layout, Page, TextStyle } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <Layout>
      <EmptyState
      heading="Manage your Tiered Options"
      action={{content: 'Setup Tier'}}
      image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      >
      <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;
