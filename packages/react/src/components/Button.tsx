import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  svg: {
    width: '$4',
    height: '$4',
  },
  transition: 'all ease-in-out 0.2s',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$cyan300',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',

        background: '$cyan500',

        '&:not(:disabled):hover': {
          background: '$cyan300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$cyan300',

        border: '2px solid $cyan500',

        '&:not(:disabled):hover': {
          background: '$cyan500',

          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',

          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
      danger: {
        color: '$white',

        background: '$red300',

        '&:not(:disabled):hover': {
          background: '$red500',
        },

        '&:disabled': {
          backgroundColor: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',

    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
