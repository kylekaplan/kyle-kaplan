import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SkillType } from "../interfaces/skill";
import { IUser } from "../interfaces/user";
import { IMediaLink } from "../interfaces/mediaLink";

export const user: IUser = {
  firstName: "Kyle",
  lastName: "Kaplan",
  title: "Full-Stack Developer",
  subtitle: "Web3 Enthusiast",
  mediaLinks: [
    {
      linktype: "linkedin",
      url: "https://www.linkedin.com/in/kylekaplan/",
    },
    {
      linktype: "github",
      url: "https://github.com/kylekaplan"
    },
    {
      linktype: "youtube",
      url: "https://www.youtube.com/channel/UCA_CofLqBOGylieTod7y06Q"
    },
    {
      linktype: "twitter",
      url: "https://twitter.com/KylesCrypto1"
    },
    {
      linktype: "good reads",
      url: "https://www.goodreads.com/kylekaplan"
    },
  ],
  skills: [
    { name: "ReactJS", skillType: SkillType.LIBRARY },
    { name: "NestJS", skillType: SkillType.FRAMEWORK },
    { name: "NextJS", skillType: SkillType.FRAMEWORK },
    { name: "GatsbyJS", skillType: SkillType.FRAMEWORK },
    { name: "TypeScript", skillType: SkillType.LANGUAGE },
    { name: "JavaScript", skillType: SkillType.LANGUAGE },
    { name: "Python", skillType: SkillType.LANGUAGE },
    { name: "HTML5", skillType: SkillType.LANGUAGE },
    { name: "CSS3", skillType: SkillType.LANGUAGE },
    { name: "Ant Design", skillType: SkillType.UI_LIBRARY },
    { name: "Chakra UI", skillType: SkillType.UI_LIBRARY },
    // { name: "Material", skillType: SkillType.UI_LIBRARY },
    { name: "PostgreSQL", skillType: SkillType.DATABASE },
    { name: "MongoDB", skillType: SkillType.DATABASE },
    { name: "Firebase", skillType: SkillType.DATABASE },
    // { name: "AWS", skillType: SkillType.DATABASE },
    { name: "IPFS", skillType: SkillType.BLOCKCHAIN },
    { name: "EthersJS", skillType: SkillType.BLOCKCHAIN },
  ],
};
