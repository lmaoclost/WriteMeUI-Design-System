import { Text } from '../Text'
import * as Collapsible from '@radix-ui/react-collapsible'
import { styled } from '../../styles'

export const CollapsibleRoot = styled(Collapsible.Root, {
  width: 300,
})

export const StyledTrigger = styled(Collapsible.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$cyan500',
  boxShadow: '0 2px 10px $colors$cyan300',
  transition: 'all 0.2s cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
  '&:hover': { backgroundColor: '$cyan300' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$cyan300` },
})

export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CollapsibleText = styled(Text, {
  color: '$gray300',
  fontSize: 15,
  lineHeight: '25px',
})

export const Repository = styled('div', {
  backgroundColor: '$gray600',
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
  boxShadow: '0 2px 10px $colors$cyan300',

  transition: 'all 0.2s cubic-bezier(0.87, 0, 0.13, 1)',

  '&:hover': { backgroundColor: '$cyan300' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$cyan300` },
})

export const StyledContent = styled(Collapsible.Content, {})
