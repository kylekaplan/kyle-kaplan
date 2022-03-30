import { useEffect, useState } from "react";
import { user } from "../data/user";
import { ISkill, SkillType } from "../interfaces/skill";

export const useSkills = () => {
  const { skills } = user;
  const [frameworks, setFrameworks] = useState<ISkill[]>([]);
  const [languages, setLanguages] = useState<ISkill[]>([]);
  const [uiLibraries, setUiLibraries] = useState<ISkill[]>([]);
  const [libraries, setLibraries] = useState<ISkill[]>([]);
  const [databases, setDatabases] = useState<ISkill[]>([]);
  const [blockchains, setBlockchains] = useState<ISkill[]>([]);

  useEffect(() => {
    if (skills) {
      setFrameworks(skills.filter((skill) => skill.skillType === SkillType.FRAMEWORK));
      setLanguages(skills.filter((skill) => skill.skillType === SkillType.LANGUAGE));
      setUiLibraries(skills.filter((skill) => skill.skillType === SkillType.UI_LIBRARY));
      setLibraries(skills.filter((skill) => skill.skillType === SkillType.LIBRARY));
      setDatabases(skills.filter((skill) => skill.skillType === SkillType.DATABASE))
      setBlockchains(skills.filter((skill) => skill.skillType === SkillType.BLOCKCHAIN))
    }
  }, [skills]);

  return {
    frameworks,
    languages,
    uiLibraries,
    libraries,
    databases,
    blockchains,
  };
};
