type InputPropsType = {
  Icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
  label: string;
  placeholder: string;
  input?: string;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  type: React.HTMLInputTypeAttribute;
  name: string;
  onIconClick?: () => void;
  autoFocus?: boolean;
  refInput?: React.RefObject<HTMLInputElement>;
};

const Input = (props: InputPropsType) => {

  const {
    Icon,
    label,
    placeholder,
    input,
    setInput,
    type,
    name,
    onIconClick,
    refInput,
  } = props;

  return (
    <div>
      <label
        htmlFor={label}
        className="text-sm font-medium text-[#C5C7CA] flex justify-between"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-sm shadow-sm border-[1.5px] border-[#35373B]">
        <input
          ref={refInput}
          type={type}
          name={name}
          value={input}
          onChange={(e) => setInput && setInput(e.target.value)}
          className="block text-left w-full pr-10 px-2 py-2 text-slate-50 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm bg-transparent placeholder-[#7F8084]"
          placeholder={placeholder}
        />
        {Icon && (
          <div
            onClick={() => onIconClick && onIconClick()}
            className="absolute z-20 cursor-pointer inset-y-0 right-0 pr-3 flex items-center"
          >
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Input