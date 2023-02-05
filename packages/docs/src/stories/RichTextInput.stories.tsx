import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, RichTextInput, RichTextInputProps } from '@writeme-ui/react'

export default {
  title: 'Form/Rich Text Input',
  component: RichTextInput,
  args: {placeholder: "Enter your text here"},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Write your scene</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<RichTextInputProps>

export const Primary: StoryObj<RichTextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}