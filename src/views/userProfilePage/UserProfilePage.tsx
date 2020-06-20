import React from "react";
import { ProfilePageDesktop } from "./UserProfilePageDesktop";
import { ProfilePageMobile } from "./UserProfilePageMobile";
import useViewport from "../../utils/useViewPort";

const ProfilePage = () => {
  const { width } = useViewport();
  const breakpoint = 766;

  return width < breakpoint ? <ProfilePageMobile /> : <ProfilePageDesktop />;
};

export default ProfilePage;
