import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useBlocker } from './use-blocker';

/** Responsible for handling navigation and blocking in the event of unsaved data. */
export function useCallbackPrompt(when: boolean): {
  showPrompt: boolean,
  confirmNavigation: () => void,
  cancelNavigation: () => void
} {
  const navigate = useNavigate()
  const location = useLocation()
  const [showPrompt, setShowPrompt] = useState(false)
  const [lastLocation, setLastLocation] = useState<any>(null)
  const [confirmedNavigation, setConfirmedNavigation] = useState(false)

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false)
  }, [])

  // handle blocking when user click on another route prompt will be shown
  const handleBlockedNavigation = useCallback(
    (nextLocation: any) => {
        // in if condition we are checking next location and current location are equals or not
      if (
        !confirmedNavigation &&
        nextLocation.location.pathname !== location.pathname
      ) {
        setShowPrompt(true)
        setLastLocation(nextLocation)
        return false
      }
      return true
    },
    [confirmedNavigation, location],
  )

  const confirmNavigation = useCallback(() => {
    setShowPrompt(false)
    setConfirmedNavigation(true)
  }, [])

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.location.pathname)
    }
  }, [confirmedNavigation, navigate, lastLocation])

  useBlocker(handleBlockedNavigation, when)

  return { showPrompt, confirmNavigation, cancelNavigation }
}