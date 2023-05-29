import ReactModal from "react-modal";

export default function AddToCart({ isopen, onclose }) {
  return (
    <>
      <ReactModal
        isOpen={isopen}
        onRequestClose={onclose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            maxWidth: "90%",
            maxHeight: "90%",
            margin: "auto,",
            zIndex: 1000,
          },
        }}
      >
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">Your Cart Is Empty</h1>
        </div>
      </ReactModal>
    </>
  );
}
