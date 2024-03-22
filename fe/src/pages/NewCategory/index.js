import { useRef } from 'react';

import CategoryForm from '../../components/CategoryForm';
import PageHeader from '../../components/PageHeader';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function NewCategory() {
  const categoryFormRef = useRef(null);

  async function handleSubmit(category) {
    try {
      await CategoriesService.createCategory(category);
      categoryFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Categoria cadastrada com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return (
    <>
      <PageHeader
        title="Nova categoria"
      />

      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
