import { toast } from "react-hot-toast";

export const InfoToast = (message: string) => {
    toast(message, {
        style: {
            background: "#5bc0de",
            color: "#fff",
        },
    });
}


export const SuccessToast = (message: string) => {
    toast.success(message, {
        style: {
            background: "#5cb85c",
            color: "#fff",
        },
    });
}

export const ErrorToast = (message: string) => {
    toast.error(message, {
        style: {
            background: "#d9534f",
            color: "#fff",
        },
    });
}
