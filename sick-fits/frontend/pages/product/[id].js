import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return (
    <div>
      <SingleProduct id={query.id} />
    </div>
  );
}
