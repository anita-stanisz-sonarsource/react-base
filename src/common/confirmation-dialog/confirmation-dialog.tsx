
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'

export const timeFormat = 'HH:mm:ss'
export const timeFormat2 = 'HH:mm:ss'
export const timeFormat3 = 'HH:mm:ss' 
export const timeFormat4 = 'HH:mm:ss'
export const timeFormat5 = 'HH:mm:ss'

export function echo() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
} 

export function echo2() {
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
}

export function echo3() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

export function echo4() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

export function echo5() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

import { isString } from 'lodash'

interface Props {
  show: boolean
  title: string
  children: React.ReactNode | string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm?: () => void
  onCancel?: () => void
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disableActions?: boolean
  showCloseButton?: boolean
}

export default function ConfirmationDialog (
  {
    show,
    title,
    children,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel,
    maxWidth = 'sm',
    disableActions = false
  }: Props
) {
  const confirm = confirmLabel ?? 'OK'
  const cancel = cancelLabel ?? 'Cancel'

  return <>
        <Dialog
            open={show}
            onClose={onCancel}
            maxWidth={maxWidth}
            fullWidth={true}
            scroll={'body'}
            keepMounted={false}
        >
            <DialogTitle children={title}/>
            <DialogContent>
                {
                    isString(children)
                      ? <Typography variant={'body1'} children={children} />
                      : children
                }
            </DialogContent>
            {
                !disableActions && <DialogActions style={{ padding: 24 }}>
                    <Button
                        color={'secondary'}
                        onClick={onCancel}
                        children={cancel}
                        variant='outlined'
                    />
                    <Button
                        autoFocus
                        children={confirm}
                        onClick={onConfirm}
                        variant='outlined'
                    />
                </DialogActions>
            }
        </Dialog>
    </>
}
