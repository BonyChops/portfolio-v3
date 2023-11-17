import { SimpleIcon } from "simple-icons";
import SimpleIconComponent from "./SimpleIconComponent";
import { HeroIcon } from "@/lib/heroicon";

export default function Tag(props: {
  title: string;
  iconData?: SimpleIcon | undefined | null;
  HeroIcon?: HeroIcon;
  className?: string;
  hex?: string;
}) {
  const { title, iconData, className, HeroIcon, hex } = props;
  return (
    <a
      href="#"
      className={
        "transition-all hover:-translate-y-0.5 rounded-xl shadow-md px-2 py-1 flex bg-white dark:bg-gray-500 bg-opacity-50 dark:bg-opacity-50 " +
        className
      }
    >
      {HeroIcon && <HeroIcon className="h-6 w-6 mr-2 flex-shrink-0" />}
      {iconData && (
        <SimpleIconComponent
          size={16}
          iconData={iconData}
          className="mr-2"
          hex={hex}
        />
      )}
      {title}
    </a>
  );
}
