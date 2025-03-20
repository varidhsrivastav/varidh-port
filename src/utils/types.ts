export interface Project {
  id: number;
  title: string;
  features: boolean;
  subtitle: string;
  description: string;
  coverImage: string;
  functionality: string[];
  projectType: string[];
  techUsed: string[];
  links: {
    live: string;
    repo: string;
  };
  images: string[];
  // startDate: string;
  // endDate: string;
  // stacktype: string;
  // problemSolved: string;
  // problem: string;
  // caseStudies: string;
  // color: string;
  // textcolor: string;
}
