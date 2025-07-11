import React from "react";
import About from "@/pages/About";
import AdminLogin from "@/pages/AdminLogin";
import AdminRegister from "@/pages/AdminRegister";
import AllBlogs from "@/pages/AllBlogs";
import AllCurators from "@/pages/AllCurators";
import Blogs from "@/pages/Blog";
import BlogPage from "@/pages/BlogPage";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import PaymentForm from "@/pages/CheckoutIPG";
import Contact from "@/pages/Contact";
import CuratorPage from "@/pages/CuratorPage";
import Error404 from "@/pages/Error404";
import Faq from "@/pages/Faq";
import ForgotPassword from "@/pages/ForgotPassword";
import Home from "@/pages/Home";
import Login from "@/pages/Login.save";
import CreateVenue from "@/pages/CreateVenue";
// import Login from "@/pages/Login";
import MyFeed from "@/pages/MyFeed";
import PrivacyPol from "@/pages/PrivacyPol";
import ProductPage from "@/pages/ProductPage";
import Profile from "@/pages/Profile";
import Register from "@/pages/RegistrationForm";
import SearchPage from "@/pages/Search";
import Shop from "@/pages/Shop";
import SponserPage from "@/pages/SponserPage";
import SuccessTransactionPage from "@/pages/SuccessTransactionPage";
import AddProduct from "@/pages/AddProduct";
import Dashboard from "@/pages/Vendordashboard/Dashboard";
import OrderList from "@/pages/Vendordashboard/OrderList";
import Payments from "@/pages/Vendordashboard/Payments";
import ProductList from "@/pages/Vendordashboard/ProductList";
import Reviews from "@/pages/Vendordashboard/Reviews";
import Settings from "@/pages/Settings";
import VendorLogin from "@/pages/VendorLogin";
import VendorRegister from "@/pages/VendorRegister";
import VenueOwnerPage from "@/pages/VenueOwnerPage";
import WishList from "@/pages/Wishlist";
import CrowdfundingDetail from "@/pages/CrowdfundingDetail";
import CreateEvent from "@/pages/CreateEvent";
import SponsorRegistration from "@/pages/SponsorRegistration";
import VenueOwnerRegistration from "@/pages/VenueOwnerRegistration";
import CuratorRegistration from "@/pages/CuratorRegistration";
import GuestRegistration from "@/pages/GuestRegistration";
import VendorRegistration from "@/pages/VendorRegistration";
import RoleSelectionModal from "@/components/RoleSelectionModal";
import RegistrationForm from "@/pages/RegistrationForm";
import AllSponsers from "@/pages/AllSponsers";
import EventVenuePage from "@/pages/EventVenuePage";
import UserProfile from "@/pages/UserProfile";
import AllCrowdfunding from "@/components/AllCrowdfunding";
import AllVenueOwners from "@/pages/AllVenueOwners";
import CreateCampaign from "@/pages/createCampaign";
import Suggestions from "@/pages/Suggestions";
import CreateEventEdit from "@/pages/CreateEventEdit";

