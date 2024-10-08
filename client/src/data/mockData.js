import { tokens } from '../theme';

export const accessTypes = [{ value: 'admin' }, { value: 'manager' }, { value: 'user' }];

export const mockSettingOptions = [{ value: 'Mode', mode: 'Mode' }];

export const mockProfileOptions = [
  { value: 'Profile', icon: 'Person' },
  { value: 'Logout', icon: 'Logout' },
  { value: 'My Account', icon: 'Account' },
];

export const mockDataTeam = [
  {
    id: 1,
    name: 'Greg Rojas',
    email: 'gregrojas@gmail.com',
    age: 40,
    phone: '(665)121-5454',
    access: 'admin',
    profile_img: '../../assets/images/profile.jpg',
  },
  {
    id: 2,
    name: 'Amy Lang',
    email: 'amy_lang@gmail.com',
    age: 30,
    phone: '(421)314-2288',
    access: 'manager',
    profile_img: null,
  },
  {
    id: 3,
    name: 'Ashley Collins',
    email: 'ashley_collins@gmail.com',
    age: 25,
    phone: '(422)982-6739',
    access: 'user',
    profile_img: null,
  },
  {
    id: 4,
    name: 'Charlie Deen',
    email: 'charlie_deen@gmail.com',
    age: 27,
    phone: '(921)425-6742',
    access: 'admin',
    profile_img: null,
  },
  {
    id: 5,
    name: 'Daenerys Targaryen',
    email: 'daenerystargaryen@gmail.com',
    age: 31,
    phone: '(421)445-1189',
    access: 'user',
    profile_img: null,
  },
  {
    id: 6,
    name: 'Ever Melisandre',
    email: 'evermelisandre@gmail.com',
    age: 150,
    phone: '(232)545-6483',
    access: 'manager',
    profile_img: null,
  },
  {
    id: 7,
    name: 'Ferrara Clifford',
    email: 'ferraraclifford@gmail.com',
    age: 44,
    phone: '(543)124-0123',
    access: 'user',
    profile_img: null,
  },
  {
    id: 8,
    name: 'Rossini Frances',
    email: 'rossinifrances@gmail.com',
    age: 36,
    phone: '(222)444-5555',
    access: 'user',
    profile_img: null,
  },
  {
    id: 9,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    access: 'admin',
    profile_img: null,
  },
  {
    id: 10,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    access: 'admin',
    profile_img: null,
  },
  {
    id: 11,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    access: 'user',
    profile_img: null,
  },
  {
    id: 12,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    access: 'user',
    profile_img: null,
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: 'Jon Snow',
    email: 'jonsnow@gmail.com',
    age: 35,
    phone: '(665)121-5454',
    address: '0912 Won Street, Alabama, SY 10001',
    city: 'New York',
    zipCode: '10001',
    registerId: 123512,
  },
  {
    id: 2,
    name: 'Cersei Lannister',
    email: 'cerseilannister@gmail.com',
    age: 42,
    phone: '(421)314-2288',
    address: '1234 Main Street, New York, NY 10001',
    city: 'New York',
    zipCode: '13151',
    registerId: 123512,
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    email: 'jaimelannister@gmail.com',
    age: 45,
    phone: '(422)982-6739',
    address: '3333 Want Blvd, Estanza, NAY 42125',
    city: 'New York',
    zipCode: '87281',
    registerId: 4132513,
  },
  {
    id: 4,
    name: 'Anya Stark',
    email: 'anyastark@gmail.com',
    age: 16,
    phone: '(921)425-6742',
    address: '1514 Main Street, New York, NY 22298',
    city: 'New York',
    zipCode: '15551',
    registerId: 123512,
  },
  {
    id: 5,
    name: 'Daenerys Targaryen',
    email: 'daenerystargaryen@gmail.com',
    age: 31,
    phone: '(421)445-1189',
    address: '11122 Welping Ave, Tenting, CD 21321',
    city: 'Tenting',
    zipCode: '14215',
    registerId: 123512,
  },
  {
    id: 6,
    name: 'Ever Melisandre',
    email: 'evermelisandre@gmail.com',
    age: 150,
    phone: '(232)545-6483',
    address: '1234 Canvile Street, Esvazark, NY 10001',
    city: 'Esvazark',
    zipCode: '10001',
    registerId: 123512,
  },
  {
    id: 7,
    name: 'Ferrara Clifford',
    email: 'ferraraclifford@gmail.com',
    age: 44,
    phone: '(543)124-0123',
    address: '22215 Super Street, Everting, ZO 515234',
    city: 'Evertin',
    zipCode: '51523',
    registerId: 123512,
  },
  {
    id: 8,
    name: 'Rossini Frances',
    email: 'rossinifrances@gmail.com',
    age: 36,
    phone: '(222)444-5555',
    address: '4123 Ever Blvd, Wentington, AD 142213',
    city: 'Esteras',
    zipCode: '44215',
    registerId: 512315,
  },
  {
    id: 9,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    address: '51234 Avery Street, Cantory, ND 212412',
    city: 'Colunza',
    zipCode: '111234',
    registerId: 928397,
  },
  {
    id: 10,
    name: 'Enteri Redack',
    email: 'enteriredack@gmail.com',
    age: 42,
    phone: '(222)444-5555',
    address: '4123 Easer Blvd, Wentington, AD 142213',
    city: 'Esteras',
    zipCode: '44215',
    registerId: 533215,
  },
  {
    id: 11,
    name: 'Steve Goodman',
    email: 'stevegoodmane@gmail.com',
    age: 11,
    phone: '(444)555-6239',
    address: '51234 Fiveton Street, CunFory, ND 212412',
    city: 'Colunza',
    zipCode: '12345',
    registerId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: 'Jon Snow',
    email: 'jonsnow@gmail.com',
    cost: '21.24',
    phone: '(665)121-5454',
    date: '03/12/2022',
  },
  {
    id: 2,
    name: 'Cersei Lannister',
    email: 'cerseilannister@gmail.com',
    cost: '1.24',
    phone: '(421)314-2288',
    date: '06/15/2021',
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    email: 'jaimelannister@gmail.com',
    cost: '11.24',
    phone: '(422)982-6739',
    date: '05/02/2022',
  },
  {
    id: 4,
    name: 'Anya Stark',
    email: 'anyastark@gmail.com',
    cost: '80.55',
    phone: '(921)425-6742',
    date: '03/21/2022',
  },
  {
    id: 5,
    name: 'Daenerys Targaryen',
    email: 'daenerystargaryen@gmail.com',
    cost: '1.24',
    phone: '(421)445-1189',
    date: '01/12/2021',
  },
  {
    id: 6,
    name: 'Ever Melisandre',
    email: 'evermelisandre@gmail.com',
    cost: '63.12',
    phone: '(232)545-6483',
    date: '11/02/2022',
  },
  {
    id: 7,
    name: 'Ferrara Clifford',
    email: 'ferraraclifford@gmail.com',
    cost: '52.42',
    phone: '(543)124-0123',
    date: '02/11/2022',
  },
  {
    id: 8,
    name: 'Rossini Frances',
    email: 'rossinifrances@gmail.com',
    cost: '21.24',
    phone: '(222)444-5555',
    date: '05/02/2021',
  },
];

