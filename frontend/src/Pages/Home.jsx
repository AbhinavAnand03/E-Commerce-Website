import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/luxcart-logo.svg";
import "./Home.css";

function Home() {
  const [theme, setTheme] = useState("light");
  const [visibleProducts, setVisibleProducts] = useState(20);
  const [genderFilter, setGenderFilter] = useState("all");
  const featuredProducts = [
    {
      id: 1,
      name: "Watch",
      price: "$349",
      tone: "Silver",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Nike Shoes",
      price: "$219",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Velvet Air Sneakers",
      price: "$179",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Luxe Essential Set",
      price: "$99",
      tone: "Gold",
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      name: "Classic Leather Jacket",
      price: "$299",
      tone: "Brown",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      price: "$149",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 7,
      name: "Everyday Backpack",
      price: "$89",
      tone: "Navy",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 8,
      name: "Elegant Dress",
      price: "$199",
      tone: "Red",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 9,
      name: "Smart Watch",
      price: "$399",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 10,
      name: "Running Sneakers",
      price: "$129",
      tone: "Blue",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 11,
      name: "Leather Wallet",
      price: "$59",
      tone: "Brown",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 12,
      name: "Casual T-Shirt",
      price: "$29",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 13,
      name: "Designer Handbag",
      price: "$249",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 14,
      name: "Formal Shirt",
      price: "$79",
      tone: "Blue",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 15,
      name: "Wireless Headphones",
      price: "$199",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 16,
      name: "Denim Jeans",
      price: "$89",
      tone: "Dark Blue",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 17,
      name: "Luxury Scarf",
      price: "$69",
      tone: "Silk",
      image:
        "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 18,
      name: "Sports Cap",
      price: "$25",
      tone: "Red",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 19,
      name: "Elegant Necklace",
      price: "$149",
      tone: "Gold",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 20,
      name: "Casual Jacket",
      price: "$119",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 21,
      name: "Running Shorts",
      price: "$39",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1506629905607-0b5b8b5b5b5b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 22,
      name: "Designer Belt",
      price: "$49",
      tone: "Brown",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 23,
      name: "Summer Dress",
      price: "$89",
      tone: "Floral",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 24,
      name: "Leather Boots",
      price: "$179",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 25,
      name: "Wireless Earbuds",
      price: "$149",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 26,
      name: "Cotton Hoodie",
      price: "$59",
      tone: "Navy",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 27,
      name: "Luxury Watch",
      price: "$499",
      tone: "Rose Gold",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 28,
      name: "Athletic Shoes",
      price: "$139",
      tone: "Green",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 29,
      name: "Silk Blouse",
      price: "$79",
      tone: "Pink",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 30,
      name: "Travel Backpack",
      price: "$99",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 31,
      name: "Classic Sunglasses",
      price: "$99",
      tone: "Aviator",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 32,
      name: "Leather Gloves",
      price: "$45",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 33,
      name: "Evening Gown",
      price: "$299",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 34,
      name: "Smartphone Case",
      price: "$19",
      tone: "Clear",
      image:
        "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 35,
      name: "Winter Coat",
      price: "$249",
      tone: "Camel",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 36,
      name: "Yoga Pants",
      price: "$49",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1506629905607-0b5b8b5b5b5b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 37,
      name: "Gold Earrings",
      price: "$89",
      tone: "Gold",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 38,
      name: "Casual Sneakers",
      price: "$79",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 39,
      name: "Leather Briefcase",
      price: "$149",
      tone: "Brown",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 40,
      name: "Summer Hat",
      price: "$35",
      tone: "Straw",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 41,
      name: "Wireless Charger",
      price: "$29",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1609592806580-38e994e7e0e8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 42,
      name: "Cotton Socks",
      price: "$9",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 43,
      name: "Designer Ring",
      price: "$199",
      tone: "Silver",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 44,
      name: "Running Jacket",
      price: "$109",
      tone: "Blue",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 45,
      name: "Silk Scarf",
      price: "$59",
      tone: "Patterned",
      image:
        "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 46,
      name: "Leather Belt",
      price: "$39",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 47,
      name: "Beach Sandals",
      price: "$25",
      tone: "Brown",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 48,
      name: "Luxury Perfume",
      price: "$79",
      tone: "Floral",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 49,
      name: "Smart Ring",
      price: "$249",
      tone: "Silver",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 50,
      name: "Winter Gloves",
      price: "$29",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 51,
      name: "Casual Blazer",
      price: "$149",
      tone: "Navy",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 52,
      name: "Wireless Mouse",
      price: "$39",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 53,
      name: "Designer Clutch",
      price: "$119",
      tone: "Red",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 54,
      name: "Athletic Shorts",
      price: "$35",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1506629905607-0b5b8b5b5b5b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 55,
      name: "Gold Bracelet",
      price: "$129",
      tone: "Gold",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 56,
      name: "Leather Boots",
      price: "$189",
      tone: "Tan",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 57,
      name: "Summer Dress",
      price: "$99",
      tone: "Blue",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 58,
      name: "Bluetooth Speaker",
      price: "$69",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 59,
      name: "Cotton T-Shirt",
      price: "$19",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 60,
      name: "Luxury Handbag",
      price: "$299",
      tone: "Beige",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 61,
      name: "Running Shoes",
      price: "$149",
      tone: "Orange",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 62,
      name: "Silk Dress",
      price: "$179",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 63,
      name: "Travel Mug",
      price: "$15",
      tone: "Stainless",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 64,
      name: "Designer Watch",
      price: "$399",
      tone: "Silver",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 65,
      name: "Casual Jeans",
      price: "$69",
      tone: "Blue",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 66,
      name: "Luxury Scarf",
      price: "$89",
      tone: "Cashmere",
      image:
        "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 67,
      name: "Sports Watch",
      price: "$199",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 68,
      name: "Evening Clutch",
      price: "$79",
      tone: "Gold",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 69,
      name: "Winter Scarf",
      price: "$49",
      tone: "Wool",
      image:
        "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 70,
      name: "Designer Shoes",
      price: "$229",
      tone: "Red",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 71,
      name: "Leather Jacket",
      price: "$349",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 72,
      name: "Summer Sandals",
      price: "$39",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 73,
      name: "Wireless Keyboard",
      price: "$79",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 74,
      name: "Cotton Dress",
      price: "$59",
      tone: "Floral",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 75,
      name: "Luxury Belt",
      price: "$69",
      tone: "Brown",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 76,
      name: "Athletic Socks",
      price: "$12",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 77,
      name: "Designer Necklace",
      price: "$179",
      tone: "Silver",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 78,
      name: "Casual Hoodie",
      price: "$49",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 79,
      name: "Leather Wallet",
      price: "$49",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 80,
      name: "Summer Hat",
      price: "$29",
      tone: "Beige",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 81,
      name: "Wireless Earbuds",
      price: "$129",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 82,
      name: "Formal Pants",
      price: "$89",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 83,
      name: "Luxury Cologne",
      price: "$89",
      tone: "Woody",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 84,
      name: "Designer Bag",
      price: "$199",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 85,
      name: "Running Tank",
      price: "$25",
      tone: "Blue",
      image:
        "https://images.unsplash.com/photo-1506629905607-0b5b8b5b5b5b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 86,
      name: "Gold Ring",
      price: "$149",
      tone: "Gold",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 87,
      name: "Casual Sneakers",
      price: "$89",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 88,
      name: "Leather Briefcase",
      price: "$179",
      tone: "Brown",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 89,
      name: "Summer Dress",
      price: "$79",
      tone: "Yellow",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 90,
      name: "Wireless Charger",
      price: "$25",
      tone: "White",
      image:
        "https://images.unsplash.com/photo-1609592806580-38e994e7e0e8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 91,
      name: "Cotton Socks",
      price: "$8",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 92,
      name: "Designer Ring",
      price: "$219",
      tone: "Platinum",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 93,
      name: "Running Jacket",
      price: "$99",
      tone: "Red",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 94,
      name: "Silk Scarf",
      price: "$69",
      tone: "Blue",
      image:
        "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 95,
      name: "Leather Belt",
      price: "$45",
      tone: "Tan",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 96,
      name: "Beach Sandals",
      price: "$29",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 97,
      name: "Luxury Perfume",
      price: "$99",
      tone: "Citrus",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 98,
      name: "Smart Ring",
      price: "$299",
      tone: "Rose Gold",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 99,
      name: "Winter Gloves",
      price: "$35",
      tone: "Black",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 100,
      name: "Casual Blazer",
      price: "$139",
      tone: "Gray",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    },
  ];
  // Per-product gender overrides (use arrays: ['men'], ['women'], or ['men','women'])
  const gendersOverrides = {
    2: ["men"],
    3: ["men"],
    8: ["women"],
    13: ["women"],
    16: ["men"],
    27: ["men", "women"],
    29: ["women"],
    33: ["women"],
    71: ["men"],
    74: ["women"],
  };

  const productsWithGenders = featuredProducts.map((p) => ({
    ...p,
    genders: p.genders ?? gendersOverrides[p.id] ?? ["men", "women"],
  }));

  const filteredProducts = productsWithGenders.filter(
    (p) => genderFilter === "all" || p.genders.includes(genderFilter),
  );
  useEffect(() => {
    0.0;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      <div className="hero-bg one" aria-hidden="true" />
      <div className="hero-bg two" aria-hidden="true" />

      <header className="top-nav">
        <div className="logo-box">
          <img src={logoImage} alt="LuxCart logo" className="logo-image" />
          <p className="logo-text">LuxCart</p>
        </div>
        <nav>
          <Link to="/cart">Cart</Link>
          <Link to="/tracking">Track Order</Link>
          <a href="#">Collections</a>
          <a href="#">New Arrivals</a>
          <a href="#">About</a>
        </nav>
        <div className="nav-actions">
          <button
            className="outline-btn"
            onClick={() =>
              setTheme((prevTheme) =>
                prevTheme === "light" ? "dark" : "light",
              )
            }
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          <Link to="/signin">
            <button className="outline-btn">Sign In</button>
          </Link>
          <Link to="/cart">
            <button className="outline-btn">Cart (2)</button>
          </Link>
        </div>
      </header>

      <section className="hero reveal">
        <p className="hero-pill">New Collection 2026</p>
        <h1>Elevate your lifestyle with timeless essentials</h1>
        <p>
          Discover curated products crafted for quality, design, and everyday
          elegance.
        </p>
        <div className="hero-actions">
          <button className="solid-btn">Shop Collection</button>
          <button className="outline-btn">Browse Categories</button>
        </div>
        <div className="hero-stats">
          <article>
            <strong>4.9</strong>
            <span>Average Rating</span>
          </article>
          <article>
            <strong>48h</strong>
            <span>Express Delivery</span>
          </article>
        </div>
      </section>

      <section className="collection-card-details ">
        <article className="collection-card large">
          <p>Signature Collection</p>
          <h2>Minimal forms, modern feel</h2>
        </article>
        <article className="collection-card">
          <p>Limited Drop</p>
          <h3>Urban Noir</h3>
        </article>
        <article className="collection-card">
          <p>New Season</p>
          <h3>Soft Gold</h3>
        </article>
      </section>

      <section className="products reveal">
        <div className="section-head">
          <h2>Featured Products</h2>
          <div
            className="gender-filters"
            role="tablist"
            aria-label="Filter by gender"
          >
            <button
              className={genderFilter === "all" ? "active" : ""}
              onClick={() => setGenderFilter("all")}
            >
              All
            </button>
            <button
              className={genderFilter === "men" ? "active" : ""}
              onClick={() => setGenderFilter("men")}
            >
              Men
            </button>
            <button
              className={genderFilter === "women" ? "active" : ""}
              onClick={() => setGenderFilter("women")}
            >
              Women
            </button>
          </div>
          <a href="#">View all</a>
        </div>
        <div className="product-grid">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <article className="product-card" key={product.id}>
              <div className="image-block">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <p className="tone">{product.tone}</p>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="solid-btn">Add to cart</button>
            </article>
          ))}
        </div>
        {visibleProducts < filteredProducts.length && (
          <div className="load-more-container">
            <button
              className="solid-btn load-more-btn"
              onClick={() =>
                setVisibleProducts((prev) =>
                  Math.min(prev + 20, filteredProducts.length),
                )
              }
            >
              Load More Products ({filteredProducts.length - visibleProducts}{" "}
              remaining)
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
