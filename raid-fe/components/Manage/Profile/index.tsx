import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { UseAddPopup } from "../../../state/application/hooks";
import { PopupType } from "../../../types/PopUp";
import User from "../../../types/User";
import { signOut } from "../../../utils/session";
import CustomButton from "../../CustomButton";
import TopCard from "./TopCard";

interface Props {
  user: User;
  token: string;
}

const Profile: FC<Props> = ({ user, token }) => {
  const addPopup = UseAddPopup();
  const handleSignOut = () => {
    addPopup({
      content: {
        type: PopupType.info,
        title: "Logged out!",
        summary: "Come back soon 😢",
      },
    });
    signOut();
  };
  return (
    <Box height="100%" p={{ base: "1.2rem", sm: "2rem" }}>
      <Text fontSize="1.5rem">User Info</Text>
      <TopCard user={user} token={token} />
      <Box p={{ base: "1.2rem", sm: "2rem" }}>
        <CustomButton label="Sign Out" onClick={handleSignOut} />
      </Box>
    </Box>
  );
};

export default Profile;
