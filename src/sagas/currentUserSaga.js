import { delay } from "redux-saga/effects";

export function* currentUserSaga() {
  while (true) {
    yield delay(2000);
    console.info("user saga loop");
  }
}
