import { Text } from '../Text'
import * as Collapsible from '@radix-ui/react-collapsible'
import { styled } from '../../styles'

export const CollapsibleRoot = styled(Collapsible.Root, {
  display: 'flex',
  flexDirection: 'column',
})

export const StyledTrigger = styled(Collapsible.Trigger, {
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  border: 'none',
  gap: '$2',
  padding: '$1 $1',
  color: '$gray300',
  backgroundColor: 'transparent',
  transition: 'all 0.2s ease-in-out',

  svg: {
    color: '$gray100',
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    svg: {
      color: '$cyan300',
    },
    span: {
      color: '$cyan300',
    },
  },
  '&:focus': { boxShadow: `0 0 0 2px $colors$cyan300` },
})

export const CollapsibleText = styled(Text, {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  color: '$gray100',
  fontSize: '$xs',
  lineHeight: '$shorter',
  transition: 'all 0.2s ease-in-out',
})

export const StyledContent = styled(Collapsible.Content, {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  borderRadius: '$xs',
  fontSize: '$xs',
  lineHeight: '$shorter',
  cursor: 'pointer',

  '&[data-state=open]': {
    padding: '$1 $4 $1 $10',
  },

  transition: 'all 0.2s ease-in-out',

  svg: {
    color: '$gray100',
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    svg: {
      color: '$cyan300',
    },
    span: {
      color: '$cyan300',
    },
  },
})
