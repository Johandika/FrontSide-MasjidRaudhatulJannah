const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 transition w-full  flex gap-3 justify-center
      ${outline ? "bg-white" : "bg-greenBackground"}
      ${outline ? "border-greenBackground" : "border-greenBackground"}
      ${outline ? "text-greenText" : "text-white"}
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-[2px]"}
      `}>
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
