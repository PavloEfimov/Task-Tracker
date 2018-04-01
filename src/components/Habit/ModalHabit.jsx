import React, { Component } from 'react';
import Modal from 'react-modal';
import Habit from './Habit';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class ModalHabit extends Component {
  render() {
    const { isOpen, closeModal} = this.props;
    return (
      <div>
        <Modal
          isOpen={ isOpen }
          onRequestClose={ closeModal }
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Habit/>
          <button onClick={ closeModal }>close</button>
        </Modal>
      </div>
    );
  }
}

export default ModalHabit;


