import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button className="btn btn-primary" disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="loading loading-spinner"></span>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
