'use server';

const categories = [
  {
    id: '1',
    name: 'Biscuits & Shortcakes',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    name: 'Bread',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    name: 'Buns & Rolls',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFkfGVufDB8fDB8fHww0',
  },
];

export const getCategories = () => Promise.resolve(categories);

export const getCategory = (slug: string) =>
  Promise.resolve(categories.find((category) => category.id === slug));
