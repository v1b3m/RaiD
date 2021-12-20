import ManageContent from "../components/Manage";
import AuthWrapper from "../components/AuthWrapper";

export default function Manage() {
  return (
    <AuthWrapper>
      <ManageContent />
    </AuthWrapper>
  );
}
