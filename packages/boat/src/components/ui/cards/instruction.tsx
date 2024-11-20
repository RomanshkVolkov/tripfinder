import type { Instruction } from '@/types';

export default function InstructionCard({
  icon,
  title,
  description,
}: Instruction) {
  return (
    <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 4xl:p-12">
      <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 4xl:h-[110px] 4xl:w-[70px]">
        {icon}
      </div>
      <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 4xl:pt-9">
        {title}
      </h4>
      <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 4xl:text-base 4xl:leading-7">
        {description}
      </p>
    </div>
  );
}
