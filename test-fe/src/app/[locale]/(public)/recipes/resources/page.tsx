import { getResources } from '~actions/get-resources';
import { RecipesType } from '~components/shared/recipes-type';
import { PAGE } from '~constants/page';

/**
 * A component that renders a Resources page.
 */
const Resources = async () => {
  const resources = await getResources();

  return <RecipesType data={resources} href={PAGE.RESOURCES} title='Resources' />;
};

export default Resources;
