import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
import Accountformtext from "./pages/Accountformtext";
import ImageGridTexts from "./pages/ImageGridTexts";
import LayoutWithSearch from "./layout/layoutwithsearch";
import FormLayout from "./layout/formlayout";
import LayoutWitoutFooter from "./layout/layoutwithoutfooter";
import Listedproperties from "./pages/listedproperties";
import AvailableListing from "./pages/availableListing";
import Profile from "./pages/Profile/Profile";
import MapPage from "./pages/mappage";
import Mapform from "./components/mapform";
import Propertydetails from "./pages/propertydetails";
import LayoutWithoutCovid from "./layout/layoutwithoutcovid";
import NotificationsPage from "./pages/notificationspage";
import Login from "./components/LoginPage/Login";
import CreateAccountForm from "./components/CreateAccountPage/CreateAccountForm";
import SelectForm from "./components/FormPropertyPages/SelectPropertyForm";
import ListingDetails from "./components/ListingFormDetail/ListingDetails";
import Shortstay from "./pages/shortstay";
import Propertydetailsowner from "./pages/propertydetailsowner";
import Model3d from "./pages/model3d";
import ListingType from "./components/listingtype";
import ListingTypeDetails from "./components/listingdetails";
import LeaseType from "./components/leasetype";
import ImageUploader from "./components/ImageUploaderPage/ImageUploader";
import VerifyPage from "./components/VerifyPage/VerifyPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
import PropertyDescription from "./components/propertydescription";
import ImageGrid from "./components/ImageGrid";
import TalkNumbers from "./components/talknumbers";
import Term from "./pages/TermsAndCondition/Term";

import Notificationtext from "./pages/Notificationtext";
import PaymentBreak from "./pages/PaymentBreak";
import LayoutForNotification from "./layout/layoutfornotification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/createaccount",
    element: <CreateAccountForm />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/verifyphone",
    element: <VerifyPage />,
  },
  {
    path: "/base",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "accountform",
        element: <Accountformtext />,
        // not used yet
      },
      {
        path: "imagegrid",
        element: <ImageGridTexts />,
        // not used yet
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "terms",
        element: <Term />,
      },
    ],
  },
  {
    path: "/searchbar",
    element: (
      <LayoutWithSearch>
        <Outlet />
      </LayoutWithSearch>
    ),
    children: [
      {
        path: "aboutproperty",
        element: <SelectForm />,
      },
      {
        path: "propertydescription",
        element: <PropertyDescription />,
      },
      {
        path: "listdetailg 1",
        element: <ListingDetails />,
      },
      {
        path: "availablelisting",
        element: <AvailableListing />,
      },
      {
        path: "shortstay",
        element: <Shortstay />,
      },
      {
        path: "availablelistingmap",
        element: <MapPage />,
      },
    ],
  },
  {
    path: "/listedproperties",
    element: (
      <LayoutWitoutFooter>
        <Outlet />
      </LayoutWitoutFooter>
    ),
    children: [
      {
        index: true,
        element: <Listedproperties />,
      },
    ],
  },
  {
    path: "/form",
    element: (
      <FormLayout>
        <Outlet />
      </FormLayout>
    ),
    children: [
      {
        index: true,
        element: <Mapform />,
      },
      {
        path: "listingtype",
        element: <ListingType />,
      },
      {
        path: "listingtypedetails",
        element: <ListingTypeDetails />,
      },
      {
        path: "leasetype",
        element: <LeaseType />,
      },
      {
        path: "uploadimages",
        element: <ImageUploader />,
      },
      {
        path: "previewimages",
        element: <ImageGrid />,
      },
      {
        path: "price",
        element: <TalkNumbers />,
      },
      {
        path: "paymentform",
        element: <PaymentForm />,
      },
      {
        path: "paymentmade",
        element: <ThankYouPage />,
      },
      {
        path: "paymentbreak",
        element: <PaymentBreak />,
      },
    ],
  },
  {
    path: "/propertydetails",
    element: (
      <LayoutWithoutCovid>
        <Outlet />
      </LayoutWithoutCovid>
    ),
    children: [
      {
        index: true,
        element: <Propertydetails />,
      },
      {
        path: "owner",
        element: <Propertydetailsowner />,
      },
      {
        path: "model",
        element: <Model3d />,
      },
    ],
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
  },
  {
    path: "/notificationlist",
    element: <LayoutForNotification children={<Outlet />} />,
    children: [
      {
        index: true,
        element: <Notificationtext />,
      },
    ],
  },
]);
export default router;
