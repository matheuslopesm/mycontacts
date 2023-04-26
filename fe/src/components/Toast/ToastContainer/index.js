import { Container } from './styles';

import ToastMessage from '../ToastMessage/index.js';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default toast" />
      <ToastMessage text="Error toast" />
      <ToastMessage text="Success toast" type="success" />
    </Container>
  );
}
