import styled from 'styled-components';

const Button = styled.button`
  color: rgb(242, 242, 242);
  background: #57c59b;
  font-weight: 800;
  font-size: 14px;
  width: auto;
  text-transform: uppercase;
  display: inline-block;
  padding: 10px 25px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 10px 0;
  box-shadow: 0px 5px 9.5px 0.5px rgba(61, 131, 104, 0.27);
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, background 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  &:active {
    box-shadow: 0 0 0 0.5px rgba(50, 50, 93, 0.15), 0 2px 5px 0 rgba(50, 50, 93, 0.08),
      0 1px 1.5px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 0 0 0 transparent;
  }

  & + & {
    margin-left: 15px;
  }

  &:disabled {
    background: rgba(87, 197, 155, 0.66);
    color: #f3f3f3;
    border-color: auto;
    box-shadow: none;
    cursor: default;
    cursor: not-allowed;
  }
`;

export default Button;
