import React, { useEffect, useMemo } from 'react';

import { useFormik } from 'formik';
import { navigate } from 'gatsby';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { Input } from 'components/form';
import { useRootStore } from 'contexts/RootStoreContext';
import { giveMeARandomCheer } from 'utils/cheers';

interface LoginForm {
  email: string;
  password: string;
}

export default observer(function LoginPage() {
  const { authStore } = useRootStore();

  const cheer = useMemo(() => giveMeARandomCheer(), []);

  useEffect(() => {
    if (authStore.isLoggedIn) {
      navigate('/recipes');
    }
  }, [authStore.isLoggedIn]);

  const { values, handleChange, handleSubmit } = useFormik<LoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }: LoginForm) => {
      if (email.length && password.length) {
        await authStore.login(email, password);
      }
    },
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h5>{cheer}!!!</h5>
        <StyledInput name="email" value={values.email} type="email" onChange={handleChange} placeholder="Email" />
        <StyledInput
          name="password"
          value={values.password}
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" variant="primary" size="medium">
          Login
        </Button>
      </Form>
    </Container>
  );
});

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 20rem;
  width: 100%;
  background-color: var(--color-background-light);
  transition: background var(--theme-transition);
`;

const StyledInput = styled(Input)`
  text-align: center;
`;
