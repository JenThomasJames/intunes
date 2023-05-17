import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import Button from "./Button";

const Toast = ({ variant = "error", title, children, updateError }) => {
  const [showToast, setShowToast] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      updateError({
        isError: false,
        error: null,
      });
      setShowToast(false);
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, [updateError]);
  const closeHandler = () => {
    updateError({
      isError: false,
      error: null,
    });
    setShowToast(false);
  };
  if (showToast) {
    if (variant === "error")
      return (
        <div className="flex items-center min-w-max justify-center gap-2 animate-translate-up bg-red-200 py-2 px-3 rounded fixed bottom-3 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col gap-2">
            <p className="text-red-700 font-semibold text-xs md:text-base">
              {title ? title : "Oh Snap!"}
            </p>
            <p className="text-xs md:text-sm text-red-500">{children}</p>
          </div>
          <Button onClick={closeHandler} variant="icon">
            <MdCancel color="red" size={25} />
          </Button>
        </div>
      );
  }
};

export default Toast;
