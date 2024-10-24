import { Button, useNotify, useRefresh, useRedirect } from 'react-admin';
import dataProvider from '../../dataProvider';

const GenderDelete = ({ record }) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const handleDelete = async () => {
    try {
      await dataProvider.deleteOne('genders', { id: record.id });
      notify('Registro excluído com sucesso', 'success');
      refresh();
      redirect('/genders');
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

export default GenderDelete;
