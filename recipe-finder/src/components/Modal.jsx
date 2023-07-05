import PropTypes from 'prop-types';

function Modal({ isVisible, hideModal, children }) {
  if (!isVisible) {
    return null;
  }
  
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={hideModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div onClick={handleModalClick} className="max-w-xl w-3/4 mx-auto flex flex-col">
        <div className="bg-white text-gray-800 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
