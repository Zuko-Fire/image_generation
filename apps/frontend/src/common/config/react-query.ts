import axios from 'axios'
import { MutationCache, QueryCache, QueryClient } from 'react-query'
import type { AxiosError } from 'axios'
import type { UseMutationResult, UseQueryResult } from 'react-query'

export type UseQuery<T> = UseQueryResult<T, Error>;
export type UseMutate<
  TVariables,
  TData = unknown,
  TError = AxiosError,
  TContext = unknown
> = UseMutationResult<TData, TError, TVariables, TContext>;

interface QueryMeta {
  suppressErrorMessage?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onError = (error: any, meta?: QueryMeta) => {
  if (error instanceof TypeError) {
    console.error(error)
    return
  }
  if (axios.isCancel(error) || meta?.suppressErrorMessage) {
    return
  }
}

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
  queryCache: new QueryCache({
    onError: (error, query) => {
      onError(error, query.meta as QueryMeta)
    }
  }),
  mutationCache: new MutationCache({
    onError(error, _1, _2, mutation) {
      onError(error, mutation.meta as QueryMeta)
    }
  })
})
