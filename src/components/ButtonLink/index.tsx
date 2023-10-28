// STYLEs
import { ButtonLinkArea } from "./styles";

export interface IButtonLinkProps {
  label: string;
  to: string;
}

export function ButtonLink({ label, to }: IButtonLinkProps) {
  return (
    <ButtonLinkArea href={to}>
      <p>{label}</p>
    </ButtonLinkArea>
  );
}