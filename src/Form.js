import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import { REGISTER_URL } from './contants/api_url';

const Container = styled.div`
  font-size: 12px;
`;

const Title = styled.h1`
  font-size: 16px;
`;

function Form() {
  const { register, handleSubmit } = useForm();
  const mutation = useMutation(data => {
    return axios.post(REGISTER_URL, data)
  })
  const sendData = data =>  mutation.mutate(data);

  return (
    <Container>
    <Title>Formulário simples em React</Title>
     
    {mutation.isError ? (
        <div>Um erro aconteceu</div>
        ) : null}
 
    {mutation.isSuccess ? <div>Registro adicionado!</div> : null}

    <form onSubmit={handleSubmit(sendData)}>
        <div>
          <label>
            Nome
            <input {...register("name")} />
          </label>
        </div>

        <div>
          <label>
            Idade
            <input type="number" {...register("age", { min: 18, max: 99 })} />
          </label>
        </div>
        
        <button type="submit">Enviar</button>
    </form>
    </Container>
  );
}

export default Form;
