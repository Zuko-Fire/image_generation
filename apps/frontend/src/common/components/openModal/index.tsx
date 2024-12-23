import { Suspense } from 'react'
import { create } from 'zustand'
import type { ComponentType } from 'react'

type OpenModalAction = <T>(
  component: ComponentType<T & { onClose: () => void }>,
  props: T
) => void;

interface Store {
  Component: JSX.Element | null;
  isOpen: boolean;
  api: {
    open: OpenModalAction;
    close: () => void;
  };
}

export const useOpenModalStore = create<Store>((set) => ({
  Component: null,
  isOpen: false,
  api: {
    open: (Component, props) =>
      set(({ api, isOpen }) => {
        const open = true
        return {
          isOpen: open,
          Component: (
            <Suspense fallback={null}>
              <Component {...props} onClose={api.close} open={open} />
            </Suspense>
          )
        }}),
    close: () => set({ Component: null, isOpen: false })
  }
}))

export const OpenModal: React.FC = () =>
  useOpenModalStore((state) => state.Component)

export const openModal: OpenModalAction = useOpenModalStore.getState().api.open

export const useIsModalOpen = (): boolean =>
  useOpenModalStore((state) => Boolean(state.Component))
