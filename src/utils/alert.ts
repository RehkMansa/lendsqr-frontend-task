import { toast } from "react-hot-toast";

const Alert = (message: string, type: "success" | "error" | "loading") =>
    toast[type](message);

export default Alert;
