import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiGraphFill,
} from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";
import { AiTwotoneExperiment } from "react-icons/ai";
import { FaIndustry } from "react-icons/fa";

import {
  SiAmazonwebservices,
  SiAlwaysdata,
  SiDatabricks,
  SiJavascript,
  SiFigma,
  SiGit,
  SiMysql,
  SiNextdotjs,
  SiPlotly,
  SiPython,
  SiPytorch,
  SiR,
  SiScikitlearn,
  SiSnowflake,
  SiStreamlit,
  SiSupabase,
  SiTensorflow,
  SiWolframmathematica,
  SiInductiveautomation,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  python: SiPython,
  sql: SiMysql,
  r: SiR,
  matlab: SiWolframmathematica,
  machineLearning: SiScikitlearn,
  dataScience: SiDatabricks,
  predictiveModeling: SiAlwaysdata,
  statisticalAnalysis: BsGraphUp,
  multivariateAnalysis: PiGraphFill,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  streamlit: SiStreamlit,
  dataViz: SiPlotly,
  aws: SiAmazonwebservices,
  git: SiGit,
  snowflake: SiSnowflake,
  aspenPlus: FaIndustry,
  superProDesigner: SiInductiveautomation,
  experimentalDesign: AiTwotoneExperiment,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
