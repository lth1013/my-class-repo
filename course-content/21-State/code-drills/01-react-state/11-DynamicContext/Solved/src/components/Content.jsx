import { useContext } from "react";
import Alert from "./Alert";
import AlertContext from "../utils/AlertContext";

const Content = () => {
  // Use the useContext hook to access the alert object from AlertContext
  const alert = useContext(AlertContext);
  return (
    <div className="text-center">
       {/* Button to trigger a success alert */}
      <button onClick={() => alert.onClick("success", true)} className="btn btn-success mx-3">
        Success
      </button>
      {/* Button to trigger a warning alert */}
      <button onClick={() => alert.onClick("warning", true)} className="btn btn-warning mx-3">
        Warning
      </button>
      {/* Button to trigger a danger alert */}
      <button onClick={() => alert.onClick("danger", true)} className="btn btn-danger mx-3">
        Danger
      </button>
      <Alert style={{ opacity: alert.display ? 1 : 0 }} type={alert.theme}>
        You pressed a {alert.theme} button!
      </Alert>
    </div>
  );
};

export default Content;
