export interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  distance: string;
  price: number;
  image: string;
  area: string;
  land: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Дом, 250 м²",
    description: "Дом, 250 м², 7 сот., ИЖС",
    location: "д. Хатминки, Калужское шоссе",
    distance: "26 км от МКАД",
    price: 28900000,
    image: "https://images.cdn-cian.ru/images/dom-hatminki-2973400706-4.jpg",
    area: "250 м²",
    land: "7 сот."
  },
  {
    id: 2,
    title: "Коттедж, 200 м²",
    description: "Коттедж, 200 м², 6 сот., ИЖС",
    location: "5-я Мякининская ул., Новорижское шоссе",
    distance: "3 км от МКАД",
    price: 58200000,
    image: "https://images.cdn-cian.ru/images/kottedzh-moskva-5ya-myakininskaya-ulica-2972958025-4.jpg",
    area: "200 м²",
    land: "6 сот."
  },
  {
    id: 3,
    title: "Дом, 130 м²",
    description: "Дом, 130 м², 5 сот., ИЖС",
    location: "Троицк, Калужское шоссе",
    distance: "20 км от МКАД",
    price: 12500000,
    image: "https://images.cdn-cian.ru/images/dom-troick-kaluzhskoe-shosse-2977247237-4.jpg",
    area: "130 м²",
    land: "5 сот."
  },
  {
    id: 4,
    title: "Коттедж, 1 000 м²",
    description: "Коттедж, 1 000 м², 32 сот., ИЖС",
    location: "д. Бурцево, Киевское шоссе, КП «Променад»",
    distance: "17 км от МКАД",
    price: 600000000,
    image: "https://images.cdn-cian.ru/images/2946239556-4.jpg",
    area: "1 000 м²",
    land: "32 сот."
  },
  {
    id: 5,
    title: "Дом, 70 м²",
    description: "Дом, 70 м², 6 сот., ИЖС",
    location: "Квант СНТ, Калужское шоссе",
    distance: "26 км от МКАД",
    price: 4700000,
    image: "https://images.cdn-cian.ru/images/dom-kvant-2949708586-4.jpg",
    area: "70 м²",
    land: "6 сот."
  },
  {
    id: 6,
    title: "Коттедж, 350 м²",
    description: "Коттедж, 350 м², 24 сот., ИЖС",
    location: "Калужское шоссе, КП «Росинтер-2»",
    distance: "17 км от МКАД",
    price: 85000000,
    image: "https://images.cdn-cian.ru/images/2657522624-4.jpg",
    area: "350 м²",
    land: "24 сот."
  },
  {
    id: 7,
    title: "Коттедж, 361 м²",
    description: "Коттедж, 361 м², 13 сот.",
    location: "д. Елизарово, Киевское шоссе, КП «Eli»",
    distance: "27 км от МКАД",
    price: 127752000,
    image: "https://images.cdn-cian.ru/images/2692982127-4.jpg",
    area: "361 м²",
    land: "13 сот."
  },
  {
    id: 8,
    title: "Дом, 188 м²",
    description: "Дом, 188 м², 6 сот., Садоводство",
    location: "д. Тупиково, Калужское шоссе, СНТ «Интернационалист»",
    distance: "17 км от МКАД",
    price: 7500000,
    image: "https://images.cdn-cian.ru/images/dom-internacionalist-2926926203-4.jpg",
    area: "188 м²",
    land: "6 сот."
  },
  {
    id: 9,
    title: "Дом, 137 м²",
    description: "Дом, 137 м², 6 сот., ИЖС",
    location: "КП «Дубрава парк», Калужское шоссе",
    distance: "43 км от МКАД",
    price: 6690000,
    image: "https://images.cdn-cian.ru/images/dom-dubrava-park-2941387796-4.jpg",
    area: "137 м²",
    land: "6 сот."
  },
  {
    id: 10,
    title: "Коттедж, 697 м²",
    description: "Коттедж, 697 м², 28 сот., ИЖС",
    location: "д. Зименки, Киевское шоссе, КП «Антоновка»",
    distance: "9 км от МКАД",
    price: 200000000,
    image: "https://images.cdn-cian.ru/images/2913039501-4.jpg",
    area: "697 м²",
    land: "28 сот."
  },
  {
    id: 11,
    title: "Дом, 240 м²",
    description: "Дом, 240 м², 13 сот., Садоводство",
    location: "пос. Рассудово, Киевское шоссе, СНТ «Ресурс-1»",
    distance: "41 км от МКАД",
    price: 20500000,
    image: "https://images.cdn-cian.ru/images/dom-resurs1-2605420972-4.jpg",
    area: "240 м²",
    land: "13 сот."
  },
  {
    id: 12,
    title: "Коттедж, 400 м²",
    description: "Коттедж, 400 м², 17 сот., ИЖС",
    location: "д. Зименки, Киевское шоссе, КП «Антоновка»",
    distance: "9 км от МКАД",
    price: 175000000,
    image: "https://images.cdn-cian.ru/images/2938450259-4.jpg",
    area: "400 м²",
    land: "17 сот."
  },
  {
    id: 13,
    title: "Дом, 182 м²",
    description: "Дом, 182 м², 9 сот., ИЖС",
    location: "КП «Стольный», Калужское шоссе",
    distance: "32 км от МКАД",
    price: 42000000,
    image: "https://images.cdn-cian.ru/images/2989678099-4.jpg",
    area: "182 м²",
    land: "9 сот."
  },
  {
    id: 14,
    title: "Дом, 172 м²",
    description: "Дом, 172 м², 8 сот., ИЖС",
    location: "д. Сенькино-Секерино, Калужское шоссе",
    distance: "37 км от МКАД",
    price: 26000000,
    image: "https://images.cdn-cian.ru/images/dom-senkinosekerino-2943269670-4.jpg",
    area: "172 м²",
    land: "8 сот."
  },
  {
    id: 15,
    title: "Коттедж, 500 м²",
    description: "Коттедж, 500 м², 30 сот., ИЖС",
    location: "д. Зыбино, Симферопольское шоссе",
    distance: "45 км от МКАД",
    price: 50000000,
    image: "https://images.cdn-cian.ru/images/kottedzh-zybino-2515622313-4.jpg",
    area: "500 м²",
    land: "30 сот."
  },
  {
    id: 16,
    title: "Дом, 176 м²",
    description: "Дом, 176 м², 8 сот., ИЖС",
    location: "Киевское шоссе",
    distance: "45 км от МКАД",
    price: 29500000,
    image: "https://images.cdn-cian.ru/images/dom182-2932664090-4.jpg",
    area: "176 м²",
    land: "8 сот."
  },
  {
    id: 17,
    title: "Дом, 100 м²",
    description: "Дом, 100 м², 8 сот., Садоводство",
    location: "д. Расторопово, Калужское шоссе",
    distance: "12 км от МКАД",
    price: 16500000,
    image: "https://images.cdn-cian.ru/images/dom-voshodvoskresenskoe-2-ya-liniya-2934602427-4.jpg",
    area: "100 м²",
    land: "8 сот."
  },
  {
    id: 18,
    title: "Коттедж, 400 м²",
    description: "Коттедж, 400 м², 15 сот., ИЖС",
    location: "д. Милюково, Киевское шоссе, КП «Чистые ключи»",
    distance: "27 км от МКАД",
    price: 135500000,
    image: "https://images.cdn-cian.ru/images/kottedzh-chistye-klyuchi-2977925657-4.jpg",
    area: "400 м²",
    land: "15 сот."
  },
  {
    id: 19,
    title: "Дом, 360 м²",
    description: "Дом, 360 м², 15 сот., ИЖС",
    location: "д. Горчаково, Калужское шоссе",
    distance: "27 км от МКАД",
    price: 52000000,
    image: "https://images.cdn-cian.ru/images/dom-gorchakovo-2934065482-4.jpg",
    area: "360 м²",
    land: "15 сот."
  },
  {
    id: 20,
    title: "Коттедж, 290 м²",
    description: "Коттедж, 290 м², 6 сот., ИЖС",
    location: "пос. Внуково, Минское шоссе",
    distance: "13 км от МКАД",
    price: 120000000,
    image: "https://images.cdn-cian.ru/images/kottedzh-vnukovo-lebedeva-kumacha-ulica-2989846636-4.jpg",
    area: "290 м²",
    land: "6 сот."
  },
  {
    id: 21,
    title: "Дом, 422 м²",
    description: "Дом, 422 м², 14 сот., ИЖС",
    location: "КП «Синергия», Калужское шоссе",
    distance: "10 км от МКАД",
    price: 155000000,
    image: "https://images.cdn-cian.ru/images/2967217571-4.jpg",
    area: "422 м²",
    land: "14 сот."
  },
  {
    id: 22,
    title: "Дом, 3 340 м²",
    description: "Дом, 3 340 м², 124 сот., ИЖС",
    location: "КП «Озерный», Калужское шоссе",
    distance: "20 км от МКАД",
    price: 390000000,
    image: "https://images.cdn-cian.ru/images/2946169317-4.jpg",
    area: "3 340 м²",
    land: "124 сот."
  },
  {
    id: 23,
    title: "Дом, 33 000 м²",
    description: "Дом, Калужское шоссе, КП «Академия Парк 2.0»",
    location: "Калужское шоссе, КП «Академия Парк 2.0»",
    distance: "27 км от МКАД",
    price: 33000000,
    image: "https://images.cdn-cian.ru/images/2920127042-4.jpg",
    area: "350 м²",
    land: "12 сот."
  },
  {
    id: 24,
    title: "Дом, 49 500 000 ₽",
    description: "Дом, Калужское шоссе, КП «Монреаль»",
    location: "КП «Монреаль», Калужское шоссе",
    distance: "30 км от МКАД",
    price: 49500000,
    image: "https://images.cdn-cian.ru/images/2936982089-4.jpg",
    area: "280 м²",
    land: "10 сот."
  }
];

export function getRandomProperties(count: number): Property[] {
  const shuffled = [...properties].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function calculateScore(guess: number, actual: number): number {
  const ratio = Math.abs(guess - actual) / actual;
  if (ratio <= 0.05) return 10;
  if (ratio <= 0.1) return 9;
  if (ratio <= 0.15) return 8;
  if (ratio <= 0.2) return 7;
  if (ratio <= 0.3) return 5;
  if (ratio <= 0.5) return 3;
  if (ratio <= 0.75) return 1;
  return 0;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}
