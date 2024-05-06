function OverallError({ message = "", className = "", ...restProps }) {
  return (
    <div
      className={`border-b-2 border-slate-200 bg-red-500 rounded-md ${
        className ? className : ""
      }`}
      {...restProps}
    >
      {typeof message === "string" ? (
        <p className={`text-white p-4`}>{message}</p>
      ) : (
        message.map((msg, idx) => (
          <div key={idx} className="flex flex-col">
            <p className={`text-white m-2`}>{msg}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default OverallError;
