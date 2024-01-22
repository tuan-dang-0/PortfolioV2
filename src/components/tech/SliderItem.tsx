interface Props {
  icon: JSX.Element;
  text: string;
}

export function SliderItem({ icon, text }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {icon}
      <p>{text}</p>
    </div>
  );
}
