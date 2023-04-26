import { Container } from './styles';

import ToastMessage from '../ToastMessage/index.js';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default toast" type="default" />
      <ToastMessage text="Error toast" type="danger" />
      <ToastMessage text="Success toast" type="success" />
    </Container>
  );
}
