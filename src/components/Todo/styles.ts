import styled from 'styled-components'
import vars from '../../styles/vars'
import { TodoPriority, TodoStatus } from '../../types/todo.enum'

type TodoTagProps = {
  status?: TodoStatus
  priority?: TodoPriority
}

function getTagColor(props: TodoTagProps) {
  if (props.status) {
    if (props.status === TodoStatus.PENDENTE) return vars.yellow
    return vars.green
  }

  if (props.priority) {
    if (props.priority === TodoPriority.IMPORTATE) return vars.secondaryYellow
    else if (props.priority === TodoPriority.URGENTE) return vars.red
    return '#ccc'
  }

  return '#ccc'
}

export const TodoCard = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 1rem;
  margin-bottom: 1rem;
`

export const TodoContent = styled.div`
  padding: 1rem;
`

export const TodoTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

export const TodoTag = styled.span<TodoTagProps>`
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  color: #fff;
  font-size: 10px;
  background-color: ${(props) => getTagColor(props)};
  border-radius: 1.5rem;
  margin-right: 1rem;
  max-width: max-content;
`

export const TodoDescription = styled.textarea`
  margin-top: 1rem;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`
export const TodoActions = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
`
export const TodoBtn = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 0.5rem;
  margin-right: 1rem;
`

export const TodoBtnSave = styled(TodoBtn)`
  background-color: ${vars.green};
`
export const TodoBtnDanger = styled(TodoBtn)`
  background-color: ${vars.red};
`
