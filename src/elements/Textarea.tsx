import { HTMLInputTypeAttribute } from 'react';

type TextareaProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  errorText?: string;
};
const Textarea: React.FC<TextareaProps> = ({ required = false, label, errorText }) => {
  return (
    <div className="relative h-20 min-w-[200px] mb-10">
      <textarea
        required={required}
        placeholder={label}
        className="peer h-full w-full border-b border-white bg-transparent pt-2 pb-1.5 pl-4 outline outline-0 transition-all focus:border-emerald-300 text-white placeholder:text-gray-500 focus:outline-0 disabled:border-gray-500 invalid:[&:not(:placeholder-shown)]:border-rose-400"
      />
      <span className="mt-2 after:content[' '] text-gray-400 pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none transition-all after:absolute after:-bottom-[2px] after:block after:w-full after:scale-x-0 after:border-b after:border-emerald-300  after:transition-transform after:duration-300 peer-placeholder-shown:text-gray-500 peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-emerald-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500" />
      {errorText && (
        <p className="mt-1 invisible text-rose-400 text-[12px] italic peer-invalid:visible">
          {errorText}
        </p>
      )}
    </div>
  );
};
export default Textarea;