export const mockTransactions = [
  {
    txId: '01e4dsa',
    user: 'johndoe',
    date: '2021-09-01',
    cost: '43.95',
  },
  {
    txId: '0315dsaa',
    user: 'jackdower',
    date: '2022-04-01',
    cost: '133.45',
  },
  {
    txId: '01e4dsa',
    user: 'aberdohnny',
    date: '2021-09-01',
    cost: '43.95',
  },
  {
    txId: '51034szv',
    user: 'goodmanave',
    date: '2022-11-05',
    cost: '200.95',
  },
  {
    txId: '0a123sb',
    user: 'stevebower',
    date: '2022-11-02',
    cost: '13.55',
  },
  {
    txId: '01e4dsa',
    user: 'aberdohnny',
    date: '2021-09-01',
    cost: '43.95',
  },
  {
    txId: '120s51a',
    user: 'wootzifer',
    date: '2019-04-15',
    cost: '24.20',
  },
  {
    txId: '0315dsaa',
    user: 'jackdower',
    date: '2022-04-01',
    cost: '133.45',
  },
];

export const mockBarData = [
  {
    country: 'AD',
    'hot dog': 137,
    'hot dogColor': 'hsl(229, 70%, 50%)',
    burger: 96,
    burgerColor: 'hsl(296, 70%, 50%)',
    kebab: 72,
    kebabColor: 'hsl(97, 70%, 50%)',
    donut: 140,
    donutColor: 'hsl(340, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 55,
    'hot dogColor': 'hsl(307, 70%, 50%)',
    burger: 28,
    burgerColor: 'hsl(111, 70%, 50%)',
    kebab: 58,
    kebabColor: 'hsl(273, 70%, 50%)',
    donut: 29,
    donutColor: 'hsl(275, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 109,
    'hot dogColor': 'hsl(72, 70%, 50%)',
    burger: 23,
    burgerColor: 'hsl(96, 70%, 50%)',
    kebab: 34,
    kebabColor: 'hsl(106, 70%, 50%)',
    donut: 152,
    donutColor: 'hsl(256, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 133,
    'hot dogColor': 'hsl(257, 70%, 50%)',
    burger: 52,
    burgerColor: 'hsl(326, 70%, 50%)',
    kebab: 43,
    kebabColor: 'hsl(110, 70%, 50%)',
    donut: 83,
    donutColor: 'hsl(9, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 81,
    'hot dogColor': 'hsl(190, 70%, 50%)',
    burger: 80,
    burgerColor: 'hsl(325, 70%, 50%)',
    kebab: 112,
    kebabColor: 'hsl(54, 70%, 50%)',
    donut: 35,
    donutColor: 'hsl(285, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 66,
    'hot dogColor': 'hsl(208, 70%, 50%)',
    burger: 111,
    burgerColor: 'hsl(334, 70%, 50%)',
    kebab: 167,
    kebabColor: 'hsl(182, 70%, 50%)',
    donut: 18,
    donutColor: 'hsl(76, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 80,
    'hot dogColor': 'hsl(87, 70%, 50%)',
    burger: 47,
    burgerColor: 'hsl(141, 70%, 50%)',
    kebab: 158,
    kebabColor: 'hsl(224, 70%, 50%)',
    donut: 49,
    donutColor: 'hsl(274, 70%, 50%)',
  },
];

