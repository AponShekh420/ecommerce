const Container = ({children, extraCss}) => {
  return (
    <div className={`w-container max-w-[1240px] m-auto ${extraCss}`}>
      {children}
    </div>
  );
}

export default Container;