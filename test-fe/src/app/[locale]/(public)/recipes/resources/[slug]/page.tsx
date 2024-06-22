import { getResource } from '~actions/get-resources';
import { Item } from '~components/shared/item';

type ResourceProps = {
  params: {
    slug: string;
  };
};

/**
 * A component that renders a Resource page.
 */
const Resource = async ({ params: { slug } }: ResourceProps) => {
  const data = await getResource(slug);

  return <Item data={data} />;
};

export default Resource;
