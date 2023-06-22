import SimpleIconComponent from "./SimpleIconComponent";

export default function Tag(props: {
  title: string;
  iconData?: /*simpleicon*/ any;
  className?: string;
}) {
  const { title, iconData, className } = props;
  return (
    <a
      href="#"
      className={
        "transition-all hover:-translate-y-0.5 rounded-xl shadow-md px-2 py-1 flex bg-white dark:bg-gray-500 bg-opacity-50 dark:bg-opacity-50 " +
        className
      }
    >
      {iconData && (
        <SimpleIconComponent size={16} iconData={iconData} className="mr-2" />
      )}
      {title}
    </a>
  );
}
