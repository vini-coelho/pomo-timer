import styled from 'styled-components';

interface ButtonProps {
  visible?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  padding: 20px 0;
`;

export const Title = styled.span`
  font-size: 2.25rem;
  color: var(--white);
`;

export const ButtonArea = styled.div`
  display: flex;
`;

export const Button = styled.button<ButtonProps>`
  outline: none;

  display: ${p => (p.visible ? 'block' : 'none')};

  transition: opacity 300ms;

  background: none;
  font-size: 2.25rem;
  color: var(--white);

  margin: 0 10px;

  cursor: pointer;

  &:hover {
    opacity: 50%;
  }

  &:active {
    opacity: 30%;
  }
`;

interface SelectButtonProps {
  active?: boolean;
}

export const SelectButton = styled.button<SelectButtonProps>`
  outline: none;
  background: rgba(255, 255, 255, ${p => (p.active ? 0.8 : 0.5)});
  height: 2.5rem;
  width: 8.75rem;
  border-radius: 0.25rem;
  margin: 0 5px;

  color: var(--primary);
  font-size: 0.875rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  cursor: pointer;
  transition: background 200ms ease-in-out;
`;
