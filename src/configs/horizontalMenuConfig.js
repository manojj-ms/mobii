import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    id: "page2",
    title: "Page 2",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2",
  },
  {
    id: "profile",
    title: "PROFILE",
    type: "item",
    icon: <Icon.PlusCircle size={16} />,
    children: [
      {
        id: "My PROFILE",
        title: "My Profile",
        icon: <Icon.AlertCircle size={16} />,
        type: "item",
        navLink: "/profile/my-profile",
        permissions: ["admin", "editor"]
      },
      {
        id: "My shopdetails",
        title: "My Shopdetails",
        icon: <Icon.Zap size={16} />,
        type: "item",
        navLink: "/shopdetails/myshopdetails",
        permissions: ["admin", "editor"]
      },
      {
        id: "Transactions",
        title: "Transactions",
        icon: <Icon.Zap size={16} />,
        type: "item",
        navLink: "/transactions/my-transactions",
        permissions: ["admin", "editor"]
      }
    ]
  },
  {
    id: "products",
    title: "Products",
    type: "item",
    icon: <Icon.PlusCircle size={16} />,
    children: [
      {
        id: "Store Products",
        title: "Store Products",
        icon: <Icon.AlertCircle size={16} />,
        type: "item",
        navLink: "/products/my-products",
        permissions: ["admin", "editor"]
      },
      {
        id: "Live Streams",
        title: "Live Streams",
        icon: <Icon.Zap size={16} />,
        type: "item",
        navLink: "/live/livestreams",
        permissions: ["admin", "editor"]
      },
      {
        id: "Live Auctions",
        title: "Live Auctions",
        icon: <Icon.Zap size={16} />,
        type: "item",
        navLink: "/live/liveacutions",
        permissions: ["admin", "editor"]
      }
    ]
  },
  {
    id: "Orders",
    title: "Orders",
    type: "item",
    icon: <Icon.PlusCircle size={16} />,
    children: [
      {
        id: "Product Orders",
        title: "Product Orders",
        icon: <Icon.AlertCircle size={16} />,
        type: "item",
        navLink: "/product/productorders",
        permissions: ["admin", "editor"]
      },
      {
        id: "Auction Orders",
        title: "Auction Orders",
        icon: <Icon.Zap size={16} />,
        type: "item",
        navLink: "/auction/auctionorders",
        permissions: ["admin", "editor"]
      }
    ]
  }

]
export default horizontalMenuConfig
