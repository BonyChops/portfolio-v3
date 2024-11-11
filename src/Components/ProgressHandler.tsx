'use client'
import NProgress from 'nprogress'
import { useNavigationEvent } from './useNavigationEvent'

export default function ProgressHandler() {
  useNavigationEvent(() => {
    NProgress.done()
  })
  return <></>
}
