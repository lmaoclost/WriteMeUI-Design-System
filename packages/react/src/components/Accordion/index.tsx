import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { CSS } from '../../styles'
import {
  AccordionRoot,
  AccordionItem as StyledItem,
  StyledHeader,
  StyledTrigger,
  StyledChevron,
  StyledContent,
  StyledContentText,
} from './styles'

type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>
type AccordionProps = AccordionPrimitiveProps & { css?: CSS }

// eslint-disable-next-line react/display-name
export const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionRoot>,
  AccordionProps
>(({ children, ...props }, forwardedRef) => (
  <AccordionRoot
    ref={forwardedRef}
    {...props}
    {...(props.type === 'single' ? { collapsible: true } : {})}
  >
    {children}
  </AccordionRoot>
))

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS }

// eslint-disable-next-line react/display-name
export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron />
    </StyledTrigger>
  </StyledHeader>
))

type AccordionContentPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
>
type AccordionContentProps = AccordionContentPrimitiveProps & { css?: CSS }

// eslint-disable-next-line react/display-name
export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
))

export const AccordionItem = StyledItem

AccordionRoot.displayName = 'Accordion'
