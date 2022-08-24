export const ParamLine = ({ data, device, setting }) => {
  const formattedData = data.toFixed(2);

  return (
    <span>
      {device}
      <input
        style={{ width: `${String(formattedData).length + 2}ch` }}
        type={"number"}
        value={formattedData}
        onChange={setting ? (e) => setting(Number(e.target.value)) : () => {}}
      />
    </span>
  );
};
