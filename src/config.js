export const config = {
  couple: {
    person1: 'Захар',
    person2: 'Анна',
  },
  event: {
    date: '2026-05-29T17:00:00',
    dateDisplay: '29 мая 2026',
    dressCode: 'Как по кайфу',
    venue: "кафееее заменить"
  },
  story: {
    text: 'Мы встретились в один осенний вечер, когда никто из нас не ожидал ничего особенного. С тех пор каждый день рядом становился лучшим. Сегодня мы хотим, чтобы самые близкие люди разделили с нами этот момент — начало нашей общей главы.',
  },
  timeline: [
    { time: '17:00', title: 'Церемония',         desc: 'Церемония бракосочетания в ЗАГСе' },
    { time: '17:30', title: 'Фотосессия с гостями',   desc: 'Профессиональный фотограф сделает памятные фотографии' },
    { time: '18:30', title: 'Торжественный ужин', desc: 'Начало банкета' },
    { time: '20:00', title: 'Танцы & Торт',      desc: 'Первый танец, разрезание торта и танцы для всех' },
  ],
  dresscode: {
    title: 'Праздничный и официальный',
    note: 'Но мы нисколько не обидимся и не расстроимся, если вы придете в том, в чем хотите придти. Мы будем вам рады в любом наряде. ❤️',
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
        { src: "/src/static/zags_entrance.jpeg", label: 'Парадный вход' },
        { src: "/src/static/zags_inside.jpg", label: 'Внутренние помещения' },
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
        { src: "src/static/ya-cafe-3-outside.jpg", label: 'Вход в кафе' },
        { src: "src/static/ya-cafe-3-inside.png", label: 'Кафе внутри' },
      ],
    },
  ],
},
  rsvp: {
    deadline: '1 мая 2026',
    googleFormUrl: 'https://forms.gle/XXXXXXXXXXXXXXXX', // ← вставь свою ссылку
  },
}