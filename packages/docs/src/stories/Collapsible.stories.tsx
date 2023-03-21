import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleText, Text } from '@writeme-ui/react'
import { CaretDown, CaretRight, Planet, Note, Book } from 'phosphor-react'
import { useState } from 'react';

export default {
  title: 'Data display/Collapsible',
  component: Collapsible,
  decorators: [
    () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <nav>
          <CollapsibleText as="span"><Book />Project</CollapsibleText>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger>
              {isOpen ? <CaretDown /> : <CaretRight />}
              <CollapsibleText as="span">Architecture</CollapsibleText>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <CollapsibleText as="span"><Planet />Scenario</CollapsibleText>
              <CollapsibleText as="span"><Note />Notes</CollapsibleText>
            </CollapsibleContent>
          </Collapsible >
        </nav>
      )
    },
  ],
} as Meta

export const Open: StoryObj = {}