export const mockCallBarData = [
  {
    month: 'Jan',
    'cold transfer': 137,
    'cold transferColor': 'hsl(229, 70%, 50%)',
    'warm transfer': 96,
    'warm transferColor': 'hsl(296, 70%, 50%)',
    'hot transfer': 72,
    'hot transferColor': 'hsl(97, 70%, 50%)',
    'pt success': 140,
    'pt successColor': 'hsl(340, 70%, 50%)',
    'pt fail': 49,
    'pt failColor': 'hsl(204, 70%, 50%)',
  },
  {
    month: 'Feb',
    'cold transfer': 55,
    'cold transferColor': 'hsl(307, 70%, 50%)',
    'warm transfer': 28,
    'warm transferColor': 'hsl(111, 70%, 50%)',
    'hot transfer': 58,
    'hot transferColor': 'hsl(273, 70%, 50%)',
    'pt success': 29,
    'pt successColor': 'hsl(275, 70%, 50%)',
    'pt fail': 49,
    'pt failColor': 'hsl(129, 70%, 50%)',
  },
  {
    month: 'Mar',
    'cold transfer': 109,
    'cold transferColor': 'hsl(72, 70%, 50%)',
    'warm transfer': 23,
    'warm transferColor': 'hsl(96, 70%, 50%)',
    'hot transfer': 34,
    'hot transferColor': 'hsl(106, 70%, 50%)',
    'pt success': 152,
    'pt successColor': 'hsl(256, 70%, 50%)',
    'pt fail': 49,
    'pt failColor': 'hsl(220, 70%, 50%)',
  },
  {
    month: 'Apr',
    'cold transfer': 133,
    'cold transferColor': 'hsl(257, 70%, 50%)',
    'warm transfer': 52,
    'warm transferColor': 'hsl(326, 70%, 50%)',
    'hot transfer': 43,
    'hot transferColor': 'hsl(110, 70%, 50%)',
    'pt success': 83,
    'pt successColor': 'hsl(9, 70%, 50%)',
    'pt fail': 49,
    'pt failColor': 'hsl(27, 70%, 50%)',
  },
  {
    month: 'May',
    'cold transfer': 81,
    'cold transferColor': 'hsl(190, 70%, 50%)',
    'warm transfer': 80,
    'warm transferColor': 'hsl(325, 70%, 50%)',
    'hot transfer': 112,
    'hot transferColor': 'hsl(54, 70%, 50%)',
    'pt success': 35,
    'pt successColor': 'hsl(285, 70%, 50%)',
    'pt fail': 49,
    'pt failColor': 'hsl(74, 70%, 50%)',
  },
  {
    month: 'June',
    'cold transfer': 66,
    'cold transferColor': 'hsl(208, 70%, 50%)',
    'warm transfer': 111,
    'warm transferColor': 'hsl(334, 70%, 50%)',
    'hot transfer': 167,
    'hot transferColor': 'hsl(182, 70%, 50%)',
    'pt success': 18,
    'pt successColor': 'hsl(76, 70%, 50%)',
    'pt fail': 49,
    'pt failColor': 'hsl(274, 70%, 50%)',
  },
  {
    month: 'July',
    'cold transfer': 80,
    'cold transferColor': 'hsl(87, 70%, 50%)',
    'warm transfer': 47,
    'warm transferColor': 'hsl(141, 70%, 50%)',
    'hot transfer': 158,
    'hot transferColor': 'hsl(224, 70%, 50%)',
    'pt success': 49,
    'pt successColor': 'hsl(290, 70%, 50%)',
    'pt fail': 49,
    'pt failColor': 'hsl(302, 70%, 50%)',
  },
];

