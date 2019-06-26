import RegisterSaga from './registerSaga';

export default function* indexSaga() {
  yield [RegisterSaga()];
}
