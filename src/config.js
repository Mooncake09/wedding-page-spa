import zagsEntrance from './assets/images/zags_entrance.jpeg'
import zagsInside from './assets/images/zags_inside.jpg'
import cafeEntrance from './assets/images/ya-cafe-3-outside.png'
import cafeInside from './assets/images/ya-cafe-3-inside.png'
import us1 from './assets/images/us1.jpg'
import us2 from './assets/images/us2.jpg'

export const config = {
  couple: {
    person1: 'Захар',
    person2: 'Анна',
  },
  photoPair: [
    { src: us1, label: 'Фото 1' },
    { src: us2, label: 'Фото 2' },
  ],
  event: {
    date: '2026-05-29T17:00:00',
    dateDisplay: '29 мая 2026',
    dressCode: 'Праздничный·официальный',
    venue: "Шипиловский Дворец бракосочетания"
  },
  story: {
    text: 'Иногда самое лучшее случается неожиданно. Мы встретились в самый обычный осенний день и решили больше не расставаться. И теперь, спустя время, наполненное счастьем, мы хотим, чтобы вы были рядом, когда мы скажем друг другу «да».',
  },
  timeline: [
    { time: '17:00', title: 'Церемония',         desc: 'Самый трогательный момент: официальное оформление нашей любви.' },
    { time: '17:30', title: 'Фото на память',   desc: 'Поймаем и сохраним в кадре наши общие эмоции. Приготовьтесь улыбаться! ' },
    { time: '19:00', title: 'Праздничный ужин', desc: 'Время вкусных блюд, веселья, душевных разговоров и первого тоста за молодожёнов! P.S. на фуршет вас будут ждать с 18:00' },
    { time: '00:00', title: 'Окончание банкета',      desc: 'Все хорошее рано или поздно заканчивается, но тёплые воспоминания останутся с нами навсегда.' },
  ],
  dresscode: {
    title: 'Праздничный·официальный',
    note: 'Мы не ставим строгих рамок. Приходите в том, в чём вам комфортно и красиво. Единственное пожелание — поддержать праздничную атмосферу своим нарядом❤️',
  },
location: {
  directions: '',
  venues: [
    {
      id: 'ceremony',
      photoHeight: 300,
      tab: 'Церемония · ЗАГС',
      name: 'Шипиловский Дворец бракосочетания',
      address: 'Москва, Шипиловский пр., 27',
      mapsUrl: 'https://yandex.com/maps/-/CPBTF67Y',
      mapsEmbed: 'https://yandex.ru/map-widget/v1/?um=constructor%3A85b24d192db21a84f169040d30fa6f757aba4282d66f12a2981ee5ebff685283&amp;source=constructor',
      time: '17:00',
      photos: [
        { src: zagsEntrance, label: 'Парадный вход' },
        { src: zagsInside, label: 'Внутренние помещения' },
      ],
    },
    {
      id: 'banquet',
      photoHeight: 300,
      tab: 'Банкет · Кафе',
      name: 'Ya-cafe 3',
      address: 'Москва, ул. Ленинская Слобода, 19, стр. 2',
      mapsUrl: 'https://yandex.com/maps/-/CPBXFJ5B',
      mapsEmbed: 'https://yandex.ru/map-widget/v1/?um=constructor%3A57c08f716ae9a5788980e7cc394377e167ced93088a2b4fb251d05c203abe313&amp;source=constructor',
      time: '18:00',
      photos: [
        { src: cafeEntrance, label: 'Вход в кафе' },
        { src: cafeInside, label: 'Кафе внутри' },
      ],
    },
  ],
},
  rsvp: {
    deadline: '1 мая 2026',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfTUk9l4N_Xz2KBQfeUWGGVkuLCAWDJUuZj5VhjaiHc6VI3Ag/viewform', // ← вставь свою ссылку
  },
}