export const mockBarKeys = [
  'cold transfer',
  'warm transfer',
  'hot transfer',
  'pt success',
  'pt fail',
];
export const mockPieData = [
  {
    id: 'very-satisfied',
    label: 'Very Satisfied',
    value: 28,
    color: 'hsl(104, 70%, 50%)',
  },
  {
    id: 'satisfied',
    label: 'Satisfied',
    value: 25,
    color: 'hsl(291, 70%, 50%)',
  },
  {
    id: 'neutral',
    label: 'Neutral',
    value: 12,
    color: 'hsl(162, 70%, 50%)',
  },
  {
    id: 'dissatisfied',
    label: 'Dissatisfied',
    value: 8,
    color: 'hsl(229, 70%, 50%)',
  },
  {
    id: 'very-dissatisfied',
    label: 'Very Dissatisfied',
    value: 6,
    color: 'hsl(344, 70%, 50%)',
  },
];

export const callHandlingData = [
  {
    id: 'Incoming calls', // Representing a team or agent
    color: tokens('dark').greenAccent[500],

    data: [
      { x: '07:00 AM', y: 217 },
      { x: '08:00 AM', y: 200 },
      { x: '09:00 AM', y: 216 },
      { x: '10:00 AM', y: 155 },
      { x: '11:00 AM', y: 37 },
      { x: '12:00 PM', y: 315 },
      { x: '01:00 PM', y: 252 },
      { x: '02:00 PM', y: 213 },
      { x: '03:00 PM', y: 219 },
      { x: '04:00 PM', y: 371 },
      { x: '05:00 PM', y: 166 },
      { x: '06:00 PM', y: 140 },
    ],
  },
  {
    id: 'Answered Calls',
    color: tokens('dark').blueAccent[300],
    data: [
      { x: '07:00 AM', y: 204 },
      { x: '08:00 AM', y: 182 },
      { x: '09:00 AM', y: 198 },
      { x: '10:00 AM', y: 145 },
      { x: '11:00 AM', y: 37 },
      { x: '12:00 PM', y: 304 },
      { x: '01:00 PM', y: 244 },
      { x: '02:00 PM', y: 205 },
      { x: '03:00 PM', y: 200 },
      { x: '04:00 PM', y: 348 },
      { x: '05:00 PM', y: 164 },
      { x: '06:00 PM', y: 200 },
    ],
  },
  {
    id: 'Abandoned Calls',
    color: tokens('dark').redAccent[400],
    data: [
      { x: '07:00 AM', y: 13 },
      { x: '08:00 AM', y: 18 },
      { x: '09:00 AM', y: 18 },
      { x: '10:00 AM', y: 10 },
      { x: '11:00 AM', y: 0 },
      { x: '12:00 PM', y: 11 },
      { x: '01:00 PM', y: 8 },
      { x: '02:00 PM', y: 8 },
      { x: '03:00 PM', y: 19 },
      { x: '04:00 PM', y: 23 },
      { x: '05:00 PM', y: 2 },
      { x: '06:00 PM', y: 26 },
    ],
  },
  {
    id: 'Answer Rate',
    color: tokens('dark').redAccent[400],
    data: [
      { x: '07:00 AM', y: '94.01%' },
      { x: '08:00 AM', y: '91.00%' },
      { x: '09:00 AM', y: '91.67%' },
      { x: '10:00 AM', y: '93.55%' },
      { x: '11:00 AM', y: '100.00%' },
      { x: '12:00 PM', y: '96.51%' },
      { x: '01:00 PM', y: '96.83%' },
      { x: '02:00 PM', y: '96.24%' },
      { x: '03:00 PM', y: '91.32%' },
      { x: '04:00 PM', y: '93.80%' },
      { x: '05:00 PM', y: '98.80%' },
      { x: '06:00 PM', y: '92.80%' },
    ],
  },
  {
    id: 'Service Level% (20 sec)',
    color: tokens('dark').redAccent[400],
    data: [
      { x: '08:00 AM', y: '76.28%' },
      { x: '07:00 AM', y: '72.73%' },
      { x: '09:00 AM', y: '74.30%' },
      { x: '10:00 AM', y: '79.61%' },
      { x: '11:00 AM', y: '97.30%' },
      { x: '12:00 PM', y: '77.17%' },
      { x: '01:00 PM', y: '82.00%' },
      { x: '02:00 PM', y: '88.10%' },
      { x: '03:00 PM', y: '79.45%' },
      { x: '04:00 PM', y: '73.63%' },
      { x: '05:00 PM', y: '81.33%' },
      { x: '06:00 PM', y: '92.30%' },
    ],
  },
];

