type ReferenceLinkProps = {
  linkText: string;
  onClickAction?: () => void;
};

export const ReferenceLink = ({ linkText, onClickAction }: ReferenceLinkProps) => {
  return (
    <span onClick={() => onClickAction && onClickAction()} className="text-sm text-center w-full cursor-pointer decoration-white underline underline-offset-2" >
      {linkText}
    </span>
  );
};
