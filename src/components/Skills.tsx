import Image from "next/image";
export default function TechGrid() {
  const technologies = [
    {
      name: "Figma",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742234290/logos_typescript-icon_jgwkp1.png",
    },
    {
      name: "VS Code",
      image:
        "https://icongr.am/devicon/express-original.svg?size=148&color=currentColor",
    },
    {
      name: "JavaScript",
      image:
        "https://icongr.am/devicon/docker-original.svg?size=148&color=currentColor",
    },
    {
      name: "HTML5",
      image:
        "https://icongr.am/devicon/javascript-original.svg?size=148&color=currentColor",
    },
    {
      name: "CSS3",
      image:
        "https://icongr.am/devicon/css3-original.svg?size=148&color=currentColor",
    },
    {
      name: "Sass",
      image:
        "https://icongr.am/devicon/sass-original.svg?size=148&color=currentColor",
    },
    {
      name: "html",
      image:
        "https://icongr.am/devicon/html5-original.svg?size=148&color=currentColor",
    },
    {
      name: "SQL",
      image:
        "https://icongr.am/devicon/mysql-original-wordmark.svg?size=148&color=currentColor",
    },
    {
      name: "npm",
      image:
        "https://icongr.am/devicon/npm-original-wordmark.svg?size=148&color=currentColor",
    },
    {
      name: "Python",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742278220/vscode-icons_file-type-python_fwgvel.png",
    },
    {
      name: "Redis",
      image:
        "https://icongr.am/devicon/redis-original.svg?size=148&color=currentColor",
    },
    {
      name: "Prisma",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742279467/idMpcRsV8E_gxq86p.png",
    },
    {
      name: "PostgreSQL",
      image:
        "https://icongr.am/devicon/postgresql-original.svg?size=148&color=currentColor",
    },
    {
      name: "C",
      image:
        "https://icongr.am/devicon/c-original.svg?size=148&color=currentColor",
    },
    {
      name: "jira",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742278219/devicon_jira_rtg441.png",
    },
    {
      name: "Cpp",
      image:
        "https://icongr.am/devicon/cplusplus-plain.svg?size=148&color=currentColor",
    },
    {
      name: "Angular",
      image:
        "https://icongr.am/devicon/angularjs-original.svg?size=148&color=currentColor",
    },
    {
      name: "Java",
      image:
        "https://icongr.am/devicon/java-original.svg?size=148&color=currentColor",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742278220/devicon_tailwindcss_vrqvea.png",
    },
    {
      name: "Node.js",
      image:
        "https://icongr.am/devicon/nodejs-original.svg?size=148&color=currentColor",
    },
    {
      name: "Git",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742278219/pajamas_github_cjdmja.png",
    },
    {
      name: "Nextjs",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742279204/next_cfapif.png",
    },
    {
      name: "GitHub",
      image:
        "https://icongr.am/devicon/git-original.svg?size=148&color=currentColor",
    },
    {
      name: "debian",
      image:
        "https://icongr.am/devicon/debian-original-wordmark.svg?size=148&color=currentColor",
    },
    {
      name: "React",
      image:
        "https://icongr.am/devicon/react-original.svg?size=148&color=currentColor",
    },
    {
      name: "MongoDB",
      image:
        "https://icongr.am/devicon/mongodb-original.svg?size=148&color=currentColor",
    },
    {
      name: "Django",
      image:
        "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742278219/simple-icons_django_lfnlp5.png",
    },
  ];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="relative aspect-square backdrop-blur-[25px] overflow-hidden flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105 rounded-[4px] border border-[#1B3B57] bg-[rgba(42,65,85,0.20)]"
        >
          <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex items-center justify-center">
            <Image
              src={tech.image}
              alt={tech.name}
              width={64}
              height={64}
              className="w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
