'use server';

const collections = [
  {
    id: '1',
    name: 'Breakfast Recipes',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://plus.unsplash.com/premium_photo-1683133499090-a15322860458?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZSUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    name: 'Healthy Snacks',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://images.unsplash.com/photo-1685156328658-da6116852b4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZSUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    name: 'Holiday Specials',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://plus.unsplash.com/premium_photo-1661431029530-5748be1e7c7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZSUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D',
  },
];

export const getCollections = () => Promise.resolve(collections);

export const getCollection = (slug: string) =>
  Promise.resolve(collections.find((collection) => collection.id === slug));
