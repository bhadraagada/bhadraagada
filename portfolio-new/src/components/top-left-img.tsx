import Image from "next/image";

export const TopLeftImage = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50 pointer-events-none select-none">
      <Image
        src="/top-left-img.png"
        alt="top-left-img"
        width={400}
        height={400}
      />
    </div>
  );
};
