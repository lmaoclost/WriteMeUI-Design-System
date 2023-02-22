import { styled } from '../../styles'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export const QuillStyles = styled(ReactQuill, {
  '.ql-snow': {
    border: 0,
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: 'regular',

    '&.ql-toolbar': {
      backgroundColor: '$gray600',
      '.ql-active': {
        svg: {
          filter:
            'invert(54%) sepia(38%) saturate(5322%) hue-rotate(176deg) brightness(117%) contrast(91%)',
        },
      },
      svg: {
        filter: 'invert(100) brightness(100)',
        '&:hover': {
          filter:
            'invert(54%) sepia(38%) saturate(5322%) hue-rotate(176deg) brightness(117%) contrast(91%)',
        },
      },
    },
    '.ql-formats': {
      '.ql-picker': {
        backgroundColor: '$gray500',
        '&-label': {
          color: '$gray100',
          '&.ql-active': {
            color: '$cyan300',
          },
        },
        '&-item': {
          color: '$gray200',
          '&:hover': {
            color: '$cyan300',
          },
        },
        '&::before': {
          color: '$cyan300',
        },
      },
    },
  },
  '.ql-toolbar': {
    '.ql-formats': {
      '&:hover': {
        '.ql-picker-label': {
          color: '$cyan300',
          '&.ql-picker-active': {
            color: '$cyan300',
          },
          svg: {
            filter:
              'invert(54%) sepia(38%) saturate(5322%) hue-rotate(176deg) brightness(117%) contrast(91%)',
          },
        },
      },
    },
  },
  '.ql-editor': {
    backgroundColor: '$gray900',
    color: '$white',
    width: '100%',
  },

  '.ql-blank::before': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray400',
  },
})
