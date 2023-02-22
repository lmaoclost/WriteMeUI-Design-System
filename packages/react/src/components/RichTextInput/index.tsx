import { ReactQuillProps } from 'react-quill'
import { QuillStyles } from './styles'

export interface RichTextInputProps extends ReactQuillProps { }

export function RichTextInput({ ...props }: RichTextInputProps) {
  return <QuillStyles {...props} />
}

RichTextInput.displayName = 'RichTextInput'
