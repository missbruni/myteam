import { HTMLInputTypeAttribute } from 'react';

type TextfieldProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  errorText?: string;
};
const Textfield: React.FC<TextfieldProps> = ({ required, label, type, errorText }) => {
  return (
    <div className="relative h-16 min-w-[200px] mb-8">
      <input
        type={type}
        placeholder={label}
        required={required}
        className="peer h-full w-full border-transparent border-b border-white bg-transparent pt-2 pb-1.5 pl-4 outline outline-0 transition-all focus:border-emerald-300 text-white placeholder:text-gray-500 focus:outline-0 disabled:border-gray-500 invalid:[&:not(:placeholder-shown)]:border-[#f67e7e]"
      />
      <span
        className="mt-2 after:content[' '] text-gray-400 pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none transition-all after:absolute after:-bottom-[2px] after:block after:w-full after:scale-x-0 after:border-b after:border-emerald-300  after:transition-transform after:duration-300 peer-placeholder-shown:text-gray-500 peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-emerald-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500
  after:peer-[:not(:placeholder-shown):invalid]:border-[#f67e7e]"
      />
      {errorText && (
        <p className="mt-1 invisible  text-[#f67e7e] text-[12px] italic peer-[:not(:placeholder-shown):invalid]:visible">
          Please provide a valid email address.
        </p>
      )}
    </div>
  );
};
export default Textfield;
