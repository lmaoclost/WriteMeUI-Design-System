import React, { ComponentProps } from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

import {
  CollapsibleRoot,
  StyledTrigger,
  CollapsibleText as Text,
  StyledContent,
} from './styles'
import { CSS } from '../../styles'

type CollapsiblePrimitiveProps = ComponentProps<
  typeof CollapsiblePrimitive.Root
>
type CollapsibleProps = CollapsiblePrimitiveProps & { css?: CSS }

// eslint-disable-next-line react/display-name
export const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsibleRoot>,
  CollapsibleProps
>(({ children, ...props }, forwardedRef) => (
  <CollapsibleRoot ref={forwardedRef} {...props}>
    {children}
  </CollapsibleRoot>
))

type CollapsibleTriggerPrimitiveProps = ComponentProps<
  typeof CollapsiblePrimitive.Trigger
>
type CollapsibleTriggerProps = CollapsibleTriggerPrimitiveProps & { css?: CSS }

// eslint-disable-next-line react/display-name
export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  CollapsibleTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledTrigger {...props} ref={forwardedRef}>
    {children}
  </StyledTrigger>
))

export const CollapsibleText = Text
export const CollapsibleContent = StyledContent

Collapsible.displayName = 'Collapsible'
