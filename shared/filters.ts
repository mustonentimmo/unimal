export interface Counties {
  value: string;
  label: string;
}

export const counties: Counties[] = [
  { value: 'all', label: 'Kõik' },
  { value: 'harju', label: 'Harju' },
  { value: 'hiiu', label: 'Hiiu' },
  { value: 'ida_viru', label: 'Ida-viru' },
  { value: 'jogeva', label: 'Jõgeva' },
  { value: 'jarva', label: 'Järva' },
  { value: 'laane', label: 'Lääne' },
  { value: 'laane_viru', label: 'Lääne-viru' },
  { value: 'polva', label: 'Põlva' },
  { value: 'parnu', label: 'Pärnu' },
  { value: 'rapla', label: 'Rapla' },
  { value: 'saare', label: 'Saare' },
  { value: 'tartu', label: 'Tartu' },
  { value: 'viljandi', label: 'Viljandi' },
  { value: 'voru', label: 'Võru' },
  { value: 'valga', label: 'Valga' },
];

export const animalSortOptions = [
  { name: 'äsja saabunud', href: '#', current: false },
  { name: 'pikaajalised', href: '#', current: false },
];

export const animalFilters = [
  {
    id: 'species',
    name: 'Liik',
    options: [
      { value: 'koer', label: 'Koer', checked: false },
      { value: 'kass', label: 'Kass', checked: false },
      { value: 'muu', label: 'Muu', checked: false },
    ],
  },
  {
    id: 'sex',
    name: 'Sugu',
    options: [
      { value: 'isane', label: 'Isane', checked: false },
      { value: 'emane', label: 'Emane', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Värvus',
    options: [
      { value: 'must', label: 'Must', checked: false },
      { value: 'valge', label: 'Valge', checked: false },
      { value: 'punane', label: 'Punane', checked: false },
      { value: 'hall', label: 'Hall', checked: false },
      { value: 'kirju', label: 'Kirju', checked: false },
    ],
  },
  {
    id: 'character',
    name: 'Iseloom',
    options: [
      { value: 'seltskondlik', label: 'Seltskondlik', checked: false },
      { value: 'manguhimuline', label: 'Mänguhimuline', checked: false },
      { value: 'tagasihoidlik', label: 'Tagasihoidlik', checked: false },
      { value: 'rahulik', label: 'Rahulik', checked: false },
      { value: 'kartlik', label: 'Kartlik', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Suurus',
    options: [
      { value: 'pisike', label: 'Pisike', checked: false },
      { value: 'keskmine', label: 'Keskmine', checked: false },
      { value: 'suur', label: 'Suur', checked: false },
    ],
  },
  {
    id: 'age',
    name: 'Vanus',
    options: [
      { value: 'juunior', label: 'Juunior', checked: false },
      { value: 'täiskasvanu', label: 'Täiskasvanu', checked: false },
      { value: 'seenior', label: 'Seenior', checked: false },
    ],
  },
];
