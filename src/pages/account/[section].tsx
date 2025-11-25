import AccountLayout from "@/components/AccountLayout";
import Addresses from "@/components/Addresses";
import MyOrders from "@/components/MyOrders";
import MyProfile from "@/components/MyProfile";
import Notifications from "@/components/Notifications";
import Wishlist from "@/components/Wishlist";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

const AccountContent = () => {
  const sectionMap: Record<string, ReactElement> = {
    account: <MyProfile />,
    myprofile: <MyProfile />,
    myorders: <MyOrders />,
    addresses: <Addresses />,
    wishlist: <Wishlist />,
    notifications: <Notifications />,
  };

  const router = useRouter();
  const { section } = router.query;
  

  const Content =
    section && typeof section === "string" && sectionMap[section] ? (
      sectionMap[section]
    ) : (
      <MyProfile />
    );

  return <AccountLayout>{Content}</AccountLayout>;

};

export default AccountContent;
