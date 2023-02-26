import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Text
} from '@writeme-ui/react';

export default {
  title: 'Data display/Accordion',
  component: Accordion,
  decorators: [
    () => {
      return (
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger><Text size={'md'}>Is it accessible?</Text></AccordionTrigger>
            <AccordionContent><Text size={'sm'}>Yes. It adheres to the WAI-ARIA design pattern.</Text></AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger><Text size={'md'}>Is it unstyled?</Text></AccordionTrigger>
            <AccordionContent>
              <Text size={'sm'}>Yes. It's unstyled by default, giving you freedom over the look and feel.</Text>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger><Text size={'md'}>Can it be animated?</Text></AccordionTrigger>
            <AccordionContent>
              <Text size={'sm'}>Yes! You can animate the Accordion with CSS or JavaScript.</Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    },
  ],
} as Meta

export const Primary: StoryObj = {}
