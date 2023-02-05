import { ReactQuillProps } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { QuillStyles } from './styles'

export interface RichTextInputProps extends ReactQuillProps {}

export function RichTextInput({ ...props }: RichTextInputProps) {
  return <QuillStyles {...props} />
}

RichTextInput.displayName = 'RichTextInput'
