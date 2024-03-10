// Head post data
import MONEY from '../../src/assets/MONEY.jpeg'
export const HeadPost = [
    {
        id: 1,
        Image: MONEY,
        category: 'Poems',
        muserId: 2,
        title: 'money <3',
        des: 'no thoughts, just money'
    },  
]

// dummy posts data
import karting from '../../src/assets/karting.webp'
import dude from '../../src/assets/dude.png'
import moneydrop from '../../src/assets/moneydrop.jpg'
import schumacher from '../../src/assets/schumacher.jpeg'


export const DummyPosts =[
    {
        id: 1,
        Image: MONEY,
        category: 'Poems',
        muserId: 2,
        title: 'money <3',
        des: 'no thoughts, just money'
    },
    {
        id: 2,
        Image: karting,
        category: 'Drawings',
        muserId: 5,
        title: 'karting',
        des: 'vroom vroom'
    },
    {
        id: 3,
        Image: dude ,
        category: 'Paintings',
        muserId: 8,
        title: 'cs major',
        des: 'beep boop'
    },
    {
        id: 4,
        Image: moneydrop ,
        category: 'Stories',
        muserId: 4,
        title: 'money 2.0 <3',
        des: 'supercalifgragilisticexpialidociously large description for testing woop woop lessgoo lets do this!! needs to be a tad bit longer so let us keep writing stupid stuff to get enough for the test yayyy'
    },
    {
        id: 5,
        Image: schumacher,
        category: 'Photos',
        muserId: 7,
        title: 'Extra long title for testing to see what happens when i have large titles',
        des: 'happy schumacher'
    }
];

// Dummy muser data
import AuthorImage1 from '../assets/surprise.png'
import AuthorImage2 from '../assets/bearwithme.png'
import AuthorImage3 from '../assets/cuteduck.png'
import AuthorImage4 from '../assets/idekanymore.png'


export const DummyMuser =[
    {
        id: 1,
        Image: AuthorImage1,
        name: 'Lana White',
        posts: 2,
    },
    {
        id: 2,
        Image: AuthorImage2,
        name: 'Jane Doe',
        posts: 1,
    },
    {
        id: 3,
        Image: AuthorImage3,
        name: 'Ralph Meree',
        posts: 6,
    },
    {
        id: 4,
        Image: AuthorImage4,
        name: 'Elizabeth the First',
        posts: 4,
    },
]