import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast/index';

interface ToastMessagePropos {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastMessagePropos> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', transform: 'rotateZ(320deg)' },
      enter: { right: '0%', transform: 'rotateZ(360deg)' },
      leave: { right: '-120%', transform: 'rotateZ(400deg)' },
    },
  );

  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
