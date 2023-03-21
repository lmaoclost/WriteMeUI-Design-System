import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleText } from '@writeme-ui/react'
import { CaretDown, CaretRight, Folder, Planet } from 'phosphor-react'
import { useState } from 'react';

export default {
  title: 'Data display/Collapsible',
  component: Collapsible,
  args: {
    defaultOpen: false,
  },
  decorators: [
    (_, args) => {
      const { defaultOpen } = args

      const [isOpen, setIsOpen] = useState(defaultOpen);
      return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger>
            {isOpen ? <CaretDown /> : <CaretRight />}
            <CollapsibleText as="span"><Folder />Architecture</CollapsibleText>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <CollapsibleText as="span"><Planet />Cenario</CollapsibleText>
          </CollapsibleContent>
        </Collapsible >
      )
    },
  ],
} as Meta

export const Open: StoryObj = {}