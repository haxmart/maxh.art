import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Button = ({
  className,
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div
      className={cn(
        "group/button relative z-10 text-sm bg-linear-to-b rounded-2xl p-1 inline-flex from-neutral-200 to-white pointer-events-none",
        className
      )}
    >
      <Link
        href={href}
        className="bg-linear-to-b p-1 to-neutral-200 from-white rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.4)] cursor-pointer pointer-events-auto"
      >
        <div className="bg-linear-to-t rounded-lg from-white to-neutral-100 transition-colors group-hover/button:to-neutral-200">
          <div className="py-2 px-4 tracking-tight font-semibold">
            {children}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    // <div className="px-20 flex flex-col max-w-5xl mx-auto">
    //   <div className="space-y-1.5 xl:space-y-2 text-center">
    //     <h1 className="text-4xl xl:text-5xl text-neutral-900 font-semibold tracking-tight">
    //       Max Hart
    //     </h1>
    //     <p className="text-neutral-500 text-base lg:text-lg">
    //       Design Engineer based in the United Kingdom.
    //     </p>
    //   </div>
    //   <div className="flex w-full max-w-sm relative before:w-full before:h-px before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-neutral-200/50 before:absolute items-center justify-center gap-5 mt-4">
    //     <Button href="mailto:m@xhart.co.uk">Let’s Talk</Button>
    //   </div>
    // </div>
    <div className="flex flex-col w-full items-center justify-center">
      <div className="grow flex w-full basis-1/2 bg-neutral-200">
        <div className="flex items-end py-14 justify-center bg-white rounded-b-4xl w-full grow">
          <div className="flex flex-col gap-y-1.5 xl:space-y-2 text-center">
            <Image
              src="/pfp.webp"
              alt="Max Hart"
              width={100}
              height={100}
              className="rounded-full mb-5 mx-auto size-14 border border-neutral-300"
            />
            <h1 className="text-4xl xl:text-5xl text-neutral-900 font-semibold tracking-tight">
              Max Hart
            </h1>
            <p className="text-neutral-500 max-w-xs md:max-w-none text-balance text-base lg:text-lg">
              Design Engineer based in the United Kingdom.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-neutral-200 items-center justify-center h-px">
        <Button href="mailto:m@xhart.co.uk">Let’s Talk</Button>
      </div>
      <div className="grow flex w-full bg-neutral-200 basis-1/2">
        <div className="grow bg-white pb-3 flex items-end justify-center rounded-t-4xl">
          <span className="text-xs tracking-tight text-neutral-300">
            &copy; 2025 Max Hart
          </span>
        </div>
      </div>
    </div>
  );
}
