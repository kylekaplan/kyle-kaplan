import { PROJECT_TYPE } from "../interfaces/project";
import sl101 from "../images/projects/sl101/sl101-landing.png";
import noFloodFlorida from "../images/projects/nofloodflorida/nofloodflorida-landing.png";
import myFloodScore from "../images/projects/myfloodscore/myfloodscore-landing.png";
import compoundOrNot from "../images/projects/compoundornot/compoundornot.png";
import taxaroo from "../images/projects/taxaroo/taxaroo.png";
import drippd from "../images/projects/drippd/drippd.png";
import openWork from "../images/projects/openWork/open-work.png";

export const projects: any = [
  {
    id: "82ae8993-0ff5-4c30-8125-5aa9d8b3eca0",
    imageAlt: "Open Work",
    imageUrl: openWork,
    title: "Open Work",
    projectType: PROJECT_TYPE.PERSONAL,
    type: "React",
    url: "https://kylekaplan.github.io/open-work/",
    tags: ["React", "Chakra-ui", "EthersJS", "Solidity", "IPFS"],
  },
  {
    id: "dec702cb-4387-480d-a995-f641b8a21559",
    imageAlt: "Drippd",
    imageUrl: drippd,
    title: "Drippd",
    projectType: PROJECT_TYPE.PERSONAL,
    type: "React",
    url: "https://drippd.herokuapp.com/",
    tags: ["React", "Antd", "Firebase", "Twilio"],
  },
  {
    id: "b0c6c1cf-ef2e-402d-9932-0f8f41f2c4b5",
    imageAlt: "Open Source Project",
    imageUrl: compoundOrNot,
    title: "Compound Or Not",
    projectType: PROJECT_TYPE.OPEN_SOURCE,
    type: "React",
    url: "https://compoundornot.com/",
    tags: ["React", "NextJS", "Geist UI", "Styled Components", "Firebase"],
  },
  {
    id: "3827ab50-4caa-49eb-8b80-7c3336ac8d3d",
    imageAlt: "Taxaroo",
    imageUrl: taxaroo,
    projectType: PROJECT_TYPE.START_UP,
    tags: [
      "React",
      "TypeScript",
      "AWS",
      "PostgreSQL",
      "GraphQL",
      "NestJS",
      "Ant Design",
    ],
    title: "Taxaroo",
    type: "React",
    url: "https://www.taxaroo.com/",
  },
  {
    id: "42259e2b-d8a2-4fcb-b324-1488a187134a",
    imageUrl: sl101,
    imageAlt: "Student Life 101 Landing",
    title: "Student Life 101",
    type: "React",
    url: "https://studentlife101.com/",
    projectType: PROJECT_TYPE.PERSONAL,
    tags: [
      "React",
      "TypeScript",
      "Styled Components",
      "Firebase",
      "Ant Design",
    ],
  },
  {
    id: "bb2cb9df-f3af-4cb2-99e3-b4b6aa4290f2",
    imageAlt: "no flood florida",
    imageUrl: noFloodFlorida,
    title: "No Flood Florida",
    type: "React",
    url: "https://nofloodflorida.com/",
    tags: ["React", "Styled Components", "Firebase", "GatsbyJS"],
    projectType: PROJECT_TYPE.CLIENT,
  },
  {
    id: "1b01096a-fa81-4ff2-975c-95c2359fb5b4",
    imageAlt: "My Flood Score",
    imageUrl: myFloodScore,
    title: "My Flood Score",
    type: "React",
    url: "https://flood-score.firebaseapp.com/",
    projectType: PROJECT_TYPE.CLIENT,
    tags: ["Stripe", "React", "Styled Components", "Firebase"],
  },
];
