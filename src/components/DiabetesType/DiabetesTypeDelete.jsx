import { Button, useNotify, useRefresh, useRedirect } from 'react-admin';
import dataProvider from '../../apiClient';

const DiabetesTypeDelete = ({ record }) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const handleDelete = async () => {
    try {
      await dataProvider.deleteOne('bloodtype', { id: record.id });
      notify('Registro excluído com sucesso', 'success');
      refresh();
      redirect('/diabetestype');
    } catch (error) {
      notify('Erro ao excluir o registro', 'error');
    }
  };

  return (
    <Button label="Excluir" onClick={handleDelete}>
      Excluir
    </Button>
  );
};

export default DiabetesTypeDelete;
