import { useRecoilValue } from "recoil";
import { lengthState } from "../Selectors/name";

export default function LengthComponent() {
  const length = useRecoilValue(lengthState);

  return <h3 className="length">{length}</h3>;
}