export const userRoutes = [
  {
    name: "home",
    title: "Home",
    component: <Home />,
    path: "/",
  },
  {
    name: "Event page",
    title: "Event Page",
    component: <ProductPage />,
    path: "/event/:id",
  },
  {
    name: "Curator page",
    title: "Curator Page",
    component: <CuratorPage />,
    path: "/curator/:id",
  },
  {
    name: "All Curators",
    title: "Curator Page",
    component: <AllCurators />,
    path: "/curator/all",
  },
  {
    name: "Blog page",
    title: "Blog Page",
    component: <BlogPage />,
    path: "/blog/:id",
  },
  {
    name: "All Sponsers",
    title: "Sponsers Page",
    component: <AllSponsers />,
    path: "/sponser/all",
  },
  {
    name: "Sponser page",
    title: "Sponsers Page",
    component: <SponserPage />,
    path: "/sponsor/:id",
  },
  {
    name: "All Venue Owners",
    title: "Venue Owners Page",
    component: <AllCurators />,
    path: "/sponser/all",
  },
  {
    name: "All Venue Owners",
    title: "Venue Owners Page",
    component: <AllVenueOwners />,
    path: "/venue/all",
  },
  {
    name: "Venue Owners page",
    title: "Venue Owners Page",
    component: <VenueOwnerPage />,
    path: "/venue/all",
  },
  {
    name: "Event Venue page",
    title: "Event Venue Page",
    component: <EventVenuePage />,
    path: "/event-venue/:id",
  },
  {
    name: "Create Event page",
    title: "Create Event page",
    component: <CreateEvent />,
    path: "/create-event",
  },
  {
    name: "Edit Event page",
    title: "Edit Event page",
    component: <CreateEventEdit/>,
    path: "/create-event/:id",
  },
  {
    name: "Create Event page",
    title: "Create Event page",
    component: <CreateVenue />,
    path: "/register-venue",
  },
  {
    name: "Create Event page",
    title: "Create Event page",
    component: <CreateCampaign />,
    path: "/raise-fund",
  },
  {
    name: "All Blogs",
    title: "All Blogs",
    component: <AllBlogs />,
    path: "/blogs/all",
  },
  {
    name: "My Feed",
    title: "My Feed",
    component: <MyFeed />,
    path: "/feed",
  },
  {
    name: "about",
    title: "About",
    component: <About />,
    path: "/about",
  },
  {
    name: "cart",
    title: "Cart",
    component: <Cart />,
    path: "/cart",
  },
  {
    name: "contact",
    title: "Contact",
    component: <Contact />,
    path: "/contact",
  },
  {
    name: "faqs",
    title: "Faqs",
    component: <Faq />,
    path: "/faqs",
  },
  {
    name: "profile",
    title: "Profile",
    component: <UserProfile />,
    path: "/profile",
  },
  {
    name: "suggestions",
    title: "Suggestions",
    component: <Suggestions />,
    path: "/suggestions",
  },
  {
    name: "checkout",
    title: "Checkout",
    component: <Checkout />,
    path: "/checkout",
  },
  {
    name: "checkoutipg",
    title: "CheckoutIPG",
    component: <PaymentForm />,
    path: "/checkoutipg",
  },
  {
    name: "successfull transaction",
    title: "Successfull Transaction",
    path: "/successTransaction",
  },
  {
    name: "wishlist",
    title: "Wishlist",
    component: <WishList />,
    path: "/wishlist",
  },
  {
    name: "search",
    title: "Search",
    component: <SearchPage />,
    path: "/search",
  },
  {
    name: "shop",
    title: "Shop",
    component: <Shop />,
    path: "/events/:category/:subcategory",
  },
  {
    name: "register",
    title: "Register",
    component: <RegistrationForm />,
    path: "/register",
  },
  {
    name: "login",
    title: "Login",
    component: <Login />,
    path: "/login",
  },
  {
    name: "forgot-passowrd",
    title: "Forgot Password",
    component: <ForgotPassword />,
    path: "/forgot-password",
  },
  {
    name: "Vendor Registeration",
    title: "Vendor Registration",
    component: <VendorRegister />,
    path: "/vendor-register",
  },
  {
    name: "Vendor Login",
    title: "Vendor Login",
    component: <VendorLogin />,
    path: "/vendor-login",
  },
  {
    name: "Admin Registeration",
    title: "Admin Registration",
    component: <AdminRegister />,
    path: "/admin-register",
  },
  {
    name: "Admin Login",
    title: "Admin Login",
    component: <AdminLogin />,
    path: "/admin-login",
  },
  {
    name: "Error 404",
    title: "Error 404",
    component: <Error404 />,
    path: "/*",
  },
  {
    name: "privacy-policy",
    title: "privacy-policy",
    component: <PrivacyPol />,
    path: "/privacy-policy",
  },
  {
    name: "All Crowdfunding",
    title: "All Crowdfunding",
    component: <AllCrowdfunding />,
    path: "/crowdfunding/all",
  },
  {
    name: "crowdfunding-detail",
    title: "Crowdfunding Detail",
    component: <CrowdfundingDetail />,
    path: "/crowdfunding/:id",
  },
  {
    name: "sponsor-register",
    title: "Sponsor Registration",
    component: <SponsorRegistration />,
    path: "/register/sponsor",
  },
  {
    name: "venue-owner-register",
    title: "Venue Owner Registration",
    component: <VenueOwnerRegistration />,
    path: "/register/venue-owner",
  },
  {
    name: "curator-register",
    title: "Curator Registration",
    component: <CuratorRegistration />,
    path: "/register/curator",
  },
  {
    name: "guest-register",
    title: "Guest Registration",
    component: <GuestRegistration />,
    path: "/register/guest",
  },
  {
    name: "vendor-register",
    title: "Vendor Registration",
    component: <VendorRegistration />,
    path: "/register/vendor",
  },
  {
    name: "register-role-select",
    title: "Choose Role",
    component: <RoleSelectionModal />,
    path: "/register-role",
  },
  // {
  //   name: "user-profile",
  //   title: "User Profile",
  //   component: <UserProfile />,
  //   path: "/user/:id",
  // },
  {
    name: "settings",
    title: "Settings",
    component: <Settings />,
    path: "/settings",
  },
  {
    name: "add-product",
    title: "Add Product",
    component: <AddProduct />,
    path: "/add-product",
  },
];

export const vendorRoutes = [
  {
    name: "dashboard",
    title: "Dashboard",
    component: <Dashboard />,
    path: "/dashboard",
  },
  {
    name: "reviews",
    title: "Reviews",
    component: <Reviews />,
    path: "/dashboard/reviews",
  },
  {
    name: "addProduct",
    title: "Add Product",
    component: <AddProduct />,
    path: "/dashboard/add-product/*",
  },
  {
    name: "orderList",
    title: "Order List",
    component: <OrderList />,
    path: "/dashboard/orders",
  },
  {
    name: "productList",
    title: "Product List",
    component: <ProductList />,
    path: "/dashboard/products",
  },
  {
    name: "payments",
    title: "Payments",
    component: <Payments />,
    path: "/dashboard/payments",
  },
  {
    name: "settings",
    title: "Settings",
    component: <Settings />,
    path: "/dashboard/settings",
  },
];
