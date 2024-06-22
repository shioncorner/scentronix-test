import { getCollection } from '~actions/get-collections';
import { Item } from '~components/shared/item';

type CollectionProps = {
  params: {
    slug: string;
  };
};

/**
 * A component that renders a Collection page.
 */
const Collection = async ({ params: { slug } }: CollectionProps) => {
  const data = await getCollection(slug);

  return <Item data={data} />;
};

export default Collection;
