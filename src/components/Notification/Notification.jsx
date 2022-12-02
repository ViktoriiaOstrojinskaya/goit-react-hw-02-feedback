import PropTypes from 'prop-types';
import { Message } from './Notification.sryled';

export const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
