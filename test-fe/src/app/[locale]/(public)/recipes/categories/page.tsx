import { getCategories } from '~actions/get-categories';
import { RecipesType } from '~components/shared/recipes-type';
import { PAGE } from '~constants/page';

/**
 * A component that renders a Categories page.
 */
const Categories = async () => {
  const categories = await getCategories();

  return <RecipesType data={categories} href={PAGE.CATEGORIES} title='Categories' />;
};

export default Categories;
