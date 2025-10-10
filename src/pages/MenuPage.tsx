import React from 'react';
import { ShoppingCart, Utensils, Clock, Truck } from 'lucide-react';

const menuData = {
  categories: [
    {
      name: "Soups & Stews",
      description: "Traditional Nigerian soups and stews made with authentic recipes and fresh ingredients",
      items: [
        {
          name: "Banga Soup Only",
          description: "Palm nut fruit, palm oil, and banga spices.",
          price: "QR 30",
          image: "/Banga Soup Only copy.webp",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Banga%20Soup%20Only.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Ogbono Soup With Protein",
          description: "Ogbono, pepper, crayfish.",
          price: "QR 30",
          image: "/Ogbono Soup With Protein copy.jpeg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Ogbono%20Soup%20With%20Protein.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Egusi + Protein",
          description: "Ground melon seed stew served with proteins.",
          price: "QR 25",
          image: "/Egusi + Protein copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Egusi%20with%20Protein.%20My%20delivery%20location%20is%20...",
          popular: true
        },
        {
          name: "Ogbono & Egusi",
          description: "A combination of ground ogbono and egusi with meat or fish.",
          price: "QR 30",
          image: "/Ogbono & Egusi copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Ogbono%20and%20Egusi.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "White Soup + Protein",
          description: "A light clear soup with proteins.",
          price: "QR 30",
          image: "/White Soup + Protein copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20White%20Soup%20with%20Protein.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Stew With Beef",
          description: "Tomato, pepper, onion, capsicum.",
          price: "QR 28",
          image: "/Stew With Beef.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Stew%20With%20Beef.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Black Soup",
          description: "Thick soup with assorted meats, herbs, and spices.",
          price: "QR 20",
          image: "/Black Soup.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Black%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Afang Soup",
          description: "Traditional Nigerian soup made with afang leaves and assorted proteins.",
          price: "QR 40",
          image: "/Afang Soup.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Afang%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Edikaikong Soup",
          description: "Delicious vegetable soup with waterleaf and fluted pumpkin leaves.",
          price: "QR 40",
          image: "/Edikaikong Soup.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Edikaikong%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Groundnut (Peanut) Soup",
          description: "Rich and creamy soup made with groundnuts and assorted proteins.",
          price: "QR 40",
          image: "/Groundnut (Peanut) Soup.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Groundnut%20Peanut%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Plantain Porridge Only",
          description: "Plantain, palm oil, seasoning, and leaves.",
          price: "QR 31",
          image: "/Plantain Porridge Only copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Plantain%20Porridge%20Only.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Pot of Soups",
      description: "Large portions perfect for families and gatherings",
      items: [
        {
          name: "Efo Riro (Big Pot)",
          description: "Large pot of spinach stew perfect for gatherings.",
          price: "QR 250",
          image: "/Efo Riro (Big Pot) copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Efo%20Riro%20Big%20Pot.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Efo Riro (Small Pot)",
          description: "Small pot of spinach stew for smaller groups.",
          price: "QR 200",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Efo%20Riro%20Small%20Pot.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Egusi (Small Pot) + 7 Protein",
          description: "Small pot of egusi soup with 7 pieces of protein.",
          price: "QR 200",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Egusi%20Small%20Pot%20with%207%20Protein.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Egusi (Big Pot) + 10 Protein",
          description: "Large pot of egusi soup with 10 pieces of protein.",
          price: "QR 250",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Egusi%20Big%20Pot%20with%2010%20Protein.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Ogbono (Small Pot) + 7 Protein",
          description: "Small pot of ogbono soup with 7 pieces of protein.",
          price: "QR 200",
          image: "/Ogbono (Small Pot) + 7 Protein copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Ogbono%20Small%20Pot%20with%207%20Protein.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Ogbono (Big Pot) + 10 Protein",
          description: "Large pot of ogbono soup with 10 pieces of protein.",
          price: "QR 250",
          image: "/Ogbono (Big Pot) + 10 Protein copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Ogbono%20Big%20Pot%20with%2010%20Protein.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Okro (Small Pot) + 5 Protein",
          description: "Small pot of okro soup with 5 pieces of protein.",
          price: "QR 210",
          image: "/Okro (Small Pot) + 5 Protein copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Okro%20Small%20Pot%20with%205%20Protein.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Okro (Big Pot) + 10 Protein",
          description: "Large pot of okro soup with 10 pieces of protein.",
          price: "QR 320",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Okro%20Big%20Pot%20with%2010%20Protein.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Swallows",
      description: "Traditional Nigerian swallows - perfect companions for soups",
      items: [
        {
          name: "Pounded Yam",
          description: "Smooth, stretchy yam paste - the perfect companion for Nigerian soups.",
          price: "QR 15",
          image: "/Pounded Yam copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Pounded%20Yam.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Poundo Yam",
          description: "Smooth pounded yam made from yam flour.",
          price: "QR 10",
          image: "/Poundo Yam copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Poundo%20Yam.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Yellow Garri",
          description: "Traditional cassava-based swallow made from yellow garri.",
          price: "QR 10",
          image: "/Yellow Garri copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Yellow%20Garri.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Amala (Yam Fufu)",
          description: "Traditional Yoruba swallow made from yam flour.",
          price: "QAR 15",
          image: "/Amala (Yam Fufu) copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Amala.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Semolina",
          description: "Smooth wheat-based swallow perfect with any soup.",
          price: "QR 10",
          image: "/Semolina copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Semolina.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Rice Flour / Ground Rice",
          description: "Light swallow made from ground rice flour.",
          price: "QR 10",
          image: "/Rice Flour (Ground Rice) copy copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Rice%20Flour%20Ground%20Rice.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Rice & Pasta",
      description: "Delicious rice and pasta dishes prepared with authentic African flavors",
      items: [
        {
          name: "Native Jollof Rice",
          description: "Traditional jollof rice cooked with native spices and palm oil.",
          price: "QR 25",
          image: "/Native Jollof Rice copy copy.webp",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Native%20Jollof%20Rice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Jollof Rice Only",
          description: "Classic Nigerian jollof rice cooked to perfection.",
          price: "QR 20",
          image: "/rice.png",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Jollof%20Rice%20Only.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "White Rice with Pepper Soup Side",
          description: "Plain white rice served with a side of spicy pepper soup.",
          price: "QR 35",
          image: "/White Rice with Pepper Soup Side copy copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20White%20Rice%20with%20Pepper%20Soup%20Side.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Spaghetti Jollof Only",
          description: "Spaghetti cooked in jollof style with Nigerian spices.",
          price: "QR 40",
          image: "/Spaghetti Jollof Only copy copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Spaghetti%20Jollof%20Only.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Waakye",
          description: "Ghanaian rice and beans dish cooked with millet leaves for authentic flavor.",
          price: "QR 30",
          image: "/Waakye copy copy.jpg",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Waakye.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Pepper Soups",
      description: "Spicy and aromatic pepper soups with various proteins",
      items: [
        {
          name: "Catfish Pepper Soup",
          description: "Fresh catfish cooked in spicy pepper soup with traditional herbs.",
          price: "QR 40",
          image: "/Catfish Pepper Soup copy.JPG",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Catfish%20Pepper%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Assorted Pepper Soup",
          description: "Mixed meat pepper soup with assorted proteins and spices.",
          price: "QR 38",
          image: "/Assorted Pepper Soup copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Assorted%20Pepper%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Chicken Pepper Soup",
          description: "Tender chicken pieces in aromatic pepper soup broth.",
          price: "QR 36",
          image: "/Chicken Pepper Soup copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Chicken%20Pepper%20Soup.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Goat Meat Pepper Soup",
          description: "Traditional goat meat pepper soup with authentic spices.",
          price: "QR 40",
          image: "/Goat Meat Pepper Soup copy.webp",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Goat%20Meat%20Pepper%20Soup.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Protein (Add-ons)",
      description: "Additional proteins to enhance your meals",
      items: [
        {
          name: "Shaki (Beef Tripe)",
          description: "Tender beef tripe cooked to perfection.",
          price: "QR 10",
          image: "/Shaki (Beef Tripe) copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Shaki%20Beef%20Tripe.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fried Chicken",
          description: "Crispy fried chicken pieces seasoned with Nigerian spices.",
          price: "QR 15",
          image: "/Fried Chicken copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fried%20Chicken.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fried Fish",
          description: "Fresh fish fried with traditional seasonings.",
          price: "QR 15",
          image: "/Fried Fish copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fried%20Fish.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Smoked Titus Fish",
          description: "Premium smoked titus fish with rich flavor.",
          price: "QR 25",
          image: "/Smoked Titus Fish copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Smoked%20Titus%20Fish.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Turkey (Big)",
          description: "Large portion of tender turkey meat.",
          price: "QR 20",
          image: "/Turkey (Big) copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Turkey%20Big.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Roasted Turkey Only",
          description: "Perfectly roasted turkey with aromatic spices.",
          price: "QR 25",
          image: "/Roasted Turkey Only copy.jpg",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Roasted%20Turkey%20Only.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fried Beef",
          description: "Tender fried beef pieces with Nigerian seasonings.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fried%20Beef.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Sides & Small Chops",
      description: "Delicious sides and small portions perfect for sharing",
      items: [
        {
          name: "Boiled Plantain",
          description: "Simple boiled plantain, soft and naturally sweet.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Boiled%20Plantain.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Boiled Yams",
          description: "Fresh yams boiled to perfection.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Boiled%20Yams.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fried Plantain (Dodo)",
          description: "Sweet fried plantain slices, caramelized to perfection.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fried%20Plantain%20Dodo.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Roasted Plantain (Boli)",
          description: "Plantain roasted over open fire with smoky flavor.",
          price: "QR 20",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Roasted%20Plantain%20Boli.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fried Yam",
          description: "Crispy fried yam slices with golden exterior.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fried%20Yam.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Boiled Yam And Egg Sauce",
          description: "Boiled yam served with spicy egg sauce.",
          price: "QR 40",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Boiled%20Yam%20And%20Egg%20Sauce.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fried Yam With Egg Sauce",
          description: "Crispy fried yam served with spicy egg sauce.",
          price: "QR 40",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fried%20Yam%20With%20Egg%20Sauce.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Moin Moin Only",
          description: "Steamed bean pudding made with black-eyed peas.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Moin%20Moin%20Only.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Beans And Stew Only",
          description: "Cooked beans served with Nigerian tomato stew.",
          price: "QR 25",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Beans%20And%20Stew%20Only.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Ewa Agoyin (Beans + Sauce + Plantain)",
          description: "Mashed beans with spicy ewa agoyin sauce and plantain.",
          price: "QR 30",
          image: "/Beans and Plantain.png",
          image: "https://images.pexels.com/photos/5638749/pexels-photo-5638749.jpeg?auto=compress&cs=tinysrgb&w=600",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Ewa%20Agoyin.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "French Fries",
          description: "Crispy golden french fries.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20French%20Fries.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Veggie Salad",
          description: "Fresh mixed vegetable salad.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Veggie%20Salad.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Coleslaw Salad",
          description: "Creamy coleslaw with fresh cabbage and carrots.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Coleslaw%20Salad.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Chin Chin",
          description: "Crunchy fried pastry cubes, lightly sweetened.",
          price: "QR 12",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Chin%20Chin.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Puff Puff",
          description: "Sweet fried dough balls, soft and fluffy inside.",
          price: "QR 10",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Puff%20Puff.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Drinks & Juices",
      description: "Refreshing traditional and fresh beverages",
      items: [
        {
          name: "Palm Wine",
          description: "Traditional fermented palm wine with natural sweetness.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Palm%20Wine.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Hibiscus Drink (Zobo / Sobolo / Bissap)",
          description: "Refreshing hibiscus drink with natural fruits and spices.",
          price: "QR 12",
          image: "/Zobo.png",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Hibiscus%20Drink.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Avocado Juice",
          description: "Creamy fresh avocado juice, naturally nutritious.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Avocado%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Watermelon Juice",
          description: "Fresh watermelon juice, naturally sweet and refreshing.",
          price: "QR 12",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Watermelon%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Banana Juice",
          description: "Smooth and creamy fresh banana juice.",
          price: "QR 12",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Banana%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Fresh Orange Juice",
          description: "Freshly squeezed orange juice, vitamin C rich.",
          price: "QR 12",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Fresh%20Orange%20Juice.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Fresh Juice Mixes",
      description: "Delicious combinations of fresh fruits for enhanced flavors",
      items: [
        {
          name: "Orange + Pineapple",
          description: "Tropical blend of orange and pineapple juices.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Orange%20and%20Pineapple%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Mango + Orange",
          description: "Sweet combination of mango and orange juices.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Mango%20and%20Orange%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Watermelon + Pineapple",
          description: "Refreshing mix of watermelon and pineapple juices.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Watermelon%20and%20Pineapple%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Apple + Carrot",
          description: "Healthy blend of apple and carrot juices.",
          price: "QR 20",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Apple%20and%20Carrot%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Pineapple + Ginger",
          description: "Tropical pineapple with a hint of ginger for extra kick.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Pineapple%20and%20Ginger%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Lemon + Ginger",
          description: "Zesty lemon with warming ginger, perfect for digestion.",
          price: "QR 15",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Lemon%20and%20Ginger%20Juice.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Lemon + Ginger",
          description: "Zesty lemon with warming ginger, perfect for digestion.",
          price: "QR 10",
          orderLink: "https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Lemon%20and%20Ginger%20Juice.%20My%20delivery%20location%20is%20..."
        }
      ]
    },
    {
      name: "Smoothies & Exotic Mixes",
      description: "Premium smoothie blends with exotic fruit combinations",
      items: [
        {
          name: "Pineapple + Mango + Passionfruit",
          description: "Exotic tropical blend with three premium fruits.",
          price: "QR 18",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Pineapple%20Mango%20Passionfruit%20Smoothie.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Orange + Mango + Pineapple",
          description: "Triple tropical fruit smoothie with rich flavors.",
          price: "QR 18",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Orange%20Mango%20Pineapple%20Smoothie.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Watermelon + Pineapple + Mint",
          description: "Refreshing smoothie with cooling mint finish.",
          price: "QR 18",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Watermelon%20Pineapple%20Mint%20Smoothie.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Coconut Water + Pineapple + Lemon",
          description: "Hydrating coconut water blend with tropical fruits.",
          price: "QR 18",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Coconut%20Water%20Pineapple%20Lemon%20Smoothie.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Papaya + Pineapple + Orange",
          description: "Vitamin-rich tropical smoothie with papaya goodness.",
          price: "QR 18",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Papaya%20Pineapple%20Orange%20Smoothie.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Banana + Mango + Pineapple",
          description: "Creamy and sweet tropical fruit smoothie blend.",
          price: "QR 18",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Banana%20Mango%20Pineapple%20Smoothie.%20My%20delivery%20location%20is%20..."
        },
        {
          name: "Pineapple + Guava + Orange",
          description: "Exotic smoothie with unique guava flavor profile.",
          price: "QR 18",
          orderLink: "https://wa.me/974XXXXXXXX?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20order%20Pineapple%20Guava%20Orange%20Smoothie.%20My%20delivery%20location%20is%20..."
        }
      ]
    }
  ]
};

const MenuPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Menu
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Authentic Nigerian and African dishes made with love and traditional recipes
          </p>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center">
              <Clock className="w-6 h-6 text-red-600 mr-3" />
              <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                30-45 Min Delivery
              </span>
            </div>
            <div className="flex items-center justify-center">
              <Truck className="w-6 h-6 text-red-600 mr-3" />
              <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Free Delivery Over QAR 100
              </span>
            </div>
            <div className="flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-red-600 mr-3" />
              <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Order via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {menuData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {category.name}
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
                      {item.image && (
                        <div className="w-full h-48 sm:h-32 sm:w-32 sm:float-left sm:mr-4 mb-4 sm:mb-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-t-lg sm:rounded-lg sm:rounded-tr-none"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center mb-2 sm:mb-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {item.name}
                            {item.popular && (
                              <span className="ml-2 px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                                Popular
                              </span>
                            )}
                          </h3>
                          <span className="text-lg font-bold text-red-600 self-start" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {item.price}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {item.description}
                        </p>
                        
                        <a
                          href={item.orderLink}
                          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-all duration-300 transform hover:scale-105"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Order Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 text-red-100" style={{ fontFamily: 'Inter, sans-serif' }}>
            Contact us on WhatsApp to place your order and taste authentic African flavors
          </p>
          <a
            href="https://wa.me/97471962487?text=Hi%20Demat%20African%20Kitchen,%20I%27d%20like%20to%20place%20an%20order.%20My%20delivery%20location%20is%20..."
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="w-6 h-6 mr-3" />
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;