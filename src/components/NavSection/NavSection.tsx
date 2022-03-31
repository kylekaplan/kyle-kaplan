import React from "react";
import { FC } from "react";
import { Button, VStack, Wrap } from "@chakra-ui/react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { Anchor } from "../Anchor/Anchor";
import { IUser } from "../../interfaces/user";
import CopyButtonWithTooltip from "../CopyButtonWithTooltip/CopyButtonWithTooltip";

interface LeftIcon {
  linktype: {} | null | undefined;
}
const LeftIcon = ({ linktype }: LeftIcon) => {
  if (linktype === "github") {
    return <FaGithub />;
  }
  if (linktype === "linkedin") {
    return <FaLinkedin />;
  }
  if (linktype === "youtube") {
    return <FaYoutube />;
  }
  if (linktype === "twitter") {
    return <FaTwitter />;
  }
  if (linktype === "telegram") {
    return <FaTelegramPlane />;
  }
  if (linktype === "email") {
    return <AiOutlineMail />;
  }
  return null;
}

interface NavSectionProps {
  user: IUser;
}

export const NavSection: FC<NavSectionProps> = ({ user }) => (
  <VStack spacing={{ base: 2, sm: 5 }} align="flex-start">
  <Wrap>
    <Anchor href="#projects">
      <Button borderRadius="full" size="lg" aria-label="media-link">
        projects
      </Button>
    </Anchor>
    <CopyButtonWithTooltip
      copyText="kylekaplan50@gmail.com"
      buttonProps={{
        leftIcon: <AiOutlineMail />,
        size: "lg",
        borderRadius: "full",
      }}
    />
    </Wrap>

  <Wrap>
    {user?.mediaLinks?.map((item: { url: any; linktype: {} | null | undefined; }) => (
      <Anchor href={item.url} key={item.url} target="_blank">
        <Button
          borderRadius="full"
          size="lg"
          aria-label="media-link"
          leftIcon={<LeftIcon linktype={item.linktype} />}
        >
          {item.linktype}
        </Button>
      </Anchor>
    ))}
  </Wrap>
  </VStack>
);
