import { ConnectButton } from "@rainbow-me/rainbowkit";
import MintForm from "./utils/Form/MintForm";

export default function App() {
  return (
    <div>
      <ConnectButton chainStatus={"icon"} />
      <MintForm />
    </div>
  );
}
