import Link from "next/link";

const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div className="group/button relative z-10 text-xs bg-linear-to-b rounded-2xl p-1 inline-flex from-neutral-200 to-white pointer-events-none">
      <Link
        href={href}
        className="bg-linear-to-b p-1 to-neutral-200 from-white rounded-xl shadow-[0_3px_3px_#00000040,0_1px_3px_#0000001f] cursor-pointer pointer-events-auto"
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
    <div className="px-20 flex items-center justify-center flex-col max-w-5xl mx-auto">
      <div className="space-y-1.5 xl:space-y-2 text-center">
        <h1 className="text-4xl xl:text-5xl text-neutral-900 font-semibold tracking-tight">
          Max Hart
        </h1>
        <p className="text-neutral-500 text-base lg:text-lg">
          Design Engineer based in the United Kingdom.
        </p>
      </div>
      <div className="flex w-full max-w-sm relative before:w-full before:h-px before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-neutral-200/50 before:absolute items-center justify-center gap-5 mt-4">
        <Button href="mailto:m@xhart.co.uk">Let’s Talk</Button>
      </div>
    </div>
  );
}
