import { getCategory } from '~actions/get-categories';
import { Item } from '~components/shared/item';

type CategoryProps = {
  params: {
    slug: string;
  };
};

/**
 * A component that renders a Category page.
 */
const Category = async ({ params: { slug } }: CategoryProps) => {
  const data = await getCategory(slug);

  return <Item data={data} />;
};

export default Category;
