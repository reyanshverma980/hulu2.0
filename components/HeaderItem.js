const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="group flex flex-col w-12 sm:w-20 hover:text-white cursor-pointer items-center ">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <p className="uppercase text-sm tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
