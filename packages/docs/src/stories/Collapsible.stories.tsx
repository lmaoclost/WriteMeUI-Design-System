import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible, Flex, Repository, CollapsibleTrigger, CollapsibleContent, Text } from '@writeme-ui/react'

export default {
  title: 'Data display/Collapsible',
  component: Collapsible,
  decorators: [
    () => {
      return (
        <>
          <Collapsible>
            <Flex>
              <Text>@peduarte starred 3 repositories</Text>
              <CollapsibleTrigger />
            </Flex>

            <Repository>
              <Text>@radix-ui/primitives</Text>
            </Repository>

            <CollapsibleContent>
              <Repository>
                <Text>@radix-ui/colors</Text>
              </Repository>
              <Repository>
                <Text>@stitches/react</Text>
              </Repository>
            </CollapsibleContent>
          </Collapsible>
        </>
      )
    },
  ],
} as Meta

export const Open: StoryObj = {}