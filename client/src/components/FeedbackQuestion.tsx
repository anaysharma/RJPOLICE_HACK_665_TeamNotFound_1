interface feedbackQuestionProps {
  srno: number;
  question: string;
  option: string[];
}

export default function FeedbackQuestion({
  srno,
  question,
  option,
}: feedbackQuestionProps): JSX.Element {
  const queId = question.split(" ").join("_");
  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <fieldset id={queId} className="flex flex-col">
        <legend className="flex w-full items-start border-b bg-slate-50 px-4 py-3 font-bold md:items-center">
          <span className="mr-2 text-lg text-sky-700">{srno}.</span>
          {question}
        </legend>
        <div className="grid p-4">
          {option.map((el, idx) => (
            <label
              key={`lksdjlkg${idx}`}
              htmlFor={el}
              className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-slate-50"
            >
              <input
                className="h-5 w-5 accent-sky-600"
                type="radio"
                value={el}
                name={queId}
                id={el}
                defaultChecked={idx ? false : true}
              />
              <span>{el}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
