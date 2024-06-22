import { getCategories } from '~actions/get-categories';
import { getCollections } from '~actions/get-collections';
import { getResources } from '~actions/get-resources';
import { RecipesType } from '~components/shared/recipes-type';
import { PAGE } from '~constants/page';

export const getData = async () => {
  try {
    const [categories, collections, resources] = await Promise.all([
      getCategories(),
      getCollections(),
      getResources(),
    ]);

    return {
      categories,
      collections,
      resources,
    };
  } catch (error) {
    return {
      categories: null,
      collections: null,
      resources: null,
    };
  }
};
/**
 * A component that renders a Recipes page.
 */
const Recipes = async () => {
  const { categories, collections, resources } = await getData();

  return (
    <div className='flex flex-col gap-8'>
      <RecipesType data={categories} href={PAGE.CATEGORIES} title='Categories' />

      <RecipesType data={collections} href={PAGE.COLLECTIONS} title='Collections' />

      <RecipesType data={resources} href={PAGE.RESOURCES} title='Resources' />
    </div>
  );
};

export default Recipes;
