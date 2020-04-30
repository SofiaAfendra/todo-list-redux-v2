import { map } from 'rxjs/operators'
import { ofType, combineEpics } from 'redux-observable'
import { TEST } from './actionTypes'
import { testAction2 } from './actions'

const testEpic = action$ => action$.pipe(
    ofType(TEST), map(() => testAction2())
)

export const rootEpic = combineEpics(testEpic)
