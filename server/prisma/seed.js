import { prisma } from '../src/lib/prisma.js';

async function main() {
  console.log('Seeding...');
  const mapsData = [
    {
      title: `Dragon Charmer's Island`,
      slug: 'dragon-charmer-island',
      imageUrl:
        'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770274454/dragon-charmers-island_ynw3rt.jpg',
      width: 2902,
      height: 4096,
      characters: {
        create: [
          {
            name: 'Loaf Cat',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770547263/c35244f7-325c-4333-b91e-72567aa806ea.png',
            xMin: 0.6802,
            xMax: 0.8277,
            yMin: 0.7277,
            yMax: 0.737,
          },
          {
            name: 'Teacher',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770279517/45502504-53a7-4a7f-9d72-55b65b5cce0b.png',
            xMin: 0.3917,
            xMax: 0.43,
            yMin: 0.2045,
            yMax: 0.2365,
          },
          {
            name: 'Thief',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770279635/9b56e3a7-eb99-4b2c-9875-281350495ca7.png',
            xMin: 0.819,
            xMax: 0.8449,
            yMin: 0.18,
            yMax: 0.2001,
          },
        ],
      },
    },
    {
      title: 'Robot City',
      slug: 'robot-city',
      imageUrl:
        'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770274454/robot-city_trdwo8.jpg',
      width: 1143,
      height: 1600,
      characters: {
        create: [
          {
            name: 'Chainsaw Man',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770279788/d9fe4e65-4d18-4b09-a6b5-2114fff35749.png',
            xMin: 0.6535,
            xMax: 0.6972,
            yMin: 0.625,
            yMax: 0.6712,
          },
          {
            name: 'Mojo Jojo',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770279842/6e5c77ca-d614-4af2-96bd-dfca5e1bced4.png',
            xMin: 0.2178,
            xMax: 0.2484,
            yMin: 0.4418,
            yMax: 0.4693,
          },
          {
            name: 'Calcifer',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770279864/b35228be-9713-462b-9554-249196335503.png',
            xMin: 0.3429,
            xMax: 0.384,
            yMin: 0.7587,
            yMax: 0.7856,
          },
        ],
      },
    },
    {
      title: 'Universe 113',
      slug: 'universe-113',
      imageUrl:
        'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770274450/universe-113_obrzjw.jpg',
      width: 1920,
      height: 2715,
      characters: {
        create: [
          {
            name: 'Jason Voorhees',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770280090/6be52db9-25e2-4ade-9900-4410983d41d3.png',
            xMin: 0.6312,
            xMax: 0.6697,
            yMin: 0.2674,
            yMax: 0.3012,
          },
          {
            name: 'Pacman',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770280143/bbc945d3-df3b-47ed-895b-581c80406866.png',
            xMin: 0.2296,
            xMax: 0.2562,
            yMin: 0.4961,
            yMax: 0.5112,
          },
          {
            name: 'Genos',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770280167/e3fa5564-babf-4857-936f-5ba1867640eb.png',
            xMin: 0.3093,
            xMax: 0.3322,
            yMin: 0.6427,
            yMax: 0.664,
          },
        ],
      },
    },
    {
      title: 'Undrcty',
      slug: 'undrcty',
      imageUrl:
        'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770274449/undrcty_mpjt8f.jpg',
      width: 796,
      height: 1600,
      characters: {
        create: [
          {
            name: 'Sans',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770280985/e65d0c1e-b4a9-4e0a-9e49-c797d2d5bb7e.png',
            xMin: 0.716,
            xMax: 0.7788,
            yMin: 0.8525,
            yMax: 0.8912,
          },
          {
            name: 'Mikasa',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770547288/19f7f96d-f499-48fe-aa94-49d9ed33725a.png',
            xMin: 0.0879,
            xMax: 0.1243,
            yMin: 0.88,
            yMax: 0.9425,
          },
          {
            name: 'Ice King',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770281032/ef40117b-298d-4c23-9ba3-a838e849fc3f.png',
            xMin: 0.0188,
            xMax: 0.0502,
            yMin: 0.0812,
            yMax: 0.105,
          },
        ],
      },
    },
    {
      title: `Original Where's Waldo`,
      slug: `original-where-is-waldo`,
      imageUrl:
        'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770274449/original_dldpq6.jpg',
      width: 2560,
      height: 1600,
      characters: {
        create: [
          {
            name: 'Sniffing Dog',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770545778/9e6556f7-4d8d-458d-9cee-fc75311e590f.png',
            xMin: 0.7244,
            xMax: 0.742,
            yMin: 0.2687,
            yMax: 0.295,
          },
          {
            name: 'Big Woman',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770545825/eee12608-50ca-4e21-b49e-dd83fc5eb8db.png',
            xMin: 0.7445,
            xMax: 0.7804,
            yMin: 0.7412,
            yMax: 0.8375,
          },
          {
            name: 'Chill Guy',
            imageUrl:
              'https://res.cloudinary.com/dowyp6xf3/image/upload/v1770547338/4aaabce6-ede3-4aab-9dc4-b35e40bf6b5e.png',
            xMin: 0.3644,
            xMax: 0.398,
            yMin: 0.3918,
            yMax: 0.4206,
          },
        ],
      },
    },
  ];

  await Promise.all(
    mapsData.map((map) =>
      prisma.map.create({
        data: map,
      })
    )
  );

  console.log('Done!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