export const mockLineData = [
  {
    id: 'japan',
    color: tokens('dark').greenAccent[500],
    data: [
      {
        x: 'plane',
        y: 101,
      },
      {
        x: 'helicopter',
        y: 75,
      },
      {
        x: 'boat',
        y: 36,
      },
      {
        x: 'train',
        y: 216,
      },
      {
        x: 'subway',
        y: 35,
      },
      {
        x: 'bus',
        y: 236,
      },
      {
        x: 'car',
        y: 88,
      },
      {
        x: 'moto',
        y: 232,
      },
      {
        x: 'bicycle',
        y: 281,
      },
      {
        x: 'horse',
        y: 1,
      },
      {
        x: 'skateboard',
        y: 35,
      },
      {
        x: 'others',
        y: 14,
      },
    ],
  },
  {
    id: 'france',
    color: tokens('dark').blueAccent[300],
    data: [
      {
        x: 'plane',
        y: 212,
      },
      {
        x: 'helicopter',
        y: 190,
      },
      {
        x: 'boat',
        y: 270,
      },
      {
        x: 'train',
        y: 9,
      },
      {
        x: 'subway',
        y: 75,
      },
      {
        x: 'bus',
        y: 175,
      },
      {
        x: 'car',
        y: 33,
      },
      {
        x: 'moto',
        y: 189,
      },
      {
        x: 'bicycle',
        y: 97,
      },
      {
        x: 'horse',
        y: 87,
      },
      {
        x: 'skateboard',
        y: 299,
      },
      {
        x: 'others',
        y: 251,
      },
    ],
  },
  {
    id: 'us',
    color: tokens('dark').redAccent[200],
    data: [
      {
        x: 'plane',
        y: 191,
      },
      {
        x: 'helicopter',
        y: 136,
      },
      {
        x: 'boat',
        y: 91,
      },
      {
        x: 'train',
        y: 190,
      },
      {
        x: 'subway',
        y: 211,
      },
      {
        x: 'bus',
        y: 152,
      },
      {
        x: 'car',
        y: 189,
      },
      {
        x: 'moto',
        y: 152,
      },
      {
        x: 'bicycle',
        y: 8,
      },
      {
        x: 'horse',
        y: 197,
      },
      {
        x: 'skateboard',
        y: 107,
      },
      {
        x: 'others',
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: 'AFG',
    value: 520600,
  },
  {
    id: 'AGO',
    value: 949905,
  },
  {
    id: 'ALB',
    value: 329910,
  },
  {
    id: 'ARE',
    value: 675484,
  },
  {
    id: 'ARG',
    value: 432239,
  },
  {
    id: 'ARM',
    value: 288305,
  },
  {
    id: 'ATA',
    value: 415648,
  },
  {
    id: 'ATF',
    value: 665159,
  },
  {
    id: 'AUT',
    value: 798526,
  },
  {
    id: 'AZE',
    value: 481678,
  },
  {
    id: 'BDI',
    value: 496457,
  },
  {
    id: 'BEL',
    value: 252276,
  },
  {
    id: 'BEN',
    value: 440315,
  },
  {
    id: 'BFA',
    value: 343752,
  },
  {
    id: 'BGD',
    value: 920203,
  },
  {
    id: 'BGR',
    value: 261196,
  },
  {
    id: 'BHS',
    value: 421551,
  },
  {
    id: 'BIH',
    value: 974745,
  },
  {
    id: 'BLR',
    value: 349288,
  },
  {
    id: 'BLZ',
    value: 305983,
  },
  {
    id: 'BOL',
    value: 430840,
  },
  {
    id: 'BRN',
    value: 345666,
  },
  {
    id: 'BTN',
    value: 649678,
  },
  {
    id: 'BWA',
    value: 319392,
  },
  {
    id: 'CAF',
    value: 722549,
  },
  {
    id: 'CAN',
    value: 332843,
  },
  {
    id: 'CHE',
    value: 122159,
  },
  {
    id: 'CHL',
    value: 811736,
  },
  {
    id: 'CHN',
    value: 593604,
  },
  {
    id: 'CIV',
    value: 143219,
  },
  {
    id: 'CMR',
    value: 630627,
  },
  {
    id: 'COG',
    value: 498556,
  },
  {
    id: 'COL',
    value: 660527,
  },
  {
    id: 'CRI',
    value: 60262,
  },
  {
    id: 'CUB',
    value: 177870,
  },
  {
    id: '-99',
    value: 463208,
  },
  {
    id: 'CYP',
    value: 945909,
  },
  {
    id: 'CZE',
    value: 500109,
  },
  {
    id: 'DEU',
    value: 63345,
  },
  {
    id: 'DJI',
    value: 634523,
  },
  {
    id: 'DNK',
    value: 731068,
  },
  {
    id: 'DOM',
    value: 262538,
  },
  {
    id: 'DZA',
    value: 760695,
  },
  {
    id: 'ECU',
    value: 301263,
  },
  {
    id: 'EGY',
    value: 148475,
  },
  {
    id: 'ERI',
    value: 939504,
  },
  {
    id: 'ESP',
    value: 706050,
  },
  {
    id: 'EST',
    value: 977015,
  },
  {
    id: 'ETH',
    value: 461734,
  },
  {
    id: 'FIN',
    value: 22800,
  },
  {
    id: 'FJI',
    value: 18985,
  },
  {
    id: 'FLK',
    value: 64986,
  },
  {
    id: 'FRA',
    value: 447457,
  },
  {
    id: 'GAB',
    value: 669675,
  },
  {
    id: 'GBR',
    value: 757120,
  },
  {
    id: 'GEO',
    value: 158702,
  },
  {
    id: 'GHA',
    value: 893180,
  },
  {
    id: 'GIN',
    value: 877288,
  },
  {
    id: 'GMB',
    value: 724530,
  },
  {
    id: 'GNB',
    value: 387753,
  },
  {
    id: 'GNQ',
    value: 706118,
  },
  {
    id: 'GRC',
    value: 377796,
  },
  {
    id: 'GTM',
    value: 66890,
  },
  {
    id: 'GUY',
    value: 719300,
  },
  {
    id: 'HND',
    value: 739590,
  },
  {
    id: 'HRV',
    value: 929467,
  },
  {
    id: 'HTI',
    value: 538961,
  },
  {
    id: 'HUN',
    value: 146095,
  },
  {
    id: 'IDN',
    value: 490681,
  },
  {
    id: 'IND',
    value: 549818,
  },
  {
    id: 'IRL',
    value: 630163,
  },
  {
    id: 'IRN',
    value: 596921,
  },
  {
    id: 'IRQ',
    value: 767023,
  },
  {
    id: 'ISL',
    value: 478682,
  },
  {
    id: 'ISR',
    value: 963688,
  },
  {
    id: 'ITA',
    value: 393089,
  },
  {
    id: 'JAM',
    value: 83173,
  },
  {
    id: 'JOR',
    value: 52005,
  },
  {
    id: 'JPN',
    value: 199174,
  },
  {
    id: 'KAZ',
    value: 181424,
  },
  {
    id: 'KEN',
    value: 60946,
  },
  {
    id: 'KGZ',
    value: 432478,
  },
  {
    id: 'KHM',
    value: 254461,
  },
  {
    id: 'OSA',
    value: 942447,
  },
  {
    id: 'KWT',
    value: 414413,
  },
  {
    id: 'LAO',
    value: 448339,
  },
  {
    id: 'LBN',
    value: 620090,
  },
  {
    id: 'LBR',
    value: 435950,
  },
  {
    id: 'LBY',
    value: 75091,
  },
  {
    id: 'LKA',
    value: 595124,
  },
  {
    id: 'LSO',
    value: 483524,
  },
  {
    id: 'LTU',
    value: 867357,
  },
  {
    id: 'LUX',
    value: 689172,
  },
  {
    id: 'LVA',
    value: 742980,
  },
  {
    id: 'MAR',
    value: 236538,
  },
  {
    id: 'MDA',
    value: 926836,
  },
  {
    id: 'MDG',
    value: 840840,
  },
  {
    id: 'MEX',
    value: 353910,
  },
  {
    id: 'MKD',
    value: 505842,
  },
  {
    id: 'MLI',
    value: 286082,
  },
  {
    id: 'MMR',
    value: 915544,
  },
  {
    id: 'MNE',
    value: 609500,
  },
  {
    id: 'MNG',
    value: 410428,
  },
  {
    id: 'MOZ',
    value: 32868,
  },
  {
    id: 'MRT',
    value: 375671,
  },
  {
    id: 'MWI',
    value: 591935,
  },
  {
    id: 'MYS',
    value: 991644,
  },
  {
    id: 'NAM',
    value: 701897,
  },
  {
    id: 'NCL',
    value: 144098,
  },
  {
    id: 'NER',
    value: 312944,
  },
  {
    id: 'NGA',
    value: 862877,
  },
  {
    id: 'NIC',
    value: 90831,
  },
  {
    id: 'NLD',
    value: 281879,
  },
  {
    id: 'NOR',
    value: 224537,
  },
  {
    id: 'NPL',
    value: 322331,
  },
  {
    id: 'NZL',
    value: 86615,
  },
  {
    id: 'OMN',
    value: 707881,
  },
  {
    id: 'PAK',
    value: 158577,
  },
  {
    id: 'PAN',
    value: 738579,
  },
  {
    id: 'PER',
    value: 248751,
  },
  {
    id: 'PHL',
    value: 557292,
  },
  {
    id: 'PNG',
    value: 516874,
  },
  {
    id: 'POL',
    value: 682137,
  },
  {
    id: 'PRI',
    value: 957399,
  },
  {
    id: 'PRT',
    value: 846430,
  },
  {
    id: 'PRY',
    value: 720555,
  },
  {
    id: 'QAT',
    value: 478726,
  },
  {
    id: 'ROU',
    value: 259318,
  },
  {
    id: 'RUS',
    value: 268735,
  },
  {
    id: 'RWA',
    value: 136781,
  },
  {
    id: 'ESH',
    value: 151957,
  },
  {
    id: 'SAU',
    value: 111821,
  },
  {
    id: 'SDN',
    value: 927112,
  },
  {
    id: 'SDS',
    value: 966473,
  },
  {
    id: 'SEN',
    value: 158085,
  },
  {
    id: 'SLB',
    value: 178389,
  },
  {
    id: 'SLE',
    value: 528433,
  },
  {
    id: 'SLV',
    value: 353467,
  },
  {
    id: 'ABV',
    value: 251,
  },
  {
    id: 'SOM',
    value: 445243,
  },
  {
    id: 'SRB',
    value: 202402,
  },
  {
    id: 'SUR',
    value: 972121,
  },
  {
    id: 'SVK',
    value: 319923,
  },
  {
    id: 'SVN',
    value: 728766,
  },
  {
    id: 'SWZ',
    value: 379669,
  },
  {
    id: 'SYR',
    value: 16221,
  },
  {
    id: 'TCD',
    value: 101273,
  },
  {
    id: 'TGO',
    value: 498411,
  },
  {
    id: 'THA',
    value: 506906,
  },
  {
    id: 'TJK',
    value: 613093,
  },
  {
    id: 'TKM',
    value: 327016,
  },
  {
    id: 'TLS',
    value: 607972,
  },
  {
    id: 'TTO',
    value: 936365,
  },
  {
    id: 'TUN',
    value: 898416,
  },
  {
    id: 'TUR',
    value: 237783,
  },
  {
    id: 'TWN',
    value: 878213,
  },
  {
    id: 'TZA',
    value: 442174,
  },
  {
    id: 'UGA',
    value: 720710,
  },
  {
    id: 'UKR',
    value: 74172,
  },
  {
    id: 'URY',
    value: 753177,
  },
  {
    id: 'USA',
    value: 658725,
  },
  {
    id: 'UZB',
    value: 550313,
  },
  {
    id: 'VEN',
    value: 707492,
  },
  {
    id: 'VNM',
    value: 538907,
  },
  {
    id: 'VUT',
    value: 650646,
  },
  {
    id: 'PSE',
    value: 476078,
  },
  {
    id: 'YEM',
    value: 957751,
  },
  {
    id: 'ZAF',
    value: 836949,
  },
  {
    id: 'ZMB',
    value: 714503,
  },
  {
    id: 'ZWE',
    value: 405217,
  },
  {
    id: 'KOR',
    value: 171135,
  },
];