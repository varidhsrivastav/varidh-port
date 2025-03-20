import Image from "next/image";
// @ts-ignore
export default function TechUsed({ technologies }) {
  return (
    // @ts-ignore
    <div className="grid grid-cols-3 md:grid-cols-9 gap-4 justify-start items-center">
      {/* // @ts-ignore */}
      {technologies.map((tech, index) => (
        <div
          key={index}
          className=" relative aspect-square backdrop-blur-[25px]  overflow-hidden flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105 rounded-[4px] border border-[#1B3B57] bg-[rgba(42,65,85,0.20)]"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src={tech}
              alt={tech.name}
              width={64}
              height={64}
              className="w-full h-full"
            />
            {/* {tech.name} */}
          </div>
        </div>
      ))}
    </div>
  );
}
