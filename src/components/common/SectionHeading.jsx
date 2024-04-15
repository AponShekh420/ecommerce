const SectionHeading = ({title, desc}) => {
  return (
    <div className="mb-3">
      <p className="text-[18px] text-[#666666] font-[400]">{desc}</p>
      <h3 className="text-[28px] text-[#333333] font-[600]">{title}</h3>
    </div>
  );
}

export default SectionHeading;