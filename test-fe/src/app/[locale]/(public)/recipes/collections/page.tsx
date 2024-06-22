import { getCollections } from '~actions/get-collections';
import { RecipesType } from '~components/shared/recipes-type';
import { PAGE } from '~constants/page';

/**
 * A component that renders a Collections page.
 */
const Collections = async () => {
  const collections = await getCollections();

  return <RecipesType data={collections} href={PAGE.COLLECTIONS} title='Collections' />;
};

export default Collections;
