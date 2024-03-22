import { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

import { ButtonContainer, Form } from '../ContactForm/styles';
import useErrors from '../../hooks/useErrors';

import FormGroup from '../FormGroup';
import Button from '../Button';

const CategoryForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  useImperativeHandle(ref, () => ({
    setFieldsValues: (category) => {
      setName(category.name ?? '');
    },
    resetFields: () => {
      setName('');
    },
  }), []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
    });

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>

  );
});

CategoryForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryForm;
