// SkillsSelect.jsx
import { Controller } from "react-hook-form";
import Select from "react-select";

const SkillsSelect = ({ control, name, rules, errorMessage }) => {
  const skillOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "nodejs", label: "Node.js" },
    { value: "css", label: "CSS" },
    { value: "html", label: "HTML" },
  ];

  return (
    <div>
      <label className="block font-medium">Skills</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            {...field}
            isMulti
            options={skillOptions}
            className="w-full"
          />
        )}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default SkillsSelect;
