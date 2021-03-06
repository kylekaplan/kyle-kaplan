import React, { FC } from "react";
import { Button, Tooltip, VStack, Wrap } from "@chakra-ui/react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaGoodreadsG } from "@react-icons/all-files/fa/FaGoodreadsG";
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
  if (linktype === "good reads") {
    return <FaGoodreadsG />;
  }
  if (linktype === "email") {
    return <AiOutlineMail />;
  }
  return null;
}

interface NavSectionProps {
  user: IUser;
}

export const NavSection: FC<NavSectionProps> = ({ user }) => {
  return (
    <VStack spacing={{ base: 2, sm: 5 }} align="flex-start">
    <Wrap>
      <Anchor href="#projects">
        <Button borderRadius="full" size="lg" aria-label="media-link">
          Projects
        </Button>
      </Anchor>
      <Anchor href={`${typeof window !== 'undefined' ? window.location.origin : 'https://kylekaplan.io'}/kyle-kaplan-resume.pdf`} key="/kyle-kaplan-resume.pdf" target="_blank">
        <Button
          borderRadius="full"
          size="lg"
          aria-label="media-link"
          // leftIcon={<FaRegFilePdf />}
        >
          Resume
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
      <Anchor href="https://t.me/kylekaplan_eth" key="https://t.me/kylekaplan_eth" target="_blank">
        <Button
          borderRadius="full"
          size="lg"
          aria-label="media-link"
          leftIcon={<FaTelegramPlane />}
        >
          telegram
        </Button>
      </Anchor>
      </Wrap>

    <Wrap>
      {user?.mediaLinks?.map((item: { url: any; linktype: {} | null | undefined; tooltip?: string | undefined }) => (
        <Anchor href={item.url} key={item.url} target="_blank">
          <Tooltip label={item.tooltip} placement="top">
            <Button
              borderRadius="full"
              size="lg"
              aria-label="media-link"
              leftIcon={<LeftIcon linktype={item.linktype} />}
            >
              {item.linktype}
            </Button>
          </Tooltip>
        </Anchor>
      ))}
    </Wrap>
    </VStack>
  );
}
