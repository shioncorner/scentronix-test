'use server';

const resources = [
  {
    id: '1',
    name: 'Baking Tips',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://plus.unsplash.com/premium_photo-1677159254641-048fb7c7e4d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZSUyMHJlc291cmNlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '2',
    name: 'Ingredient Substitutions',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://plus.unsplash.com/premium_photo-1663013356460-a7f41d04cc34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5ncmVkaWVudHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '3',
    name: 'Cooking Techniques',
    description:
      'Ants satisfied around origin motion mixture help school lead trouble official bill cowboy bank telephone present string throw reach magnet breeze diameter inside went airplane four escape movement development soldier friend fellow entire truth distant once fighting sale quite few course column point liquid mail fix composition action writer instant government cloth smile nobody pine system motion string person completely ocean throughout information direction doubt follow about night discovery keep except observe product needs arrangement gray strong silly process interior press grandmother ten hollow occasionally neighborhood lesson closer brought rock born pair current tight thou above',
    prep: '10 mins',
    bake: '1hr to 1hr 15 mins',
    total: '1hr 10mins',
    yield: '1 loaf, 12 generous servings',
    image:
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZyUyMFRlY2huaXF1ZXN8ZW58MHx8MHx8fDA%3D',
  },
];

export const getResources = () => Promise.resolve(resources);

export const getResource = (slug: string) =>
  Promise.resolve(resources.find((resource) => resource.id === slug));
