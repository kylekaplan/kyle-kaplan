export interface ISkill {
  name: string;
  skillType?:
    | SkillType.DATABASE
    | SkillType.FRAMEWORK
    | SkillType.LANGUAGE
    | SkillType.LIBRARY
    | SkillType.UI_LIBRARY
    | SkillType.BLOCKCHAIN;
}

export enum SkillType {
  DATABASE,
  FRAMEWORK,
  LANGUAGE,
  LIBRARY,
  UI_LIBRARY,
  BLOCKCHAIN,
}
