// import "./modal2.css";

interface IModal {
  title: string;
  showModal: boolean;
  toggleModal: () => void;
  content: JSX.Element;
}

const Modal = ({ showModal, toggleModal, content, title }: IModal) => {
  return (
    <div
      style={{ display: showModal ? "block" : "none" }}
      className="modal-wrapper z-30 fixed w-full h-full top-0 left-0"
    >
      <div
        onClick={toggleModal}
        className="modal-overlay fixed w-full h-full top-0 left-0 bg-black bg-opacity-60"
      ></div>
      <div
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        className="modal p-6 absolute top-10 flex flex-col left-1/2 -translate-x-1/2 max-w-lg z-20 h-auto w-11/12 md:max-w-xl mx-auto rounded shadow-lg bg-white dark:bg-primaryDark"
      >
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold text-gray-500 dark:text-white">
            {title}
          </p>
          <div
            onClick={toggleModal}
            className="modal-close cursor-pointer z-50"
          >
            <svg
              className="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>{" "}
        <div className="modal-content text-gray-500 font-bold text-lg">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
