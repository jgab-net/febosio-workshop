
type Props = {
  text: string;
};

export default function Message({ text = 'default' }: Props) {
  return (
    <div>
      {text}
    </div>
  )
}
