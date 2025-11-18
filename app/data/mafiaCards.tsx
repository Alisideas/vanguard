// app/data/mafiaCards.ts
import { Card } from "../types/card";

export const createMafiaRoles = (
  numPlayers: number,
  scenario: string | null
): Card[] => {
  let customRoles: Card[] = [];

  // Bazpors Scenario (10, 12, or 13 players)
  if (scenario === "Bazpors") {
    if (numPlayers === 10) {
      customRoles = [
        {
          id: 1,
          name: "ریٔیس مافیا",
          description: "شما رهبر مافیا هستید و بازی را کنترل می‌کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr8.jpg",
          package: numPlayers,
        },
        {
          id: 2,
          name: "شیاد",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr6.jpg",
          package: numPlayers,
        },
        {
          id: 3,
          name: "ناتو",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr2.jpg",
          package: numPlayers,
        },
        {
          id: 4,
          name: "دکتر",
          description: "شما می‌توانید یک نفر را از حذف شدن در شب نجات دهید.",
          color: "green",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr9.jpg",
          package: numPlayers,
        },
        {
          id: 5,
          name: "کاراگاه",
          description:
            "شما می‌توانید دیگر بازیکنان را بررسی کنید تا ببینید آیا آنها مافیا هستند.",
          color: "blue",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr7.jpg",
          package: numPlayers,
        },
        {
          id: 6,
          name: "هانتر",
          description:
            "شما می‌توانید یک بازیکن را از بازی خارج کنید اگر خودتان حذف شوید.",
          color: "#e69b00",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr5.jpg",
          package: numPlayers,
        },
        {
          id: 7,
          name: "بازپرس",
          description:
            "شما یک شهروند هستید که می‌توانید به شناسایی مافیا کمک کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr3.jpg",
          package: numPlayers,
        },
        {
          id: 8,
          name: "رویین تن",
          description:
            "شما یک شهروند خاص هستید که می‌توانید از خود در برابر حملات محافظت کنید.",
          color: "purple",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr1.jpg",
          package: numPlayers,
        },
        {
          id: 9,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
        {
          id: 10,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
      ];
    }

    if (numPlayers === 12) {
      customRoles = [
        {
          id: 1,
          name: "ریٔیس مافیا",
          description: "شما رهبر مافیا هستید و بازی را کنترل می‌کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr8.jpg",
          package: numPlayers,
        },
        {
          id: 2,
          name: "شیاد",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr6.jpg",
          package: numPlayers,
        },
        {
          id: 3,
          name: "ناتو",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr2.jpg",
          package: numPlayers,
        },
        {
          id: 4,
          name: "مافیا ساده",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr11.jpg",
          package: numPlayers,
        },
        {
          id: 5,
          name: "دکتر",
          description: "شما می‌توانید یک نفر را از حذف شدن در شب نجات دهید.",
          color: "green",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr9.jpg",
          package: numPlayers,
        },
        {
          id: 6,
          name: "کاراگاه",
          description:
            "شما می‌توانید دیگر بازیکنان را بررسی کنید تا ببینید آیا آنها مافیا هستند.",
          color: "blue",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr7.jpg",
          package: numPlayers,
        },
        {
          id: 7,
          name: "هانتر",
          description:
            "شما می‌توانید یک بازیکن را از بازی خارج کنید اگر خودتان حذف شوید.",
          color: "#e69b00",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr5.jpg",
          package: numPlayers,
        },
        {
          id: 8,
          name: "بازپرس",
          description:
            "شما یک شهروند هستید که می‌توانید به شناسایی مافیا کمک کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr3.jpg",
          package: numPlayers,
        },
        {
          id: 9,
          name: "رویین تن",
          description:
            "شما یک شهروند خاص هستید که می‌توانید از خود در برابر حملات محافظت کنید.",
          color: "purple",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr1.jpg",
          package: numPlayers,
        },
        {
          id: 10,
          name: "تک‌تیرانداز",
          description:
            "شما می‌توانید یک هدف را از فاصله دور از بین ببرید، اما تنها یک بار.",
          color: "blue",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr10.jpg",
          package: numPlayers,
        },
        {
          id: 11,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
        {
          id: 12,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
      ];
    }

    if (numPlayers === 13) {
      customRoles = [
        {
          id: 1,
          name: "ریٔیس مافیا",
          description: "شما رهبر مافیا هستید و بازی را کنترل می‌کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr8.jpg",
          package: numPlayers,
        },
        {
          id: 2,
          name: "شیاد",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr6.jpg",
          package: numPlayers,
        },
        {
          id: 3,
          name: "ناتو",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr2.jpg",
          package: numPlayers,
        },
        {
          id: 4,
          name: "مافیا ساده",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr11.jpg",
          package: numPlayers,
        },
        {
          id: 5,
          name: "دکتر",
          description: "شما می‌توانید یک نفر را از حذف شدن در شب نجات دهید.",
          color: "green",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr9.jpg",
          package: numPlayers,
        },
        {
          id: 6,
          name: "کاراگاه",
          description:
            "شما می‌توانید دیگر بازیکنان را بررسی کنید تا ببینید آیا آنها مافیا هستند.",
          color: "blue",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr7.jpg",
          package: numPlayers,
        },
        {
          id: 7,
          name: "هانتر",
          description:
            "شما می‌توانید یک بازیکن را از بازی خارج کنید اگر خودتان حذف شوید.",
          color: "#e69b00",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr5.jpg",
          package: numPlayers,
        },
        {
          id: 8,
          name: "بازپرس",
          description:
            "شما یک شهروند هستید که می‌توانید به شناسایی مافیا کمک کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr3.jpg",
          package: numPlayers,
        },
        {
          id: 9,
          name: "رویین تن",
          description:
            "شما یک شهروند خاص هستید که می‌توانید از خود در برابر حملات محافظت کنید.",
          color: "purple",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr1.jpg",
          package: numPlayers,
        },
        {
          id: 10,
          name: "تک‌تیرانداز",
          description:
            "شما می‌توانید یک هدف را از فاصله دور از بین ببرید، اما تنها یک بار.",
          color: "blue",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr10.jpg",
          package: numPlayers,
        },
        {
          id: 11,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
        {
          id: 12,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
        {
          id: 13,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
      ];
    }
  }

  



  if (scenario === "Namayande") {
    if (numPlayers === 10) {
      customRoles = [
        {
          id: 1,
          name: "ریٔیس مافیا",
          description: "شما رهبر مافیا هستید و بازی را کنترل می‌کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam1.jpg",
          package: numPlayers,
        },
        {
          id: 2,
          name: "هکر",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam3.jpg",
          package: numPlayers,
        },
        {
          id: 3,
          name: "یاغی",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam2.jpg",
          package: numPlayers,
        },
        {
          id: 4,
          name: "دکتر",
          description: "شما می‌توانید یک نفر را از حذف شدن در شب نجات دهید.",
          color: "green",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam8.jpg",
          package: numPlayers,
        },
        {
          id: 5,
          name: "راهنما",
          description:
            "شما می‌توانید دیگر بازیکنان را بررسی کنید تا ببینید آیا آنها مافیا هستند.",
          color: "blue",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam7.jpg",
          package: numPlayers,
        },
        {
          id: 6,
          name: "مین گذار",
          description:
            "شما می‌توانید یک بازیکن را از بازی خارج کنید اگر خودتان حذف شوید.",
          color: "#e69b00",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam6.jpg",
          package: numPlayers,
        },
        {
          id: 7,
          name: "وکیل",
          description:
            "شما یک شهروند هستید که می‌توانید به شناسایی مافیا کمک کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam10.jpg",
          package: numPlayers,
        },
        {
          id: 8,
          name: "محافظ",
          description:
            "شما یک شهروند خاص هستید که می‌توانید از خود در برابر حملات محافظت کنید.",
          color: "purple",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam9.jpg",
          package: numPlayers,
        },
        {
          id: 9,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam12.jpg",
          package: numPlayers,
        },
        {
          id: 10,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam12.jpg",
          package: numPlayers,
        },
      ];
    }

    if (numPlayers === 12) {
      customRoles = [
        {
          id: 1,
          name: "ریٔیس مافیا",
          description: "شما رهبر مافیا هستید و بازی را کنترل می‌کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam1.jpg",
          package: numPlayers,
        },
        {
          id: 2,
          name: "هکر",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam3.jpg",
          package: numPlayers,
        },
        {
          id: 3,
          name: "یاغی",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam2.jpg",
          package: numPlayers,
        },
        {
          id: 4,
          name: "دکتر",
          description: "شما می‌توانید یک نفر را از حذف شدن در شب نجات دهید.",
          color: "green",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam8.jpg",
          package: numPlayers,
        },
        {
          id: 5,
          name: "راهنما",
          description:
            "شما می‌توانید دیگر بازیکنان را بررسی کنید تا ببینید آیا آنها مافیا هستند.",
          color: "blue",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam7.jpg",
          package: numPlayers,
        },
        {
          id: 6,
          name: "مین گذار",
          description:
            "شما می‌توانید یک بازیکن را از بازی خارج کنید اگر خودتان حذف شوید.",
          color: "#e69b00",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam6.jpg",
          package: numPlayers,
        },
        {
          id: 7,
          name: "وکیل",
          description:
            "شما یک شهروند هستید که می‌توانید به شناسایی مافیا کمک کنید.",
          color: "blue",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam10.jpg",
          package: numPlayers,
        },
        {
          id: 8,
          name: "محافظ",
          description:
            "شما یک شهروند خاص هستید که می‌توانید از خود در برابر حملات محافظت کنید.",
          color: "purple",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam9.jpg",
          package: numPlayers,
        },
        {
          id: 9,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam12.jpg",
          package: numPlayers,
        },
        {
          id: 10,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam12.jpg",
          package: numPlayers,
        },
        {
          id: 11,
          name: "سرباز",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "orange",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam11.jpg",
          package: numPlayers,
        },
        {
          id: 12,
          name: "ناتو",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam4.jpg",
          package: numPlayers,
        },
      ];
    }

    if (numPlayers === 13) {
      customRoles = [
        {
          id: 1,
          name: "ریٔیس مافیا",
          description: "شما رهبر مافیا هستید و بازی را کنترل می‌کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam1.jpg",
          package: numPlayers,
        },
        {
          id: 2,
          name: "هکر",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam3.jpg",
          package: numPlayers,
        },
        {
          id: 3,
          name: "یاغی",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam2.jpg",
          package: numPlayers,
        },
        {
          id: 4,
          name: "دکتر",
          description: "شما می‌توانید یک نفر را از حذف شدن در شب نجات دهید.",
          color: "green",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam8.jpg",
          package: numPlayers,
        },
        {
          id: 5,
          name: "راهنما",
          description:
            "شما می‌توانید دیگر بازیکنان را بررسی کنید تا ببینید آیا آنها مافیا هستند.",
          color: "blue",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam7.jpg",
          package: numPlayers,
        },
        {
          id: 6,
          name: "مین گذار",
          description:
            "شما می‌توانید یک بازیکن را از بازی خارج کنید اگر خودتان حذف شوید.",
          color: "#e69b00",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam6.jpg",
          package: numPlayers,
        },
        {
          id: 7,
          name: "وکیل",
          description:
            "شما یک شهروند هستید که می‌توانید به شناسایی مافیا کمک کنید.",
          color: "blue",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam10.jpg",
          package: numPlayers,
        },
        {
          id: 8,
          name: "محافظ",
          description:
            "شما یک شهروند خاص هستید که می‌توانید از خود در برابر حملات محافظت کنید.",
          color: "purple",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam9.jpg",
          package: numPlayers,
        },
        {
          id: 9,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam12.jpg",
          package: numPlayers,
        },
        {
          id: 10,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam12.jpg",
          package: numPlayers,
        },
        {
          id: 11,
          name: "سرباز",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "orange",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam11.jpg",
          package: numPlayers,
        },
        {
          id: 12,
          name: "ناتو",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam4.jpg",
          package: numPlayers,
        },
        {
          id: 13,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/products/ProductDetails/nam5.jpg",
          package: numPlayers,
        },
      ];
    }
  }


  if (scenario === "Vanguard") {
    if (numPlayers === 10) {
      customRoles = [
        {
          id: 1,
          name: "ریٔیس مافیا",
          description: "شما رهبر مافیا هستید و بازی را کنترل می‌کنید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr8.jpg",
          package: numPlayers,
        },
        {
          id: 2,
          name: "پابلو",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr6.jpg",
          package: numPlayers,
        },
        {
          id: 3,
          name: "تینکر",
          description: "شما عضو مافیا هستید و باید بی‌گناهان را از بین ببرید.",
          color: "red",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr2.jpg",
          package: numPlayers,
        },
        {
          id: 4,
          name: "دکتر",
          description: "شما می‌توانید یک نفر را از حذف شدن در شب نجات دهید.",
          color: "green",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr9.jpg",
          package: numPlayers,
        },
        {
          id: 5,
          name: "کاراگاه",
          description:
            "شما می‌توانید دیگر بازیکنان را بررسی کنید تا ببینید آیا آنها مافیا هستند.",
          color: "blue",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr7.jpg",
          package: numPlayers,
        },
        {
          id: 6,
          name: "افشاگر",
          description:
            "شما می‌توانید یک بازیکن را از بازی خارج کنید اگر خودتان حذف شوید.",
          color: "#e69b00",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr5.jpg",
          package: numPlayers,
        },
        {
          id: 7,
          name: "ونگارد",
          description:
            "شما یک شهروند هستید که می‌توانید به شناسایی مافیا کمک کنید.",
          color: "gray",
          image: "https://res.cloudinary.com/dbm8ncouc/image/upload/v1761849369/nikoo_jjmufl.png",
          package: numPlayers,
        },
        {
          id: 8,
          name: "مظنون",
          description:
            "شما یک شهروند خاص هستید که می‌توانید از خود در برابر حملات محافظت کنید.",
          color: "purple",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr1.jpg",
          package: numPlayers,
        },
        {
          id: 9,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
        {
          id: 10,
          name: "شهروند ساده",
          description:
            "شما یک شهروند معمولی هستید و باید با دیگران برای پیدا کردن مافیا همکاری کنید.",
          color: "gray",
          image: "https://whitesho.com/imgs/Products/ProductDetails/bazr4.jpg",
          package: numPlayers,
        },
      ];
    }

    
  }

  // Shuffle the roles randomly
  for (let i = customRoles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [customRoles[i], customRoles[j]] = [customRoles[j], customRoles[i]];
  }

  // Generate unique seat numbers and assign them
  const seatNumbers = Array.from(
    { length: numPlayers },
    (_, index) => index + 1
  ); // [1, 2, 3, ..., numPlayers]
  // Shuffle the seat numbers
  for (let i = seatNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [seatNumbers[i], seatNumbers[j]] = [seatNumbers[j], seatNumbers[i]];
  }

  // Assign a unique seat number to each player
  return customRoles.map((role, index) => ({
    ...role,
    seatNumber: seatNumbers[index], // Assign a unique seat number
  }));
};
