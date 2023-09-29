import React, { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, children, handleClose }: Props) {
  const backdropClass = isOpen
    ? "fixed inset-0 bg-almostBlack opacity-50 z-40"
    : "hidden";

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={backdropClass}></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay">
          <div className="modal-content bg-baseBG p-6 rounded-lg shadow-md flex flex-col">
            {children}
            <div className="flex justify-center mt-4">
              <button
                onClick={handleClose}
                className="text-niceOrange hover:text-white dark:hover:text-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
