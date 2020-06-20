import React from "react";
import { ProfilePageDesktop } from "./ProfilePageDesktop";
import { ProfilePageMobile } from "./ProfilePageMobile";
import useViewport from "../../utils/useViewPort";

const ProfilePage = () => {
  const { width } = useViewport();
  const breakpoint = 766;

  return width < breakpoint ? <ProfilePageMobile /> : <ProfilePageDesktop />;
};

export default ProfilePage;
